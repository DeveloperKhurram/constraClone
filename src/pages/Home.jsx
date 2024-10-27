import React from "react";
import { Header, Hero, About } from "../components/index.js";
import { NavbarMenu } from "../elements/index.js";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="sticky top-0 bg-grayDark z-10">
        <div className="container">
          <NavbarMenu />
        </div>
      </div>

      <Hero />

      {/* <About /> */}

      <section>

      </section>
    </div>
  );
};

export default Home;
