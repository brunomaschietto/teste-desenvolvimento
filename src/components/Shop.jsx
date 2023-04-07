import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import galao5L from "../assets/mockup_super_pos_obra_principal_5l.png";
import caminhaoEntrega from "../assets/caminhaoEntrega.png";
import estrelas from "../assets/estrelas.png";

const Shop = () => {
  return (
    <Flex flexDirection={"column"} alignItems={'center'} justifyContent={'center'} width={'1400px'} margin={'0 auto'} paddingBottom={'60px'}>
      <Flex gap={"5px"} alignSelf={'start'} paddingTop={"16px"}>
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
        <Flex flexDirection={"column"} gap={"12px"} height={'600px'} overflowX={'auto'}>
          <Card>
            <Image src={galao5L} width={"90px"} height={"90px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"90px"} height={"90px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"90px"} height={"90px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"90px"} height={"90px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"90px"} height={"90px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"90px"} height={"90px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"90px"} height={"90px"} />
          </Card>
          <Card>
            <Image src={galao5L} width={"90px"} height={"90px"} />
          </Card>
        </Flex>
        <Flex>
          <Card width={"600px"} height={"600px"}>
            <Image src={galao5L} />
          </Card>
        </Flex>
        <Flex>
          <Card width={"600px"} height={'600px'} alignItems={"center"}>
            <CardHeader textAlign={"center"}>
              <Flex flexDirection={"column"} alignItems={"center"}>
                <Text fontSize={"lg"}>
                  Super Pós Obra 5L - Remove Sujidades
                </Text>
                <Text fontSize={"xs"}>REF: 14543183</Text>
                <Image src={estrelas} alt="Logo estrelas" />
                <Text fontSize={"sm"}>
                  <strong>(45)Avaliações.</strong> Avalie agora!
                </Text>
              </Flex>
            </CardHeader>
            <Divider />
            <CardBody textAlign={"center"}>
              <Heading>R$75,00</Heading>
              <Text fontSize={"xs"}>
                em até <strong>12x</strong> de <strong>R$7,19</strong>
              </Text>
              <Flex flexDirection={"column"} gap={"12px"} paddingTop={"8px"}>
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
            <Divider />
            <CardFooter>
              <Flex flexDirection={"column"} gap={"12px"} alignItems={"center"}>
                <Flex alignItems={"center"}>
                  <Image src={caminhaoEntrega} />
                  <Heading as="h2" fontSize="md">
                    Frete e prazo de Entrega
                  </Heading>
                </Flex>
                <Flex
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  width={"320px"}
                  border={"1px solid lightgray"}
                  height={"50px"}
                  borderRadius={"5px"}
                >
                  <Text fontSize={"sm"}>13098-324</Text>
                  <Text fontSize={"sm"} as={"b"}>
                    CALCULAR
                  </Text>
                </Flex>
                {/* <Flex flexDirection={'column'} width={'175%'}>
                  <Flex backgroundColor={"gray.200"} height={"30px"} justifyContent={'space-around'} alignItems={'center'}>
                    <Text as={"b"} fontSize={"xs"}>
                      Frete
                    </Text>
                    <Text as={"b"} fontSize={"xs"}>
                      Valor
                    </Text>
                    <Text as={"b"} fontSize={"xs"}>
                      Prazo
                    </Text>
                  </Flex>
                  <Flex backgroundColor={"gray.100"} height={"30px"} justifyContent={'space-around'} alignItems={'center'}>
                    <Text fontSize={"10px"}>
                      CORREIOS PAC
                    </Text>
                    <Text fontSize={"xs"}>
                      R$22,49
                    </Text>
                    <Text fontSize={"xs"}>
                      5 a 6 dias úteis
                    </Text>
                  </Flex>
                  <Flex backgroundColor={"gray.200"} height={"30px"} justifyContent={'space-around'} alignItems={'center'}>
                  <Text fontSize={"10px"}>
                      CORREIOS SEDEX
                    </Text>
                    <Text fontSize={"xs"}>
                      R$31,72
                    </Text>
                    <Text fontSize={"xs"}>
                      2 a 3 dias úteis
                    </Text>
                  </Flex>
                </Flex> */}
                <TableContainer>
                  <Table size={'sm'} variant='simple'>
                  <Thead>
                    <Tr backgroundColor={'gray.200'}>
                      <Th>Frete</Th>
                      <Th>Valor</Th>
                      <Th>Prazo</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr backgroundColor={'gray.100'}>
                      <Td>
                        CORREIOS PAC
                      </Td>
                      <Td>
                        R$ 22,49
                      </Td>
                      <Td>
                        5 A 6 dias úteis.
                      </Td>
                    </Tr>
                    <Tr backgroundColor={'gray.200'}>
                      <Td>
                        CORREIOS SEDEX
                      </Td>
                      <Td>
                        R$ 31,72
                      </Td>
                      <Td>
                        2 a 3 dias úteis.
                      </Td>
                    </Tr>
                  </Tbody>
                  </Table>
                </TableContainer>
              </Flex>
            </CardFooter>
          </Card>
        </Flex>
      </Flex>
      <Flex paddingTop={'50px'} justifyContent={'space-between'} width={'1306px'}>
        <Card width={"200px"} height={'75px'} border={'1px solid #0c539c'} textAlign={'center'} justifyContent={'center'}>
          <Text as={'b'} color={'#0c539c'} fontSize={'large'}>O que é?</Text>
        </Card>
        <Card width={"189px"} height={'75px'} border={'1px solid #0c539c'} textAlign={'center'} justifyContent={'center'}>
          <Text as={'b'} color={'#0c539c'} fontSize={'large'}>Benefícios do Super Pós Obra?</Text>
        </Card>
        <Card width={"189px"} height={'75px'} border={'1px solid #0c539c'} textAlign={'center'} justifyContent={'center'}>
          <Text as={'b'} color={'#0c539c'} fontSize={'large'}>Como usar?</Text>
        </Card>
        <Card width={"189px"} height={'75px'} border={'1px solid #0c539c'} textAlign={'center'} justifyContent={'center'}>
          <Text as={'b'} color={'#0c539c'} fontSize={'large'}>Descrição</Text>
        </Card>
        <Card width={"189px"} height={'75px'} border={'1px solid #0c539c'} textAlign={'center'} justifyContent={'center'}>
          <Text as={'b'} color={'#0c539c'} fontSize={'large'}>Quem é a Policlean Oirad?</Text>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Shop;
