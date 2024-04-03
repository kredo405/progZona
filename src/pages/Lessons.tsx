import CodeHighlight from "../components/CodeHightLight";
import EditorCode from "../components/PersonalArea/EditorCode";
import TestResult from "../components/PersonalArea/TestResult";
import Discusions from "./Discusions";
import Lesson from "../components/PersonalArea/Lesson";
import Test from "./Test";
import { Link } from "react-router-dom";
import TopicsBar from "../components/PersonalArea/TopicsBar";
import { useState } from "react";

const Lessons = () => {
    const [finishTest, setFinishTest] = useState(false);

    const task = {
        task: "Напишите программу, которая приветствует пользователя",
        description:
            "Вам необходимо создать программу, которая приветствует пользователя в зависимости от его возраста. Если пользователь младше 18 лет, программа должна выводить сообщение 'Привет, ребенок!', а если пользователь 18 лет или старше, то сообщение должно быть 'Привет, взрослый!'.",
    };

    return (
        <>
            <div className="mt-10">
                <div className="flex">
                    <div className="w-2/12">
                        <TopicsBar />
                    </div>
                    <div className="w-10/12">
                        <Lesson />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lessons;
