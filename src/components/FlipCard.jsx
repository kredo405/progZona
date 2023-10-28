import { Flipped } from "react-flip-toolkit";

const stackData = ["Elem 1", "Elem 2", "Elem 3", "Elem 4"];
const queueData = ["Elem A", "Elem B", "Elem C", "Elem D"];
const createCardFlipId = (type, index) => `${type}-item-${index}`;

const shouldFlip = (index) => (prev, current) =>
    index === prev || index === current;

function FlipCard({ type, index, content, onClick }) {
    return (
        <Flipped
            flipId={createCardFlipId(type, index)}
            stagger="card"
            shouldInvert={shouldFlip(index)}
        >
            <div
                className="w-full cursor-pointer bg-gray-200 p-4 m-2"
                onClick={() => onClick(type, index)}
            >
                <Flipped inverseFlipId={createCardFlipId(type, index)}>
                    <div className="flex items-center space-x-4">
                        <Flipped
                            flipId={`${type}-avatar-${index}`}
                            stagger="card-content"
                            shouldFlip={shouldFlip(index)}
                            delayUntil={createCardFlipId(type, index)}
                        >
                            <div className="w-16 h-16 rounded-full bg-gray-400" />
                        </Flipped>
                        <div className="text-lg">{content}</div>
                    </div>
                </Flipped>
            </div>
        </Flipped>
    );
}

export default FlipCard;
