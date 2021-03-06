import React, { useState } from "react";
import "../Stylesheet/Banner.css";
import stack from "../Images/stack.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import DigitalJournal from "../Images/DigitalJournal.png";
import yahoo from "../Images/yahoo.png";
import Cointelegraph from "../Images/Cointelegraph.png";
import benzinga from "../Images/benzinga.png";
import market from "../Images/market.png";
const Banner = () => {
  const [data, setdata] = useState(false);
  var countDownDate = new Date("Apr 15, 2022 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
	let b=0;
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("day").innerHTML = b;
    document.getElementById("hour").innerHTML = b;
    document.getElementById("minute").innerHTML = b;
    document.getElementById("second").innerHTML =b;
    }
  }, 1000);
  return (
    <>
      <div className="Banner">
        <div className="Banner_text">
          <h1>
            Smart <span>Finance</span>
          </h1>
          <h2>The first ever platform powered by AI</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            itaque dignissimos vitae? Obcaecati temporibus autem ad, aliquam eos
            alias voluptas praesentium possimus nam rem eveniet, dolore, quidem
            quod eaque perferendis.
          </p>
          <div className="Banner_text_timer">
            <h3>PRESALE START IN</h3>

            <div className="timer">
              <span id="day"></span>
              <span id="hour">23</span>
              <span id="minute">59</span>
              <span id="second">26</span>
            </div>
            <div className="timer">
              <br /> <h2 className="realtime">Days</h2>
              <br /> <span className="realtime">Hours</span>
              <br /> <span className="realtime">Minutes</span>
              <br /> <span className="realtime">Seconds</span>
            </div>

            <button>Buy Presale</button>
          </div>
        </div>

        <div className="Banner_img">
          <img src={stack} alt="" />
        </div>
      </div>
      {
        <div className="social">
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaTelegramPlane />
          </a>
          <a href="">
            <FaDiscord />
          </a>
          <a href="">
            <FaRedditAlien />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaFacebookF />
          </a>
        </div>
      }
      <div className="Banner_input">
        <h2>Contact Address</h2>
        <div className="input">
          <input type="text" />
          <button>Copy Address</button>
        </div>
      </div>
      <div className="partner">
        <img src={DigitalJournal} alt="" />
        <img src={yahoo} alt="" />
        <img src={Cointelegraph} alt="" />
        <img src={benzinga} alt="" />
        <img src={market} alt="" />
      </div>
    </>
  );
};

export default Banner;
