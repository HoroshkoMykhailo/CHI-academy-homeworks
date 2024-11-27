import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exhibit } from './exhibit.entity';

@Injectable()
export class ExhibitsService {
    constructor(
        @InjectRepository(Exhibit)
        private readonly exhibitsRepository: Repository<Exhibit>,
    ){}

    async getExhibits({page, limit}: {page: number, limit: number}): Promise<[Exhibit[], number]> {
        const skip = (page - 1) * limit;
        
        return await this.exhibitsRepository.findAndCount({
            take: limit,
            skip,
            order: {
                createdAt: 'DESC',
            }
        });
    }
}
