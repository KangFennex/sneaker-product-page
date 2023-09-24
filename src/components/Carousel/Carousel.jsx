import previous from "../../assets/icon-previous.svg";
import next from "../../assets/icon-next.svg";
import { useState } from "react";
import { productImages, ProductImagesThumbs } from "../../utils/productImages"
import Lightbox from "../Lightbox/Lightbox";
import useWindowSize from "../../utils/useWindowSize";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false)
  const { width } = useWindowSize();


  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1 === productImages.length ? 0 : prevIndex + 1;
    });
  };


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex - 1 < 0 ? productImages.length - 1 : prevIndex - 1;
    });
  };


  const handleThumbnailsClick = (index) => {
    setCurrentIndex(index);
  };


  const handleClick = () => {
    setIsClicked(!isClicked)
  }


  return (
    <>
      <div className="flex justify-center / md:flex-col md:relative">
        <div className="carousel relative w-full">
          <img
            src={previous}
            alt="previous"
            className="navigate absolute left-5 top-1/2 shadow-lg cursor-pointer md:hidden z-10"
            onClick={handlePrevious}
          />
          <img
            className="product-image max-h-90 shadow-lg m-auto w-full/ md:rounded-lg md:min-w-fit md:max-h-80 md:cursor-pointer"
            src={productImages[currentIndex].src}
            alt={productImages[currentIndex].alt}
            onClick={handleClick}
          />
          <img
            src={next}
            alt="next"
            className="navigate absolute right-5 top-1/2 shadow-lg cursor-pointer md:hidden"
            onClick={handleNext}
          />
          <div className="productImgsThumbs gap-5 mt-6 m-auto hidden / md:flex justify-center">
            {ProductImagesThumbs.map((thumb, index) => {
              return (
                <div key={index}>
                  <img
                    src={thumb.src}
                    alt="product"
                    className={`thumbnail md:rounded-lg cursor-pointer w-16 ${currentIndex === index ? "active" : ""
                      }`}
                    onClick={() => handleThumbnailsClick(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isClicked && width > 768 && (
        <Lightbox handleClick={handleClick} currentIndex={currentIndex} />
      )}
    </>
  );
};


export default Carousel;



