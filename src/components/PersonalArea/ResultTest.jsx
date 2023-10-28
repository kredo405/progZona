import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
const ResultTest = () => (
    <Result icon={<SmileOutlined />} title="Отлично! Тест пройден" />
);
export default ResultTest;
