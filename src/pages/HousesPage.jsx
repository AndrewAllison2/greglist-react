import { observer } from "mobx-react"
import React, { useEffect } from "react"
import { housesService } from "../services/HousesService.js"
import Pop from "../utils/Pop.js"
import { AppState } from "../AppState.js"
import HouseCard from "../components/HouseCard.jsx"


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
    return (
    <div className="col-4 my-3" key={h.id}>
      <HouseCard house={h} />
      </div>
    )
  }))


    useEffect(() => {
    getHouses()
  }, [])


  return (
    <section>
      <div className="container">
      <h1 className="text-center text-decoration-underline mb-4">Houses for Sale</h1>
        <div className="row">
      {houses}
        </div>
      </div>
    </section>
  )
}

export default observer(HousesPage)