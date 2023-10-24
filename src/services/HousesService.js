import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"


class HousesService {
  async getHouses() {
    const res = await api.get('api/houses')
    console.log('got houses', res.data)
    AppState.houses = res.data.map(h => new House(h))
    // console.log('appstate houses', AppState.houses)
  }

}

export const housesService = new HousesService()