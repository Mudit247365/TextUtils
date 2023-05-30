import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" style={{display:"flow"}}  role="alert">
    <strong > {props.alert.type +" :"}  </strong>"{props.alert.msg}"
    
  </div>
  )
}

export default Alert