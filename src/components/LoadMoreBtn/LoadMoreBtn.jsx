import s from "../LoadMoreBtn/LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ handleClick }) => {
  return (
    <div className={s.wrap}>
      <button className={s.btn} type="button" onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};
