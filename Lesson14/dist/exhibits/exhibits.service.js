"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExhibitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const exhibit_entity_1 = require("./exhibit.entity");
let ExhibitsService = class ExhibitsService {
    constructor(exhibitsRepository) {
        this.exhibitsRepository = exhibitsRepository;
    }
    async getExhibits({ page, limit }) {
        const skip = (page - 1) * limit;
        return await this.exhibitsRepository.findAndCount({
            take: limit,
            skip,
            order: {
                createdAt: 'DESC',
            }
        });
    }
};
exports.ExhibitsService = ExhibitsService;
exports.ExhibitsService = ExhibitsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exhibit_entity_1.Exhibit)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExhibitsService);
//# sourceMappingURL=exhibits.service.js.map