import Home from './Components/Home';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';


function App(props) {
const [mode, setMode] = useState('dark');
const [alert, setAlert] = useState(null);
const showAlert=(message,type)=>{
    setAlert({
        msg: message,
        type: type
      })
        setTimeout(() => {
          setAlert(null)
      
        }, 1500);
}

const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = 'white';
    showAlert('Light mode has been enabled', 'success');
    // Call showAlert function with the message and type
  } else {
    setMode('light');
    document.body.style.backgroundColor = '#00004e';
    showAlert('Dark mode has been enabled', 'success');
 // Call showAlert function with the message and type
  }
};


  return (
    <div> 
      <Navbar  mode={mode} toggelMode={toggleMode}/>  
      <Alert  alert={alert} />
      <Home  mode={mode} toggelMode={toggleMode} alert={showAlert}/>       
    </div>
  );
}

export default App;
