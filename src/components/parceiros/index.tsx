import { Flex, Heading, Img } from "@chakra-ui/react";
import { BusinessLogos } from "./BusinessLogos";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from "swiper";

interface ServicesProps {
  image: string;
  imageAlt: string;
  description: string;
  children?: [];
}


export function Parceiros() {

  return(
    <Flex direction="column" w="100%" align="center" justify="center" bgColor="gray.200"  py="3rem">
      <Flex w="100%" direction="column" align="center" justify="center" maxW="1140px" px="2rem" >
        <Heading color="primary" mb="2rem" >
          <a href="#NossosServicos">
            Nossos Clientes
          </a>
        </Heading>
      </Flex>

      <Flex w="100%" maxW="1140px" wrap="wrap" justify={{ lg:"space-between", md: "space-around", base:"space-around"}} gap="1.5rem" px="2rem">
        <Swiper
          modules={[ Autoplay, Pagination, Navigation ]}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          loopedSlides={4}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={5000}
          className="mySwiper"
        >
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/breve.png"
              LogoAlt="Em Breve"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/breve.png"
              LogoAlt="Em Breve"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/breve.png"
              LogoAlt="Em Breve"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/breve.png"
              LogoAlt="Em Breve"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/breve.png"
              LogoAlt="Em Breve"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/breve.png"
              LogoAlt="Em Breve"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/breve.png"
              LogoAlt="Em Breve"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/breve.png"
              LogoAlt="Em Breve"
            />
          </SwiperSlide>
        </Swiper>
      </Flex>      
    </Flex>
  )
}