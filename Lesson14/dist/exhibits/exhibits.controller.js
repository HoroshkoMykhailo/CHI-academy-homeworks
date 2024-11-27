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
exports.ExhibitsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const exhibits_service_1 = require("./exhibits.service");
let ExhibitsController = class ExhibitsController {
    constructor(exhibitsService) {
        this.exhibitsService = exhibitsService;
    }
    async getExhibits(page = 1, limit = 10) {
        console.log(page, limit);
        const [exhibits, total] = await this.exhibitsService.getExhibits({ page, limit });
        if (!exhibits.length) {
            throw new common_1.NotFoundException("Exhibits not found");
        }
        return {
            exhibits,
            total,
            page,
            lastPage: Math.ceil(total / limit),
        };
    }
};
exports.ExhibitsController = ExhibitsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get exhibits" }),
    (0, swagger_1.ApiQuery)({ name: "page", required: false, description: "Page number" }),
    (0, swagger_1.ApiQuery)({ name: "limit", required: false, description: "Items per page" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Successful response" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Exhibits not found" }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ExhibitsController.prototype, "getExhibits", null);
exports.ExhibitsController = ExhibitsController = __decorate([
    (0, common_1.Controller)('exhibits'),
    __metadata("design:paramtypes", [exhibits_service_1.ExhibitsService])
], ExhibitsController);
//# sourceMappingURL=exhibits.controller.js.map