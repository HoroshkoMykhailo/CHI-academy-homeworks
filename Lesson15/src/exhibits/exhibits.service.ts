import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exhibit } from './exhibit.entity';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ExhibitsService {
  constructor(
    @InjectRepository(Exhibit)
    private readonly exhibitsRepository: Repository<Exhibit>
  ) {}

  async getExhibitsWithPagination(
    page: number,
    limit: number,
    where: Record<string, number> = {}
  ): Promise<[Exhibit[], number]> {
    const skip = (page - 1) * limit;
  
    return await this.exhibitsRepository.findAndCount({
      where,
      take: limit,
      skip,
      order: {
        createdAt: "DESC",
      },
    });
  }

  async createExhibit(
    file: Express.Multer.File,
    description: string,
    userId: number
  ): Promise<Exhibit> {
    const uniqueFileName = `${uuidv4()}${path.extname(file.originalname)}`;
    const uploadFolder = path.join(__dirname, "../../static");

    if (!fs.existsSync(uploadFolder)) {
      fs.mkdirSync(uploadFolder, { recursive: true });
    }

    const filePath = path.join(uploadFolder, uniqueFileName);
    fs.writeFileSync(filePath, file.buffer);

    const exhibit = this.exhibitsRepository.create({
      imageUrl: `/static/${uniqueFileName}`,
      description,
      userId,
    });

    return await this.exhibitsRepository.save(exhibit);
  }

  async getExhibitById(id: number): Promise<Exhibit | null> {
    return await this.exhibitsRepository.findOneBy({ id });
  }

  async deleteExhibitById(id: number, userId: number): Promise<void> {
    const exhibit = await this.exhibitsRepository.findOne({ where: { id } });

    if (!exhibit) {
      throw new NotFoundException("Exhibit not found");
    }

    if (exhibit.userId !== userId) {
      throw new UnauthorizedException("You are not permitted to delete this exhibit");
    }

    await this.exhibitsRepository.remove(exhibit);
  }
}