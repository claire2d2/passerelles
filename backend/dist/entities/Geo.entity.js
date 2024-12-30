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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Passerelle_entity_1 = __importDefault(require("./Passerelle.entity"));
let GeoEntity = class GeoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], GeoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Passerelle_entity_1.default, (p) => p.geo),
    __metadata("design:type", Passerelle_entity_1.default)
], GeoEntity.prototype, "passerelle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GeoEntity.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GeoEntity.prototype, "lng", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], GeoEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], GeoEntity.prototype, "updated_at", void 0);
GeoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "ads" })
], GeoEntity);
exports.default = GeoEntity;
