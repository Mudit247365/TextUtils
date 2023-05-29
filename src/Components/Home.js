
import React, { useState } from 'react';


function Home(props) {
  const Uppercase = () => {
    console.log("Uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const Lowercase = () => {
    console.log("Lowercase is clicked");
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
  };
  const Clear = () => {
    console.log("Clear is clicked");
    let newtext = '';
    setText(newtext);
  };
  const Copy1 = () => {
    console.log("Copy1 is clicked");
    let newtext = text.split(/\s+/);
    setText(newtext.join(" "));
  };
  const Copy = () => {
    const textarea = document.getElementById('mybox');
    if (textarea) {
      textarea.select();
      textarea.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand('copy');
      // Optional: Show a success message or perform any other desired actions
      alert('Text copied to clipboard!');
    };
  
      
  };
  const handleOnChange = (event) => {
    console.log("Uppercase is clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>

     
      <div>
      
       

        <div
          className="container"
          style={{ border: "2px transparent ", justifyContent: "center"  }}
        >
          <h1 style={{color:props.mode==='light'? 'white':'black'}}>
            <b>Enter the text to Analyis mudit</b>
          </h1>
          
          <div className="container">
            <div className="mb-3 ">
              <textarea style={{backgroundColor: props.mode==='light'? 'grey':'white',color:props.mode==='light'? 'white':'black'}} className="form-control"id="mybox" rows={'10'}column={'50'}onChange={handleOnChange}value={text}            ></textarea>
            </div>
            <button onClick={Uppercase} className="btn btn-primary mx-2"> Convert t </button>
            <button onClick={Lowercase} className="btn btn-primary  mx-2"> Convert to Lowercase </button>   
            <button onClick={Clear} className="btn btn-primary mx-2"> Clear </button>         
            <button onClick={Copy}  className="btn btn-primary mx-2"> Copy  </button>
            <button onClick={Copy1} className="btn btn-primary mx-2">Remove Extra Spaces</button></div>           
           
          <div className="container my-3">
            <h1 style={{color:props.mode==='light'? 'white':'black'}}>Your text summary</h1>
            <p style={{color:props.mode==='light'? 'white':'black'}}><b>{text.split(" ").length} words & {text.length} characters & {0.008*text.length} minutes read </b></p>
          </div>
          <div style={{marginLeft:'12x'}}>
            <h2 style={{color:props.mode==='light'? 'white':'black'}}>Preview</h2>
            <p style={{color:props.mode==='light'? 'white':'black'}}> {text.length>0? text:'Enter text in the above text box'}</p>
                
               
               
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
