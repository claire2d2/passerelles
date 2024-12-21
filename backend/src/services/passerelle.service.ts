import PasserelleRepository from "@/repositories/Passerelle.repository";
import { validate } from "class-validator";
import {
	QueryPasserellesArgs,
	MutationCreatePasserelleArgs,
} from "@/generated/graphql";

export default class PasserelleService {
	db: PasserelleRepository;

	constructor() {
		this.db = new PasserelleRepository();
	}

	async listPasserelles(options: QueryPasserellesArgs["filter"]) {
		return await this.db.find({
			relations: ["contributor"],
			order: { created_at: options?.order ?? "ASC" },
			take: options?.limit || undefined,
		});
	}

	async findPasserelleById(id: string) {
		const passerelle = await this.db.findOne({
			where: { id },
			relations: ["contributor"],
		});
		if (!passerelle) {
			throw new Error("Passerelle introuvable");
		}
		return passerelle;
	}

	async create({
		contributorId,
        image,
		...passerelle
	}: MutationCreatePasserelleArgs["data"]) {
		const { title, description, lat, lng } = passerelle;
		// create a geo point for the passerelle based on the user's input
		const newPass = this.db.create({
			...passerelle,
			title,
			description,
            image,
            lat,
            lng
		});
		const errors = await validate(newPass);
		if (errors.length > 0) {
			throw new Error(errors[0].toString());
		}
		await this.db.save(newPass);
        return newPass;
	}
}
