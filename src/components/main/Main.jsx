import classes from "./Main.module.css";
import HomePageStats from "../HomePageStats/HomePageStats";

const Main = () => {
  return (
    <div className={classes.Main}>
      <HomePageStats />
    </div>
  );
};

export default Main;
