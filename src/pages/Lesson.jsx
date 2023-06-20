import CodeHighlight from "../components/CodeHightLight";
import { Link } from "react-router-dom";

const Lesson = () => {
    return (
        <>
            <div className="mt-10">
                <div className="flex justify-center  py-5">
                    <h2 className="text-slate-100 text-4xl font-mono font-bold border-b-2 border-orange-600 py-3 px-5 border-solid">
                        Урок
                    </h2>
                </div>
                <div className="flex flex-col">
                    <div className="border-b-2 border-[#353943] border-solid py-3">
                        <h3 className="text-slate-200 text-2xl text-center md:text-start font-bold px-5">
                            Введение в HTML
                        </h3>
                    </div>
                    <div className="flex justify-center mt-5">
                        <h4 className="text-slate-200 text-xl font-semibold">
                            Что такое HTML?
                        </h4>
                    </div>
                    <div className="text-slate-300 px-2 md:px-32">
                        <p className="font-mono py-2">
                            HTML (HyperText Markup Language) является основным
                            языком разметки, используемым для создания
                            веб-страниц. Этот язык позволяет определить
                            структуру и содержимое веб-документа, обеспечивая
                            его корректное отображение в веб-браузерах.
                        </p>
                        <div className="flex justify-center py-5">
                            <img
                                className="w-6/12"
                                src="https://acumbamail.com/blog/wp-content/uploads/2014/10/maquetacion-email-html.png"
                                alt="html"
                            />
                        </div>
                        <p className="font-mono py-2">
                            HTML использует комбинацию тегов и текстового
                            содержимого для определения элементов на
                            веб-странице. Каждый тег обозначает определенный
                            элемент и определяет его функциональность и внешний
                            вид. Основная структура HTML-документа включает в
                            себя следующие элементы:
                        </p>
                        <ul className="font-mono py-2 list-decimal px-7">
                            <li>
                                <span className="text-orange-500">
                                    !DOCTYPE html
                                </span>
                                : Это объявление типа документа и указывает, что
                                мы используем последнюю версию HTML.
                            </li>
                            <li>
                                <span className="text-orange-500">
                                    &lt;Html&gt;
                                </span>
                                : Элемент html является корневым элементом,
                                который охватывает всю структуру веб-страницы.
                            </li>
                            <li>
                                <span className="text-orange-500">
                                    &lt;head&gt;
                                </span>
                                : Внутри элемента head содержится метаинформация
                                о документе, такая как заголовок страницы,
                                ссылки на стили CSS, скрипты JavaScript и другие
                                метаинформационные элементы.
                            </li>
                            <li>
                                <span className="text-orange-500">
                                    &lt;body&gt;
                                </span>
                                : Элемент body содержит фактическое содержимое
                                веб-страницы, такое как текст, изображения,
                                ссылки и другие элементы.
                            </li>
                        </ul>
                        <p className="font-mono py-2">
                            Пример кода базовой структуры HTML-документа
                            выглядит следующим образом:
                        </p>
                        <div className="px-2 lg:px-56">
                            <CodeHighlight
                                code={`<!DOCTYPE html>
<html>
    <head>
    <title>Заголовок страницы</title>
    </head>
    <body>
        <h1>Привет, мир!</h1>
        <p>Это пример веб-страницы, созданной с помощью HTML.</p>
    </body>
</html>`}
                            />
                        </div>
                        <p className="font-mono py-2">
                            В этом примере мы видим, что заголовок страницы
                            задается с помощью элемента{" "}
                            <span className="text-orange-500">
                                &lt;title&gt;
                            </span>
                            , а основное содержимое размещается внутри элемента{" "}
                            <span className="text-orange-500">
                                &lt;body&gt;
                            </span>
                            . Здесь мы используем элементы{" "}
                            <span className="text-orange-500">&lt;h1&gt;</span>{" "}
                            и <span className="text-orange-500">&lt;p&gt;</span>
                            для создания заголовка и параграфа соответственно.
                        </p>
                        <p className="font-mono py-2">
                            Основными элементами HTML являются теги, которые
                            обрамляют содержимое и задают его тип и
                            функциональность. Например, для создания ссылки мы
                            используем тег{" "}
                            <span className="text-orange-500">&lt;a&gt;</span>{" "}
                            (anchor), для создания изображения - тег{" "}
                            <span className="text-orange-500">&lt;img&gt;</span>{" "}
                            (image), для создания списка - теги{" "}
                            <span className="text-orange-500">&lt;ul&gt;</span>{" "}
                            (unordered list) и{" "}
                            <span className="text-orange-500">&lt;ol&gt;</span>{" "}
                            (ordered list).
                        </p>
                        <p className="font-mono py-2">
                            HTML предлагает богатый набор тегов для различных
                            потребностей веб-разработки, позволяя создавать
                            структуру страницы, форматировать текст и
                            контролировать взаимодействие пользователей с
                            веб-страницей. Кроме того, HTML позволяет встраивать
                            мультимедийные элементы, создавать формы для сбора
                            данных от пользователей и использовать семантические
                            теги для более ясной структуры и доступности
                            контента.
                        </p>
                        <p className="font-mono py-2">
                            Важно понимать, что HTML является статическим языком
                            разметки, то есть он определяет структуру и
                            содержимое страницы, но не обеспечивает
                            интерактивность и динамические функции. Для этого
                            используются другие языки и технологии, такие как
                            CSS для стилизации внешнего вида и JavaScript для
                            добавления интерактивности.
                        </p>
                        <p className="font-mono py-2">
                            HTML является фундаментальным языком для начала
                            изучения веб-разработки. Понимание его основных
                            принципов и элементов позволит вам создавать
                            собственные веб-страницы и понимать структуру
                            существующих сайтов.
                        </p>
                        <p className="font-mono py-2">
                            В дальнейшем курсе мы углубимся в более продвинутые
                            темы HTML, изучим различные теги и их атрибуты, а
                            также научимся создавать более сложную и
                            интерактивную веб-страницу.
                        </p>
                        <p className="font-mono py-2">
                            Необходимо помнить, что HTML является постоянно
                            развивающимся языком, и регулярное обновление знаний
                            и ознакомление с последними стандартами являются
                            важной частью работы веб-разработчика.
                        </p>
                        <div className="flex justify-center py-10">
                            <Link
                                to="/presonalAria/course/test"
                                className="px-20 py-4 bg-orange-500 hover:bg-orange-600 text-slate-100 font-mono font-semibold rounded-xl"
                            >
                                Далее
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lesson;
