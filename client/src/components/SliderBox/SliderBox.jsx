import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slider.module.scss';

import raga_aio from '../../assets/images/aspire-raga-aio-white.png';
import iqos from '../../assets/images/iqos-campaign.png';
import eliquid from '../../assets/images/kits-eliquid.png';
import plum from '../../assets/images/plum.png';

export const SliderBox = () => {
  const slidesData = [
    {
      title: 'RAGA AIO VAPE KIT',
      subtitle: 'New powerfull vape-system. 220W, 1 battery 18500',
      buttonLabel: 'SHOW VAPE KIT',
      images: raga_aio,
    },
    {
      title: 'IQOS 3 DUO',
      subtitle: 'IQOS offers a range of heated tobacco products, designed to provide a satisfying taste experience',
      buttonLabel: 'SHOW IQOS',
      images: iqos,
    },
    {
      title: 'ELIQUID FOR YOU',
      subtitle: 'Eliquids with many flavors, different strengths and volumes',
      buttonLabel: 'SHOW ELIQUIDS',
      images: eliquid,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    afterChange: (current) => {
      setActiveSlide(current);
    },
  };


  return (
    <div className={styles.slider}>

      <div className={styles.slider_plum}>
        <img src={plum} alt="plum" />
      </div>

      <div className={styles.slider__container}>
       <h1 className={styles.slider__container__title}>Offers for you!</h1>

      <Slider {...settings}>

        {slidesData.map((slide, index) => (
          <div key={index} className={styles.slider__container__block}>

            <div className={styles.slider__container__block_text}>
              <h1 className={styles.slider__container__block_text_h1}>
                {slide.title}
              </h1>

              <h2 className={styles.slider__container__block_text_h2}>
                {slide.subtitle}
              </h2>

              <button className={styles.slider__container__block_text_btn}>
                {slide.buttonLabel}
              </button>
            </div>

              <img 
                className={styles.slider__container__block_img}
                src={slide.images} 
                alt={slide.title}
              />
          </div>
        ))}

      </Slider>

      </div>
    </div>
  );
}
