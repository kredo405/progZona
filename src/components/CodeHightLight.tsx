import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeHighlightProps {
    code: string;
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({ code }) => {
    return (
        <div className=" ">
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers={true}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeHighlight;
