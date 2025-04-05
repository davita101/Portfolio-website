import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGLTF, useVideoTexture} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../../constants/index.js";


export function ProjectComputer(props) {
    const {nodes, materials} = useGLTF('/models/computer.glb')
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1280});
    const isMobile = useMediaQuery({maxWidth: 777})

    const sizes = calculateSizes(0, isMobile, isTablet)
    const group = useRef()
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const animation = gsap
            .timeline({
                repeat: -1,
            })
            .to(group.current.rotation, {
                scrollTrigger: {
                    start: "70% center",
                    end: "bottom bottom",
                    scrub: true,
                },
                // x: isMobile ? group.current.rotation.x + 1.2 : group.current.rotation.x + 1.5,
                ease: "power2.in",
                duration: 10,
            })
            .to(group.current.position, {
                scrollTrigger: {
                    start: "70% center", end: "bottom bottom", scrub: true,
                },
                x: isTablet && group.current.position.x + 1,
                ease: "easeOutQuad",
                duration: 5,
            })
        return () => {
            animation.endTime()
        }

    })
    const video = useVideoTexture(props.videoUrl)
    return (
        <group ref={group} {...props}
               // scale={sizes.aboutScale}
               // rotation={[1.5, 0, 0]}
               // position={sizes.aboutPosition}
               dispose={null}>
            <group scale={20} rotation={[-Math.PI / 2 + .3, 0, 0]}>
                <group position={[0.368, -0.441, -0.295]} rotation={[0, -0.747, 0]} scale={0.06}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_9.geometry}
                        material={materials.Merah}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_10.geometry}
                        material={materials.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_11.geometry}
                        material={materials.Lightbar}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_12.geometry}
                        material={materials.Lightbar}
                    />
                </group>
                <group
                    position={[0.765, -0.447, -0.486]}
                    rotation={[-0.175, 0, 0]}
                    scale={[0.435, 0.668, 0.435]}>
                    <group
                        position={[-1.76, 0.892, -0.001]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[1, 1, 0.651]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_19.geometry}
                            material={materials.Layar}
                        >

                            <meshBasicMaterial map={video}/>
                        </mesh>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_20.geometry}
                            material={materials.Touchpad}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_21.geometry}
                            material={materials.Metal_1}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_22.geometry}
                            material={materials.Logo}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_23.geometry}
                            material={materials.Web_Cam}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_17.geometry}
                        material={materials.Metal_1}
                        position={[-3.381, 0.111, 0.016]}
                        scale={[1.035, 0.68, 1]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_25.geometry}
                        material={materials.Logo_Text}
                        position={[-3.042, 0.158, 0]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.057, 0.057, 0.037]}
                    />
                </group>
                <group position={[0, -0.446, -0.009]} scale={0.435}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_27.geometry}
                        material={materials.Metal_1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_28.geometry}
                        material={materials.Touchpad}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_29.geometry}
                        material={materials.Metal_2}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_30.geometry}
                        material={materials.Lightbar}
                    />
                </group>
                <group position={[0.6, -0.441, -0.091]} scale={0.032}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_82.geometry}
                        material={materials.Keyboard}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_83.geometry}
                        material={materials.Bawah}
                    />
                </group>
                <group position={[0, -0.517, -0.003]} rotation={[-Math.PI, 0, 0]} scale={0.435}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_101.geometry}
                        material={materials['Material.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_102.geometry}
                        material={materials.Metal_1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_103.geometry}
                        material={materials.Hole}
                    />
                </group>
                <group position={[-0.62, -0.499, 0.44]} scale={0.435}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_105.geometry}
                        material={materials.Metal_1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_106.geometry}
                        material={materials.Bawah}
                    />
                </group>
                <group
                    position={[0.872, -0.443, 0.49]}
                    rotation={[-Math.PI, 0.684, 0]}
                    scale={[0.765, 0.435, 0.001]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_108.geometry}
                        material={materials.Logo}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_109.geometry}
                        material={materials.material_0}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.Logo_AMD}
                    position={[-0.636, -0.445, 0.153]}
                    scale={0.045}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.material}
                    position={[0.612, -0.441, -0.357]}
                    scale={0.008}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials.Teks_Bawah}
                    position={[-0.653, -0.524, -0.441]}
                    rotation={[0, 0, Math.PI]}
                    scale={0.105}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_32.geometry}
                    material={materials.Keyboard}
                    position={[-0.476, -0.441, -0.019]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_34.geometry}
                    material={materials.Keyboard}
                    position={[-0.512, -0.441, -0.092]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_36.geometry}
                    material={materials.Keyboard}
                    position={[-0.531, -0.441, -0.164]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_38.geometry}
                    material={materials.Keyboard}
                    position={[-0.642, -0.441, -0.237]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_40.geometry}
                    material={materials.Keyboard}
                    position={[-0.642, -0.441, -0.164]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_42.geometry}
                    material={materials.Keyboard}
                    position={[-0.642, -0.441, -0.091]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_44.geometry}
                    material={materials.Keyboard}
                    position={[-0.596, -0.441, -0.019]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_46.geometry}
                    material={materials.Keyboard}
                    position={[-0.642, -0.441, 0.055]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_48.geometry}
                    material={materials.Keyboard}
                    position={[-0.549, -0.441, 0.055]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_50.geometry}
                    material={materials.Keyboard}
                    position={[-0.328, -0.441, 0.055]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_52.geometry}
                    material={materials.Keyboard}
                    position={[0.044, -0.441, 0.055]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_54.geometry}
                    material={materials.Keyboard}
                    position={[0.119, -0.441, 0.055]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_56.geometry}
                    material={materials.Keyboard}
                    position={[0.343, -0.441, -0.091]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_58.geometry}
                    material={materials.Keyboard}
                    position={[0.288, -0.441, -0.019]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_60.geometry}
                    material={materials.Keyboard}
                    position={[0.305, -0.441, -0.164]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_62.geometry}
                    material={materials.Keyboard}
                    position={[0.352, -0.441, -0.237]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_64.geometry}
                    material={materials.Keyboard}
                    position={[-0.642, -0.441, -0.31]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_66.geometry}
                    material={materials.Keyboard}
                    position={[-0.494, -0.441, -0.31]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_68.geometry}
                    material={materials.Keyboard}
                    position={[-0.174, -0.441, -0.31]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_70.geometry}
                    material={materials.Keyboard}
                    position={[0.146, -0.441, -0.31]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_72.geometry}
                    material={materials.Keyboard}
                    position={[0.381, -0.441, 0.093]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_74.geometry}
                    material={materials.Keyboard}
                    position={[0.303, -0.441, 0.044]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_76.geometry}
                    material={materials.Keyboard}
                    position={[0.478, -0.441, 0.055]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_78.geometry}
                    material={materials.Keyboard}
                    position={[0.6, -0.441, 0.055]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_80.geometry}
                    material={materials.Keyboard}
                    position={[0.6, -0.441, -0.019]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_85.geometry}
                    material={materials.Keyboard}
                    position={[0.6, -0.441, -0.164]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_87.geometry}
                    material={materials.Keyboard}
                    position={[0.6, -0.441, -0.237]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_89.geometry}
                    material={materials.Keyboard}
                    position={[0.442, -0.441, -0.31]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_91.geometry}
                    material={materials.Keyboard}
                    position={[0.661, -0.441, -0.237]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_93.geometry}
                    material={materials.Keyboard}
                    position={[0.661, -0.441, -0.164]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_95.geometry}
                    material={materials.Keyboard}
                    position={[0.661, -0.441, -0.019]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_97.geometry}
                    material={materials.Keyboard}
                    position={[-0.494, -0.441, -0.372]}
                    scale={0.032}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_99.geometry}
                    material={materials.Keyboard}
                    position={[0.612, -0.441, -0.357]}
                    scale={0.034}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_111.geometry}
                    material={materials.Logo_RTX}
                    position={[-0.51, -0.445, 0.153]}
                    scale={0.045}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_113.geometry}
                    material={materials.Logo_ROG}
                    position={[-0.423, -0.43, -0.538]}
                    rotation={[2.918, 0, Math.PI]}
                    scale={0.435}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_115.geometry}
                    material={materials.Merah}
                    position={[0.621, -0.441, -0.387]}
                    scale={0.025}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_117.geometry}
                    material={materials.Indikator}
                    position={[0.148, -0.441, -0.412]}
                    scale={0.025}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_119.geometry}
                    material={materials.Teks_Bawah}
                    position={[0.686, -0.524, -0.468]}
                    scale={[-0.021, 0.021, 0.021]}
                />
            </group>
        </group>)
}

useGLTF.preload('/models/computer.glb')
