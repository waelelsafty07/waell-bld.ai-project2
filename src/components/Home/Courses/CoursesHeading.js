import React from "react";
import styles from "./Courses.module.css";

const CoursesHeading = ({ title, body, btn }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>
        <p className={styles.paragraph}>{body}</p>
      </div>
      <button className={styles.btnCourses}>Explore {btn}</button>
    </>
  );
};

export default CoursesHeading;
