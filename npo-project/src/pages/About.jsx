import React, { useState } from "react";
import { Link } from "react-router-dom";

function About({ npos }) {
  console.log(npos);

  const [favorites, setFavorites] = useState([]);

  function handleFavorite(index) {
    const newFavorites = [...favorites]
    newFavorites[index] = !newFavorites[index]
    setFavorites(newFavorites);
  }

  return (
    <div>
      {npos.map((org,index) => {
        const favorite = favorites[index] || false
        return (
          <div>
            <p className="card ">
              <span class="inline-flex items-baseline">
                <img class="h-45 w-60" src={org.image} alt={org.name} />
              </span>
              <h2>{org.name}</h2>
              <p>{org.description}</p>
              <button>
                <a href={org.website}>Website</a>
              </button>
              <br></br>
              <>
              {favorite ? (
                <button onClick={() =>handleFavorite(index)}>Favorite!</button>
              ) : (
                <button onClick={()=>handleFavorite(index)}>Favorite?</button>
              )}
              </>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default About;
