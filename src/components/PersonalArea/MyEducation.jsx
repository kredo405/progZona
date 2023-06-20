import CourseCard from "./CourseCard";
import html from "../../assets/languageImgs/html.png";
import Css from "../../assets/languageImgs/css.png";
import js from "../../assets/languageImgs/js.png";
import reactImg from "../../assets/languageImgs/reactImg.png";
import nodejs from "../../assets/languageImgs/nodeImg.png";
import nest from "../../assets/languageImgs/nest.png";

const MyEducation = () => {
    return (
        <div>
            <div className="mt-10 border-b-2 border-solid border-slate-700 py-3">
                <h2 className="text-slate-100 font-mono font-bold text-4xl px-5">
                    Моё Обучение
                </h2>
            </div>
            <div className="py-5">
                <CourseCard img={html} title="HTML" />
                <CourseCard img={Css} title="CSS" />
                <CourseCard img={js} title="JavaScript" />
                <CourseCard img={reactImg} title="React" />
                <CourseCard img={nodejs} title="Node JS" />
                <CourseCard img={nest} title="Nest JS" />
            </div>
        </div>
    );
};

export default MyEducation;
