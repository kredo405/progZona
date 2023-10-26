import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const Course = () => {
    const tabItems = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                    />
                </svg>
            ),
            name: "Урок",
            link: "/presonalAria/course/lesson",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                </svg>
            ),
            name: "Тесты",
            link: "/presonalAria/course/test",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                </svg>
            ),
            name: "обсуждение",
            link: "/presonalAria/course/discusions",
        },
    ];
    const [selectedItem, setSelectedItem] = useState(0);

    return (
        <div className="flex mt-10">
            <div className="flex flex-col w-full">
                <div className="px-4 md:px-8">
                    <ul
                        role="tablist"
                        className="max-w-screen-xl mx-auto border-b border-slate-800 flex items-center gap-x-6 overflow-x-auto text-sm"
                    >
                        {tabItems.map((item, idx) => (
                            <li
                                key={idx}
                                className={`py-2 border-b-2 ${
                                    selectedItem == idx
                                        ? "border-orange-600 text-slate-100"
                                        : "border-slate-600 text-slate-200"
                                }`}
                            >
                                <Link
                                    role="tab"
                                    to={item.link}
                                    aria-selected={
                                        selectedItem == idx ? true : false
                                    }
                                    aria-controls={`tabpanel-${idx + 1}`}
                                    className="flex items-center gap-x-2 py-2 px-2 rounded-lg duration-150 hover:text-slate-100 hover:bg-gray-700 active:bg-gray-600 font-medium"
                                    onClick={() => setSelectedItem(idx)}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Course;
