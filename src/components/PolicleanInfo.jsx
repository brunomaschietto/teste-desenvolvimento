import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import seloEmpresa from '../assets/seloEmpresa.png'

const PolicleanInfo = () => {
  return (
    <Flex backgroundColor={"#004c98"} height={'500px'} alignItems={'center'} justifyContent={'center'}>
      <Image src={seloEmpresa}/>
      <Flex flexDirection={"column"} gap={'12px'}>
        <Text as={"b"} color={"white"} fontSize={"28px"}>
          Quem é a Policlean Oirad?
        </Text>
        <Text color={"white"} fontSize={"sm"}>
          Somos uma empresa 100% brasileira, de fabricação própria. Iniciamos
          nossas atividades em 1965, ainda com o<br /> nome Oirad©, produzindo
          basicamente produtos domissanitários.
        </Text>
        <Text color={"white"} fontSize={"sm"}>
          Impulsionados pela busca permanente de inovação e evolução
          tecnológica, a linha de produção da Policlean foi
          <br /> sendo gradativamente ampliada para atender às necessidades de
          nossos clientes, contendo 7 categorias:
          <br /> Automotivo, Profissional, Lavanderia, Limpeza Geral, Piscinas e
          Tratamento de Pisos.
        </Text>
        <Text color={"white"} fontSize={"sm"}>
          Nossa unidade fabril, localizada em Campinas(SP), opera de acordo com
          as Boas Práticas de Fabricação, onde
          <br /> dispomos de dois mil e quinhentos m² de área instalada, para
          podermos oferecer um portfólio com mais de 120<br/> itens.
        </Text>
        <Text color={"white"} fontSize={"sm"}>
          Todos os nossos produtos seguem o mais alto controle de qualidade
          desde sua produção até a entrega,
          <br /> atendendo não apenas às exigências dos órgãos controladores,
          mas principalmente àquele que é nosso principal
          <br /> agente fiscalizador: você.
        </Text>
      </Flex>
    </Flex>
  );
};

export default PolicleanInfo;
