import Editor from "@monaco-editor/react";
import { useState } from "react";

const files = {
    "index.html": {
        name: "index.html",
        language: "html",
        value: `<!DOCTYPE html>
        <html>
          <head>
            <title></title>
          </head>
          <body>
            <h1></h1>
            <p></p>
          </body>
        </html>`,
    },
    "Main.js": {
        name: "Main.js",
        language: "javascript",
        value: `
const body = document.querySelector('body')
        `,
    },
    "style.css": {
        name: "style.css",
        language: "css",
        value: `.body {
    margin: 0;
    padding: 0;
}`,
    },
};

const EditorCode = () => {
    const [fileName, setFileName] = useState("index.html");

    const file = files[fileName];

    return (
        <>
            <div className="flex bg-[#1a1d25] w-full">
                <button
                    disabled={fileName === "Main.js"}
                    onClick={() => setFileName("Main.js")}
                    className="text-slate-50 border-r-2 border-solid border-slate-500 px-4 py-3"
                >
                    Main.js
                </button>
                <button
                    disabled={fileName === "style.css"}
                    onClick={() => setFileName("style.css")}
                    className="text-slate-50 border-r-2 border-solid border-slate-500 px-4 py-3"
                >
                    style.css
                </button>
                <button
                    disabled={fileName === "index.html"}
                    onClick={() => setFileName("index.html")}
                    className="text-slate-50 border-r-2 border-solid border-slate-500 px-4 py-3"
                >
                    index.html
                </button>
            </div>
            <Editor
                height="49vh"
                theme="vs-dark"
                path={file.name}
                defaultLanguage={file.language}
                defaultValue={file.value}
            />
        </>
    );
};

export default EditorCode;
