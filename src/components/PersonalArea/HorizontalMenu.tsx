import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../../store/slices/verticalMenuSlice";
import { VerticalMenuState } from "../../store/slices/verticalMenuSlice";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Tooltip } from "antd";
import logo from "../../assets/logo.png";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const HorizontalMenu = () => {
    const state = useSelector((state: VerticalMenuState) => state); // Correcting the usage of useSelector
    const dispatch = useDispatch();

    return (
        <div className="flex z-10 justify-between bg-[#1f222b] w-full fixed">
            <div className="text-slate-100 w-2/12 md:w-6/12 flex justify-start items-center px-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                    onClick={
                        () => dispatch(setShow(!state.show)) // Accessing 'show' directly from 'state'
                    }
                >
                    <path
                        fillRule="evenodd" // Fixing the attribute name
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clipRule="evenodd" // Fixing the attribute name
                    />
                </svg>
            </div>

            <div className="h-16 w-2/12 flex justify-center items-center">
                <Link to="/" className="flex justify-center items-center">
                    <img className="w-full md:w-6/12" src={logo} alt="logo" />
                </Link>
            </div>
            <div className="h-16 w-10/12 md:w-6/12 flex justify-end items-center pr-5 md:pr-2">
                <div className=" flex justify-end items-center h-full">
                    <div className="flex justify-end items-center px-2 h-full">
                        <Link
                            className="flex justify-center items-center hover:bg-[#33394c] rounded-xl p-2"
                            to="/presonalAria/statistic"
                        >
                            <Avatar size={44} icon={<UserOutlined />} />
                            <h3 className="text-slate-100 font-mono font-bold px-3">
                                Илона Маскова
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalMenu;
