import axios from "axios";
import { useState, useEffect } from "react";

export const Team = (props) => {
  const [team, setTeam] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:4000/teammanagement/`)
      .then((res) => {
        setTeam(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRequest();
  }, [team]);

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row">
          {team.map((item) => (
            <div className="col-md-4 col-sm-6 team">
              <div className="thumbnail">
                {" "}
                <img
                  src={item.image}
                  alt="..."
                  className="team-img"
                  style={{ borderRadius: "150px" }}
                />
                <div className="caption">
                  <h4>{item.name}</h4>
                  <p>{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
