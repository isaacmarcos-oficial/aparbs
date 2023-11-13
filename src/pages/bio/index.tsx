import { Box, Flex, Image, Heading, Text, Icon, Link } from "@chakra-ui/react";
import { BsTruckFlatbed } from "react-icons/bs";
import { HiMapPin } from "react-icons/hi2";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { LinkIcons } from "../../components/linkIcons";
import { LinkBio } from "../../components/linkBio";

export default function Bio() {
  return (
    <Flex
      align="center"
      justify="center"
      bgImg="Fachada.jpg"
      bgSize="cover"
      bgColor="#000000e9"
      bgBlendMode="overlay"
    >
      <Flex
        flexDir="column"
        w="100%"
        maxW="540px"
        bgColor="primary"
        minH="100vh"
        align="center"
        px="40px"
      >
        <Flex flexDir="column" pt="50px" align="center">
          <Box
            display="flex"
            boxSize="110px"
            borderRadius="full"
            bgColor="terciary"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/Aparbs Light 3.svg" boxSize="90px" align="center" />
          </Box>
          <Heading
            mt="20px"
            color="terciary"
            textAlign="center"
            letterSpacing=".1rem"
            fontFamily="Montserrat, sans-serif"
            fontSize="25px"
            fontWeight="600"
          >
            APARBS <br /> Soluções Automotivas
          </Heading>
          <Text
            w="100%"
            fontSize="14px"
            textTransform="uppercase"
            textAlign="center"
            letterSpacing=".1187rem"
            lineHeight="21px"
            fontStyle="oblique"
            mt="10px"
          >
            O CENTRO AUTOMOTIVO QUE <br /> SEU CARRO SE SENTE SEGURO
          </Text>
        </Flex>

        <Flex w="100%" align="center" justify="center" mt="10">
          <LinkIcons />
        </Flex>

        <Flex flexDir="column" w="100%" maxW="500px" gap="3" mt="3">
          <LinkBio
            title="Fale conosco"
            adress="https://api.whatsapp.com/send?phone=5538999944889&text=Olá%2C estou no site da APARBS. Gostaria de receber atendimento"
            iconLink={AiOutlineWhatsApp}
          />
          <LinkBio
            title="APARBS Porteirinha/MG"
            adress="https://www.google.com/maps/dir//aparbs+porteirinha/@-15.755457,-43.0466363,14.17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x752281b048ee24b:0x8ce9b567298b1724!2m2!1d-43.0311318!2d-15.7536274?hl=pt-br"
            iconLink={HiMapPin}
          />

          <LinkBio
            title="APARBS Riacho dos Machados/MG"
            adress="https://www.google.com/maps/dir//APARBS+Solu%C3%A7%C3%B5es+Automotivas+-+Avenida+Salviana+Alves+da+Cruz,+70+-+Lourdes,+Riacho+dos+Machados+-+MG,+39529-000/@-16.0021619,-43.1143853,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x75237fd6501ef8f:0x6612bbf2e18cc73a!2m2!1d-43.044517!2d-16.0021732?hl=pt-br"
            iconLink={HiMapPin}
          />

          <LinkBio
            title="APARBS Auto Socorro"
            adress="https://api.whatsapp.com/send?phone=5538999944889&text=Olá%2C estou no site da APARBS. Gostaria de receber atendimento"
            iconLink={BsTruckFlatbed}
          />
        </Flex>

        <Link href="/" mt="8" style={{ textDecoration: "none" }}>
          <Text
            _hover={{ color: "secundary", fontWeight: "600" }}
            fontSize=".875rem"
          >
            IR PARA O SITE
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
