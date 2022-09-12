import React from "react";
import Container from "@mui/material/Container";
import CourseCard from "./CourseCard/CourseCard";
import Grid from "@mui/material/Grid";
import CoursesHeading from "./CoursesHeading";
import { useSearchParams } from "react-router-dom";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Courses.module.css";

const GridCourses = (course) => {
  return (
    <SwiperSlide key={course.id} style={{ margin: 0 }}>
      <CourseCard
        id={course.id}
        image={course.image}
        title={course.title}
        author={course.author}
        rating={course.rating}
        price={course.price}
        people={course.people}
        syllabus={course.syllabus}
      />
    </SwiperSlide>
  );
};

const Courses = ({ courses, title, description }) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams?.get(`search`);
  const CourseDataFunc = () => {
    const coursesData = courses.map((course) => {
      if (
        searchQuery &&
        !course.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return null;
      return GridCourses(course);
    });

    return <>{coursesData}</>;
  };
  return (
    <>
      <Container
        className={styles.Container}
        sx={{ pl: 0, pr: 0 }}
        maxWidth="xl"
      >
        <CoursesHeading title={title} body={description} />
        <Grid container>
          <Swiper
            className={styles.swiperSlide}
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={0}
            // slidesPerView={1}

            navigation
            breakpoints={{
              1280: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
              },
              890: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              550: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
            }}
          >
            {CourseDataFunc()}
          </Swiper>
        </Grid>
      </Container>
    </>
  );
};

export default Courses;
