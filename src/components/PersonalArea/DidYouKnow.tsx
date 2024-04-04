import React from "react";
import didYouKnow from "../../assets/didYouKnow.png";

interface DidYouKnowProps {
    text: string;
}

const DidYouKnow: React.FC<DidYouKnowProps> = ({ text }) => {
    return (
        <div className="w-full h-full flex flex-col lg:flex-row items-center">
            <div className="mb-3 md:mb-0">
                <img
                    className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
                    src={didYouKnow}
                    alt="developer"
                />
            </div>
            <div className="bg-[#292c35] w-full py-3 px-10 rounded-2xl">
                <h2 className="text-3xl text-orange-500 font-bold mb-4">
                    А знали ли вы?
                </h2>
                <p className="">{text}</p>
            </div>
        </div>
    );
};

export default DidYouKnow;
