import React from 'react'
import Shop from '../components/Shop'
import Description from '../components/Description'
import { Flex } from '@chakra-ui/react'
import Benefits from '../components/Benefits'
import HowToUse from '../components/HowToUse'
import Cleaning from '../components/Cleaning'
import PolicleanInfo from '../components/PolicleanInfo'
import AlcoolInfo from '../components/AlcoolInfo'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ProductsPage = () => {
  return (
    <Flex flexDirection={'column'}>
        <Shop />
        <Description />
        <Benefits />
        <HowToUse />
        <Cleaning />
        <PolicleanInfo />
        <AlcoolInfo />
        <Contact />
        <Footer />
    </Flex>
  )
}

export default ProductsPage