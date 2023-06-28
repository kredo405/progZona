import Editor from "@monaco-editor/react";
import { useState } from "react";
import { Tree } from "antd";
import { Tooltip } from "antd";

const { DirectoryTree } = Tree;

const EditorCode = () => {
    const [files, setFiles] = useState({
        name: "",
        language: "",
        value: "",
    });

    const treeData = [
        {
            title: "js-01",
            key: "0-0",
            children: [
                {
                    title: "index.html",
                    key: "0-0-1",
                    isLeaf: true,
                    language: "html",
                    content: `<!DOCTYPE html>
<html>
<head>
  <title>Приветствие</title>
  <script src="script.js"></script>
</head>
<body>
  <h1>Приветствие</h1>
</body>
</html>
                    `,
                },
                {
                    title: "script.js",
                    key: "0-0-2",
                    isLeaf: true,
                    language: "javascript",
                    content: `// Решение пишите здесь
                    
                    `,
                },
            ],
        },
    ];

    const onSelect = (keys, info) => {
        console.log("Trigger Select", keys, info);
        if (info.selectedNodes[0].isLeaf) {
            setFiles({
                name: info.selectedNodes[0].title,
                language: info.selectedNodes[0].language,
                value: info.selectedNodes[0].content,
            });
        }
    };
    const onExpand = (keys, info) => {
        console.log("Trigger Expand", keys, info);
    };

    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-4/12">
                <DirectoryTree
                    multiple
                    defaultExpandAll
                    onSelect={onSelect}
                    onExpand={onExpand}
                    treeData={treeData}
                    className="bg-[#1f1f1f] font-mono font-bold text-slate-200 text-sm h-full"
                />
            </div>
            <div className="w-full md:w-8/12">
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
                            <Tooltip placement="bottom" title="Запустить">
                                <button
                                    type="button"
                                    className="inline-flex mx-2 px-2 items-center bg-transparent rounded-md py-2 text-sm font-semibold text-lime-500 hover:text-lime-700"
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
                            <Tooltip placement="bottom" title="Проверить">
                                <button
                                    type="button"
                                    className="inline-flex px-2 items-center rounded-md bg-transparent py-2 text-sm font-semibold text-orange-500 hover:text-orange-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 mx-2"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <Editor
                    height="49vh"
                    theme="vs-dark"
                    path={files.name}
                    defaultLanguage={files.language}
                    defaultValue={files.value}
                />
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
