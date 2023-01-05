import { useDispatch } from "react-redux";
import classes from "./NoTours.module.css";
import { fetchTours } from "../store/TourSlice";
function NoTours() {
  const dispatch = useDispatch();
  const refreshHandler = () => {
    dispatch(fetchTours());
  };
  return (
    <div className={classes.NoTours}>
      <h1>No Tours Left</h1>
      <button onClick={refreshHandler} className={classes.refresh}>
        Refresh
      </button>
    </div>
  );
}

export default NoTours;
