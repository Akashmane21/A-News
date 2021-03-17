import {NavLink} from 'react-router-dom'
import './Netflix.css'
import {  IconButton} from '@material-ui/core'

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
// import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
// import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';


function Menu(){


      
return (
    <>

     <header>

<ul className="icons">
    <li className="icon1"><NavLink exact activeClassName = "active_class" to="/"><IconButton>
            <HomeRoundedIcon  /> <h4>Home</h4></IconButton></NavLink></li>
    <li className="icon4"><NavLink exact activeClassName = "active_class" to="/India"><IconButton>
            <MenuBookRoundedIcon /></IconButton></NavLink></li>
    
            {/* <li className="icon4"><NavLink exact activeClassName = "active_class" to="/Bollywood"><IconButton>
            <AddToPhotosIcon /></IconButton></NavLink></li> */}
    {/* <li className="icon2"><NavLink exact activeClassName = "active_class" to="/World"><IconButton>
            <AccountCircleRoundedIcon /></IconButton></NavLink></li> */}
   <li className="icon3"><NavLink exact activeClassName = "active_class" to="/Politics"><IconButton>
            <PersonRoundedIcon /><h4>About</h4></IconButton></NavLink></li>
    
   

</ul>
</header>

    </>
)
   
}

export default Menu;