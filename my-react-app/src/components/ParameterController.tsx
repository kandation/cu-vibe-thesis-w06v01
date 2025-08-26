import React from 'react';
import { Card, Space, Typography, Divider } from 'antd';
import { AppstoreOutlined, CameraOutlined } from '@ant-design/icons';
import CustomSlider from './CustomSlider';
import { C_SCHEMA, CAM_SCHEMA, BOX_A_SCHEMA } from '../constants';
import { Target, Box, Cam, SliderParam } from '../types';

interface ParameterControllerProps {
    targets: Target[];
    cn: Box;
    setCn: React.Dispatch<React.SetStateAction<Box>>;
    cam: Cam;
    setCam: React.Dispatch<React.SetStateAction<Cam>>;
    boxA: Box;
    setBoxA: React.Dispatch<React.SetStateAction<Box>>;
}

const ParameterController: React.FC<ParameterControllerProps> = ({ targets, cn, setCn, cam, setCam, boxA, setBoxA }) => {

    const renderSliders = (schema: SliderParam[], data: Box | Cam, setData: React.Dispatch<React.SetStateAction<any>>) => schema.map((p) => (
        <CustomSlider
            key={p.key}
            label={p.label}
            min={p.min} max={p.max} step={p.step}
            value={data[p.key as keyof (Box | Cam)]}
            onChange={(v) => {
                const newY = p.key === 'h' && 'h' in data ? v / 2 : data.y;
                setData({ ...data, [p.key]: v, y: newY });
            }}
        />
    ));

    return (
        <div style={{ position: "absolute", left: 16, top: 16, width: 300, maxHeight: 'calc(100vh - 32px)', overflowY: 'auto', zIndex: 10 }}>
            <Card
                size="small"
                title={<Space><AppstoreOutlined />Parameter Controller</Space>}
                style={{ backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.7)" }}
            >
                {targets.includes("Container") && (
                    <>
                        <Typography.Paragraph type="secondary" style={{ marginBottom: 6 }}>Cargo Container</Typography.Paragraph>
                        {renderSliders(C_SCHEMA, cn, setCn)}
                        <Divider style={{ margin: "8px 0" }} />
                    </>
                )}
                {targets.includes("Camera") && (
                    <>
                        <Typography.Paragraph type="secondary" style={{ marginBottom: 6 }}><CameraOutlined /> Camera</Typography.Paragraph>
                        {renderSliders(CAM_SCHEMA, cam, setCam)}
                        <Divider style={{ margin: "8px 0" }} />
                    </>
                )}
                {targets.includes("BoxA") && (
                    <>
                        <Typography.Paragraph type="secondary" style={{ marginBottom: 6 }}>Box A (Red)</Typography.Paragraph>
                        {renderSliders(BOX_A_SCHEMA, boxA, setBoxA)}
                    </>
                )}
            </Card>
        </div>
    );
};

export default ParameterController;
