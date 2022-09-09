import React, { useContext, useReducer } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Container } from "@mui/material";
import Courses from "../../Home/Courses/Courses";
import { CoursesContext } from "../../../contexts/coursesData/coursesContext";
import { initState, reducerCourses } from "../../../hooks/FetchCourse";

export default function LabTabs({ children, name }) {
  const data = useContext(CoursesContext);
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          {data.data.CoursesData.map((item, index) => {
            return (
              <Tab key={index} label={item.name} value={index.toString()} />
            );
          })}
        </TabList>
        {data.data.CoursesData.map((item, index) => {
          return (
            <TabPanel key={index} value={index.toString()} sx={{ p: 0 }}>
              <Courses courses={item.courses} />
            </TabPanel>
          );
        })}
      </TabContext>
    </Container>
  );
}
