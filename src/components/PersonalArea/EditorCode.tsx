import Editor from "@monaco-editor/react";
import { useState } from "react";
import { Tooltip } from "antd";
import HelpAi from "./HelpAi";

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col w-full ">
            <div className="w-full flex flex-col justify-between mb-3 bg-[#212122]">
                <div>
                    <h2 className="text-orange-500 font-mono font-bold text-center text-md px-5 mt-10">
                        {task.task}
                    </h2>
                    <div className="text-slate-300 font-mono text-sm px-5 mt-5">
                        {task.description}
                    </div>
                </div>
                <div className="text-slate-300 flex items-center py-3 font-mono text-sm px-5 mt-5">
                    <span> Награда:</span>
                    <span className="text-lime-500 px-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" />
                        </svg>
                    </span>
                    <span className="text-lg">10</span>
                </div>
            </div>
            <div className="w-full">
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
                                    onClick={showModal}
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
                <HelpAi
                    isModalOpen={isModalOpen}
                    handleCancel={() => handleCancel()}
                    task={task.task}
                    description={task.description}
                />
                <div className="z-0">
                    <Editor
                        height="50vh"
                        theme="vs-dark"
                        path={files.name}
                        defaultLanguage={files.language}
                        defaultValue={files.value}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditorCode;
