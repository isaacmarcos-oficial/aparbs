import { Box, Flex, Image, Heading, Text, Icon, Link } from "@chakra-ui/react";
import { MdAir } from 'react-icons/md'
import { HiMapPin } from 'react-icons/hi2'
import { LinkIcons } from "../../components/linkIcons";

export default function Bio() {
  
  return (
    <Flex align="center" justify="center" bgImg="AparbsFront.jpg" bgSize="cover" bgColor="#000000f2" bgBlendMode="overlay" >
      <Flex flexDir="column" w="100%" maxW="540px" bgColor="secundary" minH="100vh" align="center" px="40px" >

        <Flex flexDir="column" pt="50px" align="center" >
          <Box display="flex" boxSize="110px" borderRadius="full" bgColor="terciary" alignItems="center" justifyContent="center" >
            <Image src="/Aparbs Light 3.svg" boxSize="90px" align="center" />
          </Box>
          <Heading mt="20px" color="terciary" textAlign="center" letterSpacing=".1rem" fontFamily="Montserrat, sans-serif" fontSize="25px" fontWeight="600" >
            APARBS <br/> Soluções Automotivas
          </Heading>
          <Text w="100%" fontSize="14px" textTransform="uppercase" textAlign="center" letterSpacing=".1187rem" lineHeight="21px" fontStyle="oblique" mt="10px" >
            O CENTRO AUTOMOTIVO QUE <br/> SEU CARRO SE SENTE SEGURO
          </Text>
        </Flex>

        <Flex w="100%" align="center" justify="center" mt="10" >
          <LinkIcons/>
        </Flex>

        <Flex flexDir="column" w="100%" maxW="500px" gap="3" mt="3" >
        <Link href="https://wa.me/5562985585145?text=Ol%C3%A1%21+Quero+fazer+minha+inscri%C3%A7%C3%A3o+para+o+curso+de+manuten%C3%A7%C3%A3o+em+ar+condicionado+automotivo%21" isExternal style={{textDecoration:"none"}} >
            <Box display="flex" w="100%" maxH="60px" minH="60px" bgColor="primary" p="6px" alignItems="center" gap="15px" borderRadius="5" _hover={{ bgColor:"terciary", color:"primary" }} transition="0.3s" >
              <Box display="flex" minW="50px" minH="50px" borderRadius="5" bgColor="terciary" alignItems="center" justifyContent="center" >
                <Icon as={MdAir} boxSize="2rem" color="primary" />
              </Box>
              <Text fontSize="16px" fontWeight="500" >
                Curso de Ar Condicionado
              </Text>
            </Box>
          </Link>
          
          <Link href="https://www.google.com/maps/dir//aparbs+porteirinha/@-15.755457,-43.0466363,14.17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x752281b048ee24b:0x8ce9b567298b1724!2m2!1d-43.0311318!2d-15.7536274?hl=pt-br" isExternal style={{ textDecoration: "none" }} >
            <Box display="flex" w="100%" maxH="60px" minH="60px" bgColor="primary" p="6px" alignItems="center" gap="15px" borderRadius="5" _hover={{ bgColor:"terciary", color:"primary" }} transition="0.3s" >
              <Box display="flex" minW="50px" minH="50px" borderRadius="5" bgColor="terciary" alignItems="center" justifyContent="center" >
                <Icon as={HiMapPin} boxSize="2rem" color="primary" />
              </Box>
              <Text fontSize="16px" fontWeight="500" >
                Rota para a APARBS em Porteirinha/MG
              </Text>
            </Box>
          </Link>

          <Link style={{textDecoration:"none"}}  href="https://www.google.com/maps/dir//APARBS+Solu%C3%A7%C3%B5es+Automotivas+-+Avenida+Salviana+Alves+da+Cruz,+70+-+Lourdes,+Riacho+dos+Machados+-+MG,+39529-000/@-16.0021619,-43.1143853,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x75237fd6501ef8f:0x6612bbf2e18cc73a!2m2!1d-43.044517!2d-16.0021732?hl=pt-br" isExternal >
            <Box display="flex" w="100%" maxH="60px" minH="60px" bgColor="primary" p="6px" alignItems="center" gap="15px" borderRadius="5" _hover={{ bgColor:"terciary", color:"primary" }} transition="0.3s" >
              <Box display="flex" minW="50px" minH="50px" borderRadius="5" bgColor="terciary" alignItems="center" justifyContent="center"  >
                <Icon as={HiMapPin} boxSize="2rem" color="primary" />
              </Box>
              <Text  fontSize="16px" fontWeight="500" >
                Rota para a APARBS em Riacho dos Machados/MG
              </Text>
            </Box>

          </Link>
        </Flex>
        
        <Link href="/" mt="8" style={{ textDecoration:"none" }} >
          <Text _hover={{ color: "primary", fontWeight:"600" }} fontSize=".875rem" >
            IR PARA O SITE 
          </Text>
        </Link>

      </Flex>
    </Flex>
  )
}