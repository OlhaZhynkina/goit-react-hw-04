import { CirclesWithBar } from "react-loader-spinner";
import s from "../Loader/Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.wrap}>
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        visible={true}
      />
    </div>
  );
};
