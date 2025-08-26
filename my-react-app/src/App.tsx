import React, { useState } from 'react';
import { ConfigProvider, theme, Layout } from 'antd';
import { CAM0, CN0, BOX_A0, BOX_B0, BOX_C0 } from './constants';
import ThreeScene from './components/ThreeScene';
import Toolbar from './components/Toolbar';
import ParameterController from './components/ParameterController';
import { Box, Cam, Target } from './types';

function App() {
    const [running, setRunning] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(30);
    const [targets, setTargets] = useState<Target[]>(["BoxA", "Container"]);

    const [cn, setCn] = useState<Box>(CN0);
    const [cam, setCam] = useState<Cam>(CAM0);
    const [boxA, setBoxA] = useState<Box>(BOX_A0);

    // These are static for now
    const [boxB] = useState<Box>(BOX_B0);
    const [boxC] = useState<Box>(BOX_C0);

    return (
        <ConfigProvider
            theme={{
                algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
                token: { fontSize: 13, borderRadius: 8, controlHeight: 30 },
                components: { Card: { padding: 8 }, Button: { paddingInline: 12 } }
            }}
        >
            <Layout style={{ height: "100vh", background: "#f0f2f5", overflow: 'hidden' }}>
                <Toolbar
                    running={running}
                    setRunning={setRunning}
                    targets={targets}
                    setTargets={setTargets}
                    progress={progress}
                />
                <Layout.Content style={{ position: "relative", flex: 1, display: 'flex' }}>
                    <ParameterController
                        targets={targets}
                        cn={cn} setCn={setCn}
                        cam={cam} setCam={setCam}
                        boxA={boxA} setBoxA={setBoxA}
                    />
                    <ThreeScene
                        cn={cn}
                        cam={cam}
                        boxA={boxA}
                    />
                </Layout.Content>
            </Layout>
        </ConfigProvider>
    );
}

export default App;
