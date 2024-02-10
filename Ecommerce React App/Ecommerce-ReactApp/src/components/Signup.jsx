import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const title = "Register";
const socialTitle = "Login With Social Media";
const btnText = "SignUp";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

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
  const handleSignup = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage("Password and Confirm Password should be the same");
    } else {
      setErrorMessage("");
      try {
        await createUser(email, password);
        alert("Account Registered Successfully!!");
        navigate(from, { replace: true });
      } catch (error) {
        console.error(error.message);
        alert(`${error.message}`);
      }
    }
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title" style={{ color: "#ffff" }}>
            {title}
          </h3>
          <form className="account-form" onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Full Name *"
                required
              />
            </div>
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
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm PassKey *"
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
              <button type="submit" className="d-block lab-btn bg-dark">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          {/* Account Bottom Section */}
          <div className="account-bottom">
            <span className="d-block cate pt-10" style={{ color: "#ffff" }}>
              Already have an Account?!{" "}
              <Link to="/login" style={{ color: "red" }}>
                Sign In
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
  );
};

export default Signup;
