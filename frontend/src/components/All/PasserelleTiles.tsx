import PasserelleCard from "./PasserelleCard"
import examplePasserelles from "./example.json"

// interface PasserelleTilesProps {
//     id: string,
//     title: string,
//     image: string,
//     country: string,
//     city: string
// }

const PasserelleTiles = () => {
  return (
    <div className={`max-h-full grid grid-cols-${4} grid-rows-2 gap-1 p-2`}>
    {examplePasserelles.map((passerelle)=> {
        return <PasserelleCard key={passerelle.id} image={passerelle.image} title={passerelle.title} country={passerelle.country} city={passerelle.city}/>
    })}
</div>
  )
}

export default PasserelleTiles
