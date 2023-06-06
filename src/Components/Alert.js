import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'0px',width:"360px",marginLeft:"1119px",marginTop:"0px"}}>
   { props.alert && <div  className="alert alert-warning alert-dismissible fade show " style={{display:"flow"}}  role="alert">
    <strong > {props.alert.type +" :"}  </strong>"{props.alert.msg}"
    </div> }
  </div>
  )
}

export default Alert