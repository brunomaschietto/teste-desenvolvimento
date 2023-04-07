import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logoAgencia from '../assets/logoAgencia.png'

const Footer = () => {
  return (
    <Flex justifyContent={'space-around'} alignItems={'center'}>
      <Text color={'#004c98'}>
        COPYRIGHT POLICLEAN OIRAD QUÍMICA - 50090646000185 - 2022. TODOS OS
        DIREITOS RESERVADOS
      </Text>
      <Image src={logoAgencia}/>
    </Flex>
  );
};

export default Footer;
