import React, { useState, useEffect } from "react";
import { Button, Modal, Spin } from "antd";
import CodeHighlight from "../CodeHightLight";
import QaService from "../../services/openAiApi";

interface HelpAiProps {
    isModalOpen: boolean;
    handleCancel: () => void;
    task: string;
    description: string;
}

const HelpAi: React.FC<HelpAiProps> = ({
    isModalOpen,
    handleCancel,
    task,
    description,
}) => {
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await QaService.askQuestion(
                    `Мне нужно решить задачу ${task} на C#. В ответе опиши свои шаги и решение на русском языке. `,
                    `${description}. `
                );
                console.log(response);
                setIsLoading(false);

                setResponse(response.result);
            } catch (error) {
                console.error(error);
            }
        }
        if (isModalOpen) {
            setIsLoading(true);
            fetchData();
        }
    }, [isModalOpen, task, description]);
    return (
        <>
            <Modal title="Помощь ИИ" open={isModalOpen} onCancel={handleCancel}>
                {isLoading ? (
                    <div className="flex justify-center items-center">
                        <Spin />{" "}
                    </div>
                ) : (
                    <code>{response}</code>
                )}
            </Modal>
        </>
    );
};

export default HelpAi;
