import { Container, Grid, Rating, Typography } from "@mui/material";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styles from "./Heading.module.css";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import ClosedCaptionOffIcon from "@mui/icons-material/ClosedCaptionOff";
import StarIcon from "@mui/icons-material/Star";
import SideBar from "./SideBar/SideBar";
import stylesSideBar from "./SideBar/SideBar.module.css";
import { CoursesContext } from "../../../../contexts/coursesData/coursesContext";

const Heading = () => {
  const props = useContext(CoursesContext);
  return (
    <>
      <div className={styles.backGround}>
        <Container className={styles.Container}>
          <BreadCrumbs title="Web Development" category="Web Development" />
        </Container>
        <Container className={styles.Container}>
          <div className={styles.heading}>
            <img
              className={styles.CourseImage}
              src={props?.dataCourse?.image}
              alt={props?.dataCourse?.title}
            />
            <Typography variant="h4" component="h1">
              {props?.dataCourse?.title}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              dangerouslySetInnerHTML={{
                __html: props?.dataCourse?.smallDescription,
              }}
            ></Typography>
            <Typography variant="caption" display="flex" component="div">
              <Typography
                variant="caption"
                component="div"
                style={{ fontSize: 18 }}
                className={styles.centerItem}
              >
                {props?.dataCourse?.rating}
              </Typography>
              <Typography
                variant="caption"
                component="div"
                className={styles.centerItem}
              >
                <Rating
                  className={styles.sizeStar}
                  name="half-rating"
                  defaultValue={props?.dataCourse?.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </Typography>
              <Link
                underline="underline"
                style={{ color: "#cec0fc" }}
                key="1"
                to={{
                  pathname: "/",
                }}
                className={styles.centerItem}
              >
                <Typography
                  variant="caption"
                  component="div"
                  className={styles.centerItem}
                >
                  (2,785 ratings)
                </Typography>
              </Link>
              <Typography
                variant="caption"
                component="div"
                className={styles.centerItem}
              >
                {props?.dataCourse?.people} students
              </Typography>
            </Typography>
            <Typography variant="caption" component="div">
              Created by{" "}
              <Link to="/" style={{ color: "#cec0fc", margin: 0 }}>
                Tech Learning Network,
              </Link>
              <Link to="/" style={{ color: "#cec0fc", margin: 0 }}>
                Tech Learning Network
              </Link>
            </Typography>
            <Typography
              variant="caption"
              className={styles.DisplayBlock}
              display="flex"
              component="div"
            >
              <Typography
                variant="caption"
                display="flex"
                component="div"
                className={styles.centerItem}
              >
                <InfoIcon
                  className={styles.IconHead}
                  style={{ marginLeft: 0 }}
                />
                Last updated 9/2015
              </Typography>
              <Typography
                variant="caption"
                display="flex"
                component="div"
                className={styles.centerItem}
              >
                <LanguageIcon className={styles.IconHead} />
                English
              </Typography>
              <Typography
                variant="caption"
                display="flex"
                component="div"
                className={styles.centerItem}
              >
                <ClosedCaptionOffIcon className={styles.IconHead} />
                English
              </Typography>
            </Typography>
            <div className={styles.HeadingFooter}>
              <div className={styles.price} style={{ fontSize: "2rem" }}>
                <span>E£{props?.dataCourse?.price}</span>
              </div>
              <div className={stylesSideBar.buyBox}>
                <div style={{ flex: 1 }}>
                  <button
                    className={`${stylesSideBar.sideBarButton} ${stylesSideBar.btnAddToCart}`}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="section-backMoney">
                <span
                  className={stylesSideBar.backMoney}
                  style={{ color: "#fff" }}
                >
                  30-Day Money-Back Guarantee
                </span>
              </div>
              <div className={stylesSideBar.sideBarLink}>
                <Link to="/" className={styles.colorWhite}>
                  Share
                </Link>
                <Link to="/" className={styles.colorWhite}>
                  Gift this course
                </Link>
                <Link to="/" className={styles.colorWhite}>
                  Apply Coupon
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <SideBar data={props?.dataCourse} />
      </div>
      <div className={styles.fixedBottomBar}>
        <div className={styles.fixedBottomBarContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.title}> {props?.dataCourse?.title}</div>
            <div className={styles.title}>
              <Typography variant="caption" display="flex" component="div">
                <Typography
                  variant="caption"
                  component="div"
                  style={{ fontSize: 18 }}
                  className={styles.centerItem}
                >
                  {props?.dataCourse?.rating}
                </Typography>
                <Typography
                  variant="caption"
                  component="div"
                  className={styles.centerItem}
                  color="#faaf00"
                >
                  <StarIcon fontSize="small" />
                </Typography>
                <Link
                  underline="underline"
                  style={{ color: "#cec0fc" }}
                  key="1"
                  to={{
                    pathname: "/",
                  }}
                  className={styles.centerItem}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    className={styles.centerItem}
                  >
                    (2,785 ratings)
                  </Typography>
                </Link>
                <Typography
                  variant="caption"
                  component="div"
                  className={styles.centerItem}
                >
                  {props?.dataCourse?.people} students
                </Typography>
              </Typography>
            </div>
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.price}>
              <span>E£{props?.dataCourse?.price}</span>
            </div>
            <div className={styles.button}>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
