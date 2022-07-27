import React, { useEffect, useState } from "react";
import Photo_nav from "./Photo_nav";
import Photo_button from "./Photo_button";
import Image_view from "./Image_view";
import Photo_spinner from "./Photo_spinner";

export default function Photo_main() {
  const [image, setImage] = useState([]);
  const [display, setDisplay] = useState(false);
  const [ImgIndex, setImgIndex] = useState("");
  const [page, setPage] = useState(1);
  const [per_page, setPer_Page] = useState(33);
  let SetSearch;
  
  const [searchVal, setSearchVal] = useState("");

  const [spinner, setSpinner] = useState(false);

  // FETCHING DATA //
  useEffect(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
     setSpinner(true)
      if (this.readyState == 4 && this.status == 200) {
           setSpinner(false)
          setImage(JSON.parse(this.response).hits)
        
      }
    };
    xhttp.open("GET", `https://pixabay.com/api/?key=26092190-30f01a5f9918acb80bcf2fd75&q=${searchVal}&per_page=${per_page}&page=${page}`, true);
    xhttp.send();
  }, [ page , per_page , searchVal]);


  // SEARCH //

  const SearchInput = (value ) => {
    SetSearch = value
    
  };

  const SearchBtn = (e) => {
    e.preventDefault();
    setSearchVal(SetSearch)
    
  };
  // DOWNLOAD //
   
    const downloadImage = (url, name) => {
      fetch(url)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('An error sorry'));
 }
  return (
    <div style={{width:"100%"}}>
      <Photo_nav
        
        search={SearchInput}
        SearchBtn={SearchBtn}
      />
      <h2 className="" style={{marginTop:"5rem"}}>All Image Gallery</h2>

      <Photo_spinner spinner={spinner} />
    {!spinner &&  <div className="container mt-3">
        <div className="row">
        {image.length==0?<h4 className="mt-5">No image found☹️</h4>:""}
          {image.map((item, index) => (
            <div key={index} className="col-md-4 ">
              <div className="card my-2 mx-auto" >
                <img
                  src={`${item.previewURL}`}
                  className="card-img-top img-fluid"
                  alt="No image"
                  style={{ width: "350px", height: "200px" }}
                />
                <div className="card-body">
                  <div className="card-text d-flex flex-row justify-content-between align-items-center">
                    <i className="fa fa-download" aria-hidden="true">
                      <p>{item.downloads}</p>
                    </i>
                    <i className="fa fa-eye" aria-hidden="true">
                      <p>{item.views}</p>
                    </i>
                    <i className="fa fa-heart" aria-hidden="true">
                      <p>{item.likes}</p>
                    </i>
                    <i className="fa fa-comments" aria-hidden="true">
                      <p>{item.comments}</p>
                    </i>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <button
                    className="btn btn-success w-100 me-1 d-none d-md-block"
                    onClick={() => {
                      setDisplay(true);
                      setImgIndex(index);
                    }}
                  >
                    View
                  </button>
                  <button className="btn btn-success w-100 ms-1" onClick={() => downloadImage(item.largeImageURL , 'pixabay')}>
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>}
      {/* BUTTONS */}
      <Photo_button  page={page} per_page={per_page} setPage={setPage} />

      {/* VIEW IMAGE */}
      <Image_view
        image={image}
        display={display}
        setDisplay={setDisplay}
        ImgIndex={ImgIndex}
      />
    </div>
  );
}
