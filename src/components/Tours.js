import SingleTour from "./SingleTour";
import classes from "./Tours.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTours } from "../store/TourSlice";
function Tours() {
  const tours = useSelector((state) => state.tours.tours);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const tourContent = tours.map((item) => {
    return (
      <SingleTour
        tourId={item.id}
        isFullDescription={item.isFullDescription}
        image={item.image}
        price={item.price}
        title={item.name}
        description={item.info}
      ></SingleTour>
    );
  });
  return <div className={classes.tours}>{tourContent}</div>;
}
export default Tours;
