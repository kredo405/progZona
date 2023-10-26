import React, { useState, useEffect, useRef } from "react";
import audio from "../assets/tests.mp3";
import { Carousel } from "antd";
import CodeHighlight from "./CodeHightLight";
import { Nav } from "../components/MainLanding/Nav";

const Example = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const carouselRef = useRef(null);
    const slideDurations = [5000, 20000, 2000, 15000];

    useEffect(() => {
        const nextSlide = (slideIndex + 1) % slideDurations.length;
        const timer = setTimeout(() => {
            if (carouselRef.current) {
                carouselRef.current.goTo(nextSlide);
            }
        }, slideDurations[slideIndex]);

        return () => {
            clearTimeout(timer);
        };
    }, [slideIndex]);

    const handleAfterChange = (currentSlideIndex) => {
        setSlideIndex(currentSlideIndex);
    };
    return (
        <div className="px-[50px] py-[30px]">
            <Carousel
                ref={carouselRef}
                afterChange={handleAfterChange}
                autoplay
                effect="fade"
                dots={false}
            >
                <div className="flex justify-center items-center bg-cyan-800 h-[50vh]">
                    <div className="flex justify-center">
                        <img
                            className="w-6/12"
                            src="https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg"
                            alt="js"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center bg-cyan-800 h-[50vh]">
                    <div className="flex justify-center items-center">
                        <div className="px-2 lg:px-56">
                            <CodeHighlight
                                code={`var age = 25;
let name = "John";
const PI = 3.14;
                                `}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center bg-cyan-800 h-[50vh]">
                    <div className="px-2 lg:px-56 flex justify-center items-center">
                        <CodeHighlight
                            code={`var age = 25;          // число
let name = "John";     // строка
const isStudent = true; // логическое значение (булево)
                                `}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center bg-cyan-800 h-[50vh]">
                    <div className="px-2 lg:px-56 flex justify-center items-center">
                        <CodeHighlight
                            code={`var x = 10 + 5; // сложение
var y = 20 - 8; // вычитание
var z = 4 * 6; // умножение
var w = 10 / 2; // деление
var isTrue = x > y; // сравнение (больше)
var isFalse = x === y; // сравнение (равенство)`}
                        />
                    </div>
                </div>
            </Carousel>

            <div className="flex justify-center mt-10">
                <audio controls autoPlay>
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};

export default Example;
