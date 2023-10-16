import React, { useState, useEffect } from "react";
import NpoList from "./NpoList.jsx";
import Search from "./Search";
import NewNpoForm from "./NewNpoForm.jsx";
import { useNavigate } from "react-router-dom";
function NpoPage() {
  const [npos, setNpos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/npos")
      .then((res) => res.json())
      .then((npoArray) => {
        setNpos(npoArray);
      });
  }, []);

  function handleAddNpo(newNpo) {
    const updatedNpos = [...npos, newNpo];
    setNpos(updatedNpos);
  }

  const displayNpos = npos.filter((npo) => {
    return npo.name.toLowerCase().includes(search.toLowerCase());
  });
  const navigate = useNavigate();
  function handleClick() {
    navigate("/new");
  }

  return (
    <main>
      <button onClick={handleClick}>New Org</button>
      <NewNpoForm handleAddNpo={handleAddNpo} />
      <Search search={search} onSearch={setSearch} />
      <NpoList npos={displayNpos} />
    </main>
  );
}

export default NpoPage;
