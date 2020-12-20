import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./CategoryHeader.module.css";

import Spinner from "../../components/UI/Spinner/Spinner";
import CategoryCard from "../../components/categoryCard/CategoryCard";

const CategoryHeader = () => {
  const [statsData, setStatsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://www.balldontlie.io/api/v1/players";

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let result = await axios(url);
      setStatsData(result);
    };
    if (statsData !== []) {
      console.log(statsData);
      setLoading(false);
      fetchData();
    }
  }, []);

  let playerData = <Spinner />;

  if (statsData.data) {
    // console.log(statsData.data.data);
    // console.log(statsData);
    playerData = statsData.data.data.map((player) => {
      return (
        <li key={player.id}>
          {player.first_name} {player.last_name}
        </li>
      );
    });
  }

  if (statsData.data) {
    console.log(statsData);
    for (let i = 0; i < statsData.meta.total_pages; i++) {
      const element = statsData.meta.total_pages[i];
      console.log(element);
    }
  }

  return (
    <div>
      <section>
        <div>category header</div>
        <ul className={classes.Ul}>{playerData}</ul>
        <CategoryCard player={playerData} />
      </section>
    </div>
  );
};

export default CategoryHeader;
