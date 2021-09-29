import '../App.css';
import Menu from '../Menu'
import dp from '../profile.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
function Politics() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop=0;

  function send() {
    document.getElementById("loader").style.visibility = "visible";

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwunSCg4dv6spf-fDmMk4gMjvSDqaVfMsJ2GseAt-bjpD9HTS7ANN71FR-g9vfmUKhQ/exec";
    const form = document.forms["google-sheet"];

    form.addEventListener("submit", (e) => {
          // document.getElementById("loader").style.visibility = "visible"

      // alert("Your Data📝 is Sending.... plz Wait💕");
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) =>
    
        window.location.reload()  
        
         
        )

        .catch((error) => console.error("Error!", error.message));
    });

  }






function  add() {


    

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};


    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);



    

}
add();

setTimeout(add, 2000); 




  return (
   <>
<Menu />

  <div className="profile">
<div className="profile_intro">
<img src={dp} alt="" id="footerdp"/>

<div class="info">

    <h1 id="welcome"> Hello !</h1>
    <h3>I'm Akash 😊</h3>  
   <div class="slider">& I'm a <a href="https://www.google.com/search?q=akash_mane21&oq=aka&aqs=chrome.0.69i59j69i57j69i60l6.6180j0j4&sourceid=chrome&ie=UTF-8" class="typewrite" id= "tex" data-period="1500" 
        data-type='[ "Student.", "Developer.","Creative.",  "Designer."]'>
</a></div>

</div>
</div>
<h5>Hii My name is Mane Akash Ambadas , I am from Latur , Maharastra. Now I'm doing Engineering in Information Technology .

I Love Coding And i want to become a Full Stack Developer (Frontend as well as Backend Daveloper) </h5>
<hr />
<div class="social"> 
<center><h1>Keep in Touch with me</h1></center>
<ol>
  <li><a href="https://www.facebook.com/akash.mane.777363/"><FacebookIcon /></a></li>
  <li><a href="https://www.youtube.com/channel/UCCm6KhVF_J6GmkylESxVrqQ"><YouTubeIcon /></a></li>
  <li><a href="https://github.com/Akashmame"><GitHubIcon /></a></li>
  <li><a href="https://www.instagram.com/akash_mane21/"><InstagramIcon /></a></li>
</ol>
</div>

<div class="contact">
<hr />
          <p>
            If you have any Query or any information about it then Feel free to ..
        </p>
          <h3>Contact Me 📞</h3>
        Name: Mane Akash Ambadas,
        <br />
        G-mail :akash21mane21@gmail.com
        <div class="form">
            <form method="post" autocomplete="off" name="google-sheet">
              <h6>Name</h6>
              <input type="text" required name="Name" placeholder="Enter your Name" />
              <h6>Email</h6>
              <input type="email" required name="E-mail" placeholder="Enter your E-mail" />
              <h6>Phone</h6>
              <input
                type="phone"
                name="Phone"
                placeholder="Enter your Phone Number"
                required
              />

              <h6>Message</h6>

              <input type="text" required name="Message" placeholder="Enter msg here !" />

              {/* <textarea name = "Message" placeholder="Enter msg here !" name="ta" id="ta" cols="25" rows="3" /> */}
              <button onClick={send} id="send">
                Send
            </button>
            </form>
          </div>
        </div>
       
        <br />
        <br />
        <br />
        <div class="copy">
        <center>
         © 2021 Copyright<br />
         <a class="text-white" href="akash-mane.netlify.app">News-wave's.netlify.app</a>
         </center> </div>


         <div class="loader" id="loader">
  <div class="face">
    <div class="circle"></div>
  </div>
  <div class="face">
    <div class="circle"></div>
  </div>
  <h1 class="gradient-text" >Sending....</h1>
</div>
        <br />
        <br />        <br />
        <br />
        <br />

        <br />
  </div>
   </>
  );
}

export default Politics;
