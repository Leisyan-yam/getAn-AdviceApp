import { useState } from 'react';
import { useEffect } from 'react';
import video from './sky.mp4'
import './App.css';

function App() {
const [advice, setAdvice] = useState('') 

useEffect(() => {
  getAdvice()
},[])

const getAdvice = async() => {
  const response = await fetch(`https://www.boredapi.com/api/activity/ `)
  const data = await response.json();
  setAdvice(data.activity)
} 

  return (
    <div className="content">
      <video className='video' muted loop autoPlay> 
      <source src={video} type="video/mp4"/>
      </video>
    <div className="App">
      <h2> Are you bored? 🤷 </h2>
      <h2> Nothing to do again? 🤔 </h2>
    <h2> I have an idea !!!🤩 Click the buttom and get your advice 😉</h2>
    <button className='btn' onClick={getAdvice}> Get an advice</button>
    <h1>{advice}</h1>
    <img className='giff' src="https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif" alt='giff'/>
    </div>
    </div>
  );
}
  
export default App;
