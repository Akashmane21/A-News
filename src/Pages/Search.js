import '../App.css';
import Menu from '../Menu'
import searchimg from '../search.png'
import SearchOutlined from '@material-ui/icons/SearchOutlined';
// import Dev from '../20210319_152952.png'

function Search() {

  function key(e){

    localStorage.setItem("search",e.target.value );
 if(e.key==='Enter'){
           console.log(e.target.value)
 
           var se = localStorage.getItem("search")
             document.getElementById("myInput").placeholder=se ;
           window.find(e.target.value)
 
    
          }

 }
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


<h1 id="h1">Search Results - </h1>
   </>
  );
}

export default Search;
