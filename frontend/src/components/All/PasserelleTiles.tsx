import { FIND_PASSERELLES } from "../../requests/passerelles.requests";
import { useQuery } from "@apollo/client";
import { PasserellesQuery } from "../../generated/graphql";

import PasserelleCard from "./PasserelleCard";
import defaultImage from "./bridge-icon.png";

// interface PasserelleTilesProps {
//     id: string,
//     title: string,
//     image: string,
//     country: string,
//     city: string
// }

const PasserelleTiles = () => {
	const { data: passerellesData } =
		useQuery<PasserellesQuery>(FIND_PASSERELLES);

	const passerelles = passerellesData?.passerelles;

	if (!passerelles || passerelles.length === 0) {
		return <div>Pas de passerelles à montrer</div>;
	}

	return (
		<div className={`max-h-full grid grid-cols-4 grid-rows-2 gap-1 p-2`}>
			{passerelles?.map((passerelle) => {
        if (passerelle)
				{return (
					<PasserelleCard
						key={passerelle.id}
						image={passerelle.image ? passerelle.image : defaultImage}
						title={passerelle.title}
						country={passerelle.country}
						city={passerelle.city}
					/>
				);}
			})}
		</div>
	);
};

export default PasserelleTiles;
