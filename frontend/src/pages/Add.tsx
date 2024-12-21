// map
// when clicking on a map, creating point
// backend create a geo
// get user info

import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./../components/Add/Add.css";

const Add = () => {
	const mapBoxAPI = import.meta.env.VITE_MAPBOX_API_TOKEN;
	return (
		<div className="h-full flex items-center justify-center text-center">
			<div className="h-full w-1/2 flex flex-1 flex-col ">
      <div>Cliquez sur la carte pour indiquer où se trouve la passerelle : </div>
				<div className="MapContainer h-full w-full">
					<Map
						mapboxAccessToken={mapBoxAPI}
						initialViewState={{
							longitude: -122.4,
							latitude: 37.8,
							zoom: 14,
						}}
						style={{ height: "100%", width: "100%" }}
						mapStyle="mapbox://styles/mapbox/streets-v9"
					/>
				</div>
			</div>
			<div className="h-full w-1/2">Ou tapez directement son addresse pour la trouver : </div>
		</div>
	);
};

export default Add;
