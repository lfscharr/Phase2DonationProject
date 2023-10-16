import React, {useState} from "react";

function NpoCard({npo}) {
    const {name, image, website, description} = npo
    const [favorite, setFavorite] = useState(true)

    function handleFavorite(){
        setFavorite(!favorite)
    }

    return (
        <li className="card">
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <p>Description: {description}</p>
          <p>Website: {website}</p>
          {favorite ? (
            <button className="primary" onClick={handleFavorite}>Favorite!</button>
          ) : (
            <button onClick={handleFavorite}>Favorite?</button>
          )}
        </li>
      );
}

export default NpoCard;