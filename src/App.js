import Home from './Components/Home';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import Down from './Components/Down';



function App(props) {
const [mode, setMode] = useState('light');
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
    // document.title='TextUtils - Light Mode'
    showAlert('Light mode has been enabled', 'Success');
    // Call showAlert function with the message and type
  } else {
    setMode('light');
    document.body.style.backgroundColor = '#00004e';
    // document.title='TextUtils - Dark Mode'
    showAlert('Dark mode has been enabled', 'Success');
 // Call showAlert function with the message and type
  }
};
  return (
    <div> 
      <Navbar  mode={mode} toggelMode={toggleMode}/>  
      <Alert  alert={alert} />
      <Home  mode={mode}  toggelMode={toggleMode} alert={showAlert}/>   
      <Down mode={mode}/>
      
     
    </div>
  );
}

export default App;
