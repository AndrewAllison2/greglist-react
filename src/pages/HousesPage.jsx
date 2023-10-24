import { observer } from "mobx-react"
import React from "react"
import { housesService } from "../services/HousesService.js"
import Pop from "../utils/Pop.js"


function HousesPage() {

  async function getHouses() {
    try {
      console.log('getting houses')
      await housesService.getHouses()
    } catch (e) {
      Pop.error(e)
    }
  }


  return (
    <div>
      <h1>Houses Page</h1>
    </div>
  )
}

export default observer(HousesPage)