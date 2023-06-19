import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModules, setInfo } from "../../store/slices/mainCourseSlice";

const ProfessionsCard = ({ href, title, desc, img }) => {
    const dispatch = useDispatch();

    const setData = () => {};

    return (
        <li className="p-5 bg-[#292c35] rounded-md shadow-sm">
            <div>
                <div className="justify-between flex flex-col md:flex-row">
                    <div className="flex flex-col items-center w-full md:w-7/12">
                        <h3 className="text-xl font-medium text-cyan-400 font-mono">
                            {title}
                        </h3>
                        <p className="text-slate-100 mt-2 pr-2 text-center">
                            {desc}
                        </p>
                        <div className="mt-4 items-center text-sm sm:flex ">
                            <Link
                                to={href}
                                onClick={setData}
                                className="px-10 py-3 rounded-md hover:bg-orange-700  bg-orange-600 font-mono font-semibold text-slate-100"
                            >
                                Подробней
                            </Link>
                        </div>
                    </div>
                    <div className="mt-5 text-sm sm:mt-0 flex justify-center md:justify-end items-center w-full md:w-5/12">
                        <img className="w-8/12" src={img} alt="photo" />
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ProfessionsCard;
