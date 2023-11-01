import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry({planets, updateFormData, addPlanet}) {

    return(
        <div className="registry">
            <Search />
            <div className="content">
                <PlanetList planets={planets} />
                <NewPlanetForm updateFormData={updateFormData} addPlanet={addPlanet} />
            </div>
        </div>
    )
}

export default Registry;