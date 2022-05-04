import React from "react";
import "./body.scss";
import Intarx from "../Assets/Svg/intarx.svg";
import Master from "../Assets/Svg/mastercard.svg";
import Nike from "../Assets/Svg/Nike.svg";
import Apple from "../Assets/Svg/apple.svg";
import Star from "../Assets/Svg/Vector (4).svg";

const Body = () => {
  return (
    <div className="boby">
      <div className="brands">
        <div className="brandlogos">
          <div className="brand">
            <img src={Nike} alt="" />
          </div>
          <div className="brand">
            <img src={Apple} alt="" />
          </div>
          <div className="brand">
            <img src={Intarx} alt="" />
          </div>
          <div className="brand">
            <img src={Star} alt="" />
          </div>
          <div className="brand">
            <img src={Master} alt="" />
          </div>
        </div>
      </div>

      <div className="coldsection">
        <div className="coldwrapper">
          <h2>
            Creating the best <span className="ice">ice-cold!</span> experience
            you <br /> would never forget.
          </h2>
          <p>
            Would you explore nature paradise in the world, find the <br /> best
            destination in the world with us.
          </p>
        </div>
        <div className="view">View Regions available</div>
      </div>
      <div className="travels">
        <div className="photo1">
          <div className="mount">
            <h2>Mountain Resort</h2>
          </div>
        </div>
        <div className="photo2">
          <div className="mount">
            <h2>Mountain Resort</h2>
          </div>
        </div>

        <div className="photo3">
          <div className="mount">
            <h2>Mountain Resort</h2>
          </div>
        </div>
      </div>
      <div className="relax">
        <div className="flexbox">
          <div className="flex1">
            <h2>
              The best resorts to chill <br /> and relax
            </h2>
            <div className="divv">
              <div className="box1"></div>
              <div className="box2"></div>
            </div>
          </div>
          <div className="flexx">
            <div className="box3">
              <div className="form">
                <div className="chalet">
                  <p className="winta">Winter landscape Chalet</p>
                  <p className="cambo">Cambodia</p>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
            <div className="box4"></div>
          </div>
        </div>
      </div>

      <div className="snow">
        <div className="passes">
          <div className="pass">
            <p>View Passes We’ve Made Available For You</p>
            <button>View Passes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
