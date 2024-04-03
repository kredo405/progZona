import dialogImg from "../assets/langi.png";
import { useState } from "react";
import AnimatedText from "../components/AnimatedText";
import { useDispatch } from "react-redux";
import { setfinishDialog } from "../store/slices/lessonSlice";

export default function DialogLeson() {
    const [text, setText] =
        useState<string>(`Приветствую тебя в нашем увлекательном курсе по изучению C#! Мы рады, что ты присоединился к нам.
    C# - это мощный и гибкий язык программирования, который используется для создания широкого спектра приложений,
    от веб-сайтов до мобильных приложений и игр. Здесь мы познакомимся с основными концепциями языка, изучим его синтаксис
    и научимся создавать простые, но эффективные программы. Готов ли ты приступить к увлекательному путешествию в мир C#?`);
    const [buttons, setButtons] = useState<string[]>([
        "Да, я готов начать изучение C#!",
        "Я уже знаком(a) с C#, но хочу обновить свои знания",
    ]);

    const dispatch = useDispatch();

    const onButtonClick = (buttonText: string) => {
        if (buttonText.trim() === "Да, я готов начать изучение C#!") {
            setText(`Поздравляем! Ты сделал правильный выбор. Давай начнем наше увлекательное путешествие в мир C#.
             Первым шагом будет знакомство с основами языка, его синтаксисом и ключевыми концепциями. Готовься к
              захватывающим урокам и интересным заданиям!`);
            setButtons(["Круто!"]);
        }

        if (
            buttonText.trim() ===
            "Я уже знаком(a) с C#, но хочу обновить свои знания"
        ) {
            setText(`Тогда наслаждайся изучением C#! Давай начнем наше увлекательное путешествие в мир C#.
             Первым шагом будет знакомство с основами языка, его синтаксисом и ключевыми концепциями.
              Готовься к захватывающим урокам и интересным заданиям!`);
            setButtons(["Круто!"]);
        }
        if (buttonText.trim() === "Круто!") {
            setText(`После освоения основных концепций C# мы перейдем к более сложным темам,
             таким как объектно-ориентированное программирование, работа с базами данных,
              разработка веб-приложений и многое другое. Готовься к увлекательному и познавательному
               путешествию в мир разработки программного обеспечения!
            `);
            setButtons(["Давай начнем"]);
        }

        if (buttonText.trim() === "Давай начнем") {
            dispatch(setfinishDialog(true));
        }
    };

    return (
        <div className="mt-2 z-10">
            <div className="flex flex-col py-5">
                <div className="flex justify-center">
                    <img
                        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                        src={dialogImg}
                        alt="c#"
                    />
                </div>
                <div className="p-5 bg-[#292c35] w-full h-[70vh]">
                    <AnimatedText
                        text={text}
                        buttons={buttons}
                        onButtonClick={onButtonClick}
                    />
                </div>
            </div>
        </div>
    );
}
