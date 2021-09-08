import '../App.css';
import Menu from '../Menu'
import searchimg from '../search.png'
import SearchOutlined from '@material-ui/icons/SearchOutlined';
// import Dev from '../20210319_152952.png'
import Toptrend from '../Components/Toptrend';

import { Component } from "react";


  function key(e){

         localStorage.setItem("search",e.target.value );
 if(e.key==='Enter'){
           console.log(e.target.value)
           localStorage.setItem("search",e.target.value );
           window.location.reload()           
            //  document.getElementById("myInput").placeholder="" ;
          //  window.find(e.target.value)
 
          }
 }





 class Search extends Component {


   
 
  
  constructor(props) {
     
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
  
  var newsurl = localStorage.getItem("search")
  // https://gnews.io/api/v4/top-headlines
 var url = "https://gnews.io/api/v4/search?q="+newsurl+"&token=f4e817c05107f00f37ceb1d699d10772&lang=en"
console.log(url);
  fetch(url)
  .then(response => {
     return response.json();
   })
   .then(data => {
     console.log(data);
     data = data.articles
  this.setState({
                data:data
               
  })
          
})




}




 render() {
  const { data } = this.state;
  console.log(data);
  return (
   <>
<Menu />
{/* <img id="dev" src={Dev} alt="" /> */}

<div class="Search_area">

<center>
<img id="search" src={searchimg} alt="" />

<div className="sidebar__search">
           <div className="sidebar__searchContainer">

               <input type="text" onKeyUp={key} id="myInput"
                placeholder="Search for News.." title="Type in a name" />    
 <SearchOutlined />
</div>
     </div>
</center>
</div>


<div className="result">
<h1 id="h1">{localStorage.getItem("search")} Search Results - </h1>
<div class="news-body">
{Array.isArray(data) && data.map(object => (

<Toptrend 
img={object.image} 
title={object.title} 
author={object.author}
url={object.url}
publishedAt={object.publishedAt}
description={object.description}
content={object.content}
// sourceid={object.sourceid}
sourcename={object.sourcename}


/>
      
      ))}
      </div>
</div>

<div class="copy">
        <center>
         © 2021 Copyright<br />
         <a class="text-white" href="akash-mane.netlify.app">News-wave's.netlify.app</a>
         </center> </div>
        <br />
        <br />        <br />
        <br />
        <br />
   </>
  );
}}

export default Search;
