import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
         <>
          <div className="col-md-4 col-10 mx-auto">
              <div className="card">
                  <img src={props.imgsrc} alt="images" />
                  <div className="card-body">
                      <h5 className="card-title font-weight-bold">{props.title}</h5>
                      <p className="card-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium suscipit soluta repellat eaque assumenda, maxime cupiditate aperiam in doloremque adipisci. </p>
                      <NavLink to="#" className="button">Check Now</NavLink>
                  </div>
              </div>
          </div>
        </>
    )
}

export default Card;
