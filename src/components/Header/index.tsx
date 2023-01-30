import { Text, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Img, useDisclosure, DrawerBody, Box, Icon, Heading } from "@chakra-ui/react";
import React from "react";
import { ImMenu } from 'react-icons/im'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return(
    <Flex position="absolute" align="center" justify="center" h="80px" my="32px" w="100%" pb="-80px" >
      <Flex maxW="71.25rem" w="100%" align="center" justify="space-between" m="32px">

        <Flex align="center" justify="center" >
          <Box p="-1"  onClick={onOpen} _hover={{ color: "primary" }}>
            <a ref={btnRef} >
              <Icon as={ImMenu} boxSize="28px" cursor="pointer" />
            </a>
          </Box>
          <Drawer isOpen={isOpen} onClose={onClose} placement="left" finalFocusRef={btnRef} size="sm">
            <DrawerOverlay/>
            <DrawerContent bgColor="secundary" h="100%" borderRight="4px" borderColor="primary" borderStyle="outset" >
              <DrawerCloseButton color="primary" />
              <DrawerHeader>
                <Flex align="center" justify="center" mt="60px">
                  <Img src="/Aparbs Dark 3.svg" alt="logo APARBS" h="96px" />
                </Flex>
              </DrawerHeader>
              <DrawerBody >
                <Flex direction="column" align="center" justify="center" px="40px" w="100%" mb="48px">
                  <Text w="100%" fontSize="14px" textTransform="uppercase" textAlign="center" letterSpacing=".1187rem" lineHeight="21px" fontStyle="oblique" mb="48px"  >
                    O CENTRO AUTOMOTIVO QUE <br/> SEU CARRO SE SENTE SEGURO
                  </Text>

                  <Flex direction="column" w="100%" align="center" mb="48px" >
                    <Text color="gray.400" w="100%" fontWeight="bold" mb="12px" fontSize="24px" letterSpacing="1.6px" align="center" >
                      Fale Conosco
                    </Text>
                    
                    <Flex mb="32px" gap="16px"  >
                      <a href="tel:+5538991060376" target="_blank">
                        <Icon as={FaPhoneAlt} boxSize="20.8px" _hover={{ color: "primary" }} cursor="pointer" />
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=5538991060376&text=Ol%C3%A1%2C%20estou%20no%20site%20da%20APARBS.%20Gostaria%20de%20receber%20atendimento" target="_blank" >
                        <Icon as={FaWhatsapp} boxSize="24px" _hover={{ color: "primary" }} />
                      </a>
                      <a href="https://www.instagram.com/aparbs.oficial/" target="_blank">
                        <Icon as={FaInstagram} boxSize="20.8px" _hover={{ color: "primary" }} />
                      </a>
                      <a href="https://www.facebook.com/aparbs.oficial" target="_blank">
                        <Icon as={FaFacebook} boxSize="20.8px" _hover={{ color: "primary" }} />
                      </a>
                      <a href="https://www.linkedin.com/company/aparbs" target="_blank">
                        <Icon as={FaLinkedin} boxSize="20.8px" _hover={{ color: "primary" }} />
                      </a>
                    </Flex>
                  </Flex>

                  <Flex w="100%" bgColor="terciary" py="16px" borderRadius="48px 0px 48px 0px "  >
                    <Text w="100%" fontWeight="600" fontSize="md" textAlign="center" letterSpacing="1.6px" color="secundary" >
                      Venha tomar <br/> um café conosco!
                    </Text>
                  </Flex>

                  <Heading w="100%" mt="1.875rem" fontWeight="800" fontSize="md" letterSpacing="1.6px" color="primary" >
                    Porteirinha/MG
                  </Heading>
                  <Text w="100%" mt=".25rem" fontWeight="300" fontSize="sm" letterSpacing="1.6px">
                    Avenida Dalton Cunha, 201 <br />
                    Bairro Eldorado <br />
                  </Text>

                  <Heading w="100%" mt="1.875rem" fontWeight="800" fontSize="md" letterSpacing="1.6px" color="primary" >
                    Riacho dos Machados/MG
                  </Heading>
                  <Text w="100%" mt=".25rem" fontWeight="300" fontSize="sm" letterSpacing="1.6px">
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
          <Img src="/Aparbs Dark 3.svg" w="7.5rem" h="80px" alt="logo APARBS"  />
          </a>
        </Flex>

        <Flex gap="16px" display={{ base: "none", md: "flex" }}  >
          <a href="tel:+5538991060376" target="_blank">
            <Icon as={FaPhoneAlt} boxSize="20.8px" _hover={{ color: "primary" }} cursor="pointer" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5538991060376&text=Ol%C3%A1%2C%20estou%20no%20site%20da%20APARBS.%20Gostaria%20de%20receber%20atendimento" target="_blank" >
            <Icon as={FaWhatsapp} boxSize="24px" _hover={{ color: "primary" }} />
          </a>
          <a href="https://www.instagram.com/aparbs.oficial/" target="_blank">
            <Icon as={FaInstagram} boxSize="20.8px" _hover={{ color: "primary" }} />
          </a>
          <a href="https://www.facebook.com/aparbs.oficial" target="_blank">
            <Icon as={FaFacebook} boxSize="20.8px" _hover={{ color: "primary" }} />
          </a>
          <a href="https://www.linkedin.com/company/aparbs" target="_blank">
            <Icon as={FaLinkedin} boxSize="20.8px" _hover={{ color: "primary" }} />
          </a>
        </Flex>
      </Flex>
    </Flex>
  )
}