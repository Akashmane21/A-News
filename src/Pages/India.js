
import { Component } from "react";
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
    <div  className="Top_container">
 <div className="block">
       
        <div className="img">
        <center><img src={  localStorage.getItem("img")} alt="" /></center> </div>
        <p>{localStorage.getItem("titlename")}
       { localStorage.getItem("url")}
        {localStorage.getItem("author")}
       { localStorage.getItem("author")}
  {localStorage.getItem("url")}
 { localStorage.getItem("publishedAt")}
  {localStorage.getItem("description")}
  {localStorage.getItem("content")}
 { localStorage.getItem("sourceid")}
        
        
        
        </p>


        </div>
    </div>
    
       </>
      
    
   )
}
}


export default India 

























