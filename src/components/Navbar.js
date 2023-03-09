import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../states/actions/loginActions";
const Navbar = () => {
  const loginDetails = useSelector((e) => e.loginDetails);
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
            </ul>
            <div role="search">
              {loginDetails ? (
                <button
                  onClick={() => {
                    dispatch(logout());
                  }}
                  className="btn btn-primary "
                >
                  logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(login());
                  }}
                  className="btn btn-primary "
                >
                  login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
