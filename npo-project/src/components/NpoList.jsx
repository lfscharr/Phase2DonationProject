import React from "react";
import NpoCard from "./NpoCard.jsx";

function NpoList({npos}) {
    return (
        <ul className="cards">{
            npos.map((npo)=>{
                return (<NpoCard key={npo.id} npo={npo}/>)
            })
        }</ul>
    );
}

export default NpoList;