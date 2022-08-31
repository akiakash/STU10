import React, { useState, useCallback, useEffect } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import axios from "axios";

function AllImages() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const [image, setImage] = useState([]);

  const getRequest = () => {
    axios
      .get(`http://localhost:4000/imagesmanagement/`)
      .then((res) => {
        setImage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [image]);

  return (
    <div>
      {image.map((item) => (
        <Gallery photos={photos} onClick={openLightbox} />
      ))}

      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={image.map((x) => ({
                ...x,
                srcset: x.images,
                caption: x.albumName,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </div>
  );
}

export default AllImages;
