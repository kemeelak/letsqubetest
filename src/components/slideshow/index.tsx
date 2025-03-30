import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { Image } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../../assets/carousel/1.png";
import image2 from "../../assets/carousel/2.png";
import text2 from "../../assets/carousel/2-text.png";
import image3 from "../../assets/carousel/3.png";
import image4 from "../../assets/carousel/4.png";
import text4 from "../../assets/carousel/4-text.png";
import image5 from "../../assets/carousel/5.png";
import image6 from "../../assets/carousel/6.png";
import text6 from "../../assets/carousel/6-text.png";
import next from "../../assets/images/next.svg";
import previous from "../../assets/images/previous.svg";

interface ICarouselSlide {
  backgroundSrc: string;
  textSrc?: string;
}

const images: ICarouselSlide[] = [
  { backgroundSrc: image1 },
  { backgroundSrc: image2, textSrc: text2 },
  { backgroundSrc: image3 },
  { backgroundSrc: image4, textSrc: text4 },
  { backgroundSrc: image5 },
  { backgroundSrc: image6, textSrc: text6 },
];

const StyledCarousel = styled(Carousel)`
  .qube-ad-previous,
  .qube-ad-next {
    background: none;
    border: none;
    z-index: 10;
    cursor: pointer;
    position: absolute;
    top: 49%;
    &:focus {
      outline: 0;
    }
  }
  .qube-ad-next {
    right: 25px;
  }
  &.carousel-root {
    .carousel-slider {
      .slider-wrapper {
        .slide {
          .container {
            position: relative;
            height: inherit;
            &:hover {
              .background {
                transition: filter 0.5s ease-in-out;
                filter: grayscale(0%);
              }
              .quote {
                visibility: hidden;
                opacity: 0;
                transition: visibility 0s, opacity 0.5s ease-in-out;
              }
            }
            .background {
              object-fit: cover;
              height: 100%;
              transition: filter 0.5s ease-in-out;
              filter: grayscale(100%);
            }
            .quote {
              transition: visibility 0s, opacity 0.5s ease-in-out;
              visibility: visible;
              opacity: 1;
              position: absolute;
              top: 25%;
              height: 50%;
              width: auto;
            }
          }
        }
      }
      .qube-ad-previous {
        left: 460px;
      }
    }
  }
  @media all and (min-width: 1199px) {
    &.carousel-root {
      height: calc(100vh - 60px);
      position: absolute;
      top: 60px;
      .carousel-slider {
        height: calc(100vh - 60px);
        .slider-wrapper {
          height: inherit !important;
          .slide {
            height: calc(100vh - 60px);
            .container {
              .quote {
                right: 70px;
              }
            }
          }
        }
        .qube-ad-previous {
          left: 460px;
        }
      }
    }
  }
  @media all and (max-width: 1198px) {
    &.carousel-root {
      height: 210px;
      top: 60px;
      .carousel-slider {
        height: 210px;
        box-shadow: 0px 0px 10px #d1d8e6;
        border-radius: 5px;
        .slider-wrapper {
          height: inherit !important;
          .slide {
            height: 210px;
            .container {
              .quote {
                right: 16px;
              }
            }
          }
        }
      }
      .qube-ad-previous,
      .qube-ad-next {
        display: none;
      }
    }
  }
`;

const SlideShow = () => {
  const carouselConfiguration = {
    showArrows: true,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: false,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    showStatus: false,
    dynamicHeight: true,
    transitionTime: 1000,
    interval: 30000,
    renderArrowPrev: (onClickHandler: () => void) => (
      <button
        type="button"
        onClick={onClickHandler}
        className="qube-ad-previous"
      >
        <Image src={previous} />
      </button>
    ),
    renderArrowNext: (onClickHandler: () => void) => (
      <button type="button" onClick={onClickHandler} className="qube-ad-next">
        <Image src={next} />
      </button>
    ),
  };
  return (
    <StyledCarousel {...carouselConfiguration}>
      {images.map((image, i) => (
        <div className="container" key={`image_${i}`}>
          <Image className="background" src={image.backgroundSrc} />
          {image.textSrc && <Image className="quote" src={image.textSrc} />}
        </div>
      ))}
    </StyledCarousel>
  );
};

export default SlideShow;
