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
let ProfileEntity = class ProfileEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ProfileEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("uuid"),
    __metadata("design:type", String)
], ProfileEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ProfileEntity.prototype, "is_admin", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Passerelle_entity_1.default),
    (0, typeorm_1.JoinTable)({
        name: "favorites", // Name of the join table
        joinColumn: { name: "profile_id", referencedColumnName: "id" }, // Join column for ProfileEntity
        inverseJoinColumn: { name: "passerelle_id", referencedColumnName: "id" }, // Join column for PasserelleEntity
    }),
    __metadata("design:type", Array)
], ProfileEntity.prototype, "favorites", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Passerelle_entity_1.default, (p) => p.contributor),
    __metadata("design:type", Array)
], ProfileEntity.prototype, "contributions", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProfileEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProfileEntity.prototype, "updated_at", void 0);
ProfileEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "ads" })
], ProfileEntity);
exports.default = ProfileEntity;
