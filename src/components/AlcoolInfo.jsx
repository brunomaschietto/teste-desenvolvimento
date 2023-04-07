import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import molecula from "../assets/molecula.jpg";

const AlcoolInfo = () => {
  return (
    <Box position={"relative"}>
      <Image src={molecula} height={"800px"} width={"100%"} />
      <Flex
        backgroundColor={"white"}
        left={"100px"}
        top={"80px"}
        width={"800px"}
        borderRadius={"12px"}
        position={"absolute"}
        flexDirection={"column"}
        gap={"80px"}
        height={'650px'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flex flexDirection={"column"} gap={"30px"}>
          <Text as={"b"} color={"#004c98"} fontSize={"30px"}>
            Para que serve o Álcool Graxo Etoxilado
            <br /> que está na composição do produto?
          </Text>
          <Text color={"#004c98"}>
            Os etoxilados atuam como agentes umectantes, solubilizantes,
            detergentes,
            <br /> dispersantes, emulsificantes, emolientes e desengraxantes.
          </Text>
        </Flex>
        <Flex flexDirection={"column"} gap={"30px"}>
          <Text as={"b"} color={"#004c98"} fontSize={"30px"}>
            Como age o Super Pós Obra?
          </Text>
          <Text color={"#004c98"}>
            Por possuir ácido em sua composição, ele age em conjunto com os
            outros
            <br /> componentes da formulação fazendo uma leve
            esfoliação/decapagem da
            <br /> superfície do piso, removendo resíduos que ficam permanentes
            ao término da
            <br /> obra e acabam sendo difíceis de limpar. O ácido irá agir
            diretamente sobre as<br/> sujidades minerais (cal, cimento, excesso de
            rejunte), enquanto os outros
            <br /> tensoativos, como solvente, irão atuar nas outras sujidades
            em geral que
            <br /> possam estar sobre o piso (respingos de tinta, sujeiras
            incrustradas)
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AlcoolInfo;
