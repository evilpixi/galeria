import React from 'react'

let Modal = (props) => {
  return <div style={{
      position: "absolute",
      backgroundColor: "#000000",
      opacity: 0.5,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
  }}></div>
}

let cerrar = ()=> {
  console.log("pix")
}

export default Modal