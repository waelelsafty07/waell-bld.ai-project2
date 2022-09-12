import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  CoursesContext,
  CoursesProvider,
  CourseViewData,
} from "../../../contexts/coursesData/coursesContext";
import BoxLearn from "./BoxLearn/BoxLearn";
import Heading from "./Heading/Heading";
import Content from "./Content/Content";
import { Container } from "@mui/material";
import Description from "./descriptions/Description";
import Instructors from "./Instructors/Instructors";
import Feedback from "./Feedback/Feedback";
import Reviews from "./Reviews/Reviews";

const CourseView = () => {
  const { courseId } = useParams();
  const data = useContext(CoursesContext);
  const DataCourses = CourseViewData(data.courses, courseId);
  return (
    <>
      <CoursesProvider value={{ dataCourse: DataCourses }}>
        <Heading style={{ padding: 5 }} />
        <Container className="small-screen" style={{ position: "relative" }}>
          <BoxLearn />
          <Content />
          <Description />
          <Instructors />
          <Feedback />
          <Reviews />
        </Container>
      </CoursesProvider>
    </>
  );
};

export default CourseView;
