import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import piso from "../assets/piso.jpg";
import galaoCapa from "../assets/mockup-com-capa.png";

const Description = () => {
  return (
    <Flex>
      <Flex
        width={"50%"}
        backgroundColor={"#004c98"}
        height={"900px"}
        flexDirection={"column"}
        position={"relative"}
      >
        <Flex flexDirection={"column"} gap={"80px"}>
          <Flex flexDirection={"column"} gap={'40px'} alignItems={'center'} paddingTop={'40px'}>
            <Flex flexDirection={"column"} gap={"16px"}>
              <Heading color={"white"}>O que é?</Heading>
              <Text color={"white"} fontSize={"sm"}>
                Detergente desincrustante pós obra.
              </Text>
              <Text color={"white"} fontSize={"sm"}>
                Indicado para limpeza pesada das sujidades do pós-obra,
                <br />
                principalmente de resíduos como: excesso de rejunte, argamassa,
                <br />
                cimento, gesso, terra e respingos de tinta*.
              </Text>
              <Text color={"white"} fontSize={"xs"}>
                *Somente respingos recentes de tintas à base de água
              </Text>
            </Flex>
            <Flex flexDirection={"column"} gap={"16px"}>
              <Heading color={"white"}>Indicação de uso</Heading>
              <Text color={"white"} fontSize={"sm"}>
                Ideal para uso em superfícies laváveis e em pisos de
                porcelanato,
                <br />
                cerâmicos, cotto/lajotas, cimentícios, granito, granilite,
                pastilhas,
                <br /> azulejos, antiderrapantes e pedras porosas, equipamentos
                como
                <br /> betoneiras e também materiais usados em uma reforma ou
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection={"column"} gap={"16px"} alignItems={'center'}>
            <Heading color={"white"}>
              Tipos de superfícies
              <br /> que podem ser tratadas:
            </Heading>
            <Text color={"white"} fontSize={"sm"}>
              Devido a versatilidade do produto, ele pode ser utilizado em todo
              <br />
              tipo de piso lavável. Para pisos que possuem acabamento com
              <br />
              brilho, o ideal é utilizar a diluição de limpeza leve e aplicar em
              <br />
              pequenas partes por vez, para que o produto não seque sobre o
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Image src={piso} width={"50%"} alt="Imagem de piso" />
      <Image
        src={galaoCapa}
        position={"absolute"}
        height={"900px"}
        top={"800px"}
        left={"650px"}
      />
      <Flex position={'absolute'} alignItems={'center'} justifyContent={'space-around'} backgroundColor={'white'} top={'1600px'} left={'250px'} width={'1200px'} height={'100px'} borderRadius={'12px'}>
        <Flex>
            <Image />
            <Text as={'b'} color={'#0c539c'}>EFICAZ NA LIMPEZA DE PISOS<br/> CERÂMICOS, PEDRAS E<br/> PORCELANATOS</Text>
        </Flex>
        <Flex>
            <Image />
            <Text as={'b'} color={'#0c539c'}>EFICAZ NA LIMPEZA DE PISOS<br/> CERÂMICOS, PEDRAS E<br/> PORCELANATOS</Text>
        </Flex>
        <Flex>
            <Image />
            <Text as={'b'} color={'#0c539c'}>EFICAZ NA LIMPEZA DE PISOS<br/> CERÂMICOS, PEDRAS E<br/> PORCELANATOS</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Description;
