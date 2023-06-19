import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModules, setInfo } from "../../store/slices/mainCourseSlice";
import { getDataMainCourseHtml } from "../../data/mainCourseHtml";
import { getDataMainCourseCSS } from "../../data/mainCourseCss";
import { getDataMainCourseJavaScript } from "../../data/mainCoursesJS";
import { getDataMainCourseReact } from "../../data/mainCourseReact";

const CourseCard = ({ href, img, title, desc, level }) => {
    const dispatch = useDispatch();

    const setData = () => {
        if (title === "HTML") {
            dispatch(setModules(getDataMainCourseHtml().modules));
            dispatch(setInfo(getDataMainCourseHtml().info));
        }
        if (title === "CSS") {
            dispatch(setModules(getDataMainCourseCSS().modules));
            dispatch(setInfo(getDataMainCourseCSS().info));
        }
        if (title === "JavaScript") {
            dispatch(setModules(getDataMainCourseJavaScript().modules));
            dispatch(setInfo(getDataMainCourseJavaScript().info));
        }
        if (title === "React") {
            dispatch(setModules(getDataMainCourseReact().modules));
            dispatch(setInfo(getDataMainCourseReact().info));
        }
    };
    return (
        <article className="max-w-md mx-3 mt-4 shadow-lg rounded-md duration-300 hover:bg-[#33394c] bg-[#292c35]">
            <Link to={href} onClick={setData}>
                <img
                    src={img}
                    loading="lazy"
                    alt={title}
                    className="w-full h-48 rounded-t-md"
                />
                <div className="flex items-center mt-2 pt-3 ml-4 mr-2 text-slate-100 text-center">
                    Уровень:{" "}
                    <span className="text-orange-500 px-3">{level}</span>
                </div>
                <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl text-slate-100">{title}</h3>
                    <p className="text-slate-300 text-sm mt-1">{desc}</p>
                </div>
            </Link>
        </article>
    );
};

export default CourseCard;
