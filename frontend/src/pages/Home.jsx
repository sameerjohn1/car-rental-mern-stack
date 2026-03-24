import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import HomeCars from "../components/HomeCars";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <HomeCars />
      <Testimonials />
    </div>
  );
};

export default Home;
