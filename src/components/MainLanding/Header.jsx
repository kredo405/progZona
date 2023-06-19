import mainImg from "../../assets/main.png";

export const Header = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 px-2 lg:px-10">
            <div className="w-full lg:w-6/12 flex flex-col items-center justify-center">
                <h1 className="font-mono text-5xl text-slate-100 text-center px-3 py-3 font-bold">
                    <span className="text-orange-500"> ProgZona </span>— школа
                    веб разработки
                </h1>
                <p className="pl-4 px-2 py-2 text-lg text-slate-100 font-mono text-center lg:text-start">
                    Мы рады приветствовать вас в нашей школе, где вы сможете
                    освоить различные языки программирования и стать настоящим
                    экспертом в веб-разработке. У нас вы найдете обучение по
                    таким популярным технологиям, как HTML, CSS, JavaScript,
                    Node.js, React, Vue.js, PHP, Laravel и др.
                </p>
                <p className="lg:pl-4 px-2 py-2 text-lg text-slate-100 font-mono text-center lg:text-start">
                    Не важно, являетесь ли вы начинающим или уже имеете
                    определенный опыт в программировании, наша школа предлагает
                    курсы для всех уровней. Мы стремимся создать поддерживающую
                    и вдохновляющую среду, в которой вы сможете развиваться и
                    достигать новых высот в своей карьере в IT.
                </p>
                <p className="pl-4 px-2 py-2 text-lg text-slate-100 font-mono text-center lg:text-start">
                    Присоединяйтесь к нам сегодня и начните свое путешествие в
                    мир программирования!
                </p>
            </div>
            <div className="w-full mt-3 lg:mt-0 lg:w-5/12 flex justify-center items-center">
                <img src={mainImg} alt="main" />
            </div>
        </div>
    );
};
