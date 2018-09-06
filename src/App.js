import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import shuffle from "./shuffle";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});
const ItemLi = posed.li({
  flip: {
    scale: 1,
    transition: {
      scale: {
        type: "spring",
        velocity: 10
      },
      default: {
        type: "spring"
      }
    }
  }
});

const widthHeight = {
  width: window.innerWidth / 3.2,
  height: window.innerHeight / 3.2
};

class App extends Component {
  state = { items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        items: shuffle(this.state.items)
      });
    }, 3000);
  }
  render() {
    return (
      <div>
        <header className="site-header">
          <div className="site-branding">
            <h1 className="site-title">
              <a href="index.html" rel="home">
                <img src="images/logo.png" alt="Logo" />
              </a>
            </h1>
          </div>
          {/* .site-branding */}
          <div className="hamburger-menu">
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
        <div className="nav-bar-sep d-lg-none" />
        <div className="outer-container home-page">
          <div className="container-fluid">
            <div className="row" style={{ marginLeft: 70 }}>
              <PoseGroup>
                {this.state.items.map(x => (
                  <ItemLi
                    key={x}
                    style={{
                      listStyle: "none",
                      width: widthHeight.width,
                      height: widthHeight.height
                    }}
                  >
                    <Item />
                  </ItemLi>
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
                <img
                  src={imgSource}
                  alt={imgSource}
                  style={{
                    width: widthHeight.width,
                    height: widthHeight.height
                  }}
                />
              ) : (
                <div />
              )}
            </Box>
          </figure>
          <div
            className="entry-content flex flex-column align-items-center justify-content-center"
            style={{
              width: widthHeight.width,
              height: widthHeight.height
            }}
          >
            <h3>
              <a href={imgSource}>#{this.state.Id}</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
