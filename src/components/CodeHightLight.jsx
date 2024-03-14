import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeHighlight = ({ code }) => {
    // const formattedCode = `\t\t${code.replace(/\n/g, "\n\t\t")}`;

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
