import CourseCard from "./CourseCard";

const MyEducation = () => {
    return (
        <div>
            <div className="mt-10 border-b-2 border-solid border-slate-700 py-3">
                <h2 className="text-slate-100 font-mono font-bold text-4xl px-5">
                    Курс "Путешествие в мир C#"
                </h2>
            </div>
            <div className="py-5 flex flex-wrap justify-center">
                <CourseCard
                    img="https://248006.selcdn.ru/main/iblock/9dd/9dd3c730431af9dbab7befd41814fcea/13eaa548ad580af37b96dfbd474da753.png"
                    title="Основы программирования на C#"
                    level="Уровень 1"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quam!"/>
                <CourseCard
                    img="https://avatars.dzeninfra.ru/get-zen_doc/2746556/pub_63b45c33e774c368883db948_63b45c9e502c281906b21333/scale_1200"
                    title="Продвинутые темы C#"
                    level="Уровень 2"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quam!"/>
                <CourseCard
                    img="https://miro.medium.com/v2/resize:fit:750/1*Qy9HeVwrfnOTS3sptJ--hw.png"
                    title="Разработка веб-приложений на ASP.NET Core"
                    level="Уровень 3"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quam!"/>
                <CourseCard
                    img="https://www.ubackup.com/screenshot/en/acbn/others/mssql-copy-database/mssql-server.png"
                    title="Работа с базами данных"
                    level="Уровень 4"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quam!"/>
                <CourseCard
                    img="https://www.syncfusion.com/blogs/wp-content/uploads/2020/08/How-to-Migrate-SQL-Server-in-an-ASP.NET-MVC-Application-to-MySQL-and-PostgreSQL.png"
                    title="Практика и проектная работа"
                    level="Уровень 5"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quam!"/>
            </div>
        </div>
    );
};

export default MyEducation;
