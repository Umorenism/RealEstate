import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Hero } from "./component/Hero/Hero";
import { Footer } from "./component/Footer/Footer";
import { PopularProperties } from "./component/popularProperties/PopularProperties";
import { FeaturedProperties } from "./component/FeaturedProperties/FeaturedProperties";
import { NewsLetter } from "./component/Newsletter/NewsLetter";
import { Signup } from "./component/Signup/Signup";
import { Signin } from "./component/SignIn/Signin";
import { Properties } from "./component/Properties/Properties";
import { PropertyDetail } from "./component/PropertyDetail/PropertyDetail";

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
