import {
  Flex,
  Text,
  Heading,
  Icon as ChakraIcon,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
import { OfficeModal } from "./officeModal";

interface ServicesProps {
  title: string;
  description?: string;
  serviceIcon: IconType;
  children?: [];
}

export function Services({ title, serviceIcon, description }: ServicesProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      gap={3}
      direction="row-reverse"
      onClick={onOpen}
      cursor="pointer"
    >
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent color="gray.800" >
          <ModalHeader color="primary" >{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex direction="column" flex="1">
        <Heading color="primary" fontSize="18px">
          {title}
        </Heading>
        <Text color="gray.600" fontWeight="400" fontSize="14px">
          {description}
        </Text>
      </Flex>
      <Flex
        color= "primary"
        _hover={{ color:"terciary", bg:"primary" }}
        boxSize="80px"
        border="2px solid"
        borderColor="primary"
        align="center"
        justify="center"
        rounded="md"
        transition="0.5s"
      >
        <ChakraIcon as={serviceIcon} boxSize="35px" />
      </Flex>
    </Flex>
  );
}
