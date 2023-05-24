import { Flex, Icon } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export function LinkIcons() {
  return (
    <Flex align="center"  gap="16px" display="flex" >
      <a href="tel:+553832208767" target="_blank">
        <Icon as={FaPhoneAlt} boxSize="20.8px" _hover={{ color: "primary" }} cursor="pointer" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=553832208767&text=Ol%C3%A1%2C%20estou%20no%20site%20da%20APARBS.%20Gostaria%20de%20receber%20atendimento" target="_blank" >
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
  )
}