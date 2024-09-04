import { Flex, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export function LinkIcons() {
  return (
    <Flex align="center"  gap="16px" display="flex"  >
      <Link href="tel:+553832208767" target="_blank" aria-label="Telefone para a APARBS">
        <Icon as={FaPhoneAlt} boxSize="20px" _hover={{ color: "secundary" }} transition="0.2s" />
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=553832208767&text=Ol%C3%A1%2C%20estou%20no%20site%20da%20APARBS.%20Gostaria%20de%20receber%20atendimento" target="_blank" aria-label="WhatsApp da APARBS">
        <Icon as={FaWhatsapp} boxSize="24px" _hover={{ color: "secundary" }} transition="0.2s" />
      </Link>
      <Link href="https://www.instagram.com/aparbs.oficial/" target="_blank" aria-label="Instagram da APARBS">
        <Icon as={FaInstagram} boxSize="20px" _hover={{ color: "secundary" }} transition="0.2s" />
      </Link>
      <Link href="https://www.facebook.com/aparbs.oficial" target="_blank" aria-label="Facebook da APARBS">
        <Icon as={FaFacebook} boxSize="20px" _hover={{ color: "secundary" }} transition="0.2s" />
      </Link>
      <Link href="https://www.linkedin.com/company/aparbs" target="_blank" aria-label="LinkedIn da APARBS">
        <Icon as={FaLinkedin} boxSize="20px" _hover={{ color: "secundary" }} transition="0.2s"/>
      </Link>
    </Flex>
  )
}