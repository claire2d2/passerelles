import PasserelleRepository from "@/repositories/Passerelle.repository";
import GeoRepository from "@/repositories/Geo.repository";
import { validate } from "class-validator";
import {
	QueryPasserellesArgs,
	MutationCreatePasserelleArgs,
} from "@/generated/graphql";

export default class PasserelleService {
	db: PasserelleRepository;
	geoDb: GeoRepository;

	constructor() {
		this.db = new PasserelleRepository();
		this.geoDb = new GeoRepository();
	}

	async listPasserelles(options: QueryPasserellesArgs["filter"]) {
		return await this.db.find({
			relations: ["contributor", "geo", "favorites"],
			order: { created_at: options?.order ?? "ASC" },
			take: options?.limit || undefined,
		});
	}

	async findPasserelleById(id: string) {
		const passerelle = await this.db.findOne({
			where: { id },
			relations: ["contributor", "geo", "favorites"],
		});
		if (!passerelle) {
			throw new Error("Passerelle introuvable");
		}
		return passerelle;
	}

	async create({
		contributorId,
		lat,
		lng,
        image,
		...passerelle
	}: MutationCreatePasserelleArgs["data"]) {
		const { title, description } = passerelle;
		// create a geo point for the passerelle based on the user's input
		const newGeo = this.geoDb.create({
			lat,
			lng,
		});
		const geoErrors = await validate(newGeo);
		if (geoErrors.length > 0) {
			throw new Error(geoErrors[0].toString());
		}
		await this.geoDb.save(newGeo);
		// create passerelle with the new geo
		const newPass = this.db.create({
			...passerelle,
			title,
			description,
            image
		});
		const errors = await validate(newPass);
		if (errors.length > 0) {
			throw new Error(errors[0].toString());
		}
		await this.db.save(newPass);
        return newPass;
	}
}
