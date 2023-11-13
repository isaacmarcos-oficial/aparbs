import { Icon, Box, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
import { HiMapPin } from "react-icons/hi2";

interface LinkBioProps {
  title: string;
  adress: string;
  iconLink: IconType;
}

export function LinkBio({ adress, iconLink, title }: LinkBioProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link style={{ textDecoration: "none" }} href={adress} isExternal
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        display="flex"
        w="100%"
        maxH="60px"
        minH="60px"
        p="6px"
        alignItems="center"
        gap="15px"
        borderRadius="5"
        bgColor="terciary"
        color="primary"
        _hover={{ bgColor: "terciary", color: "secundary" }}
        transition="0.3s"
      >
        <Box
          display="flex"
          minW="50px"
          minH="50px"
          borderRadius="5"
          bgColor="terciary"
          alignItems="center"
          justifyContent="center"
          _hover={{
            color: "primary",
            "&:hover svg": {
              color: "primary",
            },
          }}
        >
          <Icon as={iconLink} boxSize="2rem" color={isHovered ? "secundary" : "primary"} transition="0.5s" />
        </Box>
        <Text fontSize="16px" fontWeight="500">
          {title}
        </Text>
      </Box>
    </Link>
  );
}
