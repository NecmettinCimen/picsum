import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import shuffle from "./shuffle";
import { connect } from "react-redux";
import { fetchList } from "./actions/picsumActions";

import { push } from "react-router-redux";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class App extends Component {
  state = {
    items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    close: "",
    branding: "",
    sNavigation: "",
    sHeader: ""
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        items: shuffle(this.state.items)
      });
    }, 30000);
  }
  componentWillMount() {
    this.props.dispatch(push("/search"));
  }
  showNav() {
    this.setState({
      close: this.state.close === "" ? "close" : "",
      branding: this.state.branding === "" ? "hide" : "",
      sNavigation: this.state.sNavigation === "" ? "show" : "",
      sHeader: this.state.sHeader === "" ? "no-shadow" : ""
    });
  }
  render() {
    const hamburger = "hamburger-menu " + this.state.close;
    const branding = "site-branding d-none d-lg-block " + this.state.branding;
    const siteNavigationClass =
      "site-navigation flex flex-column justify-content-between " +
      this.state.sNavigation;
    const siteHeaderClass = "site-header" + this.state.sHeader;

    return (
      <div>
        <header className={siteHeaderClass}>
          <div className="site-branding">
            <h1 className="site-title">
              <a rel="home">
                <img src="images/logo.png" alt="Logo" />
              </a>
            </h1>
          </div>
          {/* .site-branding */}
          <div className={hamburger} onClick={this.showNav.bind(this)}>
            <div className="menu-icon">
              <img src="images/menu-icon.png" alt="menu icon" />
            </div>
            {/* .menu-icon */}
            <div className="menu-close-icon">
              <img src="images/x.png" alt="menu close icon" />
            </div>
            {/* .menu-close-icon */}
          </div>
          {/* .hamburger-menu */}
        </header>
        {/* .site-header */}
        <nav className={siteNavigationClass}>
          <div className={branding}>
            <h1 className="site-title">
              <a rel="home">
                <img src="images/logo2.png" alt="Logo" />
              </a>
            </h1>
          </div>
          {/* .site-branding */}
          <ul className="main-menu flex flex-column justify-content-center">
            <li className="current-menu-item">
              <a>Home</a>
            </li>
            <li>
              <a href="portfolio.html">Portfolio</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <p>
            Copyright © All rights reserved | This template is made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </p>
          <div className="social-profiles">
            <ul className="flex justify-content-start justify-content-lg-center align-items-center">
              <li>
                <a>
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-pinterest" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav-bar-sep d-lg-none" />
        <div className="outer-container home-page">
          <div className="container-fluid">
            <div
              className="row"
              style={window.innerWidth > 990 ? { marginLeft: 70 } : {}}
            >
              <PoseGroup>
                {this.state.items.map(x => (
                  <Item key={x} />
                ))}
              </PoseGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Item extends Component {
  state = {
    Id: 0,
    isVisible: true
  };
  componentDidMount() {
    this.getImage();
    setInterval(() => {
      this.getImage();
    }, 10000);
  }
  getImage() {
    let r = Math.floor(Math.random() * 700 + 1);
    fetch("https://picsum.photos/600/600?image=" + r).then(res => {
      if (res.status !== 404) {
        this.setState({
          Id: r,
          isVisible: false
        });
        setTimeout(() => {
          this.setState({
            isVisible: true
          });
        }, 100);
      }
    });
  }
  render() {
    const imgSource = "https://picsum.photos/600/600?image=" + this.state.Id;
    return (
      <div className="col-12 col-md-6 col-lg-3 no-padding">
        <div className="portfolio-content">
          <figure>
            <Box pose={this.state.isVisible ? "visible" : "hidden"}>
              {this.state.Id !== 0 ? (
                <img src={imgSource} alt={imgSource} />
              ) : (
                <div />
              )}
            </Box>
          </figure>
          <div className="entry-content flex flex-column align-items-center justify-content-center">
            <h3>
              <a href={imgSource}>#{this.state.Id}</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
