import React from "react";
import classes from "./HomePageStats.module.css";

import CategoryHeader from "../../container/CtegoryHeader/CategoryHeader";

const HomePageStats = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.SectionContainer}>
        <div>player</div>
        <CategoryHeader />
      </div>
    </div>
  );
};

export default HomePageStats;
