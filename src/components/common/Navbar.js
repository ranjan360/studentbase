import React from "react";
import Profile from '../../assets/profile.png'
import Logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {useFirebase} from 'react-redux-firebase'

function Navbar() {
    const firebase = useFirebase()
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="!#">
          <img
            src={Logo}
            alt="admin"
            height="30"
          />
          </a>
          <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="dropdownContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
          <div className="collapse navbar-collapse" id="dropdownContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link to="/studentForm" className="btn btn-primary mr-3">
                Add Student
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                <img
                  src={Profile}
                  alt="admin"
                  height="30"
                />
                <span className="ml-2 navbar-text">Subroto Biswas</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="!#">
                  Profile
                </a>
                <a
                  className="dropdown-item"
                  href="!#"
                  onClick={() => firebase.logout()}
                >
                  Logout
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="!#">
                  Ads
                </a>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }

  export default Navbar