import React, { useState } from "react";
import { message } from "antd";

interface TestProps {
    setFinishTest?: (value: boolean) => void;
}

const tests = [
    {
        question:
            "Какой оператор используется для проверки равенства значений и типов в JavaScript?",
        answer: [
            {
                name: "==",
            },
            {
                name: "===",
            },
            {
                name: "=",
            },
            {
                name: "!=",
            },
        ],
        correctAnswer: "===",
    },
    {
        question:
            "Какой оператор используется для объединения двух или более условий в одном выражении?",
        answer: [
            {
                name: "|| (логическое 'или')",
            },
            {
                name: "&& (логическое 'и')",
            },
            {
                name: "! (логическое 'не')",
            },
            {
                name: "= (оператор присваивания)",
            },
        ],
        correctAnswer: "&& (логическое 'и')",
    },
    {
        question:
            "Какой будет результат выполнения следующего кода: var x = 10; var y = '10'; console.log(x == y);?",
        answer: [
            {
                name: "true",
            },
            {
                name: "false",
            },
            {
                name: "NaN",
            },
            {
                name: "Ошибка выполнения",
            },
        ],
        correctAnswer: "true",
    },
];


const Test: React.FC<TestProps>  = ({ setFinishTest }) => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [userResponse, setUserResponse] = useState<string>(
        tests[questionNumber].answer[0].name
    );
    const [selectedPayment, setSelectedPayment] = useState<number>(0);
    const [messageApi, contextHolder] = message.useMessage();

    const questionCheck = () => {
        if (tests.length - 1 > questionNumber) {
            if (userResponse === tests[questionNumber].correctAnswer) {
                success();
                setQuestionNumber(questionNumber + 1);
                setUserResponse(tests[questionNumber + 1].answer[0].name);
                setSelectedPayment(0);
            } else {
                error();
            }
        } else {
            if (setFinishTest) {
                setFinishTest(true);
            }
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

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPayment(Number(e.target.value));
    };

    return (
        <>
            <div>
                <h2 className="text-slate-100 font-bold text-2xl text-center py-5">
                    Тест
                </h2>
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
                                            checked={selectedPayment === idx}
                                            onChange={handlePaymentChange}
                                            value={idx}
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
                        className="px-20 py-4 bg-sky-500 hover:bg-sky-600 text-slate-100 font-mono font-semibold rounded-xl"
                    >
                        Далее
                    </button>
                </div>
            </div>
        </>
    );
};

export default Test;
