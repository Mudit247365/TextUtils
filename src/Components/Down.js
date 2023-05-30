import React from 'react'

function Down(props) {
  return (
<div className="container">
    <footer style={{marginLeft:"1000px",fontFamily:'inherit',fontSize:'20px',color:props.mode==='light'? 'black':'white'}}>    
    
  <a style={{color:props.mode==='light'? 'white':'black'}} href="https://www.linkedin.com/in/mudit-gupta-0b0754186/">Developed By Mudit Gupta</a>
      </footer>
      </div>
  )
}

export default Down;