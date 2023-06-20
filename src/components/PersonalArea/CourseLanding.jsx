import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { InfoBlock } from "../MainLanding/InfoBlock";

const CourseLanding = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="lg:px-10 mt-20">
                <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-20 mb-5 md:mb-20">
                    <div className="w-full lg:w-6/12">
                        <div>
                            <h2 className="font-mono text-2xl text-slate-300 font-bold">
                                Курс
                            </h2>
                        </div>
                        <div className="flex justify-start py-5">
                            <h1 className="font-mono text-5xl lg:text-7xl text-start text-slate-100 font-bold">
                                HTML
                            </h1>
                        </div>
                        <p className="font-mono text-lg text-slate-400 font-bold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequatur qui assumenda quae debitis
                            suscipit et vel fugit fugiat incidunt repellat?
                        </p>
                        <div className="items-center text-sm flex justify-center lg:justify-start mt-10">
                            <Link to="/auth">
                                <span
                                    onClick={() => navigate("/auth")}
                                    className="px-10 sm:px-20 py-5 rounded-lg hover:bg-orange-700 text-xl bg-orange-600 font-mono font-semibold text-slate-100"
                                >
                                    Начать учиться
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 mt-10 lg:mt-0 flex justify-center items-center">
                        <img
                            className="w-full"
                            src="https://kinsta.com/wp-content/uploads/2021/11/learn-html.png"
                            alt="фото"
                        />
                    </div>
                </div>
                <div>
                    <InfoBlock
                        title="О курсе"
                        paragraphFirst="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda incidunt veniam sunt quod ipsam enim harum exercitationem sequi ratione, deserunt voluptatibus nisi quia quae qui quisquam reprehenderit fugit nam dolore ipsum ex cum aspernatur vel."
                        paragraphSecond="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda incidunt veniam sunt quod ipsam enim harum exercitationem sequi ratione, deserunt voluptatibus nisi quia quae qui quisquam reprehenderit fugit nam dolore ipsum ex cum aspernatur vel."
                        isRight={true}
                        image="https://sky.pro/media/wp-content/uploads/2022/04/glavnaya-33.png"
                    />
                </div>
                <div>
                    <div>
                        <h2 className="font-mono text-3xl text-slate-100 text-center px-3 py-3 font-bold mt-5 underline decoration-2 decoration-orange-600 underline-offset-8">
                            Программа
                        </h2>
                    </div>

                    <div className="flex flex-col items-center w-full px-3 mt-10">
                        <div className="flex justify-start bg-[#282e3d] hover:bg-[#2f3955] px-3 py-5 rounded-2xl items-center mb-5">
                            <span className="text-slate-100 px-5 md:px-10">
                                1
                            </span>
                            <div>
                                <h5 className="text-slate-100 text-xl font-mono font-bold mb-5">
                                    Html теги
                                </h5>
                                <p className="text-slate-400 font-mono">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Cum, doloremque!
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-start bg-[#282e3d] hover:bg-[#2f3955] px-3 py-5 rounded-2xl items-center mb-5">
                            <span className="text-slate-100 px-5 md:px-10">
                                2
                            </span>
                            <div>
                                <h5 className="text-slate-100 text-xl font-mono font-bold mb-5">
                                    Lorem, ipsum.
                                </h5>
                                <p className="text-slate-400 font-mono">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Cum, doloremque!
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-start bg-[#282e3d] hover:bg-[#2f3955] px-3 py-5 rounded-2xl items-center mb-5">
                            <span className="text-slate-100 px-5 md:px-10">
                                3
                            </span>
                            <div>
                                <h5 className="text-slate-100 text-xl font-mono font-bold mb-5">
                                    Lorem, ipsum.
                                </h5>
                                <p className="text-slate-400 font-mono">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Cum, doloremque!
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-start bg-[#282e3d] hover:bg-[#2f3955] px-3 py-5 rounded-2xl items-center mb-5">
                            <span className="text-slate-100 px-5 md:px-10">
                                4
                            </span>
                            <div>
                                <h5 className="text-slate-100 text-xl font-mono font-bold mb-5">
                                    Lorem, ipsum.
                                </h5>
                                <p className="text-slate-400 font-mono">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Cum, doloremque!
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-start bg-[#282e3d] hover:bg-[#2f3955] px-3 py-5 rounded-2xl items-center mb-5">
                            <span className="text-slate-100 px-5 md:px-10">
                                5
                            </span>
                            <div>
                                <h5 className="text-slate-100 text-xl font-mono font-bold mb-5">
                                    Lorem, ipsum.
                                </h5>
                                <p className="text-slate-400 font-mono">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Cum, doloremque!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-20 mb-20 py-10 bg-[#292c35] rounded-lg shadow-sm mt-10">
                        <div className="w-full lg:w-6/12">
                            <p className="font-mono text-lg text-slate-200 font-bold">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Illo unde dolor optio officia
                                eaque. Non commodi velit minima dignissimos
                                expedita voluptatem similique placeat suscipit
                                odit, consequatur ex magnam accusamus! A
                                repudiandae iure, excepturi sit cupiditate,
                                voluptatem vero maxime aspernatur officiis
                                tenetur quod nostrum aliquid porro rerum animi
                                fugit hic accusantium. Quos laudantium ipsa
                                aliquid incidunt!
                            </p>
                            <div className="items-center text-sm flex justify-center lg:justify-start mt-10">
                                <Link to="/auth">
                                    <span
                                        onClick={() => navigate("/auth")}
                                        className="px-10 sm:px-20 py-5 rounded-lg hover:bg-orange-700 text-xl  bg-orange-600 font-mono font-semibold text-slate-100"
                                    >
                                        Начать учиться
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 mt-10 lg:mt-0 flex justify-center items-center">
                            <img
                                className="w-10/12"
                                src="https://timeweb.com/ru/community/article/c9/c9204788c62fc8fd3e65d0cb68456dba.jpg"
                                alt="фото"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseLanding;
