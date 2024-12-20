import GeoEntity from "@/entities/Geo.entity";
import { datasource } from "@/lib/datasource";
import { Repository } from "typeorm";

export default class GeoRepository extends Repository<GeoEntity> {
    constructor() {
        super(GeoEntity, datasource.createEntityManager())
    }
}
