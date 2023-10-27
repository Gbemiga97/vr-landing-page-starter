import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'


import {Pagination} from 'swiper'
import { slider } from '../data'


const TestimonialSlider = () => {
  return (
     <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween1: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
     }}>
      {
        slider.map(({image, message, name, email}, i) => (
          <SwiperSlide key={i} className='rounded-lg p-4 lg:p-6 min-h-[240px] 
          testimonialSlider'>
            <p className='mb-8-[100px] text-[15px]'> 
              {message}</p>
            <div className='flex flex-col gap-x-4 md:flex-row md:items-center'>
              <div className='w-14'>
                <img src={image} className='mb-3 md:mb-0' alt={name} />
              </div>
              <div>
                <p className='font-medium text-base'>{name}</p>
                <p className='font-medium text-rose-600'>{email}</p>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
     </Swiper>
  )
};

export default TestimonialSlider;
