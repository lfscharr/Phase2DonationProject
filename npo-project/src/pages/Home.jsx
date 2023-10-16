import React from "react";
import NpoList from "../components/NpoList";
import Search from "../components/Search";

function Home({ npos, search, setSearch }) {
  return (
    <div>
      <Search search={search} onSearch={setSearch} />
      <NpoList npos={npos} />
    </div>
  );
}

export default Home;
