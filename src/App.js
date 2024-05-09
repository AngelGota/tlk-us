import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import Banner from "./components/banner.jsx";
import PriceEvent from "./components/priceEvent.jsx";
import InfoEvent from "./components/inforEvent.jsx";
import Legal from "./components/legal.jsx";
import Footer from "./components/footer.jsx";
import Separator from "./components/separator.jsx";

import CarShop from "./screens/CarShop.jsx";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Banner />
        <Separator />
        <PriceEvent />
        <Routes>
          <Route path="/tlk-us/carshop" element={<CarShop />} />
        </Routes>
        <InfoEvent />
        <Legal />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
