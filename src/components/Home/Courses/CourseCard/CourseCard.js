import React, { useRef, useState } from "react";
import styles from "./CourseCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box, Popper, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CourseCard = ({ id, image, title, author, rating, price, people }) => {
  const [isShown, setIsShown] = useState(null);

  const onHoverHandler = (event) => {
    console.log(event.currentTarget);
    setIsShown(event.currentTarget);
  };
  const onLeaveHandler = (event) => {
    setIsShown(null);
  };
  const open = Boolean(isShown);
  const idPopper = open ? "simple-popover" : undefined;
  return (
    <>
      <div>
        <Link
          to={`/courses/${id}`}
          aria-describedby={idPopper}
          className={styles.Block}
        >
          <Card
            onMouseEnter={onHoverHandler}
            onMouseLeave={onLeaveHandler}
            style={{ border: "none" }}
            sx={{ mr: 0, mt: 3, borderRadius: "none", boxShadow: "none" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
              style={{ border: "none" }}
              className={styles.CardMedia}
            />
            <CardContent sx={{ pl: 0 }} style={{ border: "none" }}>
              <h3 className={styles.CardTitle} style={{ border: "none" }}>
                {title}
              </h3>
              <Typography
                variant="body2"
                className={styles.CardAuthor}
                color="text.secondary"
                style={{ border: "none" }}
              >
                {author}
              </Typography>
              <Typography variant="caption" display="flex" component="div">
                <span style={{ border: "none" }} className={styles.centerItem}>
                  4.4
                </span>
                <Rating
                  className={`${styles.sizeStarCard} + ${styles.centerItem}`}
                  name="half-rating-read"
                  defaultValue={rating}
                  precision={0.5}
                  readOnly
                />
                <span className={styles.centerItem}>({people})</span>
              </Typography>
              <div className="ratingPrice">
                <span>E£{price}</span>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Popper
          id={idPopper}
          className={styles.Popover}
          open={open}
          onClose={onLeaveHandler}
          placement="left-start"
          anchorEl={isShown}
        >
          <div className={styles.PopoverContainer}>
            <h2>{title}</h2>
            <div className={styles.LastUpdate}>
              updated <span>September 2019</span>
            </div>
            <div className={styles.Total}>21 total hours</div>
            <p>
              21 total hours21 total hours21 total hours21 total hours21 total
              hours
            </p>
            <ul className={styles.BoxList}>
              <li>
                <div className="List-Block">
                  <CheckIcon fontSize="small" />
                  hi
                </div>
                <div className="List-Block">
                  <CheckIcon fontSize="small" />
                  hi
                </div>
                <div className="List-Block">
                  <CheckIcon fontSize="small" />
                  hi
                </div>
              </li>
            </ul>
            <div style={{ display: "flex" }}>
              <div className={styles.buyBox}>
                <div style={{ width: "14rem" }}>
                  <button
                    className={`${styles.sideBarButton} ${styles.btnAddToCart}`}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className={styles.love}>
                <div>
                  <button
                    className={`${styles.sideBarButton} ${styles.btnBuyNow}`}
                  >
                    <FavoriteBorderIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Popper>
      </div>
    </>
  );
};

export default CourseCard;
