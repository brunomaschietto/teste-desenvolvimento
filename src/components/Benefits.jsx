import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import familia from "../assets/familia.jpg";
import botaoPlay from "../assets/botaoPlay.png";

const Benefits = () => {
  return (
    <Box position={"relative"}>
      <Image src={familia} />
      <Flex
        position={"absolute"}
        top={"100px"}
        backgroundColor={"#004c98"}
        width={"600px"}
        left={"1000px"}
        borderRadius={"5px"}
        flexDirection={"column"}
        padding={"60px"}
        gap={'20px'}
      >
        <Text as={"b"} fontSize={"30px"} color={"white"}>
          Benefícios do pós obra:
        </Text>
        <Flex flexDirection={'column'} gap={'10px'}>
          <Flex alignItems={"center"}>
            <Image src={botaoPlay} />
            <Text color={"white"}>
              Remove resíduos de obra com eficácia e sem agredir as superfícies;
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <Image src={botaoPlay} />
            <Text color={"white"}>
              Ideal em ambientes com excesso de concreto, cimento,
              <br /> reboco, argamassa, cal, rejuntes, gesso e terra em obras;
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <Image src={botaoPlay} />
            <Text color={"white"}>
              Remove respingos de tintas de base água recentes em
              <br /> pisos não porosos;
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <Image src={botaoPlay} />
            <Text color={"white"}>
              Muito versátil: Ótimo para quem presta serviços (uso
              <br /> profissional). Excelente para residências (uso
              <br /> doméstico);
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <Image src={botaoPlay} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Benefits;
