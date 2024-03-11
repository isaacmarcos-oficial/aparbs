import { Checkbox, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "../../components/Header";

export default function Checklist() {
  const [checklistItems, setChecklistItems] = useState({
    oil: false,
    filters: false,
    tires: false,
    brakes: false,
    // Adicione outros itens do checklist aqui
  });

  const handleChecklistChange = (item: string) => {
    setChecklistItems((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
  };

  return (
    <>
      <Header />
      <Flex bg="primary" w="100%" h="100vh" align="center" justify="center">
        <VStack align="flex-start" spacing={4}>
          <Checkbox
            isChecked={checklistItems.oil}
            onChange={() => handleChecklistChange("oil")}
          >
            Verificar óleo do motor
          </Checkbox>
          <Checkbox
            isChecked={checklistItems.filters}
            onChange={() => handleChecklistChange("filters")}
          >
            Verificar filtros
          </Checkbox>
          <Checkbox
            isChecked={checklistItems.tires}
            onChange={() => handleChecklistChange("tires")}
          >
            Verificar pneus
          </Checkbox>
          <Checkbox
            isChecked={checklistItems.brakes}
            onChange={() => handleChecklistChange("brakes")}
          >
            Verificar freios
          </Checkbox>
          {/* Adicione mais checkboxes para outros itens do checklist */}
        </VStack>
      </Flex>
    </>
  );
}
