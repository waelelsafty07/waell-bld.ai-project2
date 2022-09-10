import { Divider, Link } from "@mui/material";
import React from "react";
import styles from "./Footer.module.css";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <footer style={{ marginTop: "3rem" }}>
      <div className={styles.FooterSection}>
        <div className={styles.TextFooter}>
          Top companies choose <span>Udemy Business </span>
          to build in-demand career skills.
        </div>
        <div className={styles.LogoFooter}>
          <img
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
            alt="j"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
            alt="j"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
            alt="j"
          />
        </div>
      </div>
      <Divider light />
      <div className={styles.FooterSection + " " + styles.FooterMain}>
        <div className={styles.links}>
          <div className={styles.LanguageButton}>
            <button>
              <LanguageIcon />
              English
            </button>
          </div>
          <ul className={styles.LinkColumn}>
            <li>
              <Link underline="none" color="#fff">
                Udemy Business
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                Tech Business
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                Get the app
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                About us
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                Contact us
              </Link>
            </li>
          </ul>
          <ul className={styles.LinkColumn}>
            <li>
              <Link underline="none" color="#fff">
                Careers
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                Blog
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                Help and Support
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                Affiliate
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                Investors
              </Link>
            </li>
          </ul>
          <ul className={styles.LinkColumn}>
            <li>
              <Link underline="none" color="#fff">
                Terms
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                Cookie settings
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                Sitemap
              </Link>
            </li>
            <li>
              <Link underline="none" color="#fff">
                Accessibility statement
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.CopyRight}>
          <div className={styles.LogoContainer}>
            <Link className={styles.CopyRightLogo}>
              <img
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div>© 2022 Udemy, Inc.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
