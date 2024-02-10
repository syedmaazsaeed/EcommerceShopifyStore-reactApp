import React from "react";
import { Link } from "react-router-dom";

const btnText = "Sign Up for Free";
const title = "Shop Anywhere, At Anytime";
const desc =
  "Take Shop on your any device with our App & Learn All time what You want. Just download & Install & Start to Learn Now";

  const AppSection = () => {
  return <div className="app-section padding-tb">

    <div className="container">
        <div className="section-header text-center">
                <Link to="/sign-up" className="lab-btn mb-4">{btnText}</Link>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
        </div>
        <div className="section-wrapper">
            <ul className="lab-ul">
                <li><a href="#"><img src="/src/assets/images/app/01.jpg" alt="" /></a></li>
                <li><a href="#"><img src="/src/assets/images/app/02.jpg" alt="" /></a></li>
            </ul>
        </div>
    </div>
  </div>;
};

export default AppSection;
