import  PropTypes from "prop-types";
import { House } from "../models/House.js";
import React from "react";
import './styles/HouseCard.scss';



/**@param {{house:House}} props */
export default function HouseCard({ house }) {
  


  return (
  <div className="card car-card">
        <img src={house.imgUrl} alt="" data-bs-toggle="modal" data-bs-target="#carModal" className="selectable" />
        <div className="card-body">
          <div className="d-flex justify-content-between">

          <p><b>{house.bedrooms} Bed {house.bathrooms} Bath {house.levels} Story Home</b></p>
          <p>$ { house.price}</p>
            {/* <div className={AppState.car?.id == car.id ? "d-flex justify-content-between" : "d-none"} >
              <button className="btn ms-1" type="button" onClick={removeHouse} title="Delete Car!"><span>✖️</span></button>
            </div> */}
        </div>
        <div>
          <p>{house.description}</p>
          <p>Built In: { house.year}</p>
        </div>
        </div>
      </div>
  )
}

HouseCard.propTypes = {
  house: PropTypes.instanceOf(House)
}