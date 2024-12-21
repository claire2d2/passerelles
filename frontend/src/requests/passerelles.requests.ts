import {gql} from "@apollo/client"

export const FIND_PASSERELLE_BY_ID = gql`
  query FindPasserelle($findPasserelleId: ID!) {
    findPasserelle(id: $findPasserelleId) {
      title
      image
      description
      lat
      lng
    }
  }
`;


