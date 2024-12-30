import React from "react";
import { useEffect } from "react";
import { Passerelle } from "../../generated/graphql";

const PasserelleCard: React.FC<Omit<Passerelle, "lat" |"lng">> = ({ title, image, country, city }) => {
	useEffect(() => {
		console.log(title);
	}, []);

	return (
		<div
			className={`col-span-1 flex flex-col gap-2 p-1 border border-solid border-text rounded-md justify-center items-center`}
		>
			<h3>{title}</h3>
			<div className="h-2/3 w-full">
				{image && <img className="h-full w-full object-cover" src={image} alt="photo de passerelle" />}
			</div>
			<div className="text-sm">
                <p><span className="font-medium">Pays: </span><span className="italic">{country ? country : "Inconnu"}</span></p>
                <p><span className="font-medium">Ville: </span><span className="italic">{city ? city : "Inconnu"}</span></p>
            </div>
		</div>
	);
};

export default PasserelleCard;
