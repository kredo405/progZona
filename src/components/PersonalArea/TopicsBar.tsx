import { useState } from "react";

const TopicsBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex flex-col bg-[#292c35] fixed">
            {/* Бургер меню для мобильных устройств */}
            <button onClick={toggleMenu}>
                {isMenuOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8  text-slate-50"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 text-slate-50"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                        />
                    </svg>
                )}
            </button>

            {/* Список тем */}
            <ul
                className={`flex flex-col px-2 overflow-y-scroll h-[90vh] w-[200px]  ${
                    isMenuOpen ? "" : " hidden"
                }`}
            >
                <li className="block text-slate-100 border-t-2 border-slate-600 border-solid w-full p-2 hover:bg-[#292f3c] mt-2 cursor-pointer">
                    1. История C#
                </li>
                <li className="block text-slate-100 border-t-2 border-slate-600 border-solid w-full p-2 hover:bg-[#292f3c] mt-2 cursor-pointer">
                    2. Знакомство с языком C#
                </li>
                <li className="block text-slate-100 border-t-2 border-slate-600 border-solid w-full p-2 hover:bg-[#292f3c] mt-2 cursor-pointer">
                    3. Переменные
                </li>
            </ul>
        </div>
    );
};

export default TopicsBar;
