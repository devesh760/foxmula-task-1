import logo from './logo.svg';
import sky from './Assets/sky.png'
import landscape from './Assets/landscape.png'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [scrollY,setScrollY] = useState(0)
  useEffect(()=>{
    window.addEventListener('scroll',(e)=>{
      setScrollY(window.scrollY.toFixed(0));
      console.log(window.scrollY.toFixed(0));
    })
    window.addEventListener('click',()=>{
      if(window.scrollY >0){
        window.scrollTo(0,0)
      }
      else{
        window.scrollTo(0,1000);
      }
    })
  },[])

  let titleStyle = {
     top:scrollY*0.6
  }

  return (
    <div className="App">
      <div className='sky'></div>
      {/* <img className='sky' src={sky}/> */}
      <h1 style={titleStyle}>TREKK</h1>
      <div className='land'></div>
      {/* <img className='land' src={landscape}/> */}
    </div>
  );
}

export default App;
