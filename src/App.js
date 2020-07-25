import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import Car from './images/car.png';
import Wheels from './images/wheel.png';
import Clouds from './images/cloud.gif';
import Bird from './images/bird.gif';

function App() {  
  const {ref: road, getAnimation: highwayAnim } = useWebAnimations({
    keyframes: [
        {transform: 'translateX(-1600px)'},        
    ],
    timing: {
      duration: 5000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const { ref: city, getAnimation: cityAnim } = useWebAnimations({
    keyframes: [
        {transform: 'translateX(-1400px)'},        
    ],
    timing: {
      duration: 20000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const { ref: car, getAnimation: carAnim } = useWebAnimations({
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
  const {ref: wheel1, getAnimation: wheel1Anim } = useWebAnimations({
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
  const {ref: wheel2, getAnimation: wheel2Anim } = useWebAnimations({
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
  const { ref: cloud1, getAnimation: cloud1Anim } = useWebAnimations({
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
  const { ref: cloud2, getAnimation: cloud2Anim } = useWebAnimations({
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
  const { ref: cloud3, getAnimation: cloud3Anim } = useWebAnimations({
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
  const {ref: bird, playState ,getAnimation: birdAnim} = useWebAnimations({
    keyframes: [
      { transform: 'translate(0,0px)' },
    { transform: 'translate(1500px,0px)' }              
    ],
    timing: {
      duration: 21000,
      iterations: Infinity,      
      easing: "linear",
    }
  });  
  const animPause = () => {
    birdAnim().pause();
    cloud1Anim().pause();
    cloud2Anim().pause();
    cloud3Anim().pause();
    wheel1Anim().pause();
    wheel2Anim().pause();
    highwayAnim().pause();
    cityAnim().pause();
    carAnim().pause();
  }
const animPlay = () => {
  birdAnim().play();
  cloud1Anim().play();
  cloud2Anim().play();
  cloud3Anim().play();
  wheel1Anim().play();
  wheel2Anim().play();
  highwayAnim().play();
  cityAnim().play();
  carAnim().play();
}
const animReverse = () => {
  birdAnim().reverse();
  cloud1Anim().reverse();
  cloud2Anim().reverse();
  cloud3Anim().reverse();
  wheel1Anim().reverse();
  wheel2Anim().reverse();
  highwayAnim().reverse();
  cityAnim().reverse();
  carAnim().reverse();
}
const animSpeedUp = () => {
  const animation1 = birdAnim();
  const animation2 = cloud1Anim();
  const animation3 = cloud2Anim();
  const animation4 = cloud3Anim();
  const animation5 = wheel1Anim();
  const animation6 = wheel2Anim();
  const animation7 = highwayAnim();
  const animation8 = cityAnim();
  const animation9 = carAnim();  
  animation1.updatePlaybackRate(animation1.playbackRate * 1.5);
  animation2.updatePlaybackRate(animation2.playbackRate * 1.5);
  animation3.updatePlaybackRate(animation3.playbackRate * 1.5);
  animation4.updatePlaybackRate(animation4.playbackRate * 1.5);
  animation5.updatePlaybackRate(animation5.playbackRate * 1.5);
  animation6.updatePlaybackRate(animation6.playbackRate * 1.5);
  animation7.updatePlaybackRate(animation7.playbackRate * 1.5);
  animation8.updatePlaybackRate(animation8.playbackRate * 1.5);
  animation9.updatePlaybackRate(animation9.playbackRate * 1.5);
}
const animSpeedDown = () => {
  const animation1 = birdAnim();
  const animation2 = cloud1Anim();
  const animation3 = cloud2Anim();
  const animation4 = cloud3Anim();
  const animation5 = wheel1Anim();
  const animation6 = wheel2Anim();
  const animation7 = highwayAnim();
  const animation8 = cityAnim();
  const animation9 = carAnim();  
  animation1.updatePlaybackRate(animation1.playbackRate * 0.5);
  animation2.updatePlaybackRate(animation2.playbackRate * 0.5);
  animation3.updatePlaybackRate(animation3.playbackRate * 0.5);
  animation4.updatePlaybackRate(animation4.playbackRate * 0.5);
  animation5.updatePlaybackRate(animation5.playbackRate * 0.5);
  animation6.updatePlaybackRate(animation6.playbackRate * 0.5);
  animation7.updatePlaybackRate(animation7.playbackRate * 0.5);
  animation8.updatePlaybackRate(animation8.playbackRate * 0.5);
  animation9.updatePlaybackRate(animation9.playbackRate * 0.5);
}


  return (
    <div className="App">
        <div className="animate">
            <span><b>Animation State: {playState}</b></span>
            <button onClick={animPause}>Pause</button>
            <button onClick={animPlay}>Play</button>
            <button onClick={animReverse}>Reverse</button>            
            <button onClick={animSpeedUp}>Speed Up</button>
            <button onClick={animSpeedDown}>Speed Down</button>
        </div>
      <div className="bird-div">
        <img src={Bird} ref={bird} alt="bird" className="bird" />        
      </div>
      <div className="cloud">
        <img src={Clouds} ref={cloud1} alt="cloud" />
        <img src={Clouds} ref={cloud2} alt="cloud" />
        <img src={Clouds} ref={cloud3} alt="cloud" />
      </div>      
      <div className="highway" ref={road}></div>
      <div className="city" ref={city}></div>
      <div className="car" ref={car}>        
          <img src={Car} alt="car" />
      </div>
      <div className="wheels">
          <img src={Wheels} ref={wheel1} alt="car" className="back-wheel" />
          <img src={Wheels} ref={wheel2} alt="car" className="front-wheel" />
      </div>
    </div>
  );
}
export default App;
