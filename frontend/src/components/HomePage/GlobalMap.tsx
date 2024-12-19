import Map from "react-map-gl"  

const GlobalMap = () => {

const mapBoxAPI = import.meta.env.VITE_MAPBOX_API_TOKEN
  return (
   
   <div className="flex h-full bg-red-200">
        <Map
        mapboxAccessToken={mapBoxAPI}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}

        mapStyle="mapbox://styles/mapbox/streets-v9"
            />
      </div>
  )
}

export default GlobalMap
