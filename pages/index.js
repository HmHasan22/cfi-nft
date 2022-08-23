import React from "react";
import {Alert} from "flowbite-react";
import Hero from "../components/hero";
import MostPopular from "../components/mostPopular";

const Index = () => {
  return (
    <div>
      {/*  hero section*/}
      <Hero/>
      {/*  most popular*/}
        <MostPopular/>
    </div>
  );
};

export default Index;
