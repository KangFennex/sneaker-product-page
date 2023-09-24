import { productImages, ProductImagesThumbs } from "../../utils/productImages"
import previous from "../../assets/icon-previous.svg";
import next from "../../assets/icon-next.svg";
import { useState, useEffect, useRef } from "react";
import closeIcon from "../../assets/icon-close.svg"

const Lightbox = ({ handleClick, currentIndex }) => {
  const [currentIndexLightbox, setCurrentIndexLightbox] = useState(currentIndex);
  const lightboxRef = useRef()

  const handleNext = () => {
    setCurrentIndexLightbox((prevIndex) => {
      return prevIndex + 1 === productImages.length ? 0 : prevIndex + 1;
    });
  };

  const handlePrevious = () => {
    setCurrentIndexLightbox((prevIndex) => {
      return prevIndex - 1 < 0 ? productImages.length - 1 : prevIndex - 1;
    });
  };

  const handleThumbnailsClick = (index) => {
    setCurrentIndexLightbox(index);
  };

  useEffect(() => {
    function handleClickOutside(event) {

      // Make the light disappear if you click outside of it
      if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
        handleClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);



    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  return (
    <>
      <div className=" w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-75 z-30">
        <div ref={lightboxRef}>


          <div className="relative px-5 pt-8">
            <img
              className="product-image shadow-lg m-auto rounded-lg max-h-96"
              src={productImages[currentIndexLightbox].src}
              alt={productImages[currentIndexLightbox].alt}
            />
            <img className="close-icon cursor-pointer absolute top-0 right-6 w-5" src={closeIcon} onClick={handleClick} alt="close icon" />
            <img
              src={previous}
              alt="previous"
              className="navigate absolute left-0 top-1/2 transform -translate-y-1/4 shadow-lg cursor-pointer z-10"
              onClick={handlePrevious}
            />
            <img
              src={next}
              alt="next"
              className="navigate absolute right-0 top-1/2 transform -translate-y-1/4 shadow-lg cursor-pointer"
              onClick={handleNext}
            />
          </div>

          <div className="gap-5 mt-6 m-auto flex justify-center">
            {ProductImagesThumbs.map((thumb, index) => {
              return (
                <div key={index}>
                  <img
                    src={thumb.src}
                    alt="product"
                    className={`thumbnail-lightbox md:rounded-lg cursor-pointer w-20 ${currentIndex === index ? "active" : ""
                      }`}
                    onClick={() => handleThumbnailsClick(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Lightbox
