import NoTours from "../components/NoTours";
import PrimaryHeading from "../components/PrimaryHeading";
import Tours from "../components/Tours";
import { useSelector } from "react-redux";
function Main() {
  const isLoading = useSelector((state) => state.tours.loadingTours);
  const error = useSelector((state) => state.tours.error);
  const tours = useSelector((state) => state.tours.tours);
  return (
    <>
      {tours.length > 0 && <PrimaryHeading></PrimaryHeading>}
      {isLoading && <p className="centered">Loading Tours...</p>}

      {!error && <Tours></Tours>}
      {error && <p className="centered">Something went wrong</p>}
      {tours.length === 0 && !isLoading && <NoTours></NoTours>}
    </>
  );
}
export default Main;
