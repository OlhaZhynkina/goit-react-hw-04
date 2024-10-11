import { HiSearch } from "react-icons/hi";
import s from "../SearchBar/SearchBar.module.css";

export const SearchBar = ({ onSubmit }) => {
  return (
    <header className={s.header}>
      <form onSubmit={onSubmit} className={s.form}>
        <HiSearch className={s.icon} />
        <input
          className={s.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
        />

        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
