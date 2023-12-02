import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const onClickHandler = () => {
    isMenuVisible ? setIsMenuVisible(false) : setIsMenuVisible(true);
  };

  return (
    <nav className={styles.Navbar}>
      <Link to="/">
        <h3>ANTEIKU</h3>
      </Link>
      <ul className={`${styles.menu} ${isMenuVisible && styles.menu_visible}`}>
        <Link to="/">HOME</Link>
        <Link to="/">CHARACTERS</Link>
      </ul>
      <div
        onClick={onClickHandler}
        className={`${styles.hambuger_bars_div} ${
          isMenuVisible && styles.change
        }`}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </nav>
  );
};

export default Navbar;
