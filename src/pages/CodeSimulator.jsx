import { useSelector } from "react-redux";
import { useState } from "react";
import EditorCode from "../components/PersonalArea/EditorCode";

const CodeSimulator = () => {
    const state = useSelector((state) => state);
    const [content, setContent] = useState("");

    return (
        <>
            <div className="flex px-2 z-0 mt-10">
                {/* <div className="w-full md:w-3/6 flex flex-col border-r-2 border-none border-zinc-900 dark:border-slate-700 lg:border-solid">
                    <div className="flex justify-center">
                        <h1 className="font-serif text-center text-slate-100 text-2xl font-bold">
                            {task.task}
                        </h1>
                    </div>
                    <div className="mt-1 flex flex-col items-center justify-center sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-slate-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-10 h-10 px-2 text-slate-100"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Кол-во решений: 10
                        </div>
                        <div className="mt-2 flex items-center text-sm text-slate-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-10 h-10 px-2 text-slate-100"
                            >
                                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                            </svg>
                            Сложность: {task.complexity}
                        </div>
                    </div>
                    <div className="flex flex-col mt-2  md:mt-5">
                        <h3 className="text-orange-500 font-mono font-semibold text-lg mt-2 md:mt-10 text-center py-4">
                            Описание
                        </h3>
                        <p className="text-slate-200 font-mono">
                            {task.description}
                        </p>
                    </div>
                </div> */}

                <div className="w-full mt-5 md:mt-2">
                    <div className="flex justify-center flex-col items-center">
                        <EditorCode />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CodeSimulator;
