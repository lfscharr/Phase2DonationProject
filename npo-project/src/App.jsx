import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import NpoPage from "./components/NpoPage";
import FormLayout from "./layout/FormLayout";
import NewNpoForm from "./components/NewNpoForm";

function App() {
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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home npos={displayNpos} search={search} setSearch={setSearch}/>} />
        <Route path="/about" element={<About />} />
        <Route path="new" element={<NewNpoForm handleAddNpo={handleAddNpo} />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
