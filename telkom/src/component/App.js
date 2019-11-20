import React, { Component } from 'react';
import Grid from './Grid';
import Home from './Home/Home';
import '../style/style.css';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render() {
    return (
      <Router>
      <div className="header">
        <div className="container warna">
          <nav className="navbar navbar-expand-lg navbar-light warna">
            <Link className="navbar-brand" href="#"><img className="logo" src={require('../logo/logo-indihome.png')} alt="logo"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Togle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PROMO</Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/">PROMO</Link>
                    <Link className="dropdown-item" to="/grid">Partnership</Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PAKET & ADD-ON</Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" href="#">Action</Link>
                    <Link className="dropdown-item" href="#">Another Action</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" href="#">Something else here</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Pusat Bantuan</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/*end navbar*/}
        </div>
        {/*end container*/}
        <div className="">
            <Route path="/" exact component={Home}/>
            <Route path="/grid"  component={Grid}/>
         </div>
      </div>
      </Router>
      // end header
    );
  }
}

export default App;
