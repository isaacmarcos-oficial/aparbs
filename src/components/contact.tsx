import { Button, Flex, Heading, Icon, Img, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { LinkIcons } from "./linkIcons";


export function Contact() {
  return(
    <Flex direction="column" w="100%" align="center" justify="center" bgColor="terciary"  py="5rem">
      <Flex align="center" justify="center" direction="column" w="100%">
        <Flex w={{ base:"85%", lg: "75%"}} display="column">
          
          <Flex>
            <Flex align="center" justify="center" direction="column" w={{ base:"100%", lg:"50%" }} h={{ base:"400px", lg:"600px" }} bgColor="secundary" >
              <Flex>
                <Heading mb="1rem" color="primary">
                  <a href="#faleconosco">
                    FALE CONOSCO
                  </a>
                </Heading>
              </Flex>
            <Flex direction="column" align="center" justify="center" mb="3rem">
              <Flex mb="0.5rem" gap="1rem"  >
                <LinkIcons/>
              </Flex>

                  <Text color="terciary" fontWeight="600" fontSize={{ base:"1rem", lg:"1.3rem" }} >
                    (38) 3220-8767
                  </Text>
            </Flex>

              <Flex>
                <Heading mb="6" color="primary">
                  VISITE-NOS
                </Heading>
              </Flex>
              <Flex direction="column" align="center" justify="center" w={{ base:"80%", lg:"60%" }} >
                <Button as={Link}
                  href="https://www.google.com/maps/dir//aparbs+porteirinha/@-15.755457,-43.0466363,14.17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x752281b048ee24b:0x8ce9b567298b1724!2m2!1d-43.0311318!2d-15.7536274?hl=pt-br"
                  target="_blank" leftIcon={<FaMapMarkerAlt />} bgColor="primary" w="100%" mb="2" _hover={{ color: "terciary" }}>
                  <Text fontSize={{ base:"0.75rem", lg:"1rem" }} >
                    APARBS Porteirinha/MG
                  </Text>
                </Button>
                <Button as={Link}
                  href="https://www.google.com/maps/dir//APARBS+Solu%C3%A7%C3%B5es+Automotivas+-+Avenida+Salviana+Alves+da+Cruz,+70+-+Lourdes,+Riacho+dos+Machados+-+MG,+39529-000/@-16.0021619,-43.1143853,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x75237fd6501ef8f:0x6612bbf2e18cc73a!2m2!1d-43.044517!2d-16.0021732?hl=pt-br"
                  target="_blank" leftIcon={<FaMapMarkerAlt />} bgColor="primary" w="100%" mb="2" _hover={{ color: "terciary" }}>
                  <Text fontSize={{ base:"0.75rem", lg:"1rem" }} >
                    APARBS Riacho dos Machados/MG
                  </Text>
                </Button>
              </Flex>
            </Flex>
            <Flex display={{ base:"none", lg:"flex" }} align="center" justify="center" w="50%" h="600px" bgColor="primary">
              <Img w="100%" h="600px" src="https://bit.ly/3yVZvPD" alt="Uma engrenagem" objectFit="cover" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>      
    </Flex>
  )
}