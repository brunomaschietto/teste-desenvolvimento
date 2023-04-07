import { Box, Card, Flex, Text } from "@chakra-ui/react";
import React from "react";

const HowToUse = () => {
  return (
    <Flex
      backgroundColor={"#84bed6"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"50px"}
      paddingTop={"50px"}
    >
      <Text color={"#004c98"} fontSize={"lg"} as={"b"}>
        Como usar?
      </Text>
      <Flex gap={"12px"}>
        <Card
          justifyContent={"center"}
          position={"relative"}
          backgroundColor={"#004c98"}
          width={"250px"}
          height={"140px"}
        >
          <Flex
            backgroundColor={"white"}
            borderRadius={"25px"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"45px"}
            width={"45px"}
            position={"absolute"}
            left={"100px"}
            top={"-20px"}
          >
            <Text as={"b"} color={"#004c98"} textAlign={"center"}>
              1
            </Text>
          </Flex>
          <Text color={"white"} as={"b"} fontSize={"sm"} textAlign={"center"}>
            Diluir de acordo com o grau de
            <br /> sujidade. Não recomendamos a<br />
            utilização do produto puro
          </Text>
        </Card>
        <Card
          justifyContent={"center"}
          position={"relative"}
          backgroundColor={"#004c98"}
          width={"250px"}
          height={"140px"}
        >
          <Flex
            backgroundColor={"white"}
            borderRadius={"25px"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"45px"}
            width={"45px"}
            position={"absolute"}
            left={"100px"}
            top={"-20px"}
          >
            <Text as={"b"} color={"#004c98"} textAlign={"center"}>
              2
            </Text>
          </Flex>
          <Text color={"white"} as={"b"} fontSize={"sm"} textAlign={"center"}>
            Espalhar o produto e esfregar
            <br /> com o auxílio de uma vassoura
          </Text>
        </Card>
        <Card
          justifyContent={"center"}
          position={"relative"}
          backgroundColor={"#004c98"}
          width={"250px"}
          height={"140px"}
        >
          <Flex
            backgroundColor={"white"}
            borderRadius={"25px"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"45px"}
            width={"45px"}
            position={"absolute"}
            left={"100px"}
            top={"-20px"}
          >
            <Text as={"b"} color={"#004c98"} textAlign={"center"}>
              3
            </Text>
          </Flex>
          <Text color={"white"} as={"b"} fontSize={"sm"} textAlign={"center"}>
            Deixar agir de 5 a 10 minutos
            <br /> tomando cuidado para não
            <br /> secar o produto
          </Text>
        </Card>
        <Card
          justifyContent={"center"}
          position={"relative"}
          backgroundColor={"#004c98"}
          width={"250px"}
          height={"140px"}
        >
          <Flex
            backgroundColor={"white"}
            borderRadius={"25px"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"45px"}
            width={"45px"}
            position={"absolute"}
            left={"100px"}
            top={"-20px"}
          >
            <Text as={"b"} color={"#004c98"} textAlign={"center"}>
              4
            </Text>
          </Flex>
          <Text color={"white"} as={"b"} fontSize={"sm"} textAlign={"center"}>
            Enxaguar com água em
            <br /> abundância até retirar todo o<br /> produto
          </Text>
        </Card>
        <Card
          justifyContent={"center"}
          position={"relative"}
          backgroundColor={"#004c98"}
          width={"250px"}
          height={"140px"}
        >
          <Flex
            backgroundColor={"white"}
            borderRadius={"25px"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"45px"}
            width={"45px"}
            position={"absolute"}
            left={"100px"}
            top={"-20px"}
          >
            <Text as={"b"} color={"#004c98"} textAlign={"center"}>
              5
            </Text>
          </Flex>
          <Text color={"white"} as={"b"} fontSize={"sm"} textAlign={"center"}>
            Repetir a operação se
            <br /> necessário
          </Text>
        </Card>
      </Flex>
      <Flex border={'1px solid #004c98'}>

      </Flex>
    </Flex>
  );
};

export default HowToUse;
