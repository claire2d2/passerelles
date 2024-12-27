import { gql } from "@apollo/client";

export const FIND_PASSERELLES = gql`
	query Passerelles($filter: FilterType) {
		passerelles(filter: $filter) {
			id
			title
			image
			country
			city
			validated
			created_at
			updated_at
			description
		}
	}
`;

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

export const CREATE_PASSERELLE = gql`
    mutation CreatePasserelle($data: CreatePasserelleInput!) {
    createPasserelle(data: $data) {
      id
      title
      description
      lng
      lat
      country
      city
  }
  }
`;
