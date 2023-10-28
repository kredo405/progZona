import React from "react";
import { Nav } from "../components/MainLanding/Nav";
import Presentation from "../components/Presentation";
import audio from "../assets/tests.mp3";

const ExamplePage = () => {
    const slidesData = [
        {
            theme: "bg-slate-600 text-slate-100",
            content: <div>Слайд 1</div>,
            duration: 5000,
            audio: { audio },
        },
        {
            theme: "bg-sky-600 text-slate-100",
            content: <div>Слайд 2</div>,
            duration: 3000,
            audio: { audio },
        },
        // ... другие слайды
    ];

    return (
        <div className="flex h-[100vh] flex-col ">
            <Nav current="example" />
            <div className="flex justify-center py-10">
                <h1 className="font-bold text-3xl text-slate-200">
                    Стек и очередь
                </h1>
            </div>
            <div className="flex-1 overflow-hidden py-10">
                <Presentation />
            </div>
        </div>
    );
};

export default ExamplePage;
