import classes from "./SingleTour.module.css";
import { TourSliceActions } from "../store/TourSlice";
import { useDispatch } from "react-redux";
function SingleTour(props) {
  const dispatch = useDispatch();
  const removeHandler = (e) => {
    const id = e.target.id;
    dispatch(TourSliceActions.removeTour(id));
  };
  const showDescriptionHandler = (e) => {
    const id = e.target.id;

    dispatch(TourSliceActions.setIsFullDescription(id));
  };
  let tour_description;
  if (!props.isFullDescription) {
    tour_description = props.description.slice(0, 150);
  } else {
    tour_description = props.description;
  }

  return (
    <div key={props.tourId} className={classes.singleTour}>
      <p className={classes["tour-price"]}>{"$" + props.price}</p>
      <img
        className={classes["tour-image"]}
        src={props.image}
        alt={"Image of Country"}
      />
      <div className={classes["description-container"]}>
        <h2 className={classes["tour-title"]}>{props.title}</h2>

        <p className={classes["tour-description"]}>
          {tour_description}
          <a onClick={showDescriptionHandler} id={props.tourId}>
            {props.isFullDescription ? "Show Less" : "Show More"}
          </a>
        </p>

        <button
          onClick={removeHandler}
          id={props.tourId}
          className={classes.btn}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}
export default SingleTour;
