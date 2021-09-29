import {NavLink} from 'react-router-dom'
import './Netflix.css'
import {  IconButton} from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import logo from "./logo.png";

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
// import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
// import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
// import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';


function Menu(){


      
return (
    <>

     <header>

     <div className="slogen" id="hide">
            <img id="spin" src={logo} alt="" />
            <div class="slogen_child">
              Explore The World increase the knowledge
            </div>
          </div>


<ul className="icons">
    <li className="icon1"><NavLink exact activeClassName = "active_class" to="/"><IconButton>
            <HomeRoundedIcon  /> <h4>Home</h4></IconButton></NavLink></li>
    <li className="icon4"><NavLink exact activeClassName = "active_class" to="/Search"><IconButton>
            <SearchOutlined /><h4>Search</h4></IconButton></NavLink></li>

   <li className="icon3"><NavLink exact activeClassName = "active_class" to="/About"><IconButton>
            <PersonRoundedIcon /><h4>About</h4></IconButton></NavLink></li>
    
   

</ul>
</header>

    </>
)
   
}

export default Menu;