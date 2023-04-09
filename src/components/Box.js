import React, { useEffect, useState } from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import codeTexture from "../images/threeSnippet.JPG";
import css from "../images/css.png";
import etherjs from "../images/ethersjs.png";
import git from "../images/gitpng.png";
import html from "../images/HTML.png";
import javascript from "../images/javascript.png";
import polkadotjs from "../images/polkadotjs.JPG";
import reactjs from "../images/reactjs.png";
import reactNative from "../images/reactNative.png";
import threejs from "../images/threejs.png";
import web3 from "../images/web3.webp";



export default function Box() {
     const [index, setIndex] = useState(0);
   
    
    
    const texture = [
      codeTexture,
      css,
      etherjs,
      git,
      html,
      polkadotjs,
      reactjs,
      reactNative,
      threejs,
      web3,
      javascript,
    ];
    
    

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index === texture.length - 1 ? 0 : index + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);




    const textureView = useLoader(TextureLoader, texture);



    return (
      <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        {/**<meshLambertMaterial attach="material" color="blue" /> */}
        {/** <meshStandardMaterial map={colorFood} /> */}
        <meshStandardMaterial map={textureView[index]} />
      </mesh>
    );
}