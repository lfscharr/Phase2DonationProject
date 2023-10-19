import React from "react";
import NpoList from "../components/NpoList";
import Search from "../components/Search";
import { Link } from "react-router-dom";

function Home({ npos, search, setSearch }) {
  return (
    <div>
      <div id="video-container">
       <video id="video" src= "src/components/_import_61da6bd480f039.79703158_FPpreview.mp4"
            autoPlay="{true}" loop muted> 
        </video> 
        </div>
        <h1>Featured Organizations</h1>
        <div>
      <NpoList npos={npos} />
      <Search search={search} onSearch={setSearch}/>
      </div>
      
      
    </div>
  );
}

export default Home;
