import React from 'react';
import { Card, Space, Button, Select, Progress } from 'antd';
import { PlayCircleOutlined, StopOutlined } from '@ant-design/icons';
import { TARGET_OPTIONS } from '../constants';
import { Target } from '../types';

interface ToolbarProps {
    running: boolean;
    setRunning: React.Dispatch<React.SetStateAction<boolean>>;
    targets: Target[];
    setTargets: React.Dispatch<React.SetStateAction<Target[]>>;
    progress: number;
}

const Toolbar: React.FC<ToolbarProps> = ({ running, setRunning, targets, setTargets, progress }) => {
    return (
        <div style={{ position: "absolute", top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
            <Card size="small" style={{ backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.7)" }}>
                <Space wrap>
                    <Button
                        type="primary"
                        size="small"
                        icon={running ? <StopOutlined /> : <PlayCircleOutlined />}
                        onClick={() => setRunning((v) => !v)}
                    >
                        {running ? "Stop Simulation" : "Run Simulation"}
                    </Button>
                    <Select
                        mode="multiple"
                        style={{ minWidth: 220 }}
                        value={targets}
                        onChange={setTargets}
                        options={TARGET_OPTIONS}
                    />
                    <div style={{ width: 200 }}>
                        <Progress percent={progress} />
                    </div>
                </Space>
            </Card>
        </div>
    );
};

export default Toolbar;
