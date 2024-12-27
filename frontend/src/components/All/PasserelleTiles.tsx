import { FIND_PASSERELLES } from "../../requests/passerelles.requests"
import { useQuery } from "@apollo/client"
import { PasserellesQuery, PasserellesQueryVariables} from "../../generated/graphql"

import PasserelleCard from "./PasserelleCard"
import defaultImage from "./bridge-icon.png"

// interface PasserelleTilesProps {
//     id: string,
//     title: string,
//     image: string,
//     country: string,
//     city: string
// }

const PasserelleTiles = () => {
    const { data: passerellesData } = useQuery<PasserellesQuery>(FIND_PASSERELLES)

  return (
    <div className={`max-h-full grid grid-cols-${4} grid-rows-2 gap-1 p-2`}>
    {passerellesData?.passerelles?.length === 0 && "Pas de passerelles à montrer"}    
    {passerellesData?.passerelles && passerellesData?.passerelles?.map((passerelle)=> {
        return <PasserelleCard key={passerelle.id} image={passerelle.image ? passerelle.image : defaultImage} title={passerelle.title} country={passerelle.country} city={passerelle.city}/>
    })}
</div>
  )
}

export default PasserelleTiles
