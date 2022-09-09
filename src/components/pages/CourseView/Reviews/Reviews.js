import React, { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./Reviews.module.css";
import { Box, IconButton, Link, Popper, Rating } from "@mui/material";
import { CoursesContext } from "../../../../contexts/coursesData/coursesContext";
const Reviews = () => {
  const data = useContext(CoursesContext);
  const dataCourse = data.dataCourse?.reviews;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className="heading-content">
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {dataCourse?.map((review) => {
          return (
            <React.Fragment key={review.id}>
              <ListItem sx={{ p: 0, m: 0 }} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    className={styles.IconReview}
                    alt={review.user.public_display_name}
                    src={review.user.image_50x50}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={review.user.public_display_name}
                  secondary={
                    <>
                      <Rating
                        className={styles.IconReview}
                        name="half-rating"
                        defaultValue={review.rating}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                      <span style={{ display: "block" }}>{review.content}</span>
                      <span className={styles.IconButton}>
                        Helpful ?
                        <IconButton aria-label="thumbup">
                          <ThumbUpOutlinedIcon fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="thumbdown">
                          <ThumbDownOutlinedIcon fontSize="small" />
                        </IconButton>
                      </span>
                    </>
                  }
                />
                <ListItemText
                  primary={
                    <Link
                      style={{ cursor: "pointer" }}
                      aria-label="thumbdown"
                      color="#000"
                      aria-describedby={id}
                      type="button"
                      onClick={handleClick}
                    >
                      <MoreVertIcon style={{ float: "right" }} />
                    </Link>
                  }
                  secondary={
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                      <Box
                        sx={{ border: 1, p: 0, bgcolor: "background.paper" }}
                      >
                        <div className={styles.Report}>
                          <Link
                            className={styles.Link}
                            underline="none"
                            color="#000"
                          >
                            Report
                          </Link>
                        </div>
                      </Box>
                    </Popper>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default Reviews;
