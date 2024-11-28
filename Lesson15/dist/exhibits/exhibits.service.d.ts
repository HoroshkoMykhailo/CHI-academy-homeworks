import { Repository } from 'typeorm';
import { Exhibit } from './exhibit.entity';
export declare class ExhibitsService {
    private readonly exhibitsRepository;
    constructor(exhibitsRepository: Repository<Exhibit>);
    getExhibitsWithPagination(page: number, limit: number, where?: Record<string, number>): Promise<[Exhibit[], number]>;
    createExhibit(file: Express.Multer.File, description: string, userId: number): Promise<Exhibit>;
    getExhibitById(id: number): Promise<Exhibit | null>;
    deleteExhibitById(id: number, userId: number): Promise<void>;
}
