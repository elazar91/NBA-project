import React from "react";
import classes from "./CategoryCard.module.css";

const CategoryCard = (props) => {
  console.log(props);
  return (
    <table className={classes.Table}>
      <tbody>
        <tr className={classes.TR}>
          <td>{props.player.first_name}</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CategoryCard;
