import CourseCard from "../MainLanding/CourseCard";

const AllCourse = () => {
    return (
        <>
            <div className="mt-10 border-b-2 border-solid border-slate-700 py-3">
                <h2 className="text-slate-100 font-mono font-bold text-4xl px-5">
                    Все курсы
                </h2>
            </div>
            <div>
                <section className=" mx-auto px-4 max-w-screen-xl md:px-8 py-10">
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        <CourseCard
                            href="/course"
                            img="https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/HTML-Blog-Cover.png"
                            title="HTML"
                            desc="
                            Освойте основы HTML и создайте красивые и структурированные веб-страницы с нашим курсом по HTML."
                            level="С нуля"
                        />
                        <CourseCard
                            href="/course"
                            img="https://www.bitdegree.org/learn/storage/media/images/css-tutorial-img1-01.o.png"
                            title="CSS"
                            desc="
                            Курс по CSS предлагает вам углубленное погружение в язык стилей, чтобы вы смогли создавать красивые и привлекательные веб-дизайны, применять различные стилевые свойства и разработать свой собственный уникальный стиль."
                            level="С нуля"
                        />
                        <CourseCard
                            href="/course"
                            img="https://joseordaz.com/wp-content/uploads/2022/01/javascript.jpg"
                            title="JavaScript"
                            desc="Курс по JavaScript предлагает вам полное погружение в мир языка программирования JavaScript, чтобы вы могли освоить его основы и применять их для создания интерактивных веб-приложений и динамического контента на веб-страницах."
                            level="С нуля"
                        />
                        <CourseCard
                            href="/course"
                            img="data:image/png;base64,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"
                            title="React"
                            desc="Курс по React предлагает полное погружение в разработку с использованием этой популярной JavaScript-библиотеки, позволяя вам освоить создание мощных и масштабируемых пользовательских интерфейсов для современных веб-приложений."
                            level="С нуля"
                        />
                        <CourseCard
                            href="/course"
                            img="https://hpe-developer-portal.s3.amazonaws.com/uploads/media/2019/8/typescriptimage-1568052628959.jpeg"
                            title="TypeScript"
                            desc="Курс по TypeScript поможет вам освоить синтаксис, принципы и возможности этого статически типизированного языка программирования, улучшив вашу разработку в среде JavaScript."
                            level="С опытом"
                        />
                        <CourseCard
                            href="/course"
                            img="https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png"
                            title="Node JS"
                            desc="Курс по Node.js позволит вам изучить основы этой мощной платформы, чтобы создавать эффективные и масштабируемые серверные приложения на JavaScript."
                            level="С опытом"
                        />
                        <CourseCard
                            href="/course"
                            img="https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png"
                            title="Express js"
                            desc="Курс по Express.js научит вас создавать веб-приложения и API с помощью этого гибкого и легковесного фреймворка для Node.js, открывая перед вами мир возможностей разработки на сервере."
                            level="С опытом"
                        />
                        <CourseCard
                            href="/course"
                            img="https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2023/02/docker.png"
                            title="Docker"
                            desc="Курс по Docker позволит вам освоить ключевые концепции и навыки контейнеризации, чтобы эффективно управлять приложениями, изолировать окружение и упростить процесс развертывания в современных средах разработки и внедрения."
                            level="С нуля"
                        />
                        <CourseCard
                            href="/course"
                            img="https://media.proglib.io/posts/2019/09/08/94f3ffd19cb2e6d2128712494bf6fe99.jpg"
                            title="C#"
                            desc="Курс по C# позволит вам освоить этот мощный и элегантный язык программирования, открывая перед вами возможности разработки разнообразных приложений, включая веб-приложения, мобильные приложения и программное обеспечение на платформе .NET."
                            level="С нуля"
                        />
                        <CourseCard
                            href="/course"
                            img="https://www.simplilearn.com/ice9/free_resources_article_thumb/Web_Forms_in_ASP_NET.jpg"
                            title="ASP.NET Core"
                            desc="ASP.NET Core - мощный фреймворк для создания современных веб-приложений с безупречной интеграцией серверной и клиентской функциональности."
                            level="С нуля"
                        />
                        <CourseCard
                            href="/course"
                            img="https://refactoring.guru/images/patterns/languages/python.png?id=6f76a3e0854382007d9ee5a1b311a826"
                            title="Паттерны проектирования"
                            desc="
                            Курс по паттернам проектирования предлагает углубленное погружение в основные шаблоны проектирования, позволяя разработчикам создавать гибкие, масштабируемые и поддерживаемые приложения."
                            level="С опытом"
                        />
                        <CourseCard
                            href="/course"
                            img="https://cbsedu.blob.core.windows.net/course-video-covers/course-video-covers-e9751b7c-9e83-4158-a35e-437a4002b4b4.jpg"
                            title="Алгоритмы и структуры данных"
                            desc="
                            Курс по алгоритмам и структурам данных предлагает полное понимание основных алгоритмических концепций и эффективных структур данных, необходимых для решения сложных задач программирования."
                            level="С опытом"
                        />
                        <CourseCard
                            href="/course"
                            img="data:image/png;base64,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"
                            title="Git и Github"
                            desc="
                            Курс по Git и GitHub обеспечивает всестороннее обучение основам системы контроля версий Git и платформы GitHub, позволяя разработчикам эффективно управлять версиями своих проектов и успешно сотрудничать в командной среде."
                            level="С нуля"
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default AllCourse;
