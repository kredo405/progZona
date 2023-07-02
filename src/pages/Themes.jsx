import { Link } from "react-router-dom";

const Themes = () => {
    const themes = [
        {
            title: "Введение в JavaScript",
            subtopics: [
                "Введение в JavaScript",
                "Основные области применения JavaScript",
                "Различия между JavaScript и другими языками программирования",
            ],
        },
        {
            title: "Переменные в JavaScript",
            subtopics: [
                "Объявление переменных в JavaScript",
                "Правила именования переменных",
                "Типы переменных: числа, строки, булевы значения",
                "Присваивание значений переменным",
            ],
        },
        {
            title: "Типы данных в JavaScript",
            subtopics: [
                "Числовые типы данных: целые числа, числа с плавающей запятой",
                "Строковые типы данных: текстовые строки",
                "Булев тип данных: true/false",
                "Операторы и операции для работы с разными типами данных",
            ],
        },
        {
            title: "Таблицы",
            subtopics: [
                "Создание таблиц и их структура.",
                "Разделение на строки и столбцы.",
                "Слияние ячеек.",
            ],
        },
        {
            title: "Формы и ввод данных",
            subtopics: [
                "Создание форм с использованием тегов form, input, textarea.",
                "Различные типы полей ввода: текстовые, чекбоксы, радиокнопки, выпадающие списки.",
                "Обработка данных формы на стороне сервера.",
            ],
        },
        {
            title: "Валидация данных",
            subtopics: [
                "Проверка данных на корректность.",
                "Использование атрибутов required и pattern.",
                "Пользовательские сообщения об ошибках.",
            ],
        },
        {
            title: "Семантические теги",
            subtopics: [
                "Заголовки разных уровней.",
                "Теги article, section, nav, aside.",
                "Формирование структуры веб-страницы.",
            ],
        },
        {
            title: "Встроенные мультимедиа",
            subtopics: [
                "Вставка аудио и видео.",
                "Использование тега canvas для рисования.",
            ],
        },
        {
            title: "Мобильная адаптивность",
            subtopics: [
                "Медиазапросы для адаптации страницы к разным устройствам.",
                "Мобильное меню и адаптивный дизайн.",
            ],
        },
        {
            title: "Практические проекты",
            subtopics: [
                "Создание простой веб-страницы.",
                "Форматирование и стилизация контента.",
                "Валидация данных и обработка форм.",
                "Добавление мультимедиа-элементов.",
            ],
        },
    ];

    const elements = themes.map((el, idx) => {
        return (
            <div className="flex flex-col px-5 py-5 mx-2 md:mx-20 rounded-2xl bg-[#353943] mb-5">
                <div className="flex items-center py-3 ">
                    <span className="text-slate-100 pr-5 font-mono font-bold text-xl py-2 border-b border-orange-600">
                        {idx + 1}
                    </span>
                    <h5 className="text-slate-100 font-mono font-bold text-xl py-2 border-b border-orange-600">
                        {el.title}
                    </h5>
                </div>
                <ul className="px-7">
                    {el.subtopics.map((item, i) => {
                        return (
                            <li className="text-slate-300 font-mono text-lg hover:text-orange-500">
                                <Link to="/presonalAria/course/lesson">
                                    {i + 1} {item}
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
