export const InfoBlock = ({
    title,
    paragraphFirst,
    paragraphSecond,
    isRight,
    image,
}) => {
    return (
        <div className="rounded-xl border-2 border-gray-800 mx-5 bg-[#292c35] mt-10">
            {isRight ? (
                <div className="flex flex-col lg:flex-row justify-evenly mt-10">
                    <div className="w-full mt-3 lg:mt-0 lg:w-6/12 flex justify-center items-center">
                        <img
                            className="w-full h-3/12"
                            src={image}
                            alt="photo"
                        />
                    </div>
                    <div className="w-full lg:w-5/12 flex flex-col">
                        <h2 className="font-mono text-3xl text-slate-100 text-center px-3 py-3 font-bold mt-5 underline decoration-2 decoration-orange-600 underline-offset-8">
                            {title}
                        </h2>
                        <p className="pl-4 py-2 text-lg text-slate-100 font-mono lg:text-start">
                            {paragraphFirst}
                        </p>
                        <p className="px-4 py-2 text-xl text-slate-100 font-mono lg:text-start">
                            {paragraphSecond}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex  flex-col lg:flex-row justify-evenly mt-10">
                    <div className="w-full lg:w-5/12 flex flex-col">
                        <h2 className="font-mono text-3xl text-slate-100 text-center px-3 py-3 font-bold mt-5 underline decoration-2 decoration-orange-600 underline-offset-8">
                            {title}
                        </h2>
                        <p className="pl-4 py-2 text-lg text-slate-100 font-mono lg:text-start">
                            {paragraphFirst}
                        </p>
                        <p className="px-4 py-2 text-xl text-slate-100 font-mono lg:text-start">
                            {paragraphSecond}
                        </p>
                    </div>
                    <div className="w-full mt-3 lg:mt-0 lg:w-6/12 flex justify-center items-center">
                        <img src={image} alt="photo" />
                    </div>
                </div>
            )}
        </div>
    );
};
