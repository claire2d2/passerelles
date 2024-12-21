import PasserelleTiles from "../components/All/PasserelleTiles";
import examplePasserelles from "../components/All/example.json"
const All = () => {
	// rajouter pagination

	return (
		<div className="flex flex-row h-full">
			<div className="w-1/5 bg-button h-full flex flex-col">
				<div className="h-1/3">
                    <h2>Trier par : </h2>
                    <h2>Filtres :</h2>
                    <ul>
                        <li>Par pays</li>
                        <li>Par ville</li>
                        <li>Mes passerelles</li>
                    </ul>
                </div>
                <div className="h-2/3">
                Ouvrir dans Google Maps
                </div>
			</div>
			<div className="w-4/5 flex flex-col flex-1">
				<div className="flex justify-between h-10">
					<div className="flex flex-row text-sm gap-2">
						<div>Trier par:</div>
						<select name="" id="">
							<option value="">Les plus récentes</option>
							<option value="">Les plus populaires</option>
						</select>
					</div>
					<div>
						<button>Grid</button>
						<button>List</button>
					</div>
					<div className="flex">
						<div>Nombre par page : </div>
						<select name="" id="">
							<option value="">8</option>
							<option value="">16</option>
							<option value="">25</option>
						</select>
					</div>
				</div>
                <div className="max-h-[90%]">
                    <PasserelleTiles />
                </div>
               
                <div className="h-10">Pagination</div>
			</div>
		</div>
	);
};

export default All;
