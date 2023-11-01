import React from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({updateFormData, addPlanet}) {

    return(
        <form onSubmit={addPlanet}>
            <input onChange={updateFormData} type="text" name="name" placeholder="Name" />
            <input onChange={updateFormData} type="text" name="climate" placeholder="Climate" />
            <input onChange={updateFormData} type="text" name="terrain" placeholder="Terrain"/>
            <input onChange={updateFormData} type="text" name="population" placeholder="Population" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;