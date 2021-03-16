import '../App.css';
import Menu from '../Menu'
import { Component } from "react";
import logo from '../logo.png'
import Avatar from '@material-ui/core/Avatar';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import logo1 from '../title (1).png'
// import Toptrend from '../Components/Toptrend';



class Top extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: []
      }
   }

componentDidMount() {

   fetch("https://sheet2api.com/v1/XeNO00vdSn66/news")
   .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

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
<div className="Top">
<div className="intro">
<Avatar src="https://instagram.fyyc6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/90651740_569667850563489_8116038555498102848_n.jpg?tp=1&_nc_ht=instagram.fyyc6-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=4ESs9LR4HUEAX9tEKIE&oh=04b9eca23cf98a6dbd5db76029468e58&oe=607719BC" />
<h4>Hii, I,m Akash</h4>
</div><img id="title" src={logo1} alt="" />

<div className="heading">
<center>
<div className="slogen">
<img id="spin" src={logo} alt="" />
<div class="slogen_child">
Explore The World
increase the knowledge</div>
</div>
{/* <h1> A-News</h1> */}<br />

<div className="sidebar__search">
           <div className="sidebar__searchContainer">
               <SearchOutlined />
               <input type="text" placeholder="Search Anything..." />
           </div>
       </div>
</center>
</div>
   </div>

<div class="lower_body">
<h1>Top Headlines:</h1>
{Array.isArray(data) && data.map(object => (


         <div  className="Top_container">
    
        <div className="block">
        
        <div className="img">
        <center><img src={object.urlToImage} alt="" /></center></div>
        <p>{object.title}</p>
        <h6>Author : {object.author}</h6>

        </div>
    </div> 
       
       ))}
</div>


   </>
  );
}

}


export default Top;