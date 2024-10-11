import s from "../ErrorMessage/ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <div>
      <p className={s.descr}>Something went wrong!</p>
    </div>
  );
};
