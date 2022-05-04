import React from "react";
import "./footer.scss";
import Socials1 from "../Assets/Svg/Social.svg";
import Socials2 from "../Assets/Svg/Social1.svg";
import Socials3 from "../Assets/Svg/Social2.svg";
import Flight from "../Assets/Svg/Group 44.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <footer>
          <div className="foot1">
            <img src={Flight} alt="" />
            <h4>Artic Travels</h4>
            <p>
              Book your trip in minutes, get full <br /> control for much
              longer.
            </p>
            <div className="imgflex">
              <img src={Socials2} alt="" />
              <img src={Socials1} alt="" className="mm" />
              <img src={Socials3} alt="" className="mm" />
            </div>
          </div>
          <div className="flexmain">
            <div className="linkfles1">
              <p>COMPANY</p>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
              </ul>
            </div>
            <div className="linkfles1">
              <p>CONTACT</p>
              <ul>
                <li>FAQ</li>
                <li>Press</li>
                <li>Affiliation</li>
              </ul>
            </div>
            <div className="linkfles1">
              <p>MORE</p>
              <ul>
                <li>Airlines</li>
                <li>Airfess</li>
                <li>Lowfare Tips</li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="terms">
          <div className="copy">
            © 2022 Arctic Travels - All right reserved.
          </div>
          <div className="private">
            <div>Privacy Policy</div>
            <div className="use">Terms of Use</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
