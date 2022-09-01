import { Container } from "@mui/material";
import React from "react";
import styles from "./SliderHome.module.css";
const SliderHome = () => {
  return (
    <>
      <section>
        <Container>
          <div
            className={`${styles.rowSearch} ${styles.rowReverse} ${styles.gBackground}`}
          >
            <div className={styles.colMd6}>
              <div className={styles.innerBox}>
                <h1>New to Udemy? Lucky you</h1>
                <p>
                  courses start at E$199. Get your new student offer before it
                  expires
                </p>
              </div>
            </div>
            <div className={styles.colMd6}>
              <div className={styles.innerImage}>
                <img
                  className={styles.imgSlider}
                  src="./image.png"
                  alt="clock"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SliderHome;
