import { useState } from "react";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="new" element={<NewNpoForm />}>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
