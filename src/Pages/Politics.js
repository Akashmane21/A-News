import '../App.css';
import Menu from '../Menu'

function Politics() {
var search =localStorage.getItem("search")
var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCFWrEbh7Ho9EnriRJMe_SwBsWrBRV-f00&cx=017576662512468239146:omuauf_lfve&q="+search
  fetch(url)
   .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })



  return (
   <>
<Menu />
   <h1>From Politics</h1>
   </>
  );
}

export default Politics;
