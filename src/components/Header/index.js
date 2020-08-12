import React from "../../../node_modules/react";
import { Link } from "../../../node_modules/react-router-dom";
import "./style.css";

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/">Teresa Bruggeman</Link>
            <button className="navbar-toggler btn-light justify-content-end" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav float-right">
                    <li className="nav-item">
                        <Link to='/' className={window.location.pathname ==='/' || window.location.pathname === '/home' ? "nav-link active" : "nav-link"} >Bio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/portfolio' className={window.location.pathname === '/portfolio' ? "nav-link active" : "nav-link"} >Portfolio</Link>
                     </li>
                    <li className="nav-item">
                    <Link to='/contact' className={window.location.pathname === '/contact' ? "nav-link active" : "nav-link"} >Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;