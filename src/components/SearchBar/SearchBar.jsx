// === Библиотечные модули ===
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// === Компоненты проекта ===
import { FcSearch } from "react-icons/fc";

// === Стили ===
import styles from "./SearchBar.module.css";

export default function SearchBar({ handleQuery }) {
  const [searchCriteria, setSearchCriteria] = useState("");
  const notify = () => toast("Please enter the search criteria");

  const handleChange = (event) => {
    setSearchCriteria(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchCriteria) {
      notify();
      return;
    } else {
      handleQuery(searchCriteria);
      setSearchCriteria("");
      
    }
  };

  return (
    <header>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={50}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            width: "500px",
            background: "#4da8ff",
            color: "#fff",
            fontSize: "20px",
          },
        }}
      />
      <form className={styles.container} onSubmit={handleSubmit}>
        <button className={styles.button} type="submit">
          <FcSearch className={styles.icon} />
        </button>
        <input
          className={styles.input}
          id="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name={searchCriteria}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
