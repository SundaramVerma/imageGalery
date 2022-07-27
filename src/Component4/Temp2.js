import React from 'react'
import  ReactDOM  from 'react-dom'
export default function Temp2(props) {
   console.log(props.display)
  return ReactDOM.createPortal (
   props.display &&   
     <div>
         <div className="container border border-primary bg-primary position-absolute" style={{width:"90vw" ,  height:"80vh" , top:"10%" , left:"10%"}}>
              <div className="row"> 
                   <div className="col d-flex flex-column justify-content-center align-items-center">
                         <h1>Portal</h1>
              <button  onClick={(e) => props.setDisplay(false)}>Click</button>
                   </div>
              </div>
         </div>
    </div>,
    document.getElementById("Portal-root")

  )
}

