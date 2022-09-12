import React, { useEffect, useState } from "react";
import styles from "./SideBar.module.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { Link } from "react-router-dom";
const SideBar = ({ data }) => {
  const [fix, setFix] = useState(false);

  const setFixedSideBar = () => {
    window.scrollY >= 500 ? setFix(true) : setFix(false);
  };
  window.addEventListener("scroll", setFixedSideBar);
  return (
    <>
      <div className={`${styles.sideBar} ${fix ? styles.fixedSideBar : ""}`}>
        <div className={styles.sideBarContent}>
          <div className={styles.sideBarGroup}>
            <div
              className="introduction"
              style={{ display: fix ? "none" : "block" }}
            >
              <span className={styles.sideBarImage}>
                <img
                  src={data?.image}
                  alt="courseImage"
                  width="100%"
                  height="auto"
                  style={{
                    position: "absolute",
                    verticalAlign: "middle",
                  }}
                />
                <span
                  className={`${styles.sideBarOverlay} ${styles.sideBarAbsolute} `}
                ></span>
                <span
                  className={`${styles.playCircle} ${styles.sideBarAbsolute}`}
                >
                  <PlayCircleIcon style={{ fontSize: "4.5rem" }} />
                </span>
                <span
                  className={`${styles.sideBarPreview} ${styles.sideBarAbsolute} `}
                >
                  Preview this course
                </span>
              </span>
            </div>
            <div className={styles.sectionPrice}>
              <div className={styles.buyBox}>
                <div className={styles.priceText}>E£{data?.price}</div>
              </div>
              <div className={styles.buyBox}>
                <div style={{ flex: 1 }}>
                  <button
                    className={`${styles.sideBarButton} ${styles.btnAddToCart}`}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className={styles.buyBox}>
                <div style={{ flex: 1 }}>
                  <button
                    className={`${styles.sideBarButton} ${styles.btnBuyNow}`}
                  >
                    Buy now
                  </button>
                </div>
              </div>
              <div className="section-backMoney">
                <span className={styles.backMoney}>
                  30-Day Money-Back Guarantee
                </span>
              </div>
              <div className="section-lists">
                <h2 style={{ margin: "1rem 0", fontSize: "1rem" }}>
                  This course includes:
                </h2>
                <ul className={styles.sideBarList}>
                  <li>
                    <span>
                      <OndemandVideoIcon fontSize="small" />
                      14 hours on-demand video
                    </span>
                  </li>
                  <li>
                    <span>
                      <InsertDriveFileOutlinedIcon fontSize="small" />1 article
                    </span>
                  </li>
                  <li>
                    <span>
                      <CloudDownloadOutlinedIcon fontSize="small" />3
                      downloadable resources
                    </span>
                  </li>
                  <li>
                    <span>
                      <AllInclusiveOutlinedIcon fontSize="small" />
                      Full lifetime access resources
                    </span>
                  </li>
                  <li>
                    <span>
                      <SmartphoneOutlinedIcon fontSize="small" />
                      Access on mobile and TV
                    </span>
                  </li>
                  <li>
                    <span>
                      <EmojiEventsOutlinedIcon fontSize="small" />
                      Certificate of completion
                    </span>
                  </li>
                </ul>
              </div>
              <div className={styles.sideBarLink}>
                <Link to="/" className={styles.colorBlack}>
                  Share
                </Link>
                <Link to="/" className={styles.colorBlack}>
                  Gift this course
                </Link>
                <Link to="/" className={styles.colorBlack}>
                  Apply Coupon
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.sideBarGroup}>
            <div className={styles.sideBarFooter}>
              <h2>Training 5 or more people?</h2>
              <p>
                Get your team access to 17,000+ top Udemy courses anytime,
                anywhere.
              </p>
              <div className={styles.buyBox}>
                <div style={{ flex: 1 }}>
                  <button
                    className={`${styles.sideBarButton} ${styles.btnBuyNow}`}
                  >
                    Try Udemy Business
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
