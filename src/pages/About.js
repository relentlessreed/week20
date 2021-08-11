import React from 'react';
import headshotSmallImg from '../photos/headshotsmall.jpg';

export default function About() {
  return (
    <div className="aboutMeContainer">
      <img src={headshotSmallImg} alt="HeadShot" />
      <div id="aboutCard">
        <p id="aboutText">I am a 2021 Kansas University full-stack software developer graduate, with experience in front and backend. I have a passion for building applications to help better
          the world, and a strong drive to always be learning about tech! When I am not coding, I am either cooking/skateboarding/playing music/ or travelling.</p>
      </div>
    </div>
  );
}
