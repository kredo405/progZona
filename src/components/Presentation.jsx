import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Flipper } from "react-flip-toolkit";
import FlipCard from "./FlipCard";

const Presentation = () => {
    const stackData = ["Elem 1", "Elem 2", "Elem 3", "Elem 4"];
    const queueData = ["Elem A", "Elem B", "Elem C", "Elem D"];

    const [focusedType, setFocusedType] = useState(null);
    const [focusedIndex, setFocusedIndex] = useState(null);

    const onClick = (type, index) => {
        if (focusedType === type && focusedIndex === index) {
            setFocusedType(null);
            setFocusedIndex(null);
        } else {
            setFocusedType(type);
            setFocusedIndex(index);
        }
    };

    return (
        <>
            <div className="text-slate-100 px-3 md:px-28">
                Стек — это абстрактная структура данных, представляющая собой
                коллекцию элементов, где добавление нового или удаление
                существующего элемента происходит только на одном из концов,
                называемом "верхушка" стека. Главная особенность стека
                заключается в том, что последний добавленный элемент будет
                первым при его удалении. Из-за этой особенности стек часто
                описывается принципом "последний пришел — первый ушел" (LIFO —
                Last In, First Out). Стеки часто используются в различных
                алгоритмах и программных реализациях из-за их эффективности,
                особенно в задачах, связанных с обратной навигацией, обработкой
                выражений и вызовом функций.
            </div>
            <Flipper flipKey={`${focusedType}-${focusedIndex}`} spring="gentle">
                <div className="flex justify-center space-x-8 mt-20">
                    <div className="w-1/3">
                        <h2 className="text-center text-xl mb-4">Stack</h2>
                        <div>
                            {stackData.map((item, index) => (
                                <FlipCard
                                    key={index}
                                    type="stack"
                                    index={index}
                                    content={item}
                                    onClick={onClick}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-center text-xl mb-4">Queue</h2>
                        <div>
                            {queueData.map((item, index) => (
                                <FlipCard
                                    key={index}
                                    type="queue"
                                    index={index}
                                    content={item}
                                    onClick={onClick}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Flipper>

            <div className="text-slate-100 px-3 md:px-28">
                Очередь — это абстрактная структура данных, в которой элементы
                хранятся и извлекаются в соответствии с принципом "первый пришел
                — первый ушел" (FIFO — First In, First Out). Это означает, что
                первый элемент, добавленный в очередь, также будет первым,
                который будет из нее удален. Добавление элементов (или
                "вставка") обычно происходит с одного конца, называемого
                "хвостом", а удаление элементов (или "извлечение") — с другого
                конца, называемого "головой". Очереди часто используются в
                компьютерных науках, особенно в задачах, связанных с управлением
                потоками данных, планированием задач и широким спектром
                алгоритмов, где необходимо управлять порядком обработки
                элементов.
            </div>

            {/* <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Slide data={stackData} type="stack" />
                <Slide data={queueData} type="queue" />
                <OrbitControls />
            </Canvas> */}
        </>
    );
};

export default Presentation;
