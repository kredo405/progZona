import CodeHighlight from "../CodeHightLight";
import EditorCode from "./EditorCode";
import TestResult from "./TestResult";
import Discusions from "../../pages/Discusions";
import Test from "../../pages/Test";
import { Link } from "react-router-dom";
import { useState } from "react";

const Lesson = () => {
    const [finishTest, setFinishTest] = useState(false);

    const task = {
        task: "Напишите программу, которая приветствует пользователя",
        description:
            "Вам необходимо создать программу, которая приветствует пользователя в зависимости от его возраста. Если пользователь младше 18 лет, программа должна выводить сообщение 'Привет, ребенок!', а если пользователь 18 лет или старше, то сообщение должно быть 'Привет, взрослый!'.",
    };

    return (
        <>
            <div className="mt-10">
                <div className="flex justify-center  py-5">
                    <h2 className="text-slate-100 text-4xl text-center font-mono font-bold border-b-2 border-orange-600 py-3 px-5 border-solid">
                        Введение в JavaScript:
                    </h2>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center mt-5">
                        <h4 className="text-slate-200 text-xl font-semibold">
                            Основы и ключевые концепции
                        </h4>
                    </div>
                    <div className="text-slate-300 px-2 md:px-32">
                        <p className="font-mono py-2">
                            JavaScript является одним из самых популярных языков
                            программирования веб-разработки. Этот язык дает
                            возможность создавать интерактивные и динамические
                            веб-страницы, а также разрабатывать полноценные
                            веб-приложения. В этой статье мы рассмотрим основы
                            JavaScript, его историю и ключевые концепции, чтобы
                            помочь вам начать свое путешествие в
                            программирование на этом языке.
                        </p>
                        <div className="flex justify-center py-5">
                            <img
                                className="w-6/12"
                                src="https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg"
                                alt="js"
                            />
                        </div>
                        <div className="flex justify-center mt-5">
                            <h4 className="text-slate-200 text-xl font-semibold">
                                История JavaScript
                            </h4>
                        </div>
                        <p className="font-mono py-2">
                            JavaScript был создан Бренданом Эйхом в 1995 году.
                            Изначально он разрабатывался для использования
                            веб-страницами, чтобы придать им динамичность и
                            интерактивность. Вскоре после своего появления,
                            JavaScript стал одним из основных инструментов
                            веб-разработки.
                        </p>
                        <p className="font-mono py-2">
                            Однако, стоит отметить, что JavaScript не имеет
                            никакого отношения к языку программирования Java,
                            несмотря на похожие названия. JavaScript был создан
                            как независимый язык, и его развитие продолжается до
                            сих пор.
                        </p>
                        <div className="flex justify-center mt-5">
                            <h4 className="text-slate-200 text-xl font-semibold">
                                Основы JavaScript
                            </h4>
                        </div>
                        <p className="font-mono py-2">
                            JavaScript является интерпретируемым языком, что
                            означает, что код выполняется по мере его
                            поступления в браузер. Это позволяет создавать
                            интерактивные веб-страницы, которые реагируют на
                            действия пользователя.
                        </p>
                        <p className="font-mono py-2">
                            Прежде чем мы начнем писать код на JavaScript,
                            давайте рассмотрим несколько основных концепций.
                        </p>
                        <div className="flex justify-center mt-5">
                            <h4 className="text-slate-200 text-xl font-semibold">
                                Переменные
                            </h4>
                        </div>
                        <p className="font-mono py-2">
                            Переменные в JavaScript используются для хранения
                            значений. Для объявления переменной используется
                            ключевое слово{" "}
                            <span className="text-orange-500">var</span> ,
                            <span className="text-orange-500">let</span> или{" "}
                            <span className="text-orange-500">const</span> за
                            которым следует имя переменной. Например:
                        </p>

                        <div className="px-2 lg:px-56">
                            <CodeHighlight
                                code={`var age = 25;
let name = "John";
const PI = 3.14;
                                `}
                            />
                        </div>
                        <p className="font-mono py-2">
                            Здесь мы объявляем переменные age, name и PI и
                            присваиваем им значения.
                        </p>
                        <div className="flex justify-center mt-5">
                            <h4 className="text-slate-200 text-xl font-semibold">
                                Типы данных
                            </h4>
                        </div>
                        <p className="font-mono py-2">
                            JavaScript имеет несколько встроенных типов данных,
                            включая числа, строки, логические значения и другие.
                            Например:
                        </p>
                        <div className="px-2 lg:px-56">
                            <CodeHighlight
                                code={`var age = 25;          // число
let name = "John";     // строка
const isStudent = true; // логическое значение (булево)
                                `}
                            />
                        </div>
                        <div>
                            <div className="flex justify-center py-5">
                                <h2 className="text-slate-100 text-4xl font-mono font-bold border-b-2 border-orange-600 py-3 px-5 border-solid">
                                    Задание
                                </h2>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <EditorCode
                                task={task.task}
                                description={task.description}
                            />
                        </div>
                        <div className="flex justify-center mt-5">
                            <h4 className="text-slate-200 text-xl font-semibold">
                                Операторы
                            </h4>
                        </div>
                        <p className="font-mono py-2">
                            JavaScript поддерживает различные операторы для
                            выполнения арифметических, сравнительных и
                            логических операций. Например:
                        </p>
                        <div className="px-2 lg:px-56">
                            <CodeHighlight
                                code={`var x = 10 + 5; // сложение
var y = 20 - 8; // вычитание
var z = 4 * 6; // умножение
var w = 10 / 2; // деление
var isTrue = x > y; // сравнение (больше)
var isFalse = x === y; // сравнение (равенство)`}
                            />
                        </div>
                        <div className="flex justify-center mt-5">
                            <h4 className="text-slate-200 text-xl font-semibold">
                                Функции
                            </h4>
                        </div>
                        <p className="font-mono py-2">
                            Функции являются основными строительными блоками в
                            JavaScript. Они позволяют определить блок кода,
                            который можно вызывать многократно. Например:
                        </p>
                        <div className="px-2 lg:px-56">
                            <CodeHighlight
                                code={`function sayHello() {
console.log("Привет!");
}

sayHello(); // вызов функции`}
                            />
                        </div>
                        <p className="font-mono py-2">
                            Вызов функции sayHello() выведет в консоль сообщение
                            "Привет!".
                        </p>

                        {/* {finishTest ? (
                            <> */}
                        {/* <TestResult /> */}
                        <div className="flex justify-center py-10">
                            <Link
                                to="/presonalAria/themes"
                                className="px-20 py-4 bg-orange-500 hover:bg-orange-600 text-slate-100 font-mono font-semibold rounded-xl"
                            >
                                Следующий урок
                            </Link>
                        </div>
                        {/* </>
                        ) : (
                            <div className="flex justify-center mt-5">
                                <Test setFinishTest={setFinishTest} />
                            </div>
                        )} */}
                    </div>
                </div>
                <Discusions />
            </div>
        </>
    );
};

export default Lesson;
