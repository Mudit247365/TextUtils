import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'60px'}}>
   { props.alert && <div  className="alert alert-warning alert-dismissible fade show " style={{display:"flow"}}  role="alert">
    <strong > {props.alert.type +" :"}  </strong>"{props.alert.msg}"
    </div> }
  </div>
  )
}

export default Alert