import { Text, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Img, useDisclosure, DrawerBody, Box, Icon, Link, Heading } from "@chakra-ui/react";
import React from "react";
import { ImMenu } from 'react-icons/im'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return(
    <Flex position="absolute" align="center" justify="center" h="5rem" my="2rem" w="100%" pb="-5rem" >
      <Flex maxW="1140px" w="100%" align="center" justify="space-between" m="2rem">

        <Flex align="center" justify="center" >
          <Box p="-1" as={Link} ref={btnRef} onClick={onOpen} _hover={{ color: "primary" }}>
            <Icon as={ImMenu} boxSize="1.75rem" />
          </Box>
          <Drawer isOpen={isOpen} onClose={onClose} placement="left" finalFocusRef={btnRef} size="sm">
            <DrawerOverlay/>
            <DrawerContent bgColor="secundary" h="100%" borderRight="0.25rem" borderColor="primary" borderStyle="outset" >
              <DrawerCloseButton color="primary" />
              <DrawerHeader>
                <Flex align="center" justify="center" mt="3.75rem">
                  <Img src="/Aparbs Dark 3.svg" h="6rem" />
                </Flex>
              </DrawerHeader>
              <DrawerBody >
                <Flex direction="column" align="center" justify="center" px="2.5rem" w="100%" mb="3rem">
                  <Text w="100%" fontSize="0.875rem" textTransform="uppercase" textAlign="center" letterSpacing="1.9px" lineHeight="1.3125rem" fontStyle="oblique" mb="3rem"  >
                    O CENTRO AUTOMOTIVO QUE <br/> SEU CARRO SE SENTE SEGURO
                  </Text>

                  <Flex direction="column" w="100%" align="center" mb="3rem" >
                    <Text color="gray.400" w="100%" fontWeight="bold" mb="0.75rem" fontSize="1.5rem" letterSpacing="0.1rem" align="center" >
                      Fale Conosco
                    </Text>
                    
                    <Flex mb="2rem" gap="1rem"  >
                      <a href="tel:+5538991060376" target="_blank">
                        <Icon as={FaPhoneAlt} boxSize="1.3rem" _hover={{ color: "primary" }} cursor="pointer" />
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=5538991060376&text=Ol%C3%A1%2C%20estou%20no%20instagram%20da%20APARBS.%20Gostaria%20de%20receber%20atendimento" target="_blank" >
                        <Icon as={FaWhatsapp} boxSize="1.5rem" _hover={{ color: "primary" }} />
                      </a>
                      <a href="https://www.instagram.com/aparbs.oficial/" target="_blank">
                        <Icon as={FaInstagram} boxSize="1.3rem" _hover={{ color: "primary" }} />
                      </a>
                      <a href="https://www.facebook.com/aparbs.oficial" target="_blank">
                        <Icon as={FaFacebook} boxSize="1.3rem" _hover={{ color: "primary" }} />
                      </a>
                      <a href="https://www.linkedin.com/company/aparbs" target="_blank">
                        <Icon as={FaLinkedin} boxSize="1.3rem" _hover={{ color: "primary" }} />
                      </a>
                    </Flex>
                  </Flex>

                  <Flex w="100%" bgColor="terciary" py="1rem" borderRadius="3rem 0rem 3rem 0rem "  >
                    <Text w="100%" fontWeight="600" fontSize="md" textAlign="center" letterSpacing="0.1rem" color="secundary" >
                      Venha tomar <br/> um café conosco!
                    </Text>
                  </Flex>

                  <Heading w="100%" mt="30px" fontWeight="800" fontSize="md" letterSpacing="0.1rem" color="primary" >
                    Porteirinha/MG
                  </Heading>
                  <Text w="100%" mt="4px" fontWeight="300" fontSize="sm" letterSpacing="0.1rem">
                    Avenida Dalton Cunha, 201 <br />
                    Bairro Eldorado <br />
                  </Text>

                  <Heading w="100%" mt="30px" fontWeight="800" fontSize="md" letterSpacing="0.1rem" color="primary" >
                    Riacho dos Machados/MG
                  </Heading>
                  <Text w="100%" mt="4px" fontWeight="300" fontSize="sm" letterSpacing="0.1rem">
                    Avenida Salviana Alves da Cruz, 70 <br />
                    Bairro Lourdes <br />
                  </Text>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>

        <Flex align="center" justify="left">
          <a href="/">
          <Img src="/Aparbs Dark 3.svg" h="5rem" />
          </a>
        </Flex>

        <Flex gap="1rem" display={{ base: "none", md: "flex" }}  >
          <a href="tel:+5538991060376" target="_blank">
            <Icon as={FaPhoneAlt} boxSize="1.3rem" _hover={{ color: "primary" }} cursor="pointer" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5538991060376&text=Ol%C3%A1%2C%20estou%20no%20instagram%20da%20APARBS.%20Gostaria%20de%20receber%20atendimento" target="_blank" >
            <Icon as={FaWhatsapp} boxSize="1.5rem" _hover={{ color: "primary" }} />
          </a>
          <a href="https://www.instagram.com/aparbs.oficial/" target="_blank">
            <Icon as={FaInstagram} boxSize="1.3rem" _hover={{ color: "primary" }} />
          </a>
          <a href="https://www.facebook.com/aparbs.oficial" target="_blank">
            <Icon as={FaFacebook} boxSize="1.3rem" _hover={{ color: "primary" }} />
          </a>
          <a href="https://www.linkedin.com/company/aparbs" target="_blank">
            <Icon as={FaLinkedin} boxSize="1.3rem" _hover={{ color: "primary" }} />
          </a>
        </Flex>
      </Flex>
    </Flex>
  )
}