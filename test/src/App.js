import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
// import './js/js-image-slider';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <span className="logo">AdiWawan</span>
            </div>
            <div className="menu">
              <ul>
                  <li><a>Promo</a></li>
                  <li><a>paket & Add-On</a></li>
                  <li><a>pusat bantuan</a></li>
                  <li><a>info terkini</a></li>
                  <li className=""><a>myIndiHome</a></li>
              </ul>
            </div>
            {/**end menu */}
          </div>
          {/*end navbar */}
        </div>
        {/*end header */}
        <div className="head-bottom"><p>Berlangganan IndiHome bisa dapat internet cepat, nelpon rumah sepuasnya dan nonton beragam konten terbaik di layar TV interaktif</p></div>
        {/*end header-bottom */}
        
            <div className="container">
                <div className="slider">
                    <img src={require('./images/img1.jpg')} alt="slider1"></img>
                    {/*<img src={require('./images/img2.jpg')} alt="slider2"></img>
                    <img src={require('./images/img3.jpg')} alt="slider3"></img>
                    <img src={require('./images/img4.jpg')} alt="slider4"></img>*/}
                </div>
                <div className="container-kanan">
                  {/*<img src={require('./images/page2_img3.jpg')} alt="slider1"></img>*/}
                  <div className="banner"><button type="button" className="detail"><a>Lihat Detail</a></button></div>
                  <div className="banner"><button type="button" className="detail"><a>Lihat Detail</a></button></div>
                </div>

                <div className="banner-bottom">
                  <h2>Add-On Unggulan</h2>
                  <div className="banner-bottom-ok"><div className="addon"><p className="ket">iflix</p><a>LIHAT</a></div></div>
                  <div className="banner-bottom-ok"><div className="addon"><p className="ket">iflix</p><a>LIHAT</a></div></div>
                  <div className="banner-bottom-ok"><div className="addon"><p className="ket">iflix</p><a>LIHAT</a></div></div>
                  <div className="banner-bottom-ok"><div className="addon"><p className="ket">iflix</p><a>LIHAT</a></div></div>
                </div>
            </div>
                <div className="tivi">
                        <h2>Berlangganan IndiHome dan nikmati konten terbaik di dalam layar TV Anda</h2>
                        <h2>INDI || HOOQ || CATCHPLAY</h2>
                        <div className="list-tivi">
                        </div>
                </div>
        </div>
    );
  }
}

export default App;