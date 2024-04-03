import React, { useEffect, useState } from "react";
import "../assets/animate.css";

interface AnimatedTextProps {
    text: string;
    buttons: string[];
    onButtonClick: (buttonText: string) => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    buttons,
    onButtonClick,
}) => {
    const [visibleText, setVisibleText] = useState<string>("");
    const [counter, setCounter] = useState<number>(0);
    const [animationComplete, setAnimationComplete] = useState<boolean>(false);

    useEffect(() => {
        setCounter(0); // Сбрасываем счетчик при изменении текста
        setVisibleText("");
        setAnimationComplete(false); // Сбрасываем видимый текст при изменении текста
    }, [text]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (counter < text.length) {
                setVisibleText((prevText) => prevText + text[counter]);
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                clearInterval(intervalId);
                setAnimationComplete(true); // Устанавливаем состояние завершения анимации текста
            }
        }, 20);

        return () => clearInterval(intervalId);
    }, [text, counter]);

    return (
        <div
            className="text-slate-200 font-mono antialiased leading-6"
            id="animatedText"
        >
            {visibleText}
            <div className="mt-10 flex justify-center">
                {animationComplete && // Показываем кнопки только после завершения анимации текста
                    buttons.map((buttonText, index) => (
                        <button
                            className="bg-orange-500 text-slate-200 font-mono px-5 py-3 rounded-lg hover:bg-orange-600 m-3"
                            key={index}
                            onClick={() => onButtonClick(buttonText)}
                        >
                            {buttonText}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default AnimatedText;
