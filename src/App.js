import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import car from './images/car.png';
import wheels from './images/wheel.png';
import clouds from './images/cloud.gif';
import bird1 from './images/bird.gif';

function App() {  
  const highwayAnim = useWebAnimations({
    keyframes: [
        {transform: 'translateX(-1600px)'},        
    ],
    timing: {
      duration: 5000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const cityAnim = useWebAnimations({
    keyframes: [
        {transform: 'translateX(-1400px)'},        
    ],
    timing: {
      duration: 20000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const carAnim = useWebAnimations({
    keyframes: [
        {transform: 'translateY(-1px)'},        
        {transform: 'translateY(1px)'},        
        {transform: 'translateY(-1px)'},        
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const wheel1Anim = useWebAnimations({
    keyframes: [
        {transform: 'rotate(0deg'},
        {transform: 'rotate(360deg'},                 
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const wheel2Anim = useWebAnimations({
    keyframes: [
        {transform: 'rotate(0deg'},
        {transform: 'rotate(360deg'},                 
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const cloud1Anim = useWebAnimations({
    keyframes: [
      { transform: 'translate(1000px,0px)' },
      { transform: 'translate(-400px,0px)' }
    ],
    timing: {
      duration: 15000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const cloud2Anim = useWebAnimations({
    keyframes: [
      { transform: 'translate(1000px,0px)' },
      { transform: 'translate(-400px,0px)' }              
    ],
    timing: {
      duration: 15000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const cloud3Anim = useWebAnimations({
    keyframes: [
      { transform: 'translate(1000px,0px)' },
      { transform: 'translate(-400px,0px)' }              
    ],
    timing: {
      duration: 15000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const birdAnim = useWebAnimations({
    keyframes: [
      { transform: 'translate(0,0px)' },
    { transform: 'translate(1500px,0px)' }              
    ],
    timing: {
      duration: 20000,
      iterations: Infinity,      
      easing: "linear",
    }
  });
  return (
    <div className="App">
      <div className="bird-div">
        <img src={bird1} ref={birdAnim.ref} alt="bird" className="bird" />        
      </div>
      <div className="cloud">
        <img src={clouds} ref={cloud1Anim.ref} alt="cloud" />
        <img src={clouds} ref={cloud2Anim.ref} alt="cloud" />
        <img src={clouds} ref={cloud3Anim.ref} alt="cloud" />
      </div>      
      <div className="highway" ref={highwayAnim.ref}></div>
      <div className="city" ref={cityAnim.ref}></div>
      <div className="car" ref={carAnim.ref}>        
          <img src={car} alt="car" />
      </div>
      <div className="wheels">
          <img src={wheels} ref={wheel1Anim.ref} alt="car" className="back-wheel" />
          <img src={wheels} ref={wheel2Anim.ref} alt="car" className="front-wheel" />
      </div>
    </div>
  );
}
export default App;
