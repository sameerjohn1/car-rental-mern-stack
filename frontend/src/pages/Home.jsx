import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import HomeCars from "../components/HomeCars";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <HomeCars />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
