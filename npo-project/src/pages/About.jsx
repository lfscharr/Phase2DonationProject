import React, { useState } from "react";
import { Link } from "react-router-dom";

function About({ npos }) {
  console.log(npos);

  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    setFavorite(!favorite);
  }

  return (
    <div>
      {npos.map((org) => {
        return (
          <div>
            <p className="card ">
              <span class="inline-flex items-baseline">
                <img class="h-45 w-60" src={org.image} alt={org.name} />
              </span>
              <h2>{org.name}</h2>
              <p>{org.description}</p>
              <button><a href={org.website}>Website</a></button>
              <br></br>
              {favorite ? (
                <button className="text-center" onClick={handleFavorite}>
                  Favorite!
                </button>
              ) : (
                <button onClick={handleFavorite}>Favorite?</button>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default About;
