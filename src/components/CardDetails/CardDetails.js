import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import styles from "./CardDetails.module.css";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    starRating: {
      gold: "#ff9800",
      gray: "#6a6f73",
    },
  },
});
const CardDetails = ({ image, title, author, rating, price, people }) => {
  return (
    <Card sx={{ mr: 1, mt: 3, borderRadius: 0 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
        className={styles.CardMedia}
      />
      <CardContent>
        <Link href="#" color="inherit" underline="none">
          <Typography
            gutterBottom
            variant="h3"
            className={styles.CardTitle}
            component="div"
          >
            {title}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          className={styles.CardAuthor}
          color="text.secondary"
        >
          {author}
        </Typography>
        <Stack spacing={1} sx={{ display: "inline" }}>
          <Typography
            variant="h5"
            color={theme.palette.starRating.gold}
            component="span"
          >
            {rating}
          </Typography>
          <Rating
            className={styles.FontRating}
            name="half-rating"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
          <Typography
            variant="h5"
            color={theme.palette.starRating.gray}
            style={{ fontSize: ".7rem" }}
            component="span"
          >
            ({people})
          </Typography>
        </Stack>
        <div className="ratingPrice">
          <span>E£{price}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDetails;
