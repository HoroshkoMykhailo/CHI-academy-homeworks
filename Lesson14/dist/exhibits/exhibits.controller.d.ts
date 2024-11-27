import { ExhibitsService } from './exhibits.service';
export declare class ExhibitsController {
    private readonly exhibitsService;
    constructor(exhibitsService: ExhibitsService);
    getExhibits(page?: number, limit?: number): Promise<{
        exhibits: import("./exhibit.entity").Exhibit[];
        total: number;
        page: number;
        lastPage: number;
    }>;
}
