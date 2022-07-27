import React from "react";

function Photo_button(props) {
  return (
    <div>
      <div className="container mt-4 mb-2">
        <div className="row">
          <div className="col-6">
            <button className="btn btn-primary float-start px-4" disabled = {props.page == 1}  onClick={(e)=> props.setPage(props.page-1)}>Prev</button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary float-end px-4" disabled = {props.page + 1 > Math.ceil(500 / props.per_page)} onClick={(e)=> props.setPage(props.page+1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photo_button;
