import React, { Component } from 'react';
// import logo from './logo.svg';
import '../style/style.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <img className="imgfluid" src={require('../logo/babastudio-logo.png')}></img> {/**mengambil image harus pakai {require(..link)}  */}
            </div>
            <div className="menu">
              <ul>
                  <li><a>Home</a></li>
                  <li><a>Blogs</a></li>
                  <li><a>Galery</a></li>
                  <li><a>Kontak</a></li>
              </ul>
            </div>  
          </div>
        </div>
        {/* end header */}
        <div className="slider">
          <div className="sliderContent">
            <img className="imageslider" src={require('../images/banner-desktop.jpg')}></img>
          </div>
        </div>
        {/* end slider */}
        <h2 className="dataprestasi">Prestasi murid babastudio</h2>
        <div className="content">
          <div className="content-gambar">
            <div className="image">
              <img className="imagesliderr" src={require('../images/21cineplex.jpg')}></img>
              <div className="contentimage">
                <h2 className="fontimage">www.21Cineplex.com</h2>
              </div>
            </div>
            <div className="image">
              <img className="imagesliderr" src={require('../images/bpn.jpg')}></img>
              <div className="contentimage">
                <h2 className="fontimage">www.bpn.com</h2>
              </div>
            </div>
            <div className="image">
              <img className="imagesliderr" src={require('../images/republika.jpg')}></img>
              <div className="contentimage">
                <h2 className="fontimage">www.republika.com</h2>
              </div>
            </div>
          </div>
          {/* end content gambar */}
          <div className="content-gambar">
            <h2 className="dataprestasi">Tempat Kursus babastudio</h2>
            <div className="content-yutube">
              <iframe width="500" height="300" src="https://www.youtube.com/embed/OAV31Q05LXg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullScreen></iframe>
            </div>
            <div className="content-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1953697792987!2d106.62761531415482!3d-6.237960995484614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbf617855555%3A0x499c259b6b3d813a!2sKampus%20Babastudio%20-%20Tangerang.%20Kursus%20web%2C%20SEO%2C%20Internet%20marketing!5e0!3m2!1sid!2sid!4v1574138546049!5m2!1sid!2sid" width="450" height="300" frameborder="0" allowfullscreen=""></iframe>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App; //agar file bisa dipakai yang lain
