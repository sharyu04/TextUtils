import React, {useState} from 'react';

import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [btnColor, setBtnColor] = useState('dark');
  const darkModeColor = () =>{
    console.log("darkcolormode triggered");
    setBtnColor('dark');
    if(mode==='dark'){
      document.body.style.backgroundColor = '#2d3339';
    }
  }
  
  const darkModeColor2 = () =>{
    console.log("darkcolormode1 triggered");
    setBtnColor('primary');
    if(mode==='dark'){
      document.body.style.backgroundColor = '#132033';
    }
  }
  const darkModeColor3 = () =>{
    console.log("darkcolormode1 triggered");
    setBtnColor('success');
    if(mode==='dark'){
      document.body.style.backgroundColor = '#172921';
    }
  }
  
  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode enabled","success");
      document.body.style.backgroundColor = '#2d3339';
      if(btnColor==='danger'){
        document.body.style.backgroundColor = '#3f292c';
      }
      else if(btnColor==='primary'){
        document.body.style.backgroundColor = '#132033';
      }
      else if(btnColor==='success'){
        document.body.style.backgroundColor = '#172921';
      }
    }
    else{
      setMode('light');
      showAlert("Dark mode disabled","success");
      document.body.style.backgroundColor = 'white';
    }
  }
  //alerts
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  darkModeColor2={darkModeColor2} darkModeColor3={darkModeColor3} darkModeColor={darkModeColor}/>
    <Alerts alert = {alert}/>
    <div className="container">
    <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUtils - word counter, character counter, convert to uppercase and lowercase" mode={mode} btnColor={btnColor}/>}/>
          <Route exact path="/about" element={<About mode={mode} btnColor={btnColor}/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
