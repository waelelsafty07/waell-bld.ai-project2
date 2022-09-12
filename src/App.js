import NavBar from "./components/Global/NavBar/NavBar";
import Home from "./components/Home/Home";
import CourseView from "./components/pages/CourseView/CourseView";
import { CoursesProvider } from "./contexts/coursesData/coursesContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import { useEffectApi } from "./hooks/FetchCourse";
import Spinner from "./components/Global/Spinner/Spinner";
import Footer from "./components/Global/Footer/Footer";
const App = () => {
  const state = useEffectApi();
  const renderFetchResult = () => {
    if (state.IsLoading) {
      return <Spinner />;
    } else if (state.Error) {
      return <div>{state.Error}</div>;
    } else {
      return (
        <BrowserRouter>
          <NavBar />
          <CoursesProvider value={{ data: state, courses: state.Courses }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses/:courseId" element={<CourseView />} />
              <Route path="*" element={<h2>404</h2>} />
            </Routes>
          </CoursesProvider>
          <Footer />
        </BrowserRouter>
      );
    }
  };
  return <>{renderFetchResult()}</>;
};

export default App;
