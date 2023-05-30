
import React, { useState } from 'react';

function Home(props) {
  const Uppercase = () => {
    console.log("Uppercase is clicked");
    let newText = text.toUpperCase();
    props.alert('Convert to Uppercase', 'Success');
    setText(newText);
  };
  const Lowercase = () => {
    console.log("Lowercase is clicked");
    let newtext = text.toLocaleLowerCase();
    props.alert('Convert to Lowercase', 'Success');
    setText(newtext);
    
  };
  const Clear = () => {
    console.log("Clear is clicked");
    let newtext = '';
    props.alert('All text is Clear', 'Success');
    setText(newtext);
  };
  const Copy1 = () => {
    console.log("Copy1 is clicked");
    let newtext = text.split(/\s+/);
    props.alert('Removed extra spaces', 'Success');
    setText(newtext.join(" "));
  };
  const Copy = () => {
    const textarea = document.getElementById('mybox');
    if (textarea) {
      textarea.select();
      textarea.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand('copy');
      props.alert('Copy to Clipboard', 'Success');
      // Optional: Show a success message or perform any other desired actions
      
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
            <b>Enter the text to Analyis</b>
          </h1>
          
          <div className="container">
            <div className="mb-3 ">
              <textarea style={{backgroundColor: props.mode==='light'? 'grey':'white',color:props.mode==='light'? 'white':'black'}} className="form-control"id="mybox" rows={'10'}column={'50'}onChange={handleOnChange}value={text}            ></textarea>
            </div>
            <button onClick={Uppercase} className="btn btn-primary mx-2"> Convert to Uppercase </button>
            <button onClick={Lowercase} className="btn btn-primary  mx-2"> Convert to Lowercase </button>   
            <button onClick={Clear} className="btn btn-primary mx-2"> Clear </button>         
            <button onClick={Copy}  className="btn btn-primary mx-2"> Copy  </button>
            <button onClick={Copy1} className="btn btn-primary mx-2">Remove Extra Spaces</button></div>           
           
          <div className="container my-3">
            <h1 style={{color:props.mode==='light'? 'white':'black'}}>Your text summary</h1>
            <p style={{color:props.mode==='light'? 'white':'black'}}><b>{text.length>0? text.split(" ").length + 'words':'0 Words'} & {text.length} characters & {0.008*text.length} minutes read </b></p>
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
