import React from 'react';
import { Slider as AntSlider, Typography } from 'antd';

interface CustomSliderProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    step: number;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ label, value, onChange, min, max, step }) => (
    <div>
        <Typography.Text type="secondary" style={{ fontSize: 11 }}>
            {label} — {value.toFixed(2)}
        </Typography.Text>
        <AntSlider
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            style={{ margin: '4px 0' }}
        />
    </div>
);

export default CustomSlider;
