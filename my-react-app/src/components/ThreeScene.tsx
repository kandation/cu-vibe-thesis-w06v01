import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import * as THREE from 'three';
import { BOX_B0, BOX_C0 } from '../constants';
import BottomPanel from './BottomPanel';
import { Box, Cam } from '../types';

interface CameraControllerProps {
    cam: Cam;
}

const CameraController: React.FC<CameraControllerProps> = ({ cam }) => {
    const { camera } = useThree();
    useEffect(() => {
        camera.fov = cam.fov;
        camera.position.set(cam.x, cam.y, cam.z);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
    }, [camera, cam]);
    return null;
};

interface ThreeSceneProps {
    cn: Box;
    cam: Cam;
    boxA: Box;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ cn, cam, boxA }) => {
    return (
        <div style={{ flex: 1, height: "100%", position: 'relative' }}>
            <Canvas>
                <CameraController cam={cam} />
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 10, 7.5]} intensity={0.8} />
                <Grid args={[100, 100]} infiniteGrid fadeDistance={25} fadeStrength={4} />
                <OrbitControls enableDamping dampingFactor={0.05} minDistance={5} maxDistance={100} />

                <group position={[cn.x, cn.y, cn.z]}>
                    <mesh scale={[cn.w, cn.h, cn.l]}>
                        <boxGeometry />
                        <meshStandardMaterial color="#0057e7" transparent opacity={0.2} side={THREE.DoubleSide} />
                    </mesh>
                    <lineSegments scale={[cn.w, cn.h, cn.l]}>
                        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(1, 1, 1)]} />
                        <lineBasicMaterial color="#003399" />
                    </lineSegments>
                </group>

                <mesh position={[boxA.x, boxA.y, boxA.z]} scale={[boxA.w, boxA.h, boxA.l]}>
                    <boxGeometry />
                    <meshStandardMaterial color="#d62d20" />
                </mesh>

                <mesh position={[BOX_B0.x, BOX_B0.y, BOX_B0.z]} scale={[BOX_B0.w, BOX_B0.h, BOX_B0.l]}>
                    <boxGeometry />
                    <meshStandardMaterial color="#ffd700" />
                </mesh>

                <mesh position={[BOX_C0.x, BOX_C0.y, BOX_C0.z]} scale={[BOX_C0.w, BOX_C0.h, BOX_C0.l]}>
                    <boxGeometry />
                    <meshStandardMaterial color="#008751" />
                </mesh>
            </Canvas>
            <BottomPanel />
        </div>
    );
};

export default ThreeScene;
