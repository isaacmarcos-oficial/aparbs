import { Box, Flex, Text, Image } from "@chakra-ui/react";

interface ServicesProps {
  image: string;
  description: string;
  children?: [];
}

export function Services({image, description}: ServicesProps){
  return(
    <Flex align="center" mb={{ base: "1rem", lg: "4" }} direction="column" justify="space">
      <Box w={{ base:"290px", md:"300px", lg:"250px" }} bgColor="terciary" borderRadius="10" boxShadow="lg" >
        <Flex w="100%" h="150px" bgColor="primary" borderTopRadius="10" bgImage={image} bgSize="cover" bgRepeat="no-repeat" >
        </Flex>
        <Text w="100%" textAlign="center" my="0.5rem" fontWeight="600" letterSpacing="0.05rem" color="primary" fontSize={{ base:"0.9rem", lg:"1rem" }} >
          {description}
        </Text>
      </Box>
        
    </Flex>
  )
}