import React from 'react'

function Photo_nav(props) {
  return (
    <React.Fragment>
      <nav className="navbar w-100  navbar-expand-lg navbar-dark bg-dark position-fixed top-0" style={{zIndex:"10"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pixabay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
     
          {/* backgrounds, fashion, nature, science, education, feelings, health,
           people, religion, places, animals, industry, computer, food, sports, 
           transportation, travel, buildings, business, music */}
           
        
          </ul>
      <form className="d-flex m-3 m-md-1">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>props.search(e.target.value)}/>
        <button className="btn btn-outline-success" onClick={props.SearchBtn}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </React.Fragment>
  )
}

export default Photo_nav
