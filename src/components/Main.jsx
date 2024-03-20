import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import MainTop from '../assets/Hero.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import MainCard from './MainCard';
import { FaArrowRightLong } from "react-icons/fa6";

export default function Main() {
    return (
        <Box px={{ md: '100px', base: '20px' }} mt='250px'>
            <Box className="container" mt='150px' >
                <Text fontSize='42px' fontWeight='700' color='white'>Во что поиграть</Text>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ el: '.swiper-pagination' }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src='https://itp.usc.edu/wp-content/uploads/2020/11/rebecca-oliver-483486-unsplash.jpg' alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://beamable.com/wp-content/uploads/2022/02/Sep-3.png' alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://aieinstitute.edu.au/wp-content/uploads/2021/08/aie-institute-game-programming-degree-1600.jpg' alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://img.freepik.com/free-photo/composition-with-html-system-websites_23-2150866280.jpg' alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/43b8e102-0112-4267-b76c-d82460d6a5a0/df6fv3v-84a063b5-6352-47cc-bb73-b6c550fbc6bd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzYjhlMTAyLTAxMTItNDI2Ny1iNzZjLWQ4MjQ2MGQ2YTVhMFwvZGY2ZnYzdi04NGEwNjNiNS02MzUyLTQ3Y2MtYmI3My1iNmM1NTBmYmM2YmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A5e1ZSPfwvxh0WS74FNe3QCEBj0k6ssUWx8fYDJ0dxo' alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://www.shutterstock.com/image-illustration/colorful-programming-background-wallpaper-on-600w-704556892.jpg' alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='https://w0.peakpx.com/wallpaper/3/147/HD-wallpaper-programming-minimalism-minified-world-binary-and-mobile-background-minimalist-programmer.jpg' alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <FaChevronLeft />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <FaChevronRight />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </Box>

            <Box mt='110px'>
                <Text fontSize='50px' color='white' fontWeight='800'>Цены</Text>
                {/* for grid  */}
                <Box display='flex' alignItems='center' justifyContent={{ md: 'space-between', base: 'center' }} flexWrap='wrap'>
                    {/* for time  */}
                    <Box textColor='white' py={{ md: '0', base: '15px' }}>
                        <Box bg='#1F1F22FF' fontSize='20px' w='250px' textAlign='center' p='20px'>Время</Box>
                        <MainCard player={'1 игрок'} />
                        <MainCard player={'2 игрок'} />
                        <MainCard player={'3 игрок'} />
                        <MainCard player={'4 игрок'} />
                    </Box>
                    {/* for money  */}
                    <Box textColor='white' py={{ md: '0', base: '15px' }}>
                        <Box bg='#1F1F22FF' fontSize='20px' w='250px' textAlign='center' p='20px'>30 минут</Box>
                        <MainCard player={'500 руб'} />
                        <MainCard player={'900 руб'} />
                        <MainCard player={'1200 руб'} />
                        <MainCard player={'1400 руб'} />
                    </Box>
                    {/* for time money  */}
                    <Box textColor='white' py={{ md: '0', base: '15px' }}>
                        <Box bg='#1F1F22FF' fontSize='20px' w='250px' textAlign='center' p='20px'>60 минут</Box>
                        <MainCard player={'900 руб'} />
                        <MainCard player={'1600 руб'} />
                        <MainCard player={'2300 руб'} />
                        <MainCard player={'2600 руб'} />
                    </Box>
                    {/* for short time  */}
                    <Box textColor='white' py={{ md: '0', base: '15px' }}>
                        <Box bg='#1F1F22FF' fontSize='20px' w='250px' textAlign='center' p='20px'>Продление 15 мин</Box>
                        <MainCard player={'150 руб'} />
                        <MainCard player={'250 руб'} />
                        <MainCard player={'350 руб'} />
                        <MainCard player={'500 руб'} />
                    </Box>

                </Box>
                <center> <button className='btn'>Забронировать <FaArrowRightLong size={17} /> </button></center>
            </Box>


        </Box>
    )
}
