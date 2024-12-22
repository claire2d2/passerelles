// map
// when clicking on a map, creating point
// backend create a geo
// get user info

import Map from "react-map-gl";
import GeocoderControl from "../components/Add/GeoCoderControl";
import Form from "../components/Add/Form";
import "mapbox-gl/dist/mapbox-gl.css";
import "./../components/Add/Add.css";
import { useState } from "react";
import { CreatePasserelleInput}from "../generated/graphql";

const Add = () => {
	const mapBoxAPI = import.meta.env.VITE_MAPBOX_API_TOKEN;

  const [isMarker, setIsMarker] = useState<boolean>(false)
  const [newData, setNewData] = useState<any>({lat: "", lng:""})

	return (
		<div className="h-full flex items-center justify-center text-center">
			<div className="h-full w-full flex flex-1 flex-col ">
				<div className="MapContainer h-full w-full">
					<Map
						mapboxAccessToken={mapBoxAPI}
						initialViewState={{
							longitude: -122.4,
							latitude: 37.8,
							zoom: 14,
						}}
						style={{ height: "100%", width: "100%" }}
						mapStyle="mapbox://styles/mapbox/streets-v9">
               <GeocoderControl mapboxAccessToken={mapBoxAPI} position="top-left" setIsMarker={setIsMarker} setNewData={setNewData}/>
               <button className="absolute right-0 top-0 bg-button text-white disabled:bg-disabled" disabled={!isMarker}>Rajouter une passerelle</button>
              {<div className="absolute bg-white h-1/2 w-1/2 m-auto left-0 right-0 top-0 bottom-0"><Form data={newData}/></div> }
            </Map>
				</div>
			</div>
		</div>
	);
};

export default Add;
