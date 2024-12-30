import ProfileEntity from "@/entities/Profile.entity";
import { datasource } from "@/lib/datasource";
import { Repository } from "typeorm";

export default class ProfileRepository extends Repository<ProfileEntity> {
    constructor() {
        super(ProfileEntity, datasource.createEntityManager())
    }
}
