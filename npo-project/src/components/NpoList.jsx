import React from "react";
import NpoCard from "./NpoCard";
import { Link } from "react-router-dom";

function NpoList({ npos }) {
  return (
    <div className="npo-list-container">
      <ul className="flex flex-row">
        {npos.map((npo) => (
          <li key={npo.id}>
            <Link to={`${npo.website}`}>
              <NpoCard npo={npo} />
            </Link>
          </li>
        )
        )};
      </ul>
    </div>
  );
}

export default NpoList;

