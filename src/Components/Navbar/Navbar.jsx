import React from "react";
import "./navbar.scss";
import Flight from "../Assets/Svg/Group 44.svg";
import Flight2 from "../Assets/Svg/Vector (2).svg";
import Calendar from "../Assets/Svg/calendar.svg";
import User from "../Assets/Svg/user.svg";
import Map from "../Assets/Svg/map-pin.svg";
// import { FaBars, CgClose } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { title: "About Us" },
    { title: "Support" },
    { title: "Language" },
  ];
  return (
    <div>
      <header className="header">
        <nav>
          <div className="empty">
            <div className="navwrapper">
              <div className="logo">
                <img src={Flight} alt="" />
                <h5>Arctic Travels</h5>
              </div>
              <div className="nav__list1">
                <ul className="links">
                  {navItems.map((navItem, index) => {
                    return (
                      <li className="navitem" key={index}>
                        {navItem.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* <FaBars size="1.5rem" color="#ffffff" /> */}
            <div className="sign">
              <button>Sign Up</button>
            </div>
          </div>
          <section className="first">
            <h1>Plan the perfect winter trip</h1>
            <p>
              Easily plan your ideal ski trip from home with the <br /> help of
              professionals
            </p>
            <button>Book here</button>
          </section>

          <section className="sect">
            <div className="list0">
              <div className="tired">
                <img src={Map} alt="" />
                <span>LOCATION</span>
              </div>
              <p>
                Iceland{" "}
                <select name="" id="">
                  <option value=""></option>
                </select>
              </p>
            </div>
            <div className="list">
              <div className="tired">
                <img src={User} alt="" />
                <span>PERSONS</span>
              </div>
              <p>
                4 persons{" "}
                <select name="" id="">
                  <option value=""></option>
                </select>
              </p>
            </div>
            <div className="list">
              <div className="tired">
                {" "}
                <img src={Calendar} alt="" />
                <span>CHECK IN</span>
              </div>
              <p>
                12 january 2022
                <select name="" id="">
                  <option value=""></option>
                </select>
              </p>
            </div>
            <div className="list">
              <div className="tired">
                {" "}
                <img src={Calendar} alt="" />
                <span>CHECK OUT</span>
              </div>
              <p>
                18 january 2022
                <select name="" id="">
                  <option value=""></option>
                </select>
              </p>
            </div>

            <div className="blue">
              <span className="book">Book Trip</span>
              <img src={Flight2} alt="" />
            </div>
          </section>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
