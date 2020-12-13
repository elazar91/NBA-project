import React from "react";

import classes from "./RouteBar.module.css";

const RouteBar = () => {
  return (
    <div className={classes.Container}>
      <span className={classes.Title}>NBA Advanced Stats</span>
      <span className={classes.SapPictuar}></span>
    </div>
  );
};

export default RouteBar;
