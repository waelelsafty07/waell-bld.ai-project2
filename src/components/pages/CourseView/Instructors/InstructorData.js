import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import styles from "./Instructor.module.css";
const InstructorData = ({ instructor }) => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = (e) => {
    e.preventDefault();
    setIsActive((current) => !current);
  };
  return (
    <>
      <div className={styles.Instructor} style={{ marginTop: "1rem" }}>
        <div className={styles.Title}>
          <Link to="/">{instructor.name}</Link>
        </div>
        <div className={styles.Job}>
          <p>{instructor.job}</p>
        </div>
        <div className={styles.Avatar}>
          <Avatar
            alt={instructor.name}
            src={instructor.img}
            sx={{ width: "9.2rem", height: "9.2rem" }}
          />
          <ul>
            <li>
              <div className={styles.Icon}>
                <StarIcon fontSize="small" />
                {instructor.rating} Instructor Rating
              </div>
            </li>
            <li>
              <div className={styles.Icon}>
                <WorkspacePremiumIcon fontSize="small" />
                {instructor.reviews} Reviews
              </div>
            </li>
            <li>
              <div className={styles.Icon}>
                <PeopleAltIcon fontSize="small" />
                {instructor.students} Students
              </div>
            </li>
            <li>
              <div className={styles.Icon}>
                <PlayCircleFilledIcon fontSize="small" />
                {instructor.courses} Courses
              </div>
            </li>
          </ul>
        </div>
        <div className={isActive ? styles.IsActive : styles.Description}>
          <p>{instructor.description}</p>
        </div>
        <button className={styles.showMore} onClick={onClickHandler}>
          {!isActive ? "Show more" : "Show less"}
        </button>
      </div>
    </>
  );
};

export default InstructorData;
