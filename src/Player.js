import React from "react";
import "./Custom.css"; 

const Player = ({ nom, équipe, nationalité, numéroMaillot, âge, image, }) => {
  return (
    <div className="card" style={{ width: "21rem",}}>
      <img src={image} className="card-img-top" alt={nom} />
      <div className="card-body">
        <h5 className="card-title">{nom}</h5> 
        <p className="card-text">Équipe : {équipe}</p>
        <p className="card-text">Nationalité : {nationalité}</p>
        <p className="card-text">Numéro de maillot : {numéroMaillot}</p>
        <p className="card-text">Âge : {âge} ans</p>
      </div>
    </div>
  );
};

export default Player;

  