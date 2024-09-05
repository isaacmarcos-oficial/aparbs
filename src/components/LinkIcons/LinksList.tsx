import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export const links = [
  {
    actionLink: "tel:+553832208767",
    actionDescription: "Telefone para a APARBS",
    icon: FaPhoneAlt
  },
  {
    actionLink: "https://api.whatsapp.com/send?phone=553832208767&text=Ol%C3%A1%2C%20estou%20no%20site%20da%20APARBS.%20Gostaria%20de%20receber%20atendimento",
    actionDescription: "WhatsApp da APARBS",
    icon: FaWhatsapp
  },
  {
    actionLink: "https://www.instagram.com/aparbs.oficial",
    actionDescription: "Instagram da APARBS",
    icon: FaInstagram
  },
  {
    actionLink: "https://www.facebook.com/aparbs.oficial",
    actionDescription: "Facebook da APARBS",
    icon: FaFacebook
  },
  {
    actionLink: "https://www.linkedin.com/company/aparbs",
    actionDescription: "LinkedIn da APARBS",
    icon: FaLinkedin
  }
]