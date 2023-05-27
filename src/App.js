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
}
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='white';
      setAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#00004e';
      setAlert('Light mode has been enabled','success')
    }
  }

  return (
    <div> 
      <Navbar  mode={mode} toggelMode={toggleMode}/>  
      <Alert  alert={showAlert} />
      <Home  mode={mode} toggelMode={toggleMode} alert={showAlert}/>       
    </div>
  );
}

export default App;
