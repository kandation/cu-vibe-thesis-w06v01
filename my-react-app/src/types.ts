export interface Box {
  w: number;
  h: number;
  l: number;
  x: number;
  y: number;
  z: number;
}

export interface Cam {
  fov: number;
  z: number;
  x: number;
  y: number;
}

export type Target = "BoxA" | "BoxB" | "BoxC" | "Camera" | "Container";

export interface SliderParam {
  key: keyof Box | keyof Cam;
  label: string;
  min: number;
  max: number;
  step: number;
}
