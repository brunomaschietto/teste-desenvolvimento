import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import galao5L from "../assets/mockup_super_pos_obra_principal_5l.png";

const Shop = () => {
  return (
    <Flex flexDirection={"column"} paddingLeft={"150px"}>
      <Flex gap={"5px"} paddingTop={"16px"}>
        <Text fontSize="xs">Home</Text>
        <Text fontSize="xs">|</Text>
        <Text fontSize="xs">Linha Profissional</Text>
        <Text fontSize="xs">|</Text>
        <Text fontSize="xs">Limpeza Pós Obra</Text>
        <Text fontSize="xs">|</Text>
        <Text fontSize="xs" as="b">
          Super Pós Obra 5L - Remove Sujidades
        </Text>
      </Flex>
      <Flex paddingTop={"30px"} gap={"16px"}>
        <Flex flexDirection={"column"} gap={"12px"}>
          <Card>
            <Image src={galao5L} width={"100px"} height={"100px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"100px"} height={"100px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"100px"} height={"100px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"100px"} height={"100px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"100px"} height={"100px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"100px"} height={"100px"} />
          </Card>
        </Flex>
        <Flex>
          <Card>
            <Image src={galao5L} width={"600px"} height={"600px"} />
          </Card>
        </Flex>
        <Flex>
          <Card width={"600px"} alignItems={"center"}>
            <CardHeader alignItems={"center"} textAlign={"center"}>
              <Text fontSize={"lg"}>Super Pós Obra 5L - Remove Sujidades</Text>
              <Text fontSize={"xs"}>REF: 14543183</Text>
              <Text>Estrelas</Text>
              <Text fontSize={"sm"}>
                <strong>(45)Avaliações.</strong> Avalie agora!
              </Text>
            </CardHeader>
            <Divider />
            <CardBody textAlign={"center"}>
              <Heading>R$75,00</Heading>
              <Text fontSize={"xs"}>
                em até <strong>12x</strong> de <strong>R$7,19</strong>
              </Text>
              <Flex flexDirection={'column'} gap={'12px'} paddingTop={'8px'}>
                <Flex gap={"12px"}>
                  <Flex
                    border={"1px solid gray"}
                    borderRadius={"12px"}
                    width={"80px"}
                    height={"50px"}
                    alignItems={"center"}
                    justifyContent={"space-around"}
                  >
                    <Text>-</Text>
                    <Text>1</Text>
                    <Text>+</Text>
                  </Flex>
                  <Flex flexDirection={"column"}>
                    <Button
                      borderRadius={"12px"}
                      width={"350px"}
                      height={"50px"}
                      backgroundColor={"#59c10c"}
                      color={"white"}
                    >
                      COMPRAR
                    </Button>
                    <Text fontSize={"xs"} color={"#59c10c"}>
                      Aqui sua compra é 100% segura, compre com tranquilidade.
                    </Text>
                  </Flex>
                </Flex>
                <Button
                  borderRadius={"12px"}
                  height={"50px"}
                  backgroundColor={"#004c98"}
                  color={"white"}
                  width={"100%"}
                >
                  REVENDA E LUCRE
                </Button>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Shop;
