import {Link} from "react-router-dom";

const CourseCard = ({img, title, desc, level, access}) => {
    return (
        <article className="max-w-sm mx-3 mt-16 md:mt-4 shadow-lg rounded-md duration-300 hover:bg-[#33394c] bg-[#292c35]">
            <Link to="/presonalAria/themes">
                <img
                    src={img}
                    loading="lazy"
                    alt={title}
                    className="w-full h-[40%] rounded-t-md"
                />
                <div className="flex items-center h-[10%] mt-2 pt-3 ml-4 mr-2 text-slate-100 text-center">
                    Уровень:{" "}
                    <span className="text-orange-500 px-3">{level}</span>
                </div>
                <div className="pt-3 ml-4 h-[30%] mr-2 mb-3">
                    <h3 className="text-xl text-slate-100">{title}</h3>
                    <p className="text-slate-300 text-sm mt-1">{desc}</p>
                </div>
                <div className="flex justify-center h-[20%] w-full my-5 md:mr-2">
                    <span  className={access ? "text-green-500" : "text-red-500"}>{access ? "Доступен" : "Не доступен"}</span>
                </div>
            </Link>
        </article>
    );
};

export default CourseCard;



