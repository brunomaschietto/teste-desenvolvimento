import { Card, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import simboloPoliclean from '../assets/simboloPoliclean.png'
import iconeInsta from '../assets/iconeInsta.png'
import iconeFacebook from '../assets/iconeFacebook.png'
import iconeLinkedin from '../assets/iconeLinkedin.png'
import iconeYoutube from '../assets/iconeYoutube.png'
import simboloEureciclo from '../assets/simboloEureciclo.png'
import seguranca from '../assets/seguranca.png'
import cartoes from '../assets/cartoes.png'

const Contact = () => {
  return (
    <Flex flexDirection={'column'} backgroundColor={'#004c98'} justifyContent={'center'}>
        <Flex justifyContent={'space-around'}>
            <Flex flexDirection={'column'} gap={'12px'} alignItems={'center'} justifyContent={'center'}>
                <Image src={simboloPoliclean}/>
                <Text color={'white'} fontSize={'xs'}>REDES SOCIAIS</Text>
                <Card backgroundColor={'#004c98'} border={'1px solid white'} justifyContent={'center'} alignItems={'center'} height={'50px'} width={'180px'}>
                    <Flex>
                        <Image src={iconeInsta} height={'40px'}/>
                        <Image src={iconeFacebook} height={'40px'}/>
                        <Image src={iconeLinkedin} height={'40px'}/>
                        <Image src={iconeYoutube} height={'40px'}/>
                    </Flex>
                </Card>
                <Image src={simboloEureciclo}/>
            </Flex>
            <Flex flexDirection={'column'} gap={'12px'} justifyContent={'center'}>
                <Text color={'#83bdd6'}>Policlean Oirad</Text>
                <Text color={'white'} fontSize={'xs'}>Home</Text>
                <Text color={'white'} fontSize={'xs'}>Quem somos</Text>
                <Text color={'white'} fontSize={'xs'}>Linha de produtos</Text>
                <Text color={'white'} fontSize={'xs'}>Blog</Text>
                <Text color={'white'} fontSize={'xs'}>Contato</Text>
                <Text color={'white'} fontSize={'xs'}>Seja um representante</Text>
                <Text color={'white'} fontSize={'xs'} as={'u'}>Política de Privacidade</Text>
            </Flex>
            <Flex flexDirection={'column'} gap={'12px'} justifyContent={'center'}>
                <Text color={'#83bdd6'}>Linhas de Produtos</Text>
                <Text color={'white'} fontSize={'xs'}>Limpeza e higienização</Text>
                <Text color={'white'} fontSize={'xs'}>Piscina</Text>
                <Text color={'white'} fontSize={'xs'}>Profissional</Text>
                <Text color={'white'} fontSize={'xs'}>Tratamentos de Pisos</Text>
                <Text color={'white'} fontSize={'xs'}>Automotiva</Text>
            </Flex>
            <Flex flexDirection={'column'} gap={'12px'} justifyContent={'center'}>
                <Text color={'#83bdd6'}>Entre em contato</Text>
                <Text color={'white'} fontSize={'xs'}>contato@policlean.com.br</Text>
                <Text color={'white'} fontSize={'xs'}>(19) 3276.7722</Text>
                <Text color={'white'} fontSize={'xs'}>(19) 99862.3431</Text>
                <Text color={'white'} fontSize={'xs'}>Av.Eng. Antônio Francisco Paula Souza<br/> 1149, Vila Paraíso<br/> Campinas - SP | CEP 13043-540</Text>
                
            </Flex>
            <Flex flexDirection={'column'} gap={'12px'} justifyContent={'center'}>
                <Text color={'#83bdd6'}>Formas de pagamento</Text>
                <Image src={cartoes}/>
                <Text color={'#83bdd6'}>Formas de envio</Text>
            </Flex>
        </Flex>
        <Divider />
        <Flex alignItems={'center'} flexDirection={'column'}>
            <Text color={'#83bdd6'}>Selos de segurança</Text>
            <Image src={seguranca} height={'60px'} width={'200px'}/>
        </Flex>
    </Flex>
  )
}

export default Contact