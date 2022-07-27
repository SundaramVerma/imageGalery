import React from 'react'

function Photo_spinner(props) {
  return (
  props.spinner && <div>
       <div className="spinner-border mt-3" role="status">
          <span className="visually-hidden">Loading...</span>
          </div>
    </div>
  )
}

export default Photo_spinner
