
import React from 'react';

function Toptrend(props){
return (
    <>
    <div  className="Top_container">
    
        <div className="block">
        {/* <p>{props.url}</p> */}
        {/* <p>{props.source}</p> */}
        {/* <p>{props.content}</p> */}
        {/* <p>{props.description}</p> */}
        <div className="img">
        <center><img src={props.img} alt="" /></center></div>
        <p>{props.title}</p>
        <h6>Author : {props.author}</h6>

        </div>
    </div>
    
    </>
)
   
}

export default Toptrend;