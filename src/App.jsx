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
                </Route>
            </Routes>
        </div>
    );
}

export default App;
