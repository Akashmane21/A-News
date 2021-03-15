import '../App.css';
import Menu from '../Menu'
import logo from '../logo.png'
import Avatar from '@material-ui/core/Avatar';

function Top() {
  return (
   <>
<Menu />
<div className="Top">
<img src="https://images.unsplash.com/photo-1497008386681-a7941f08011e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fG5ld3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" />
<div className="intro">
<Avatar src="https://instagram.fyyc6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/90651740_569667850563489_8116038555498102848_n.jpg?tp=1&_nc_ht=instagram.fyyc6-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=4ESs9LR4HUEAX9tEKIE&oh=04b9eca23cf98a6dbd5db76029468e58&oe=607719BC" />
<h4>I,m Akash</h4>
</div>
<div className="heading">
<center>
<img src={logo} alt="" />
<h1> A-News</h1>
<h2>Explore The World</h2>
<p>increase the knowledge</p></center>
</div>
   </div>
   </>
  );
}

export default Top;
