import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Hero } from "./component/Hero/Hero";
import { Footer } from "./component/Footer/Footer";
import { PopularProperties } from "./component/popularProperties/PopularProperties";
import { FeaturedProperties } from "./component/FeaturedProperties/FeaturedProperties";
import { NewsLetter } from "./component/Newsletter/NewsLetter";

import { Properties } from "./component/Properties/Properties";
import { PropertyDetail } from "./component/PropertyDetail/PropertyDetail";
import { StoreBanner } from "./component/fashionHero.tsx/StoreBanner";
import { StoreNav } from "./component/storenav/StoreNav";
import { StoreCollection } from "./component/storeCollection/StoreCollection";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <PopularProperties />
              <FeaturedProperties />
              <NewsLetter />
              <Footer />
            </>
          }
        />
        <Route
          path="/fashion"
          element={
            <>
              <Navbar />
              <StoreNav />
              <StoreBanner />
              <StoreCollection />
              <Footer />
            </>
          }
        />

        <Route
          path="/properties"
          element={
            <>
              <Navbar />
              <Properties />
              <Footer />
            </>
          }
        />
        <Route
          path="/propertyDetail/:id"
          element={
            <>
              <Navbar />
              <PropertyDetail />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
