import React, { useState } from "react";

const Accordion = ({ moduleItem, arr }) => {
    const [show, setShow] = useState(false);

    const elements = arr.map((el) => {
        return <li className="list-disc font-mono">{el}</li>;
    });

    return (
        <>
            <div
                className="flex justify-between items-center cursor-pointer hover:bg-[#33394c] bg-[#2f3446] px-10 py-5 rounded-xl w-full md:w-6/12 mt-5"
                onClick={() => setShow(!show)}
            >
                <h3 className=" font-semibold font-mono text-xl leading-5 text-slate-100">
                    {moduleItem}
                </h3>
                <span
                    aria-label="too"
                    className="cursor-pointer  bg-[#2f3446] text-slate-100"
                    onClick={() => setShow(!show)}
                >
                    {show ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    )}
                </span>
            </div>
            {show ? (
                <div className="text-slate-100 mt-4 w-full md:w-6/12 flex flex-col justify-center items-start ml-10">
                    <ul>{elements}</ul>
                </div>
            ) : null}
        </>
    );
};

export default Accordion;
