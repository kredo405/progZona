import React from "react";
import { Nav } from "../components/MainLanding/Nav";
import Example from "../components/Example";

const ExamplePage = () => {
    return (
        <div className="flex h-[100vh] flex-col ">
            <Nav current="example" />
            <div className="flex justify-center py-10">
                <h1 className="font-bold text-3xl text-slate-200">
                    Введение в JavaScript
                </h1>
            </div>
            <div className="flex-1 overflow-hidden py-10">
                <Example />
            </div>
        </div>
    );
};

export default ExamplePage;
