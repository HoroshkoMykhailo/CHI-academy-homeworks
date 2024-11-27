import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ExhibitsService } from './exhibits.service';

@Controller('exhibits')
export class ExhibitsController {
    constructor(private readonly exhibitsService: ExhibitsService) {}
    
    @Get()
    @ApiOperation({ summary: "Get exhibits" })
    @ApiQuery({ name: "page", required: false, description: "Page number" })
    @ApiQuery({ name: "limit", required: false, description: "Items per page" })
    @ApiResponse({ status: 200, description: "Successful response" })
    @ApiResponse({ status: 404, description: "Exhibits not found" })
    async getExhibits(
        @Query("page") page: number = 1,
        @Query("limit") limit: number = 10
    ) {
        const [exhibits, total] = await this.exhibitsService.getExhibits({ page, limit });

        if (!exhibits.length) {
            throw new NotFoundException("Exhibits not found");
        }

        return {
            exhibits,
            total,
            page,
            lastPage: Math.ceil(total / limit),
        }
    }
}
