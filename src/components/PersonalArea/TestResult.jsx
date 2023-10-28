import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
const TestResult = () => {
    return (
        <>
            <Result icon={<SmileOutlined />} />
            <p className="text-slate-100 text-center font-bold text-lg">
                Отлично! Тест завершен
            </p>
        </>
    );
};
export default TestResult;
