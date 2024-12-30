import Map from "react-map-gl"  
import "./Homepage.css"
import "mapbox-gl/dist/mapbox-gl.css";


const GlobalMap = () => {

const mapBoxAPI = import.meta.env.VITE_MAPBOX_API_TOKEN
  return (
   
   <div className="MapContainer h-4/5">
        <Map
        mapboxAccessToken={mapBoxAPI}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{height: "100%", width:"100%"}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
            />
      </div>
  )
}

export default GlobalMap
