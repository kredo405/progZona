import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLanding from "./pages/MainLanding";
import MainCourses from "./pages/MainCourses";
import Contacts from "./pages/Contacts";
import Registration from "./pages/Registration";
import Auth from "./pages/Auth";
import PersonalArea from "./pages/PersonalArea";
import MyEducation from "./components/PersonalArea/MyEducation";
import Statistic from "./components/PersonalArea/Statistic";
import Course from "./pages/Course";
import Lessons from "./pages/Lessons";
import Discusions from "./pages/Discusions";
import Test from "./pages/Test";
import DialogLeson from "./pages/DialogLeson";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLanding />} />
                <Route path="/courses" element={<MainCourses />} />
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
                        path="/presonalAria/dialogLesson"
                        element={<DialogLeson />}
                    />
                    <Route path="/presonalAria/lessons" element={<Lessons />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
