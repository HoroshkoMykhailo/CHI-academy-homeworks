import { Repository } from 'typeorm';
import { Exhibit } from './exhibit.entity';
export declare class ExhibitsService {
    private readonly exhibitsRepository;
    constructor(exhibitsRepository: Repository<Exhibit>);
    getExhibits({ page, limit }: {
        page: number;
        limit: number;
    }): Promise<[Exhibit[], number]>;
}
