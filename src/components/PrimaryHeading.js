import classes from "./PrimaryHeading.module.css";
export default function PrimaryHeading() {
  return (
    <div className={classes.heading}>
      <h1 className={classes["primary-heading"]}>My Tours</h1>
    </div>
  );
}
