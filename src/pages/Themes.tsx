import { Link } from "react-router-dom";
import { useState } from "react";

const Themes = () => {
    // Потом будем получать с бека темы
    const themes = [
        {
            title: "Введение в JavaScript",
            subtopics: [
                {
                    title: "Введение в JavaScript",
                    isAvailable: true,
                    completed: true,
                },
                {
                    title: "Основные области применения JavaScript",
                    isAvailable: true,
                    completed: true,
                },
                {
                    title: "Различия между JavaScript и другими языками программирования",
                    isAvailable: true,
                    completed: true,
                },
            ],
        },
        {
            title: "Переменные в JavaScript",
            subtopics: [
                {
                    title: "Объявление переменных в JavaScript",
                    isAvailable: true,
                    completed: false,
                },
                {
                    title: "Правила именования переменных",
                    isAvailable: true,
                    completed: false,
                },
                {
                    title: "Типы переменных: числа, строки, булевы значения",
                    isAvailable: true,
                    completed: false,
                },
                {
                    title: "Присваивание значений переменным",
                    isAvailable: true,
                    completed: false,
                },
            ],
        },
        {
            title: "Типы данных в JavaScript",
            subtopics: [
                {
                    title: "Числовые типы данных: целые числа, числа с плавающей запятой",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Строковые типы данных: текстовые строки",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Булев тип данных: true/false",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Операторы и операции для работы с разными типами данных",
                    isAvailable: false,
                    completed: false,
                },
            ],
        },
        {
            title: "Таблицы",
            subtopics: [
                {
                    title: "Создание таблиц и их структура.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Разделение на строки и столбцы.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Слияние ячеек.",
                    isAvailable: false,
                    completed: false,
                },
            ],
        },
        {
            title: "Формы и ввод данных",
            subtopics: [
                {
                    title: "Создание форм с использованием тегов form, input, textarea.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Различные типы полей ввода: текстовые, чекбоксы, радиокнопки, выпадающие списки.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Обработка данных формы на стороне сервера.",
                    isAvailable: false,
                    completed: false,
                },
            ],
        },
        {
            title: "Валидация данных",
            subtopics: [
                {
                    title: "Проверка данных на корректность.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Использование атрибутов required и pattern.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Пользовательские сообщения об ошибках.",
                    isAvailable: false,
                    completed: false,
                },
            ],
        },
        {
            title: "Семантические теги",
            subtopics: [
                {
                    title: "Заголовки разных уровней.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Теги article, section, nav, aside.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Формирование структуры веб-страницы.",
                    isAvailable: false,
                    completed: false,
                },
            ],
        },
        {
            title: "Встроенные мультимедиа",
            subtopics: [
                {
                    title: "Вставка аудио и видео.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Использование тега canvas для рисования.",
                    isAvailable: false,
                    completed: false,
                },
            ],
        },
        {
            title: "Мобильная адаптивность",
            subtopics: [
                {
                    title: "Медиазапросы для адаптации страницы к разным устройствам.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Мобильное меню и адаптивный дизайн.",
                    isAvailable: false,
                    completed: false,
                },
            ],
        },
        {
            title: "Практические проекты",
            subtopics: [
                {
                    title: "Создание простой веб-страницы.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Форматирование и стилизация контента.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Валидация данных и обработка форм.",
                    isAvailable: false,
                    completed: false,
                },
                {
                    title: "Добавление мультимедиа-элементов.",
                    isAvailable: false,
                    completed: false,
                },
            ],
        },
    ];

    const elements = themes.map((el, idx) => {
        return (
            <div className="flex flex-col px-5 py-5 mx-2 md:mx-20 rounded-2xl bg-[#353943] mb-5">
                <div className="flex items-center py-3 ">
                    <span className="text-slate-100 pr-5 font-mono font-bold text-xl">
                        {idx + 1}
                    </span>
                    <h5 className="text-slate-100 font-mono font-bold text-xl">
                        {el.title}
                    </h5>
                </div>
                <ul className="px-7">
                    {el.subtopics.map((item, i) => {
                        return (
                            <li
                                className="text-slate-300 font-mono text-lg hover:bg-[#2f333e] hover:text-orange-500 border-b hover:border-orange-500 border-orange-600 py-2"
                                key={item.title}
                            >
                                <Link
                                    className="flex justify-between"
                                    to="/presonalAria/lesson"
                                >
                                    <span>
                                        {i + 1} {item.title}
                                    </span>
                                    <div className="flex">
                                        {item.completed ? (
                                            <span className="text-green-500 px-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        ) : null}
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    });

    return (
        <>
            <div className="mt-10">
                <div className="flex justify-center  py-5">
                    <h2 className="text-slate-100 text-4xl font-mono font-bold border-b-2 border-orange-600 py-3 px-5 border-solid">
                        Темы
                    </h2>
                </div>
                <div className="flex flex-col">{elements}</div>
            </div>
        </>
    );
};

export default Themes;
