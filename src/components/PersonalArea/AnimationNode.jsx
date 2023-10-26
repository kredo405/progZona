import "../../assets/style.css";
import React, { useState, useEffect } from "react";

const MemoryAnimation = () => {
    const [obj, setObj] = useState(null);

    useEffect(() => {
        const createObject = () => {
            const newObject = { data: "Some data" };
            setObj(newObject);
        };

        const deleteObject = () => {
            setObj(null);
        };

        createObject();

        const timeout = setTimeout(() => {
            deleteObject();
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div>
            {obj ? (
                <div className="object">
                    <span>{obj.data}</span>
                </div>
            ) : (
                <div className="empty">Object is deleted</div>
            )}
        </div>
    );
};

export default MemoryAnimation;
