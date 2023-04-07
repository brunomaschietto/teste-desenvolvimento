import {
  Box,
  Card,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import simbolos from "../assets/simbolos.png";
import luva from "../assets/luva.png";

const Cleaning = () => {
  return (
    <Flex
      backgroundColor={"#84bed6"}
      flexDirection={"column"}
      alignItems={"center"}
      paddingTop={"50px"}
      gap={"100px"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
      >
        <Text as={"b"} color={"#004c98"} fontSize={"xl"}>
          O que fazer após a limpeza?
        </Text>
        <Text color={"white"}>
          Após o término da limpeza, recomendamos que seja aplicado detergente
          neutro por toda a superfície, para
          <br /> que possíveis resíduos de ácidos sejam neutralizados e tenham
          suas ações interrompidas. Quando o ácido fica
          <br /> agindo sobre o piso, ele tende a penetrar pelos poros e atingir
          toda propriedade que está abaixo daquela
        </Text>
      </Flex>
      <Card
        width={"1298px"}
        height={"200px"}
        backgroundColor={"whiteAlpha.600"}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
          paddingTop={"80px"}
        >
          <Text as={"b"} color={"#004c98"} fontSize={"xl"}>
            Descrição
          </Text>
          <Box>
            <UnorderedList size={"xs"}>
              <ListItem color={"#004c98"} fontSize={"xs"}>
                Embalagem: 1 garrafão de 5 litros
              </ListItem>
              <ListItem color={"#004c98"} fontSize={"xs"}>
                Produto concentrado: 1 litro rende até 10 litros
              </ListItem>
              <ListItem color={"#004c98"} fontSize={"xs"}>
                Produto registrado na ANVISA
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Card>
      <Flex justifyContent={"space-around"} width={"1298px"} paddingBottom={'30px'}>
        <Card
          borderRadius={"225px"}
          backgroundColor={"#84bed6"}
          width={"400px"}
          height={"400px"}
          border={"1px solid #004c98"}
          position={"relative"}
        >
          <Image src={luva} height={"500px"} position={"absolute"} top={'-71px'} left={'35px'}/>
        </Card>
        <Flex flexDirection={"column"} gap={"8px"}>
          <Text as={"b"} fontSize={"28px"} color={"#004c98"}>
            Precauções
          </Text>
          <Text color={"white"}>
            Para sua segurança, é necessário o uso de EPI's para manusear o
            produto.
            <br /> Por se tratar de um produto à base de ácido, recomendamos uso
            de luvas de
            <br /> proteção, botas ou sapatos fechados, óculos e máscara. Lave
            as mãos
            <br /> cuidadosamente após o manuseio. Em caso de contato com a pele
            ou olhos lave
            <br /> cuidadosamente com água corrente durante vários minutos.
          </Text>
          <Image src={simbolos} />
          <Text color={"white"}>
            Conserve o produto fora do alcance de crianças e animais domésticos.
            <br /> Produto não testado em animais.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Cleaning;
