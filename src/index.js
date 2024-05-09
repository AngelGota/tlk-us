import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import NavBar from "./components/navbar.jsx";
import Banner from "./components/banner.jsx";
import PriceEvent from "./components/priceEvent.jsx";
import InfoEvent from "./components/inforEvent.jsx";
import Legal from "./components/legal.jsx";
import Footer from "./components/footer.jsx";
import Separator from "./components/separator.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Banner />
    <Separator />
    <PriceEvent />
    <InfoEvent />
    <Legal />
    <Footer />
  </React.StrictMode>
);
