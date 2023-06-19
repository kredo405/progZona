import { Nav } from "../components/MainLanding/Nav";
import Link from "antd/es/typography/Link";
import { InfoBlock } from "../components/MainLanding/InfoBlock";
import Accordion from "../components/Accordion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MainCourse = () => {
    const state = useSelector((state) => state);
    const navigate = useNavigate();

    const elemnts = state.mainCourseSlice.modules.map((el) => {
        return <Accordion moduleItem={el.title} arr={el.topics} />;
    });
    return (
        <>
            <Nav />
            <div className="lg:px-10 mt-10">
                <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-20 mb-5 md:mb-20">
                    <div className="w-full lg:w-6/12">
                        <div>
                            <h2 className="font-mono text-2xl text-slate-300 font-bold">
                                Курс
                            </h2>
                        </div>
                        <div className="flex justify-start py-5">
                            <h1 className="font-mono text-5xl lg:text-7xl text-start text-slate-100 font-bold">
                                {state.mainCourseSlice.info.title}
                            </h1>
                        </div>
                        <p className="font-mono text-lg text-slate-400 font-bold">
                            {state.mainCourseSlice.info.desc}
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
                            src={state.mainCourseSlice.info.mainImg}
                            alt="фото"
                        />
                    </div>
                </div>
                <div>
                    <InfoBlock
                        title="О курсе"
                        paragraphFirst={state.mainCourseSlice.info.paragraph1}
                        paragraphSecond={state.mainCourseSlice.info.paragraph2}
                        isRight={false}
                        image={state.mainCourseSlice.info.infoImg}
                    />
                </div>
                <div>
                    <div>
                        <h2 className="font-mono text-3xl text-slate-100 text-center px-3 py-3 font-bold mt-5 underline decoration-2 decoration-orange-600 underline-offset-8">
                            Программа
                        </h2>
                    </div>

                    <div className="flex flex-col items-center w-full px-3">
                        {elemnts}
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-20 mb-20 py-10 bg-[#292c35] rounded-lg shadow-sm mt-10">
                        <div className="w-full lg:w-6/12">
                            <p className="font-mono text-lg text-slate-200 font-bold">
                                {state.mainCourseSlice.info.lastText}
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
                                src={state.mainCourseSlice.info.lastImg}
                                alt="фото"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainCourse;
