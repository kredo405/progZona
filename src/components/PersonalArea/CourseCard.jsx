import { Link } from "react-router-dom";

const CourseCard = ({ img, title }) => {
    return (
        <div className="flex justify-around items-center md:px-10 py-5 md:mx-20 border-2 border-slate-900 border-solid rounded-3xl mt-5 bg-[#31343b]">
            <div className="flex w-5/12 md:w-7/12 items-center">
                <img className="h-20 w-20 ml-2" src={img} alt="img" />
                <h3 className="px-3 md:px-10 text-slate-100 font-semibold text-sm md:text-xl font-mono">
                    {title}
                </h3>
            </div>

            <div className="flex justify-end w-7/12  md:w-5/12 items-center mr-2">
                <Link className="py-4 px-2 md:px-3 bg-orange-600 hover:bg-orange-700 text-slate-100 text-sm md:text-base font-mono font-semibold rounded-lg">
                    Продолжить Учиться
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;