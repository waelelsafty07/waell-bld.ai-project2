import React, { useContext } from "react";
import styles from "./Instructor.module.css";
import { CoursesContext } from "../../../../contexts/coursesData/coursesContext";
import InstructorData from "./InstructorData";

const Instructors = () => {
  const data = useContext(CoursesContext);
  const dataCourse = data.dataCourse?.instructors;

  return (
    <>
      <div className="heading-content">
        <div className={styles.Component}>
          <h2>Instructor</h2>
          {dataCourse?.map((instructor) => (
            <InstructorData key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Instructors;
