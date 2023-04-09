import styled from "styled-components";
import "./styles.css";

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import Box from "./components/Box"

import { Canvas } from "@react-three/fiber";
import { OrbitControls  } from "@react-three/drei";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <Canvas>
        <OrbitControls enableZoom={false} /> {/**Adds light and colour to the box */}
        <Box className="canvas" />
        <ambientLight intensity={0.5} />{" "} {/**Adds light and colour to the box */}
        <directionalLight position={[-2, 5, 2]} intensity={1} />{" "}{/**Adds light and colour to the edge of the box */}
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 600px;
    
  }
`;
