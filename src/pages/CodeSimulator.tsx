import EditorCode from "../components/PersonalArea/EditorCode";

const CodeSimulator = () => {
    return (
        <>
            <div className="flex px-2 z-0 mt-10">
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
