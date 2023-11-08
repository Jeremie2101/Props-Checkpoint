import React from "react";
import "./Custom.css"; 
import Player from "./Player";
import Joueurs from "./Joueurs";
import Joueur2 from "./Joueur2";
import Joueur3 from "./Joueur3";
import Footb from "./Footb";

const PlayersList = () => {
  return (
    <div className="container">
      <div className="row">
        {Joueurs.map((Joueurs, indeX) => (
        <div className="col-md-4" key={indeX}>
            <Player {...Joueurs} />
        </div>
        ))}
        {Joueur2.map((Joueur2, inde) => (
        <div className="col-md-4" key={inde}>
            <Player {...Joueur2} />
        </div>
        ))}
        {Joueur3.map((Joueur3, ind) => (
        <div className="col-md-4" key={ind}>
            <Player {...Joueur3} />
        </div>
        ))}
        {Footb.map((Footb, inde) => (
        <div className="col-md-4" key={inde}>
            <Player {...Footb} className="col-md-4"/>
        </div>
        ))}
    </div>
    </div>
    
  );
};

export default PlayersList;
