import { useContext } from "react";
import { StoreContext } from "../store"

export default function Date() {
  const { state: { date } } = useContext(StoreContext);
  console.log(JSON.stringify(date));
  return(
    <div className="date">
      {JSON.stringify(date)}
      {/* {localStorage.getItem("date")} */}
    </div>
  );
}