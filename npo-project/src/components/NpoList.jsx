import React from "react";
import NpoCard from "./NpoCard.jsx";

function NpoList({ npos }) {
  return (
    <div className="npo-list-container">
      <ul className="flex flex-row ">
        {npos.map((npo) => {
          return <NpoCard key={npo.id} npo={npo} />;
        })}
      </ul>
    </div>
  );
}

export default NpoList;
