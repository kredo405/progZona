import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const tests = [
    {
        question: "Что такое HTML и для чего он используется в веб-разработке?",
        answer: [
            {
                name: "HTML - язык программирования для создания бэкэнд-серверов.",
            },
            {
                name: "HTML - язык разметки для создания структуры веб-страниц.",
            },
            {
                name: "HTML - язык для создания динамических и интерактивных элементов на веб-страницах.",
            },
        ],
        correctAnswer:
            "HTML - язык разметки для создания структуры веб-страниц.",
    },
    {
        question: "Какова основная структура HTML-документа?",
        answer: [
            {
                name: "<!DOCTYPE html>, <head>, <body>",
            },
            {
                name: "<html>, <head>, <title>, <body>",
            },
            {
                name: "<head>, <body>, <footer>",
            },
        ],
        correctAnswer: "<!DOCTYPE html>, <head>, <body>",
    },
    {
        question:
            "Какие элементы HTML отвечают за объявление типа документа, заголовок страницы и содержимое страницы?",
        answer: [
            {
                name: "<doctype>, <header>, <body>",
            },
            {
                name: "<!DOCTYPE html>, <title>, <body>",
            },
            {
                name: "<header>, <title>, <body>",
            },
        ],
        correctAnswer: "<!DOCTYPE html>, <title>, <body>",
    },
    {
        question:
            "Какие языки и технологии могут использоваться вместе с HTML для добавления стилей и интерактивности на веб-страницу?",
        answer: [
            {
                name: "CSS и JavaScript",
            },
            {
                name: "Python и PHP",
            },
            {
                name: " Ruby и C#",
            },
        ],
        correctAnswer: "CSS и JavaScript",
    },
];

const Test = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [userResponse, setUserResponse] = useState("");
    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();

    const questionCheck = () => {
        if (tests.length - 1 > questionNumber) {
            if (userResponse === tests[questionNumber].correctAnswer) {
                success();
                setQuestionNumber(questionNumber + 1);
            } else {
                error();
            }
        } else {
            navigate("/presonalAria/course/codeSimulator");
        }
    };

    const error = () => {
        messageApi.open({
            type: "error",
            content: "Неверно!!! Подумайте еще",
        });
    };

    const success = () => {
        messageApi.open({
            type: "success",
            content: "Верно!!!",
        });
    };

    return (
        <>
            <div>
                {contextHolder}
                <div className="flex justify-center  py-5">
                    <h2 className="text-slate-100 text-xl font-mono font-bold border-b-2 border-orange-600 py-3 px-5 border-solid">
                        {tests[questionNumber].question}
                    </h2>
                </div>
                <div>
                    <div className="max-w-md mx-auto px-4">
                        <ul className="mt-6 space-y-3">
                            {tests[questionNumber].answer.map((item, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => setUserResponse(item.name)}
                                >
                                    <label
                                        htmlFor={item.name}
                                        className="block relative"
                                    >
                                        <input
                                            id={item.name}
                                            type="radio"
                                            defaultChecked={
                                                idx == 1 ? true : false
                                            }
                                            name="payment"
                                            className="sr-only peer"
                                        />
                                        <div className="w-full flex gap-x-3 items-start p-4 cursor-pointer rounded-lg border border-[#353943] bg-[#353943] shadow-sm  peer-checked:ring-2 duration-200">
                                            <div>
                                                <h3 className="leading-5 text-slate-100 font-medium pr-3">
                                                    {item.name}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 flex-none flex items-center justify-center w-4 h-4 rounded-full border peer-checked:bg-indigo-600 text-white peer-checked:text-white duration-200">
                                            <svg
                                                className="w-2.5 h-2.5"
                                                viewBox="0 0 12 10"
                                            >
                                                <polyline
                                                    fill="none"
                                                    stroke-width="2px"
                                                    stroke="currentColor"
                                                    stroke-dasharray="16px"
                                                    points="1.5 6 4.5 9 10.5 1"
                                                ></polyline>
                                            </svg>
                                        </div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center py-10">
                    <button
                        onClick={questionCheck}
                        className="px-20 py-4 bg-orange-500 hover:bg-orange-600 text-slate-100 font-mono font-semibold rounded-xl"
                    >
                        Далее
                    </button>
                </div>
            </div>
        </>
    );
};

export default Test;
