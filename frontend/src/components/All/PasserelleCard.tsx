import React from 'react'
import { useEffect } from 'react';

interface data  {
    title: string;
    // description: string;
    image: string;
    // geo: {
    //     lat: string;
    //     lng: string;
    // },
    country: string | undefined;
    city: string | undefined;
    // validated: boolean
}


const PasserelleCard:React.FC<data> = ({title, image, country, city}) => {

    useEffect (() => {
        console.log(title)
    },[])
    
  return (
    <div className={`bg-button w-1/${4} h-1/${4} flex flex-col p-2 border border-solid border-text rounded-md`}>
       <h3>{title}</h3>
       <div className="h-1/2 w-1/2 bg-main"></div>
       <p>Pays: {country ? country : "Inconnu"}</p>
       <p>Ville: {city ? city : "Inconnu"}</p>
    
    </div>
  )
}

export default PasserelleCard
