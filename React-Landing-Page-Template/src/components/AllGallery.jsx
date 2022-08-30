import axios from "axios";
import { Image } from "./image";
import { useState, useEffect } from "react";

export const AllGallery = (props) => {
  function ViewImage(_id) {
    console.log("image" + _id);
    window.sessionStorage.setItem("ImageId", _id);
  }
  const [images, setImages] = useState([]);

  const getRequest = () => {
    axios
      .get(`http://localhost:4000/imagesmanagement`)
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [images]);
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div classaName="section-title">
          <h2>Gallery</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {images.map((item) => (
              <a href="allimages" onClick={(e) => ViewImage(item._id)}>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <Image
                    title={item.albumName}
                    smallImage={item.featuredimage}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* <a
            href="/allgallery"
            className="btn btn-custom btn-lg page-scroll"
            style={{ marginTop: "20px" }}
          >
            View All
          </a>{" "} */}
        </div>
      </div>
    </div>
  );
};
