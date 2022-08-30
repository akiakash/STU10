export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  <img src="./img/logo2.png" style={{ width: "300px" }} />
                  <span></span>
                </h1>
                <p style={{ fontSize: "30px" }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
