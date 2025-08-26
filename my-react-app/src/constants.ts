import { Box, Cam, SliderParam } from './types';

// ---------- Defaults ----------
export const CAM0: Cam = { fov: 50, z: 18, x: 0, y: 5 };
export const CN0: Box = { w: 10, h: 8, l: 20, x: 0, y: 4, z: 0 }; // y is half of h to sit on grid
export const BOX_A0: Box = { w: 2, h: 3, l: 4, x: -2, y: 1.5, z: 5 };
export const BOX_B0: Box = { w: 3, h: 3, l: 3, x: 2, y: 1.5, z: 2 };
export const BOX_C0: Box = { w: 4, h: 2, l: 5, x: 1, y: 1, z: -5 };

// ---------- Schemas for sliders ----------
export const C_SCHEMA: SliderParam[] = [
    { key: "w", label: "Width [Wc]", min: 1, max: 20, step: 0.1 },
    { key: "h", label: "Height [Hc]", min: 1, max: 20, step: 0.1 },
    { key: "l", "label": "Length [Lc]", min: 1, max: 40, step: 0.1 },
    { key: "x", "label": "Position X", min: -10, max: 10, step: 0.1 },
    { key: "z", "label": "Position Z", min: -10, max: 10, step: 0.1 },
];
export const CAM_SCHEMA: SliderParam[] = [
    { key: "fov", label: "Field of View (FOV)", min: 15, max: 120, step: 1 },
    { key: "z", label: "Distance Z", min: 5, max: 100, step: 0.1 },
    { key: "x", label: "Position X", min: -50, max: 50, step: 0.1 },
    { key: "y", label: "Position Y", min: 1, max: 50, step: 0.1 },
];
export const BOX_A_SCHEMA: SliderParam[] = [
    { key: "w", label: "Width", min: 0.1, max: 10, step: 0.1 },
    { key: "h", label: "Height", min: 0.1, max: 10, step: 0.1 },
    { key: "l", label: "Length", min: 0.1, max: 10, step: 0.1 },
    { key: "x", label: "Position X", min: -10, max: 10, step: 0.1 },
    { key: "z", label: "Position Z", min: -10, max: 10, step: 0.1 },
];

export const TARGET_OPTIONS = ["BoxA", "BoxB", "BoxC", "Camera", "Container"].map((t) => ({ label: t, value: t }));
