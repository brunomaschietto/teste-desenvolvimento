import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import diluicao from "../assets/diluicao.png";

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
      <Flex
        border={"1px solid #004c98"}
        width={"1298px"}
        flexDirection={"column"}
        position={"relative"}
        borderRadius={"8px"}
        gap={'30px'}
      >
        <Flex backgroundColor={"#84bed6"} width={'80px'} position={'absolute'} top={'-16px'} left={'600px'} alignItems={'center'} justifyContent={'center'}>
          <Text color={'#004c98'} as={'b'} fontSize={'xl'}>Diluição</Text>
        </Flex>
        <Flex flexDirection={"column"} padding={'50px'}>
        <Flex justifyContent={"space-around"}>
          <Text color={"#004c98"} as={"b"}>
            LIMPEZA PESADA ATÉ
          </Text>
          <Text color={"#004c98"} as={"b"}>
            LIMPEZA MÉDIA ATÉ
          </Text>
          <Text color={"#004c98"} as={"b"}>
            LIMPEZA LEVE ATÉ
          </Text>
        </Flex>
        <Image src={diluicao} />
        <Flex justifyContent={"space-around"}>
          <Flex width={"205px"} justifyContent={"space-between"}>
            <Flex
              backgroundColor={"white"}
              borderRadius={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"45px"}
              width={"45px"}
            >
              <Text as={"b"} color={"#004c98"}>
                01
              </Text>
            </Flex>
            <Flex
              backgroundColor={"white"}
              borderRadius={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"45px"}
              width={"45px"}
            >
              <Text as={"b"} color={"#004c98"}>
                04
              </Text>
            </Flex>
          </Flex>
          <Flex width={"205px"} justifyContent={"space-between"}>
            <Flex
              backgroundColor={"white"}
              borderRadius={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"45px"}
              width={"45px"}
            >
              <Text as={"b"} color={"#004c98"}>
                01
              </Text>
            </Flex>
            <Flex
              backgroundColor={"white"}
              borderRadius={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"45px"}
              width={"45px"}
            >
              <Text as={"b"} color={"#004c98"}>
                06
              </Text>
            </Flex>
          </Flex>
          <Flex width={"205px"} justifyContent={"space-between"}>
            <Flex
              backgroundColor={"white"}
              borderRadius={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"45px"}
              width={"45px"}
            >
              <Text as={"b"} color={"#004c98"}>
                01
              </Text>
            </Flex>
            <Flex
              backgroundColor={"white"}
              borderRadius={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"45px"}
              width={"45px"}
            >
              <Text as={"b"} color={"#004c98"}>
                10
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent={"space-around"}>
          <Flex
            height={"30px"}
            border={"1px solid white"}
            width={"100px"}
            borderRadius={"25px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text as={"b"} color={"white"}>
              250ml/L
            </Text>
          </Flex>
          <Flex
            height={"30px"}
            border={"1px solid white"}
            width={"100px"}
            borderRadius={"25px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text as={"b"} color={"white"}>
              166ml/L
            </Text>
          </Flex>
          <Flex
            height={"30px"}
            border={"1px solid white"}
            width={"100px"}
            borderRadius={"25px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text as={"b"} color={"white"}>
              100ml/L
            </Text>
          </Flex>
        </Flex>
        </Flex>
        <Flex justifyContent={'center'} paddingBottom={'30px'}>
          <Flex
            width={"500px"}
            border={"1px solid #004c98"}
            height={"35px"}
            justifyContent={"space-around"}
            alignItems={"center"}
            borderRadius={"20px"}
          >
            <Text as={"b"} color={"#004c98"} fontSize={"sm"}>
              PROPORÇÃO:
            </Text>
            <Flex gap={"30px"}>
              <Flex gap={"8px"}>
                <Card
                  height={"25px"}
                  width={"25px"}
                  borderRadius={"20px"}
                  backgroundColor={"#ff366a"}
                ></Card>
                <Text as={"b"} color={"#004c98"} fontSize={"sm"}>
                  PRODUTO
                </Text>
              </Flex>
              <Flex gap={"8px"}>
                <Card
                  height={"25px"}
                  width={"25px"}
                  borderRadius={"20px"}
                  backgroundColor={"#00f5ff"}
                ></Card>
                <Text as={"b"} color={"#004c98"} fontSize={"sm"}>
                  ÁGUA
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HowToUse;
