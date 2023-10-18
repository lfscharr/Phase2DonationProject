import React, { useState } from "react";

function NpoCard({ npo }) {
  const { name, image, website, description, type } = npo;

  return (
    <div>
      <li
        id="npo-card"
        className="border-black border-solid border-4 mx-3 my-30 bg-gray-300"
      >
        <span class="inline-flex items-baseline">
          <img class="h-50 w-80 " src={image} alt={name} />
        </span>
        <h4>{type}</h4>
      </li>
    </div>
  );
}

export default NpoCard;
