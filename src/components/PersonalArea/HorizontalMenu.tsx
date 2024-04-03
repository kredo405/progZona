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
        <div className="flex z-20 justify-between bg-[#1f222b] w-full fixed">
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
                <div className="flex justify-center items-center p-2 hover:bg-[#353943] rounded-lg">
                    <span className=" text-lime-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" />
                        </svg>
                    </span>
                    <span className="text-slate-100 font-mono font-bold px-3">
                        24
                    </span>
                </div>
                <div className=" flex justify-end items-center h-full">
                    <div className="flex justify-end items-center px-2 h-full">
                        <Link
                            className="flex justify-center items-center hover:bg-[#33394c] rounded-xl p-2"
                            to="/presonalAria/statistic"
                        >
                            <Avatar size={44} icon={<UserOutlined />} />
                            <h3 className="text-slate-100 hidden md:block font-mono font-bold px-3">
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
