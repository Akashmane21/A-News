import CallMissedOutgoingIcon from "@material-ui/icons/CallMissedOutgoing";
import { Component } from "react";
import "../App.css";
import Menu from "../Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function send() {
  document.getElementById("loader").style.visibility = "visible";

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwunSCg4dv6spf-fDmMk4gMjvSDqaVfMsJ2GseAt-bjpD9HTS7ANN71FR-g9vfmUKhQ/exec";
  const form = document.forms["google-sheet"];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => window.location.reload())
      .catch((error) => console.error("Error!", error.message));
  });
}

class India extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    localStorage.getItem("sourcename");

    fetch(
      "https://script.google.com/macros/s/AKfycbz4BS-um-GSPi-5GVUcseTva7DrpYAe4wLkvBATd5puTmAAr9ruDvMo-gQHQSt07IJB5A/exec?action=read"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.records);
      });
  }

  render() {
    return (
      <div className="detail">
        <Menu />
        <img src={localStorage.getItem("img")} alt="" id="news_img1" />
        <div className="bock" id="news_block">
          <div className="items">
            {/* <center>🌫〽🔰🔰〰➖</center> */}
            <h6>
              {" "}
              {localStorage.getItem("description")}
              {localStorage.getItem("content")}
            </h6>
            <center>
              {" "}
              <a href={localStorage.getItem("url")}>
                {" "}
                <button>
                  <h1>
                    Read Full Article..
                    <CallMissedOutgoingIcon />
                  </h1>
                </button>
              </a>
            </center>
            <hr />
            <h2>Source : {localStorage.getItem("sourcename")}</h2>

            <h5>
              Published At : {localStorage.getItem("publishedAt")}
              <br />
              Author :{localStorage.getItem("author")}{" "}
            </h5>

            <center>
              <h3>Subscribe for Daily News </h3>
            </center>
            <div className="Sub">
              <form method="post" className="formdata" autocomplete="off" name="google-sheet">
                <h6>Name</h6>
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter your Name"
                  required
                />
                <h6>Email</h6>
                <input
                  type="email"
                  name="E-mail"
                  placeholder="Enter your E-mail"
                  required
                />

                <button onClick={send} id="send">
                  Subscribe
                </button>
              </form>
            </div>

            <div class="social">
              <center>
                <h1>Keep in Touch with me</h1>
              </center>
              <ol>
                <li>
                  <a href="https://www.facebook.com/akash.mane.777363/">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCCm6KhVF_J6GmkylESxVrqQ">
                    <YouTubeIcon />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Akashmame">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/akash_mane21/">
                    <InstagramIcon />
                  </a>
                </li>
              </ol>
            </div>

            <br />
            <br />
            <div class="copy">
              <center>
                © 2021 Copyright
                <br />
                <a
                  class="text-white"
                  href="akash-mane.netlify.app"
                >
                  News-wave's.netlify.app
                </a>
              </center>{" "}
            </div>

            <div class="loader" id="loader">
              <div class="face">
                <div class="circle"></div>
              </div>
              <div class="face">
                <div class="circle"></div>
              </div>
              <h1 class="gradient-text">Sending....</h1>
            </div>

            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default India;
