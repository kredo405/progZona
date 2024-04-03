import { useSelector, useDispatch } from "react-redux";
import Lesson from "../components/PersonalArea/Lesson";
import TopicsBar from "../components/PersonalArea/TopicsBar";
import { useState } from "react";
import { RootState } from "../store";
import DialogLeson from "./DialogLeson";

const Lessons = () => {
    const state = useSelector((state: RootState) => state.lessonSlice);

    const task = {
        task: "Напишите программу, которая приветствует пользователя",
        description:
            "Вам необходимо создать программу, которая приветствует пользователя в зависимости от его возраста. Если пользователь младше 18 лет, программа должна выводить сообщение 'Привет, ребенок!', а если пользователь 18 лет или старше, то сообщение должно быть 'Привет, взрослый!'.",
    };

    return (
        <>
            <div className="mt-14">
                <div className="flex">
                    <div className=" z-30">
                        <TopicsBar />
                    </div>
                    <div className="w-full px-2 z-0">
                        {state.finishDialog ? <Lesson /> : <DialogLeson />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lessons;
