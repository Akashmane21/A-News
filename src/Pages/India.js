
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';import { Component } from "react";
import '../App.css';
import Menu from '../Menu'

class India extends Component {
    constructor(props) {
       super(props);
       this.state = {
          data: []
       }
    }

 componentDidMount() {
 
  document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;

  
  localStorage.getItem("sourcename");

  fetch("https://script.google.com/macros/s/AKfycbz4BS-um-GSPi-5GVUcseTva7DrpYAe4wLkvBATd5puTmAAr9ruDvMo-gQHQSt07IJB5A/exec?action=read")
  .then(response => {
     return response.json();
   })
   .then(data => {
     console.log(data.records);



          
})

     
}



render() {
  return (
    <>
    <Menu />
 <div className="block" id="news_block">
       
        <div className="img" id="news_img">
        <center><img src={  localStorage.getItem("img")} alt="" id="news_img1" /></center> </div>
       <div className="items">
       <h2>Source :   {localStorage.getItem("sourcename")}</h2>
       <h6>  {localStorage.getItem("description")}
       {localStorage.getItem("content")}
    
       </h6>
   <center> <a href={localStorage.getItem("url")}> <button><h1>Read Full Article..<CallMissedOutgoingIcon /></h1></button>
</a></center> 

<hr/>

       <h5>Published At : { localStorage.getItem("publishedAt")}<br />
          Author :{localStorage.getItem("author")} </h5>






        
 

        <br />
        <br /><br /><br /><br />
        
 </div>
        


        </div>
    
       </>
      
    
   )
}
}


export default India 

























