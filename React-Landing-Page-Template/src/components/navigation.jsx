export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="./img/studio.png"
              style={{ width: "120px", marginTop: "-8px" }}
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                PHOTOGRAPHY
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                WEDDING FILMS
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                GALLERY
              </a>
            </li>

            <li>
              <a href="#testimonials" className="page-scroll">
                BLOGS
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                TEAM
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
