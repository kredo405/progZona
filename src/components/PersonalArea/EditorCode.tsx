import Editor from "@monaco-editor/react";
import { useState } from "react";
import { Tooltip } from "antd";

type EditorCodeProps = {
    task: string;
    description: string;
};

const EditorCode = (task: EditorCodeProps) => {
    const [files, setFiles] = useState({
        name: "index.cs",
        language: "csharp",
        value: `using System;

        class Program
        {
            static void Main()
            {
                Console.Write("Введите ваш возраст: ");
                int age = Convert.ToInt32(Console.ReadLine());
        
                if (age < 18)
                {
                    Console.WriteLine("Привет, ребенок!");
                }
                else
                {
                    Console.WriteLine("Привет, взрослый!");
                }
            }
        }`,
    });

    return (
        <div className="flex flex-col md:flex-row w-full bg-[#212122]">
            <div className="w-full md:w-3/12">
                <h2 className="text-orange-500 font-mono font-bold text-center text-md px-5 mt-10">
                    {task.task}
                </h2>
                <div className="text-slate-300 font-mono text-sm px-5 mt-5">
                    {task.description}
                </div>
            </div>
            <div className="w-full md:w-9/12">
                <div className="flex justify-between bg-[#1a1d25] w-full">
                    <button className="text-slate-50 border-r-2 border-solid border-slate-800 px-4 py-3">
                        {files.name}
                    </button>
                    <div className="flex justify-end">
                        <div
                            style={{
                                marginLeft: 70,
                                clear: "both",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <Tooltip placement="bottom" title="Проверить">
                                <button
                                    type="button"
                                    className="inline-flex px-2 items-center bg-transparent rounded-md py-2 text-sm font-semibold text-lime-500 hover:text-lime-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 mx-2"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </Tooltip>
                            <Tooltip placement="bottom" title="Помощь ИИ">
                                <button
                                    type="button"
                                    className="inline-flex mr-5 px-2 items-center rounded-md bg-transparent py-2 text-sm font-semibold text-sky-500 hover:text-sky-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M19.449 8.448 16.388 11a4.52 4.52 0 0 1 0 2.002l3.061 2.55a8.275 8.275 0 0 0 0-7.103ZM15.552 19.45 13 16.388a4.52 4.52 0 0 1-2.002 0l-2.55 3.061a8.275 8.275 0 0 0 7.103 0ZM4.55 15.552 7.612 13a4.52 4.52 0 0 1 0-2.002L4.551 8.45a8.275 8.275 0 0 0 0 7.103ZM8.448 4.55 11 7.612a4.52 4.52 0 0 1 2.002 0l2.55-3.061a8.275 8.275 0 0 0-7.103 0Zm8.657-.86a9.776 9.776 0 0 1 1.79 1.415 9.776 9.776 0 0 1 1.414 1.788 9.764 9.764 0 0 1 0 10.211 9.777 9.777 0 0 1-1.415 1.79 9.777 9.777 0 0 1-1.788 1.414 9.764 9.764 0 0 1-10.212 0 9.776 9.776 0 0 1-1.788-1.415 9.776 9.776 0 0 1-1.415-1.788 9.764 9.764 0 0 1 0-10.212 9.774 9.774 0 0 1 1.415-1.788A9.774 9.774 0 0 1 6.894 3.69a9.764 9.764 0 0 1 10.211 0ZM14.121 9.88a2.985 2.985 0 0 0-1.11-.704 3.015 3.015 0 0 0-2.022 0 2.985 2.985 0 0 0-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 0 0 0 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 0 0 1.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 0 0 0-2.022 2.985 2.985 0 0 0-.704-1.11Z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="z-0">
                    <Editor
                        height="50vh"
                        theme="vs-dark"
                        path={files.name}
                        defaultLanguage={files.language}
                        defaultValue={files.value}
                    />
                </div>
                <div className="w-full">
                    <div className="border-y-2 px-3 border-[#2d2d2d] border-solid flex justify-start items-center bg-[#202020] mx-0  w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-slate-100"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <span className="px-5 font-bold py-2 bg-[#202020] text-slate-100">
                            Вывод:
                        </span>
                    </div>
                    <div className="w-full px-3 h-[20vh] bg-[#202020] text-slate-100 mx-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-slate-100"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorCode;
