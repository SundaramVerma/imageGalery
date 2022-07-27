import React, { useEffect, useState } from 'react'
import Temp2 from '../Component4/Temp2'

function Temp1() {
     const [display , setDisplay] = useState(false)
     const [imageSrc , setImage] = useState('https://www.google.com/search?q=image&sxsrf=APq-WBt1VsL8XXEuhH7m376Gsl4nfkvUjA:1647024196511&tbm=isch&source=iu&ictx=1&vet=1&fir=nH5liarSz56duM%252C0JWe7yDOKrVFAM%252C_%253BDH7p1w2o_fIU8M%252CBa_eiczVaD9-zM%252C_%253Bn5hAWsQ-sgKo_M%252C-UStXW0dQEx4SM%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253Bl5RllJHFLw5NyM%252CibTdn4unYxO9nM%252C_%253B0DzWhtJoQ1KWgM%252CcIQ7wXCEtJiOWM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253BY6pVL1x5vDTXyM%252C6CoFeFXzCIyxLM%252C_&usg=AI4_-kSzMGpyiOmbmMfloCZATeVfFP4Odw&sa=X&ved=2ahUKEwiRg62h2772AhVA_3MBHSBuC40Q9QF6BAgSEAE#imgrc=DH7p1w2o_fIU8M')


     // useEffect(()=>{

    
     const download =()=>{

          function forceDownload(imageSrc, image){
               var xhr = new XMLHttpRequest();
               xhr.open("GET", imageSrc, true);
               xhr.responseType = "blob";
               xhr.onload = function(){
                   var urlCreator = window.URL || window.webkitURL;
                   var imageUrl = urlCreator.createObjectURL(this.response);
                   var tag = document.createElement('a');
                   tag.href = imageSrc;
                   tag.download = image;
                   document.body.appendChild(tag);
                   tag.click();
                   document.body.removeChild(tag);
               }
               xhr.send();
           }
     }
// } , [])
    return (
    <div className='bg-success' style={{height:"100vh"}}>
         <h1>Main</h1>
         <button onClick={download}>Download</button>
         {/* <button className="btn btn-primary" onClick={()=>setDisplay(true)} >Click</button>
         <Temp2 display={display} setDisplay={setDisplay}/> */}
    </div>
  )
}

export default Temp1
 