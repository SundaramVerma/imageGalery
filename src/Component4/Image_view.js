import React from "react";
import ReactDOM from "react-dom";

export default function Image_view(props) {
  // {props.image.length===0?"No image found":''}
  return ReactDOM.createPortal(
    props.display &&
    <div >
      <div className="container d-flex justify-content-center align-items-center  bg-dark position-fixed" style={{width:"80vw" , height:"90vh" , top:"5%" , left:"10%" }}>
        <div className="row">
          <div className="col ">
            <div className="card mx-auto" style={{ width: "45rem" }}>
              <img src={`${props.image[props.ImgIndex].webformatURL}`} className="card-img-top" alt="..." style={{width:"718px" , height:"400px"}}/>
              <div className="card-body text-center">
               <button className="btn btn-success px-5" onClick={() => props.setDisplay(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("Portal-root")
  );
}
