import '../App.css';
import Menu from '../Menu'

function Politics() {


  function send() {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwunSCg4dv6spf-fDmMk4gMjvSDqaVfMsJ2GseAt-bjpD9HTS7ANN71FR-g9vfmUKhQ/exec";
    const form = document.forms["google-sheet"];

    form.addEventListener("submit", (e) => {
      alert("Your Data📝 is Sending.... plz Wait💕");
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) =>
          alert("Thanks for Contacting📞 me..! I Will Contact You Soon...💖")
        )
        .catch((error) => console.error("Error!", error.message));
    });
  }












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



    

  return (
   <>
<Menu />
  <div className="profile">
  <img src="https://instagram.fyyc6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/117830835_308147406967261_357116488428353118_n.jpg?tp=1&_nc_ht=instagram.fyyc6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=yyaD7sFTwRgAX9fHKJ_&ccb=7-4&oh=325dd53c8f09d756054a4fe771145ff8&oe=60801B38&_nc_sid=4f375e" alt="" id="footerdp"/>
<div className="profile_intro">
       
<div class="info">
    <h1 id="welcome"> Hello !</h1>
    <h3>I'm Akash 😊</h3>  
   <div class="slider">& I'm a <a href="https://www.google.com/search?q=akash_mane21&oq=aka&aqs=chrome.0.69i59j69i57j69i60l6.6180j0j4&sourceid=chrome&ie=UTF-8" class="typewrite" id= "tex" data-period="1500" 
        data-type='[ "Student.", "Creative.", "Daveloper.", "Designer.","Photographer." ]'>
</a></div>

</div>
</div>



<div class="contact">
          <h5>
            If you have any Query or any information about it then Feel free to ..
        </h5>
          <h3>Contact Me 📞💕</h3>
        Name: Mane Akash Ambadas,
        <br />
        G-mail :akash21mane21@gmail.com
        <div class="form">
            <form method="post" autocomplete="off" name="google-sheet">
              <h6>Name</h6>
              <input type="text" name="Name" placeholder="Enter your Name" />
              <h6>Email</h6>
              <input type="email" name="E-mail" placeholder="Enter your E-mail" />
              <h6>Phone</h6>
              <input
                type="phone"
                name="Phone"
                placeholder="Enter your Phone Number"
              />

              <h6>Message</h6>

              <input type="text" name="Message" placeholder="Enter msg here !" />

              {/* <textarea name = "Message" placeholder="Enter msg here !" name="ta" id="ta" cols="25" rows="3" /> */}
              <button onClick={send} id="send">
                Send
            </button>
            </form>
          </div>
        </div>
       
        
  </div>
   </>
  );
}

export default Politics;
