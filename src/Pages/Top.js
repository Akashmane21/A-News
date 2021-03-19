import '../App.css';
import Menu from '../Menu'
import {NavLink} from 'react-router-dom'

// import Dev from '../20210319_152952.png'
import nm from '../nw.png'
import { Component } from "react";
import logo from '../logo.png'
import Avatar from '@material-ui/core/Avatar';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import Toptrend from '../Components/Toptrend';



function key(e){
   localStorage.setItem("search",e.target.value );



      if(e.key==='Enter'){
          console.log(e.target.value)

          var se = localStorage.getItem("search")
            document.getElementById("myInput").placeholder=se ;
          window.find(e.target.value)

   
         }


      
 
}

class Top extends Component {


   
 
  
   constructor(props) {
      
      super(props);
      this.state = {
         data: []
      }
   }

componentDidMount() {
   
  

   fetch("https://script.google.com/macros/s/AKfycbz4BS-um-GSPi-5GVUcseTva7DrpYAe4wLkvBATd5puTmAAr9ruDvMo-gQHQSt07IJB5A/exec?action=read")
   .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.records);


   this.setState({
                 data:data.records
                
   })
           
 })




}




render() {
   const { data } = this.state;
   console.log(data);
  return (
   <>

<Menu />




<div className="Top">



            <div className="intro">
            
            </div>

            <div className="slogen">
<img id="spin" src={logo} alt="" />
<div class="slogen_child">
Explore The World
increase the knowledge</div>
</div>
           

<div className="heading">
<center>






{/* <h1> A-News</h1><br /> */}
<img id="nw" src={nm} alt="" />





<div className="sidebar__search">
           <div className="sidebar__searchContainer">
           {/* <SearchOutlined /> */}

               <input type="text" onKeyUp={key} id="myInput"
                placeholder="Search for News.." title="Type in a name" />    
                
    

<NavLink exact activeClassName = "active_class" to="/Search">
   <SearchOutlined />
   </NavLink>
       



</div>
     </div>
     
     </center>


<div className="contents">
   <div class="first">
   <center>
   <Avatar src="data:image/jpeg;base64,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" />
   <h3>Bollywood</h3></center>
   </div>
   

   <div class="first">
   <center>
   <Avatar src="https://ec.europa.eu/eurostat/documents/6921402/9104237/Shutterstock_Lisa_Kolbasa.png/f988f8b6-4138-4a91-9761-885bacab0ce2?t=1533725002000" />
   <h3>Sports</h3></center>
   </div>


    <div class="first">
   <center>
   <Avatar src="https://www.idea.int/sites/default/files/Initiatives/2018-Theme-Money-in-Politics.png" />
   <h3>Politics</h3></center>
   </div>
   
</div>



<div className="contents">
   <div class="first">
   <center>
   <Avatar src="https://timesofindia.indiatimes.com/thumb/msid-75847753,imgsize-513467,width-400,resizemode-4/75847753.jpg" />
   <h3>SPPU</h3></center>
   </div>



   <div class="first">
   <center>
   <a href="https://covid19-live-updates.netlify.app/">
   <Avatar src="https://www.hamilton-medical.com/.imaging/stk/hamilton-theme/text-backgroundimage-tablet/dam/Images/A-Pictures/Home/covid-19-header-2000x769.jpg/jcr:content/covid-19-header-2000x769.jpg.2020-03-20-09-55-30.jpg" />
   </a>
 <h3>Covid</h3></center>
   </div>

    <div class="first">
   <center>
   <Avatar src="https://1000logos.net/wp-content/uploads/2018/02/Emblem-Tesla.jpg" />
   <h3>Tesla</h3></center>
   </div>
   
</div>






</div>


   </div>

<div class="lower_body">
<h1>Top Headlines:</h1>
{Array.isArray(data) && data.map(object => (

 <Toptrend 
 img={object.urlToImage} 
 title={object.title} 
 author={object.author}
 url={object.url}
 publishedAt={object.publishedAt}
 description={object.description}
 content={object.content}
 sourceid={object.sourceid}
 sourcename={object.sourcename}


 />
       
       ))}
</div>

<br /><br /><br /><br /><br /><br /><br /><br />

{/* <div class="politics">
<Politics />
</div> */}

   </>
  );

}



}


export default Top;