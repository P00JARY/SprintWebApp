import React from "react";
import NavBar from "../components/NavBar";
import CardContainer from "../components/CardContainer"
import InvestmentContainer from "../components/InvestmentContainer";
import Graph from "../components/Graph";
import "../sass/Home.scss";

function HomePage(props) {
  return (
    <div className="px-2">
      <img className="mt-3 " src={"/logo2.svg"} alt={"logo"} />
      <div className=" px-sm-5 py-sm-3">
        <NavBar />
        <CardContainer />
        <Graph />
        <InvestmentContainer />
      </div>



    </div>
  );
}

export default HomePage;
