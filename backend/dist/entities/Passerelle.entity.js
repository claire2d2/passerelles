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
const class_validator_1 = require("class-validator");
const Geo_entity_1 = __importDefault(require("./Geo.entity"));
const Profile_entity_1 = __importDefault(require("./Profile.entity"));
let PasserelleEntity = class PasserelleEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], PasserelleEntity.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.Length)(5),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PasserelleEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PasserelleEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PasserelleEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Geo_entity_1.default, {
        cascade: true,
        onDelete: "CASCADE",
        nullable: false
    }),
    __metadata("design:type", Geo_entity_1.default)
], PasserelleEntity.prototype, "geo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Profile_entity_1.default),
    __metadata("design:type", Profile_entity_1.default)
], PasserelleEntity.prototype, "contributor", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Profile_entity_1.default, (p) => p.favorites),
    __metadata("design:type", Array)
], PasserelleEntity.prototype, "favorites", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PasserelleEntity.prototype, "validated", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PasserelleEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PasserelleEntity.prototype, "updated_at", void 0);
PasserelleEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "ads" })
], PasserelleEntity);
exports.default = PasserelleEntity;
