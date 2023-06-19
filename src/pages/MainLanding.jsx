import { Nav } from "../components/MainLanding/Nav";
import { Header } from "../components/MainLanding/Header";
import { InfoBlock } from "../components/MainLanding/InfoBlock";
import { SliderMain } from "../components/MainLanding/SliderMain";
import { Link } from "react-router-dom";
import ph1 from "../assets/ph1.png";
import ph2 from "../assets/ph2.png";

const MainLanding = () => {
    return (
        <>
            <Nav current="/" />
            <Header />
            <InfoBlock
                title="Как происходит обучение?"
                paragraphFirst="Наши методы обучения разработаны таким образом, чтобы вы могли эффективно освоить материал
            и применить полученные знания на практике. Давайте рассмотрим, как будет проходить ваше
            обучение."
                paragraphSecond="После регистрации каждому студенту будет предоставлен личный кабинет, где вы сможете
            настроить свой профиль и выбрать подходящий курс. У нас есть как основные курсы,
            соответствующие различным профессиям в IT-индустрии, так и дополнительные курсы для
            расширения ваших навыков в конкретных областях."
                isRight={true}
                image={ph1}
            />
            <InfoBlock
                title="Обучение в ProgZona – это удобно и результативно"
                paragraphFirst="Мы верим в доступность образования, поэтому все базовые курсы предоставляются абсолютно бесплатно. Вы сможете ознакомиться с основными понятиями и технологиями без каких-либо ограничений. Если вы желаете глубже изучить определенную профессию, мы предлагаем специализированные курсы, которые включают все необходимые темы и навыки."
                paragraphSecond="Мы стремимся создать индивидуальный подход к каждому студенту, поэтому ваш прогресс будет отслеживаться в личном кабинете. Вы сможете видеть свои достижения, оценку вашего прогресса по каждому курсу и отслеживать свое развитие в области программирования."
                isRight={false}
                image={ph2}
            />
            <SliderMain />

            <div className="rounded-xl border-2 border-gray-800 mx-5 bg-[#292c35] mt-10">
                <h2 className="font-mono text-3xl text-slate-100 text-center px-10 py-3 font-bold mt-5 underline decoration-2 decoration-orange-600 underline-offset-8">
                    Присоединяйтесь к нашей школе программирования и начните
                    свой путь к успешной карьере в IT уже сегодня!
                </h2>

                <div className="flex flex-col lg:flex-row justify-center mt-10 py-10">
                    <Link
                        to="/auth"
                        className="py-3 mb-5 text-center font-mono lg:mb-0 w-full lg:w-56 px-auto mr-10 bg-orange-600 hover:bg-orange-700 text-slate-100 text-xl rounded-lg border-solid border-2 border-orange-600 hover:border-orange-700"
                    >
                        Вход
                    </Link>
                    <Link
                        to="/registration"
                        className="py-3 px-auto text-center font-mono w-full lg:w-56 bg-sky-600 hover:bg-sky-700 text-slate-100 text-xl rounded-lg border-solid border-2 border-sky-600 hover:border-sky-700"
                    >
                        Регистрация
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MainLanding;
