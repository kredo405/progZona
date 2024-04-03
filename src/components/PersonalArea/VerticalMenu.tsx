import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShow } from "../../store/slices/verticalMenuSlice";
import { RootState } from "../../store";
import logo from "../../assets/logo.png";
import logoMin from "../../assets/logoMin.png";

const VerticalMenu = () => {
    const [isHovered, setIsHovered] = useState(false);
    const state = useSelector((state: RootState) => state.verticalMenu);
    const dispatch = useDispatch();

    const handleMouseEnter = () => {
        dispatch(setShow(true));
    };

    const handleClick = () => {
        dispatch(setShow(!state.show));
    };

    const navigation = [
        {
            href: "/presonalAria/myEducation",
            name: "Моё обучение",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
            ),
        },
        {
            href: "/presonalAria/dialogLesson",
            name: "Задачи",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                    />
                </svg>
            ),
        },
        {
            href: "/presonalAria/statistic",
            name: "Помощь сообщества",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                </svg>
            ),
        },
        {
            href: "/presonalAria/statistic",
            name: "Статьи",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <>
            {state.show ? (
                <div className="z-40 ">
                    <nav className="fixed top-0 left-0 w-56 h-full border-r border-slate-900 bg-[#1f222b] space-y-8 sm:w-64">
                        <div
                            onClick={handleClick}
                            className="flex flex-col h-full"
                        >
                            <div className="text-slate-100 w-full flex justify-center mt-5 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-slate-100 cursor-pointer"
                                    onClick={handleClick}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="h-20 flex items-center px-8">
                                <Link to="/" className="flex-none">
                                    <img
                                        src={logo}
                                        width={140}
                                        className="mx-auto"
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                            <div className="flex-1 flex flex-col h-full overflow-auto">
                                <ul className="px-4 text-sm font-medium flex-1">
                                    {navigation.map((item, idx) => (
                                        <li key={idx} onClick={handleClick}>
                                            <Link
                                                to={item.href}
                                                className="flex items-center gap-x-2 text-slate-100 p-2 rounded-lg text-xl font-mono hover:bg-slate-800 active:bg-gray-100 duration-150"
                                            >
                                                <div className="text-slate-100 px-2">
                                                    {item.icon}
                                                </div>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            ) : null}

            {state.show ? null : (
                <div className="z-20 hidden md:block ">
                    <nav className="fixed top-0 left-0 w-20 h-full border-r border-slate-900 bg-[#1f222b] space-y-8">
                        <div
                            // onMouseEnter={handleMouseEnter}
                            // onClick={handleClick}
                            className="flex flex-col h-full "
                        >
                            <div className="text-slate-100 w-full flex justify-center mt-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-slate-100 cursor-pointer"
                                    onClick={handleClick}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="h-20 flex items-center justify-center px-8">
                                <Link to="/" className="flex-none">
                                    <img
                                        src={logoMin}
                                        width={35}
                                        className="mx-auto"
                                        alt="logo"
                                    />
                                </Link>
                            </div>

                            <div className="flex-1 flex flex-col h-full">
                                <ul className="px-4 text-sm font-medium flex-1">
                                    {navigation.map((item, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={item.href}
                                                className="relative flex items-center justify-center gap-x-2 text-slate-100 p-2 rounded-lg  hover:bg-gray-20 hover:text-slate-400 active:bg-gray-100 duration-150 group"
                                            >
                                                <div className="text-salte-300">
                                                    {item.icon}
                                                </div>
                                                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
};

export default VerticalMenu;
