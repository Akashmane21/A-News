
import React from 'react';
import {NavLink} from 'react-router-dom'

function Toptrend(props){


    
function click() {
    //    var base = document.querySelector('#news'); 
    // base.addEventListener('click', function(event) {
        localStorage.setItem("titlename",`${props.title}` );
        localStorage.setItem("img",`${props.img}` );
        localStorage.setItem("author",`${props.author}` );
        localStorage.setItem("url",`${props.url}` );
        localStorage.setItem("publishedAt",`${props.publishedAt}` );
        localStorage.setItem("description",`${props.description}` );
        localStorage.setItem("content",`${props.content}` );
        localStorage.setItem("sourceid",`${props.sourceid}` );

        localStorage.setItem("sourcename",`${props.sourcename}` );



       console.log("clicked");
    // });
    }
return (
    <>
    <div  className="Top_container">
    
    <NavLink exact activeClassName = "active_class" to="/India"> <div className="block">
       
        <div className="img">
        <button onClick={click}> <center><img src={props.img} alt="" /></center></button> </div>
         <p onClick={click}>{props.title}</p>

        </div></NavLink> 
    </div>
    
    </>
)
   
}

export default Toptrend;



