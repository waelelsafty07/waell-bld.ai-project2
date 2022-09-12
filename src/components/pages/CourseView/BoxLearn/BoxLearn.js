import { Container } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React, { useContext } from "react";
import { CoursesContext } from "../../../../contexts/coursesData/coursesContext";
import ContainerStyle from "../Heading/Heading.module.css";
import styles from "./BoxLearn.module.css";
const BoxLearn = () => {
  const data = useContext(CoursesContext);
  const dataCourse = data.dataCourse?.syllabus;
  console.log(dataCourse);
  return (
    <>
      <div className="heading-content">
        <div style={{ border: "1px solid #000", margin: "1rem 0" }}>
          <div style={{ padding: "2rem 1rem" }}>
            <h2 style={{ padding: "0 0 1rem" }}>What you'll learn</h2>
            <ul className={styles.BoxList}>
              {dataCourse?.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="List-Block">
                      <CheckIcon fontSize="small" />
                      {item}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxLearn;
