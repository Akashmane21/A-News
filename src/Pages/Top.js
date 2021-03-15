import '../App.css';
import Menu from '../Menu'
import logo from '../logo.png'
import Avatar from '@material-ui/core/Avatar';
import SearchOutlined from '@material-ui/icons/SearchOutlined';

function Top() {
  return (
   <>
<Menu />
<div className="Top">
<img src="https://images.unsplash.com/photo-1504598210222-a29af75e1619?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI2fHxuZXdzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
<div className="intro">
<Avatar src="https://instagram.fyyc6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/90651740_569667850563489_8116038555498102848_n.jpg?tp=1&_nc_ht=instagram.fyyc6-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=4ESs9LR4HUEAX9tEKIE&oh=04b9eca23cf98a6dbd5db76029468e58&oe=607719BC" />
<h4>Hii, I,m Akash</h4>
</div>
<div className="heading">
<center>
{/* <img src={logo} alt="" /> */}
<h1> A-News</h1>
<div className="sidebar__search">
           <div className="sidebar__searchContainer">
               <SearchOutlined />
               <input type="text" placeholder="Search Anything..." />
           </div>
       </div>
<h2>Explore The World</h2>
<p>increase the knowledge</p></center>
</div>
   </div>
   </>
  );
}

export default Top;
