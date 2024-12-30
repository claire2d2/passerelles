import PasserelleEntity from "@/entities/Passerelle.entity";
import { MutationCreatePasserelleArgs, QueryPasserellesArgs } from "@/generated/graphql";
import PasserelleService from "@/services/passerelle.service";

export default {
    Query: {
        passerelles: async (
            _: any,
            { filter} : QueryPasserellesArgs):
            Promise<PasserelleEntity[]> => {
                const passerellesList = await new PasserelleService().listPasserelles(filter);
                return passerellesList
            },
        
    },

    Mutation: {
        createPasserelle: async (
            _: any,
            { data } : MutationCreatePasserelleArgs
        ): Promise<PasserelleEntity> => {
            const newPass = await new PasserelleService().create({...data});
            return newPass
        } 
    }
}