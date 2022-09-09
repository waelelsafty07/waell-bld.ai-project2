import { Rating } from "@mui/material";
import React from "react";
import styles from "./Feedback.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.mode === "light" ? "#6a6f73" : "#308fe8",
  },
}));
const Feedback = () => {
  return (
    <>
      <div className="heading-content">
        <div className={styles.Component}>
          <h2>Student feedback</h2>
          <div className={styles.Feedback}>
            <div className={styles.ratingStar}>
              <div>
                <span
                  className={styles.ratingStar}
                  style={{ fontSize: "4rem" }}
                >
                  4.4
                </span>
                <Rating
                  name="half-rating"
                  defaultValue={4.4}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </div>
            </div>
            <div className={styles.LinearProgress}>
              <div>
                <BorderLinearProgress variant="determinate" value={43} />
                <Rating
                  name="half-rating"
                  defaultValue={5}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span>43%</span>
              </div>
              <div>
                <BorderLinearProgress variant="determinate" value={37} />
                <Rating
                  name="half-rating"
                  defaultValue={4}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span>37%</span>
              </div>
              <div>
                <BorderLinearProgress variant="determinate" value={15} />
                <Rating
                  name="half-rating"
                  defaultValue={3}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span>50%</span>
              </div>
              <div>
                <BorderLinearProgress variant="determinate" value={3} />
                <Rating
                  name="half-rating"
                  defaultValue={2}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span>50%</span>
              </div>
              <div>
                <BorderLinearProgress variant="determinate" value={2} />
                <Rating
                  name="half-rating"
                  defaultValue={1}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span>50%</span>
              </div>
            </div>
            <div className={styles.stars}>
              {/* <div>
                <Rating
                  name="half-rating"
                  defaultValue={4.4}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span>50%</span>
              </div>
              <div>
                <Rating
                  name="half-rating"
                  defaultValue={4.4}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span>50%</span>
              </div>
              <div>
                <Rating
                  name="half-rating"
                  defaultValue={4.4}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span>50%</span>
              </div>
              <div>
                <Rating
                  name="half-rating"
                  defaultValue={4.4}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <span>50%</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
