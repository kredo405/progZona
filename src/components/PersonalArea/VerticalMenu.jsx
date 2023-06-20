import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setShow } from "../../store/slices/verticalMenuSlice";
import logo from "../../assets/logo.png";
import logoMin from "../../assets/logoMin.png";

const VertivalMenu = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const navigation = [
        {
            href: "/presonalAria/myEducation",
            name: "Моё обучение",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                >
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
            ),
        },
        {
            href: "/presonalAria/statistic",
            name: "Статистика",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                >
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                </svg>
            ),
        },
        {
            href: "/presonalAria/AllCourse",
            name: "Все курсы",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                    />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            {state.verticalMenuSlice.show ? (
                <div className="z-10">
                    <nav className="fixed top-0 left-0 w-56 h-full border-r border-slate-900 bg-[#1f222b] space-y-8 sm:w-64">
                        <div class="flex flex-col h-full">
                            <div className="text-slate-100 w-full flex justify-center mt-5 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-slate-100 cursor-pointer"
                                    onClick={() =>
                                        dispatch(
                                            setShow(
                                                !state.verticalMenuSlice.show
                                            )
                                        )
                                    }
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="h-20 flex items-center px-8">
                                <Link href="/" className="flex-none">
                                    <img
                                        src={logo}
                                        width={140}
                                        className="mx-auto"
                                    />
                                </Link>
                            </div>
                            <div className="flex-1 flex flex-col h-full overflow-auto">
                                <ul className="px-4 text-sm font-medium flex-1">
                                    {navigation.map((item, idx) => (
                                        <li
                                            key={idx}
                                            onClick={() =>
                                                dispatch(
                                                    setShow(
                                                        !state.verticalMenuSlice
                                                            .show
                                                    )
                                                )
                                            }
                                        >
                                            <Link
                                                to={item.href}
                                                className="flex items-center gap-x-2 text-slate-100 p-2 rounded-lg text-xl font-mono hover:bg-slate-800 active:bg-gray-100 duration-150"
                                            >
                                                <div className="text-slate-100">
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

            {state.verticalMenuSlice.show ? null : (
                <div className="z-10 hidden md:block">
                    <nav className="fixed top-0 left-0 w-20 h-full border-r border-slate-900 bg-[#1f222b] space-y-8">
                        <div class="flex flex-col h-full">
                            <div className="text-slate-100 w-full flex justify-center mt-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-slate-100 cursor-pointer"
                                    onClick={() =>
                                        dispatch(
                                            setShow(
                                                !state.verticalMenuSlice.show
                                            )
                                        )
                                    }
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="h-20 flex items-center justify-center px-8">
                                <Link to="/" className="flex-none">
                                    <img
                                        src={logoMin}
                                        width={35}
                                        className="mx-auto"
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

export default VertivalMenu;
