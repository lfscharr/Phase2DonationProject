import React, {useState, useEffect} from "react";
import NpoList from "./NpoList.js";
import Search from "./Search";

function NpoPage() {
    const [npos, setNpos] = useState([])
    const [search, setSearch] = useState("")

useEffect(()=>{
    fetch("http://localhost:3000/npos")
    .then(res => res.json())
    .then((npoArray) => {
      setNpos(npoArray)
    })
    }, [])

    const displayNpos = npos.filter((npo) => {
        return npo.orgName.toLoweCase().includes(search.toLowerCase())
    })

    return (
        <main>
          <Search search={search} onSearch={setSearch}/>
          <NpoList npos={displayNpos}/>
        </main>
      );
    }


export default NpoPage;