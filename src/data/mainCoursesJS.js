import frontend from "../assets/frontend.png";
import front from "../assets/fron1.png";
import frontFinish from "../assets/frontFinish.png";

export const getDataMainCourseJavaScript = () => {
    const modules = [
        {
            title: "Модуль 1: Основы JavaScript",
            topics: [
                "Введение в JavaScript: основные понятия, синтаксис и структура языка.",
                "Переменные и типы данных: объявление переменных, работа с числами, строками, булевыми значениями и другими типами данных.",
                "Управляющие конструкции: условные операторы (if-else), циклы (for, while), операторы сравнения.",
                "Функции: создание функций, передача аргументов, возврат значений.",
            ],
        },
        {
            title: "Модуль 2: Работа с DOM и событиями",
            topics: [
                "Манипуляция элементами DOM: поиск элементов, изменение содержимого, добавление и удаление элементов.",
                "Обработка событий: регистрация обработчиков событий, работа с различными событиями (нажатие кнопки, перемещение мыши и т. д.).",
                "Валидация форм: проверка и обработка введенных пользователем данных в формах",
                "Взаимодействие с сервером: отправка AJAX-запросов, обработка ответов.",
            ],
        },
        {
            title: "Модуль 3: Продвинутые концепции JavaScript",
            topics: [
                "Область видимости и замыкания: понимание лексической области видимости и создание замыканий для эффективного и безопасного кода.",
                "Объектно-ориентированное программирование (ООП) в JavaScript: создание объектов, использование конструкторов, прототипы и наследование.",
                "Работа с массивами и объектами: итерация по массивам, добавление и удаление элементов, применение методов массивов.",
                "Модули и паттерны проектирования: использование модульного подхода и популярных паттернов для организации и структурирования кода.",
            ],
        },
    ];

    const info = {
        title: "JavaScript",
        desc: "Добро пожаловать на наш курс по JavaScript! Если вы хотите освоить один из самых популярных языков программирования веб-разработки, то вы находитесь в правильном месте. В течение этого курса мы познакомим вас с основными концепциями и инструментами JavaScript, которые помогут вам создавать интерактивные веб-приложения.",
        mainImg: frontend,
        paragraph1:
            "В ходе этого курса вы изучите основы JavaScript, включая переменные, операторы, условия, циклы и функции. Вы также познакомитесь с работой событий, обработкой форм, манипуляцией элементами DOM и взаимодействием с сервером с помощью AJAX запросов. Мы также рассмотрим важные концепции, такие как область видимости, замыкания и объектно-ориентированное программирование (ООП) в JavaScript.",
        paragraph2:
            "Наш курс по JavaScript ориентирован на студентов с любым уровнем опыта в программировании. Мы предлагаем практические задания, проекты и реальные примеры, которые помогут вам применить полученные знания на практике. Вы будете создавать интерактивные элементы на веб-страницах, обрабатывать события, выполнять асинхронные запросы к серверу и многое другое. Присоединяйтесь к нашему курсу и начните свое путешествие в мир JavaScript-разработки уже сегодня!",
        infoImg: front,
        lastText: `Завершив курс по JavaScript, вы получите надежные фундаментальные знания и практические навыки, которые помогут вам стать успешным веб-разработчиком. Вы сможете создавать динамические и интерактивные веб-страницы, улучшать пользовательский опыт и взаимодействовать с сервером. Присоединяйтесь к нашему курсу и откройте для себя мир возможностей, которые предлагает язык программирования JavaScript.`,
        lastImg: frontFinish,
    };

    return {
        modules,
        info,
    };
};
