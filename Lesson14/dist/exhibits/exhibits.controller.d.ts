import { ExhibitsService } from "./exhibits.service";
import { Exhibit } from "./exhibit.entity";
export declare class ExhibitsController {
    private readonly exhibitsService;
    constructor(exhibitsService: ExhibitsService);
    getExhibits(page?: number, limit?: number): Promise<{
        exhibits: Exhibit[];
        total: number;
        page: number;
        lastPage: number;
    }>;
    createExhibit({ description }: {
        description: string;
    }, file: Express.Multer.File, req: any): Promise<Exhibit>;
}
