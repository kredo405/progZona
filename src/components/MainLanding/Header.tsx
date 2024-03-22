import mainImg from "../../assets/main.png";

export const Header = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-20 px-2 lg:px-10">
            <div className="w-full lg:w-6/12 flex flex-col items-center justify-center">
                <h1 className="font-mono text-5xl text-slate-100 px-3 py-3 font-bold">
                    <span className="text-orange-500"> ProgZona </span>—
                    обучение разработке на C# и .NET
                </h1>
                <p className=" px-4 py-2 text-lg text-slate-100 font-mono  lg:text-start">
                    Добро пожаловать на нашу платформу, где вы сможете погрузиться в мир программирования на языке C#. Здесь вы найдете все необходимое для освоения этого мощного языка программирования и станете настоящим специалистом в разработке программного обеспечения. На нашей платформе доступно обучение по широкому спектру тем, начиная от основ программирования на C# и заканчивая разработкой веб-приложений с использованием ASP.NET Core. Присоединяйтесь к нам, чтобы изучить основы объектно-ориентированного программирования, работу с базами данных, создание веб-приложений и многое другое в увлекательной и интерактивной форме обучения.
                </p>
                <p className="px-4 py-2 text-lg text-slate-100 font-mono  lg:text-start">
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
