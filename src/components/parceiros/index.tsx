import { Flex, Heading, Img } from "@chakra-ui/react";
import { BusinessLogos } from "./BusinessLogos";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from "swiper";

interface LogoData {
  LogoImage: string;
  LogoAlt: string;
}

const logoData: LogoData[] = [
  { LogoImage: "/Business/copasa.png", LogoAlt: "Copasa" },
  { LogoImage: "/Business/cemig.png", LogoAlt: "Cemig" },
  { LogoImage: "/Business/localiza.png", LogoAlt: "Localiza" },
  { LogoImage: "/Business/unidas.png", LogoAlt: "Unidas" },
  { LogoImage: "/Business/prefPorteirinha.png", LogoAlt: "Prefeitura da Porteirinha" },
  { LogoImage: "/Business/prefSerranopolis.png", LogoAlt: "Prefeitura de Serranópolis" },
  { LogoImage: "/Business/mrdm.png", LogoAlt: "Mineradora Riacho dos Machados" },
  { LogoImage: "/Business/pmmg.png", LogoAlt: "Policial Militar de Minas Gerais" },
  { LogoImage: "/Business/seteLoc.png", LogoAlt: "Sete Loc" },
  { LogoImage: "/Business/control.png", LogoAlt: "Control" },
  { LogoImage: "/Business/orica.png", LogoAlt: "Orica" },
  { LogoImage: "/Business/armac.png", LogoAlt: "Armac" },
  { LogoImage: "/Business/extraBom.png", LogoAlt: "Extra Bom Supermercado" },
];


export function Parceiros() {

  return(
    <Flex direction="column" w="100%" align="center" justify="center"  py="3rem">
      <Flex w="100%" direction="column" align="center" justify="center" maxW="1140px" >
        <Heading color="primary" mb="2rem" >
          <a href="#NossosServicos">
            Nossos Clientes
          </a>
        </Heading>
      </Flex>

      <Flex w="100%" maxW="1280px" wrap="wrap" justify={{ lg:"space-between", md: "space-around", base:"space-around"}} gap="1.5rem" px={{ lg: "none", md:"8", base: "4" }}>
        <Swiper
          modules={[ Autoplay, Pagination, Navigation ]}
          slidesPerView={5}
          spaceBetween={0}
          loop={true}
          grabCursor={true}
          loopedSlides={4}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={5000}
          className="mySwiper"
        >
          
          {logoData.map((logo, index) => (
            <SwiperSlide key={index}>
              <BusinessLogos LogoImage={logo.LogoImage} LogoAlt={logo.LogoAlt} />
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/copasa.png"
              LogoAlt="Copasa"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/cemig.png"
              LogoAlt="Cemig"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/localiza.png"
              LogoAlt="Localiza"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/unidas.png"
              LogoAlt="Unidas"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/prefPorteirinha.png"
              LogoAlt="Prefeitura da Porteirinha"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/prefSerranopolis.png"
              LogoAlt="Prefeitura de Serranópolis"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/mrdm.png"
              LogoAlt="Mineradora Riacho dos Machados"
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/pmmg.png"
              LogoAlt="Policial Militar MG"
            />
          </SwiperSlide>

          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/seteLoc.png"
              LogoAlt="Sete Loc"
            />
          </SwiperSlide>

          <SwiperSlide>
            <BusinessLogos
              LogoImage="/Business/control.png"
              LogoAlt="Control"
            />
          </SwiperSlide> */}

        </Swiper>
      </Flex>      
    </Flex>
  )
}