import React from "react";

import classes from "./StaticNavBar.module.css";

const StaticNavBar = () => {
  return (
    <React.Fragment>
      <div className={classes.Container}>
        <span>NBA</span>
        <ul>
          <li>Games</li>
          <li>Schedule</li>
          <li>Watch</li>
          <li>News</li>
          <li>Standing</li>
          <li>Tames</li>
          <li>stats</li>
          <li>Players</li>
          <li>Fantasy</li>
          <li>NBA Official</li>
          <li></li>
          <li>NBA TV</li>
          <li>League Pass</li>
          <li>Store</li>
          <li>Tickets</li>
          <li>box</li>
        </ul>
        <span>Sing in</span>
      </div>
    </React.Fragment>
  );
};

export default StaticNavBar;
