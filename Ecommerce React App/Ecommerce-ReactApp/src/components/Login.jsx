import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const title = "Login";
const socialTitle = "Login With Social Media";
const btnText = "Login Now";

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
];

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  //   const handleLogin = (event) => {
  //     event.preventDefault();
  //     const form = event.target;
  //     console.log(form);
  //   };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login Done Successfully!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Oo'ps Provide Correct Credentials");
      });
  };
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Oo'ps Provide Correct Credentials");
      });
  };
  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title" style={{ color: "#ffff" }}>
              {title}
            </h3>
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="PassKey *"
                  required
                />
              </div>
              {/* Showing Message Here */}
              <div>
                {errorMessage && (
                  <div className="error-message text-danger mb-1" role="alert">
                    {errorMessage}
                  </div>
                )}
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember" style={{ color: "#ffff" }}>
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgetpass" style={{ color: "#ffff" }}>
                    Forget Password?
                  </Link>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="d-block lab-btn bg-dark">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>

            {/* Account Bottom Section */}
            <div className="account-bottom">
              <span className="d-block cate pt-10" style={{ color: "#ffff" }}>
                Don't have an Account?!{" "}
                <Link to="/sign-up" style={{ color: "red" }}>
                  Sign Up
                </Link>
              </span>
              <span className="or bg-dark ">
                <span>OR</span>
              </span>

              {/*  Social Icons Logins */}
              <h5 className="subtitle" style={{ color: "#ffff" }}>
                {socialTitle}
              </h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button className="github" onClick={handleRegister}>
                    <i className="icofont-github"></i>
                  </button>
                </li>
                <li>
                  <a href="/" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
