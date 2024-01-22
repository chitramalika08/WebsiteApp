import React from "react";

function Home() {
  return (
    <>
     <div>
  <header id="header-top" className="header-top">
    <ul>
      <li>
        <div className="header-top-left">
          <ul>
            <li className="select-opt">
              <select name="language" id="language">
                <option value="default">EN</option>
                <option value="Bangla">BN</option>
                <option value="Arabic">AB</option>
              </select>
            </li>
            <li className="select-opt">
              <select name="currency" id="currency">
                <option value="usd">USD</option>
                <option value="euro">Euro</option>
                <option value="bdt">BDT</option>
              </select>
            </li>
            <li className="select-opt">
              <a href="#"><span className="lnr lnr-magnifier" /></a>
            </li>
          </ul>
        </div>
      </li>
      <li className="head-responsive-right pull-right">
        <div className="header-top-right">
          <ul>
            <li className="header-top-contact">
              +1 222 777 6565
            </li>
            <li className="header-top-contact">
              <a href="#">sign in</a>
            </li>
            <li className="header-top-contact">
              <a href="#">register</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </header>
  <section className="top-area">
    <div className="header-area">
      <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop={70} data-minus-value-mobile={55} data-speed={1000}>
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand" href="index.html">list<span>race</span></a>
          </div>
          <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li className=" scroll active"><a href="#home">home</a></li>
              <li className="scroll"><a href="#works">how it works</a></li>
              <li className="scroll"><a href="#explore">explore</a></li>
              <li className="scroll"><a href="#reviews">review</a></li>
              <li className="scroll"><a href="#blog">blog</a></li>
              <li className="scroll"><a href="#contact">contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div className="clearfix" />
  </section>
  <section id="home" className="welcome-hero">
    <div className="container">
      <div className="welcome-hero-txt">
        <h2>best place to find and explore <br /> that all you need </h2>
        <p>
          Find Best Place, Restaurant, Hotel, Real State and many more think in just One click
        </p>
      </div>
      <div className="welcome-hero-serch-box">
        <div className="welcome-hero-form">
          <div className="single-welcome-hero-form">
            <h3>what?</h3>
            <form action="index.html">
              <input type="text" placeholder="Ex: palce, resturent, food, automobile" />
            </form>
            <div className="welcome-hero-form-icon">
              <i className="flaticon-list-with-dots" />
            </div>
          </div>
          <div className="single-welcome-hero-form">
            <h3>location</h3>
            <form action="index.html">
              <input type="text" placeholder="Ex: london, newyork, rome" />
            </form>
            <div className="welcome-hero-form-icon">
              <i className="flaticon-gps-fixed-indicator" />
            </div>
          </div>
        </div>
        <div className="welcome-hero-serch">
          <button className="welcome-hero-btn" onclick="window.location.href='#'">
            search  <i data-feather="search" />
          </button>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default Home;