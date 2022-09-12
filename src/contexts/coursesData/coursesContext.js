import React from "react";

export const CoursesContext = React.createContext();

const CoursesProvider = CoursesContext.Provider;

const CourseViewData = (Courses, id) => {
  let l = 0,
    r = Courses.length - 1;
  while (l <= r) {
    let mid = Math.round(l + (r - l) / 2);
    if (Courses[mid].id === parseInt(id, 10)) return Courses[mid];
    else if (Courses[mid].id < parseInt(id, 10)) l = mid + 1;
    else r = mid - 1;
  }
};
export { CoursesProvider, CourseViewData };
