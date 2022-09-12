import React, { useContext, useState } from "react";
import styles from "./Description.module.css";
import CircleIcon from "@mui/icons-material/Circle";
import { CoursesContext } from "../../../../contexts/coursesData/coursesContext";
import MuiMarkdown from "mui-markdown";
const Description = () => {
  const [isActive, setIsActive] = useState(false);
  const data = useContext(CoursesContext);
  const dataCourse = data.dataCourse;
  const onClickHandler = (e) => {
    e.preventDefault();
    setIsActive((current) => !current);
  };
  return (
    <>
      <div className="heading-content">
        <div className={styles.Component}>
          <h2>Requirements</h2>
          <ul style={{ marginTop: "1rem" }}>
            {dataCourse?.requirements?.map((item, index) => (
              <li key={index}>
                <div>
                  <CircleIcon
                    fontSize="small"
                    sx={{ fontSize: "10px", minHeight: "2rem" }}
                  />
                  <div className={styles.Text} style={{ minHeight: "2rem" }}>
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.Component}>
          <h2>Description</h2>
          <div
            className={isActive ? styles.IsActive : styles.Description}
            style={{}}
          >
            <MuiMarkdown>{dataCourse?.description}</MuiMarkdown>
          </div>
          <button className={styles.showMore} onClick={onClickHandler}>
            {!isActive ? "Show more" : "Show less"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Description;
