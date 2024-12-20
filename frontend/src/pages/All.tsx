import photo from "../components/All/test-photo.jpg"
import PasserelleCard from "../components/All/PasserelleCard";
const All = () => {
	// rajouter pagination

    const examplePasserelles = [
        {
            id: "1",
            title: "Example 1",
            description: "Lorem ipsum thingie",
            image: photo,
            geo: {
                lat: "123",
                lng: "123"
            },
            country: "France",
            city: "Paris",
            validated: true
        },
        {
            id: "2",
            title: "Example 1",
            description: "Lorem ipsum thingie",
            image: photo,
            geo: {
                lat: "123",
                lng: "123"
            },
            country: "France",
            city: "Lyon",
            validated: true
        },
        {
            id: "3",
            title: "Example 1",
            description: "Lorem ipsum thingie",
            image: photo,
            geo: {
                lat: "123",
                lng: "123"
            },
            country: "France",
            city: "Paris",
            validated: true
        },
        {
            id: "4",
            title: "Example 1",
            description: "Lorem ipsum thingie",
            image: photo,
            geo: {
                lat: "123",
                lng: "123"
            },
            country: "France",
            city: "Paris",
            validated: true
        },
        {
            id: "5",
            title: "Example 1",
            description: "Lorem ipsum thingie",
            image: photo,
            geo: {
                lat: "123",
                lng: "123"
            },
            country: "France",
            city: "Paris",
            validated: true
        },
        {
            id: "6",
            title: "Example 1",
            description: "Lorem ipsum thingie",
            image: photo,
            geo: {
                lat: "123",
                lng: "123"
            },
            city: "Lyon",
            validated: true
        }
    ]

	return (
		<div className="flex flex-row h-full">
			<div className="w-1/5 bg-button h-full">
				<h2>Trier par : </h2>

				<h2>Filtres :</h2>

				<ul>
					<li>Par pays</li>
					<li>Par ville</li>
					<li>Mes passerelles</li>
				</ul>
			</div>
			<div className="w-4/5 h-full flex flex-col flex-1">
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
							<option value="">4</option>
							<option value="">16</option>
							<option value="">25</option>
						</select>
					</div>
				</div>
                <div className={`bg-main h-full flex flex-wrap`}>
                    {examplePasserelles.map((passerelle)=> {
                        return <PasserelleCard key={passerelle.id} image={passerelle.image} title={passerelle.title} country={passerelle.country} city={passerelle.city}/>
                    })}
                </div>
                <div className="h-10">Pagination</div>
			</div>
		</div>
	);
};

export default All;
