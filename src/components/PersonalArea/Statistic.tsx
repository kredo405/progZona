

const Statistic = () => {
    const stats = [
        {
            data: "0",
            title: "Курсов",
        },
        {
            data: "0",
            title: "Испытаний",
        },
        {
            data: "0%",
            title: "Решено",
        },
        {
            data: "0",
            title: "баллов",
        },
    ];

    return (
        <>
            <section>
                <div className="flex mt-10 border-b-2 border-solid border-slate-700 py-3">
                    <h2 className="text-slate-100 font-mono font-bold text-4xl px-5">
                        Моя статистика
                    </h2>
                </div>
                <div className="max-w-screen-xl mx-auto mt-20 px-4 md:px-8 ">
                    <ul className="flex flex-col items-center justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
                        {stats.map((item, idx) => (
                            <li key={idx} className="text-center">
                                <h4 className="text-4xl text-slate-100 font-mono font-semibold">
                                    {item.data}
                                </h4>
                                <p className="mt-3 text-slate-300 font-mono font-medium">
                                    {item.title}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-slate-100 md:flex justify-center w-full mt-10 hidden">
                </div>
            </section>
        </>
    );
};

export default Statistic;
