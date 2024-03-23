import { Image } from "antd";
import Achievement from "./Achievement";
import React from "react";

const Statistic: React.FC = () => {
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
                        Кабинет
                    </h2>
                </div>
                <div className="flex">
                    <div className="w-full flex justify-start mt-20 px-32 flex-wrap lg:flex-nowrap">
                        <Image
                            width={200}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMJxDdU2XYmsdsfjdtO2YT1P0_5BUuQanwZE1-qpnXg&s"
                        />
                        <div className="flex flex-col">
                            <h2 className="text-slate-100 font-mono font-bold text-2xl px-10">
                                Илона Маскова
                            </h2>
                            <h3 className="text-orange-500 font-mono font-bold text-2xl px-10 mt-10 animate-bounce animate-pulse animate-ping">
                                Уровень 1
                            </h3>
                        </div>
                        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10 lg:mt-0">
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
                    </div>
                </div>

                <div className=" mt-10">
                    <h2 className="text-slate-100 font-mono font-bold text-4xl text-center">
                        Достижения
                    </h2>
                    <div className="flex sm:justify-center gap-x-12 gap-y-10 flex-wrap mt-20">
                        <Achievement
                            image="https://tse1.mm.bing.net/th/id/OIG4.Sok6Gpu.VSVvyLsKAnh7?pid=ImgGn"
                            title="Начинающий кодер"
                            desc="Значок, который получают все новые пользователи при регистрации"
                        />
                        <Achievement
                            image="https://tse3.mm.bing.net/th/id/OIG4.FCr5NMRAUlw9VPClHE3W?pid=ImgGn"
                            title="Первый код"
                            desc="Значок за написание и успешное выполнение первой программы"
                        />
                        <Achievement
                            image="https://w7.pngwing.com/pngs/453/90/png-transparent-achievement-awards-badge-programmer-css-badges-achievements-solid-icon.png"
                            title="Мастер алгоритмов"
                            desc="Значок за успешное решение задач на алгоритмы"
                        />
                        <Achievement
                            image="https://tse1.mm.bing.net/th/id/OIG4.UFpJtWppjJpBBpqjlIzQ?pid=ImgGn"
                            title="Ментор"
                            desc="Значок за помощь другим пользователям в решении их проблем с кодом"
                        />
                        <Achievement
                            image="https://tse4.mm.bing.net/th/id/OIG4.f_g7cGHutbzzCvojFyx_?pid=ImgGn"
                            title="Бессонная ночь"
                            desc="Значок за кодирование в ночное время"
                        />
                        <Achievement
                            image="https://tse1.mm.bing.net/th/id/OIG4.PqrK2HhlyNejzCPM6vK4?pid=ImgGn"
                            title="Марафонец"
                            desc="Значок за кодирование определенное количество часов без перерыва"
                        />
                        <Achievement
                            image="https://tse2.mm.bing.net/th/id/OIG4.D.iNz1qsrNnac.VrDoK0?pid=ImgGn"
                            title="Легенда кодирования"
                            desc="Этот значок получают те, кто достиг определенного уровня мастерства в программировании"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Statistic;
