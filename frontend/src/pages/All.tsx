import React from "react";

const All = () => {
	return (
		<div className="flex flex-col h-full">
			<div className="w-1/5 bg-button h-full">
				<h2>Filtres :</h2>
				<div></div>
				<ul>
                    <li>Par pays</li>
					<li>Par ville</li>
                    <li>Mes passerelles</li>
				</ul>
			</div>
			<div className="w-4/5"></div>
		</div>
	);
};

export default All;
