import React from "react";
import LetsqubeCard from "../../letsqube/LetsqubeCard";
import MainContentHOC from "../MainContentHOC";

const MainContentPage = () => {
  return (
    <MainContentHOC>
      <LetsqubeCard />
    </MainContentHOC>
  );
};

export default MainContentPage;
