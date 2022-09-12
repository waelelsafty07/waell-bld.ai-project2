import React, { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();

  const titleSearch = useRef();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = (event) => {
    event.preventDefault();
    setSearchParams({ search: titleSearch.current.value });
    navigate({
      pathname: "/",
      search: `?search=${titleSearch.current.value}`,
    });
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topHeader}>
          <div className={styles.bar}>
            <div className={styles.text}>
              <span className={styles.presentation}>
                <span className={styles.title}>
                  Courses on sale from E£169.99
                </span>
                <span>
                  | Thanks for enrolling in a free course. Now, upgrade your
                  learning.
                </span>
              </span>
              <span className={styles.unTitle}> Ends in 5h 52m 34s.</span>
            </div>
          </div>
          <button className={styles.btnClose}>x</button>
        </div>
        <nav className={styles.nav}>
          <div className={styles.btnMenu}>
            <span>
              <MenuIcon />
            </span>
          </div>
          <Link to="/" className={styles.logo}>
            <img
              className={styles.imgLogo}
              src="http://localhost:3000/logo-udemy.svg"
              alt="udemy logo"
            />
          </Link>
          <a href="/" className={styles.category}>
            {" "}
            Categories{" "}
          </a>
          <div className={styles.searchBar}>
            <label className={styles.searchLabel}></label>
            <form action="" className={styles.searchForm}>
              <input
                className={styles.searchInput}
                placeholder="Search for anything"
                type="text"
                ref={titleSearch}
              />

              <button className={styles.btn} onClick={onClickHandler}>
                <SearchIcon />
              </button>
            </form>
          </div>
          <ul className={styles.list}>
            <li>
              <a href="/" className={styles.business}>
                {" "}
                Udemy Business{" "}
              </a>
            </li>
            <li>
              <a href="/" className={styles.teach}>
                {" "}
                Teach on Udemy{" "}
              </a>
            </li>
            <li>
              <a href="/" className="">
                <ShoppingCartIcon></ShoppingCartIcon>
              </a>
            </li>

            <li>
              <a href="/" className={styles.login}>
                {" "}
                Login{" "}
              </a>
            </li>
            <li>
              <a href="/" className={styles.signup}>
                {" "}
                Signup{" "}
              </a>
            </li>
            <li>
              <button href="/" className={styles.globalIcon}>
                <LanguageIcon />
              </button>
            </li>
          </ul>
          <button className={styles.btnShopping}>
            <ShoppingCartIcon></ShoppingCartIcon>
          </button>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
