import Message from "../components/PersonalArea/Message";

const Discusions = () => {
    return (
        <>
            <div>
                <div className="flex justify-center py-5">
                    <h2 className="text-slate-100 text-4xl font-mono font-bold border-b-2 border-orange-600 py-3 px-5 border-solid">
                        Обсуждение
                    </h2>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col px-2 md:px-20 overflow-y-scroll h-[70vh]">
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                    </div>
                    <div className="mt-5 flex flex-col md:flex-row justify-around items-center border-t-2 border-gray-600 py-5 border-solid px-2 md:px-20">
                        <textarea
                            placeholder="Напишите ваше сообщение"
                            className="bg-[#444851] rounded-lg text-slate-50 px-4 py-3 font-mono w-full"
                        ></textarea>
                        <div className="mx-4 mt-3 md:mt-0">
                            <button className="px-10 py-3 bg-orange-600 text-slate-200 font-mono rounded-lg">
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Discusions;
