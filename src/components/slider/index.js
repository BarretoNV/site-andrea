import { React } from 'react';
import '../../App.scss';
import './styles.scss';

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

register();


function Slider() {

  const palestras = [
    {
      id: 1,
      image: 'https://placehold.co/600x400',
      name: 'Palestra 1',
      place: 'Local 1'
    },
    {
      id: 2,
      image: 'https://placehold.co/600x400',
      name: 'Palestra 2',
      place: 'Local 2'
    },
    {
      id: 3,
      image: 'https://placehold.co/600x400',
      name: 'Palestra 3',
      place: 'Local 3'
    },
    {
      id: 4,
      image: 'https://placehold.co/600x400',
      name: 'Palestra 4',
      place: 'Local 4'
    },
    {
      id: 5,
      image: 'https://placehold.co/600x400',
      name: 'Palestra 5',
      place: 'Local 5'
    },
  ];

  return (
          <div id="slider">
            <Swiper
              slidesPerView={1}
              pagination={{clickable: true}}
            >
              {palestras.map((item) => (
                <SwiperSlide hey={item.id}>
                  <div className='sliderItem'>
                    <img
                      src={item.image}
                      alt="logo"
                      className='slide-item'
                    />
                    <p>{item.name}</p>
                    <p>{item.place}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
  )
} export default Slider;