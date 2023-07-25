import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
// import Textform from './Components/Textform';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import react, { useState } from 'react' 


function App() {
  const [mode, setmode] = useState('dark');

  const tooglemode=()=>{
    if(mode==="dark"){
      setmode('light');
      document.body.style.background='white';
      setInterval(() => {
        document.title='install this';
        
      }, 1000);
    }
    else{
      setmode('dark');
      document.body.style.background='black';
      setInterval(() => {
        document.title='not do this';
        
      }, 1500);

    }
  }
  return (
    <> 
     
  <div className='container'>
  <Navbar title = "activelink" mode={mode} tooglemode={tooglemode} />
  {/* <Router> */}
  
  {/* <Routes>
        <Route path="/about" element={<About />} />
      </Routes>

   {/* <Textform heading = "Enter the text here" mode={mode} /> */}
    {/* </Router> */} */}

          </div>
    </>

  );
}

export default App;
