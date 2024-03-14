import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLanding from "./pages/MainLanding";
import MainCourses from "./pages/MainCourses";
import MainCourse from "./pages/MainCourse";
import Contacts from "./pages/Contacts";
import Registration from "./pages/Registration";
import Auth from "./pages/Auth";
import PersonalArea from "./pages/PersonalArea";
import MyEducation from "./components/PersonalArea/MyEducation";
import Statistic from "./components/PersonalArea/Statistic";
import AllCourse from "./components/PersonalArea/AllCourses";
import CourseLanding from "./components/PersonalArea/CourseLanding";
import Course from "./pages/Course";
import Lesson from "./pages/Lesson";
import Themes from "./pages/Themes";
import Discusions from "./pages/Discusions";
import Test from "./pages/Test";
import CodeSimulator from "./pages/CodeSimulator";
import Task from "./pages/Task";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLanding />} />
                <Route path="/courses" element={<MainCourses />} />
                <Route path="/course" element={<MainCourse />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/presonalAria" element={<PersonalArea />}>
                    <Route
                        path="/presonalAria/myEducation"
                        element={<MyEducation />}
                    />
                    <Route
                        path="/presonalAria/statistic"
                        element={<Statistic />}
                    />
                    <Route
                        path="/presonalAria/AllCourse"
                        element={<AllCourse />}
                    />
                    <Route
                        path="/presonalAria/courseLanding"
                        element={<CourseLanding />}
                    />
                    <Route path="/presonalAria/themes" element={<Themes />} />
                    <Route path="/presonalAria/task" element={<Task />} />
                    <Route
                        path="/presonalAria/codeSimulator"
                        element={<CodeSimulator />}
                    />
                    <Route path="/presonalAria/course" element={<Course />}>
                        <Route
                            path="/presonalAria/course/lesson"
                            element={<Lesson />}
                        />
                        <Route
                            path="/presonalAria/course/discusions"
                            element={<Discusions />}
                        />
                        <Route
                            path="/presonalAria/course/test"
                            element={<Test />}
                        />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
