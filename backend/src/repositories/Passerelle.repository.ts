import PasserelleEntity from "@/entities/Passerelle.entity";
import { datasource } from "@/lib/datasource";
import { Repository } from "typeorm";

export default class PasserelleRepository extends Repository<PasserelleEntity> {
    constructor() {
        super(PasserelleEntity, datasource.createEntityManager())
    }
}
