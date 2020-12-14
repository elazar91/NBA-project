import classes from "./HomePageStats.module.css";

import React from "react";

const HomePageStats = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.SectionContainer}>
        <div>header</div>
        <section>
          <div>category header</div>
          <table>
            <tbody>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default HomePageStats;
