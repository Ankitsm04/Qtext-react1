import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type==="success"?"Success":"Failure"}</strong>: {props.alert.msg}
    </div>
  )
}
