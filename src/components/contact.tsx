import { Button, Flex, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return(
    <Flex direction="column" w="100%" align="center" justify="center" bgColor="terciary"  py="5rem">
      <Flex align="center" justify="center" direction="column" w="100%">
        <Flex w={{ base:"85%", lg: "75%"}} display="column">
          
          <Flex>
            <Flex align="center" justify="center" direction="column" w={{ base:"100%", lg:"50%" }} h={{ base:"400px", lg:"600px" }} bgColor="secundary" >
              <Flex>
                <Heading mb="1rem" color="primary">
                  FALE CONOSCO
                </Heading>
              </Flex>
            <Flex direction="column" align="center" justify="center" mb="3rem">
              <Flex mb="0.5rem" gap="1rem"  >
                <a href="tel:+5538991060376" target="_blank">
                  <Icon as={FaPhoneAlt} boxSize="1.7rem" _hover={{ color: "primary" }} cursor="pointer" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5538991060376&text=Ol%C3%A1%2C%20estou%20no%20instagram%20da%20APARBS.%20Gostaria%20de%20receber%20atendimento" target="_blank" >
                  <Icon as={FaWhatsapp} boxSize="2rem" _hover={{ color: "primary" }} />
                </a>
                <a href="https://www.instagram.com/aparbs.oficial/" target="_blank">
                  <Icon as={FaInstagram} boxSize="2rem" _hover={{ color: "primary" }} />
                </a>
                <a href="https://www.facebook.com/aparbs.oficial" target="_blank">
                  <Icon as={FaFacebook} boxSize="2rem" _hover={{ color: "primary" }} />
                </a>
                <a href="https://www.linkedin.com/company/aparbs" target="_blank">
                  <Icon as={FaLinkedin} boxSize="2rem" _hover={{ color: "primary" }} />
                </a>
              </Flex>
                
                <Text color="terciary" fontWeight="600" fontSize={{ base:"1rem", lg:"1.3rem" }} >
                  (38) 3220-8767 / (38) 9 9106-0376
                </Text>
            </Flex>

              <Flex>
                <Heading mb="6" color="primary">
                  VISITE-NOS
                </Heading>
              </Flex>
              <Flex direction="column" align="center" justify="center" w={{ base:"80%", lg:"60%" }} >
                <Button as={Link} href="https://bit.ly/3GCaXlv" target="_blank" leftIcon={<FaMapMarkerAlt/>} bgColor="primary" w="100%" mb="2" _hover={{ color: "terciary" }}>
                  <Text fontSize={{ base:"0.75rem", lg:"1rem" }} >
                    APARBS Porteirinha/MG
                  </Text>
                </Button>
                <Button as={Link} href="https://bit.ly/3Glb4BJ" target="_blank" leftIcon={<FaMapMarkerAlt/>} bgColor="primary" w="100%" mb="2" _hover={{ color: "terciary" }}>
                  <Text fontSize={{ base:"0.75rem", lg:"1rem" }} >
                    APARBS Riacho dos Machados/MG
                  </Text>
                </Button>
              </Flex>
            </Flex>
            <Flex display={{ base:"none", lg:"flex" }} align="center" justify="center" w="50%" h="600px" bgColor="primary">
              <Image w="100%" h="600px" src="https://bit.ly/3yVZvPD" objectFit="cover" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>      
    </Flex>
  )
}