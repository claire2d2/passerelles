import React from 'react'

const Form = () => {
  return (
    <div>
      <form action="" className="text-left">
        <div>Rajouter une passerelle:</div>
        <ul>
            <li>
                <label htmlFor="title">Titre :</label>
                <input name="title" type="text" required/>
            </li>
            <li>
                <label htmlFor="description">Description :</label>
                <input type="description" />
            </li>
            <li>
                <div>Coordonnées :</div>
                <p>Adresse : blablabal</p>
                <p>Pays : </p>
                <p>Ville :</p>
                <p>Lat :</p>
                <p>Lng :</p>
            </li>
            <li>
                ADD IMAGE HERE
            </li>
        </ul>
      </form>
    </div>
  )
}

export default Form
