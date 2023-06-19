import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";
import js from "../../assets/languageImgs/js.png";
import htm from "../../assets/languageImgs/html.png";
import css from "../../assets/languageImgs/css.png";
import reactImg from "../../assets/languageImgs/reactImg.png";
import reduxImg from "../../assets/languageImgs/reduxImg.png";
import vue from "../../assets/languageImgs/vue.png";
import webpackImg from "../../assets/languageImgs/webpackImg.png";
import tailwindImg from "../../assets/languageImgs/tailwindImg.png";
import nodeImg from "../../assets/languageImgs/nodeImg.png";
import nest from "../../assets/languageImgs/nest.png";
import mongo from "../../assets/languageImgs/mongo.png";
import redis from "../../assets/languageImgs/redis.png";
import typescript from "../../assets/languageImgs/typescript.png";
import Kubernetes from "../../assets/languageImgs/Kubernetes.png";
import rabbitmq from "../../assets/languageImgs/rabbitmq.png";
import PostgreSQL from "../../assets/languageImgs/PostgreSQL.png";
import PHP from "../../assets/languageImgs/PHP.png";
import mysql from "../../assets/languageImgs/mysql.png";
import laravel from "../../assets/languageImgs/laravel.png";
import WordPress from "../../assets/languageImgs/WordPress.png";
import "../../assets/swiper.css";

export const SliderMain = () => {
    return (
        <div className="px-16 rounded-xl border-2 border-gray-800 mx-5 bg-[#292c35] mt-10 py-10">
            <div className="mb-10 flex justify-center">
                <h2 className="font-mono text-3xl text-slate-100 text-center px-10 py-3 font-bold mt-5 underline decoration-2 decoration-orange-600 underline-offset-8">
                    Какие технологии вы изучите
                </h2>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                spaceBetween={50}
                loop={true}
                slidesPerView={window.innerWidth > 768 ? 3 : 1}
                pagination={{
                    dynamicBullets: true,
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={htm}
                                alt="HTML"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                HTML
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Язык разметки для создания веб-страниц.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={css}
                                alt="CSS"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                CSS
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Язык стилей для задания внешнего вида
                                веб-страниц.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={js}
                                alt="JavaScript"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                JavaScript
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Язык программирования для создания интерактивных
                                веб-сайтов.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={reactImg}
                                alt="React"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                React
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                JavaScript-библиотека для создания
                                пользовательских интерфейсов.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={reduxImg}
                                alt="Redux"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                Redux
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Библиотека для управления состоянием приложения
                                в JavaScript.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={vue}
                                alt="Vue "
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                Vue
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Прогрессивный JavaScript-фреймворк для создания
                                пользовательских интерфейсов.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={webpackImg}
                                alt="Webpack"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                Webpack
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Сборщик модулей JavaScript и статических
                                ресурсов.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={tailwindImg}
                                alt="Tailwind CSS"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                Tailwind CSS
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                CSS-фреймворк для быстрого создания
                                пользовательского интерфейса.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5 font-mono">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={nodeImg}
                                alt="Node.js"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                Node.js
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Среда выполнения JavaScript на сервере.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={nest}
                                alt="NestJS"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                NestJS
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Прогрессивный фреймворк для создания
                                масштабируемых веб-приложений на Node.js.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={mongo}
                                alt="mongo"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                MongoDB
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Документоориентированная NoSQL база данных.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={redis}
                                alt="redis"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                Redis
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                In-memory база данных с открытым исходным кодом.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={typescript}
                                alt="typescript"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                TypeScript
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Язык программирования, который является
                                надмножеством JavaScript.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={Kubernetes}
                                alt="Kubernetes"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                Kubernetes
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Оркестратор контейнеров для автоматизации
                                развертывания и управления приложениями.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={rabbitmq}
                                alt="rabbitmq"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                RabbitMQ
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Программное обеспечение для обмена сообщениями
                                по протоколу AMQP.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={PostgreSQL}
                                alt="PostgreSQL"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                PostgreSQL
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                База данных с открытым исходным кодом.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={PHP}
                                alt="PHP"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                PHP
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Серверный язык программирования для создания
                                динамических веб-страниц.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={mysql}
                                alt="mysql"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                MySQL
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                Реляционная база данных с открытым исходным
                                кодом.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={laravel}
                                alt="laravel"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                Laravel
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                MVC-фреймворк для разработки веб-приложений на
                                PHP.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center mx-2 mb-5">
                        <div className="h-6/12 flex justify-center">
                            <img
                                className="w-[100px] h-[100px]"
                                src={WordPress}
                                alt="WordPress"
                            />
                        </div>
                        <div className="h-6/12 py-3">
                            <h3 className="text-center text-slate-100 text-lg font-mono">
                                WordPress
                            </h3>
                            <p className="text-slate-200 text-center px-5 text-xs font-mono">
                                CMS (система управления контентом) для создания
                                и управления веб-сайтами.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
