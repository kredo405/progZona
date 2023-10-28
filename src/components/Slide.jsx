import React, { useState } from "react";
import { Box, Text } from "@react-three/drei";

const Slide = ({ data, type }) => {
    let layout = [];
    if (type === "stack") {
        for (let i = 0; i < data.length; i++) {
            layout.push(
                <group key={i} position={[0, i, 0]}>
                    <Box args={[1, 1, 1]}>
                        <meshStandardMaterial
                            attach="material"
                            color={data[i].color}
                        />
                    </Box>
                    <Text
                        position={[0, 0, 0.6]}
                        fontSize={0.2}
                        color="black"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {data[i].description}
                    </Text>
                </group>
            );
        }
    } else if (type === "queue") {
        for (let i = 0; i < data.length; i++) {
            layout.push(
                <group key={i} position={[i, 0, 0]}>
                    <Box args={[1, 1, 1]}>
                        <meshStandardMaterial
                            attach="material"
                            color={data[i].color}
                        />
                    </Box>
                    <Text
                        position={[0, 0, 0.6]}
                        fontSize={0.2}
                        color="black"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {data[i].description}
                    </Text>
                </group>
            );
        }
    }

    return <>{layout}</>;
};

export default Slide;
