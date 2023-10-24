import { observer } from "mobx-react"
import React, { useEffect } from "react"
import { housesService } from "../services/HousesService.js"
import Pop from "../utils/Pop.js"
import { AppState } from "../AppState.js"


function HousesPage() {

  async function getHouses() {
    try {
      console.log('getting houses')
      await housesService.getHouses()
    } catch (e) {
      Pop.error(e)
    }
  }

  let houses = (AppState.houses.map(h => {
    <div className="col-3 my-3">
      Houses go here
    </div>
  }))


    useEffect(() => {
    getHouses()
  }, [])


  return (
    <div>
      <h1>Houses Page</h1>
    </div>
  )
}

export default observer(HousesPage)