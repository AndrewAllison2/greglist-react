import  PropTypes from "prop-types";
import { House } from "../models/House.js";
import React from "react";



/**@param {{house:House}} props */
export default function HouseCard({ house }) {
  


  return (
  <div className="card car-card">
        <img src={house.imgUrl} alt="" data-bs-toggle="modal" data-bs-target="#carModal" className="selectable" />
        <div className="card-body">
          <div className="d-flex justify-content-between">

          <p><b>{house.bedrooms} bed {house.bathrooms} bath { house.levels}</b></p>
            {/* <div className={AppState.car?.id == car.id ? "d-flex justify-content-between" : "d-none"} >
              <button className="btn ms-1" type="button" onClick={removeHouse} title="Delete Car!"><span>✖️</span></button>
            </div> */}
          </div>
        </div>
      </div>
  )
}

HouseCard.propTypes = {
  house: PropTypes.instanceOf(House)
}