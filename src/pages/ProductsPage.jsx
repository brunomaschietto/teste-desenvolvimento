import React from 'react'
import Shop from '../components/Shop'
import Description from '../components/Description'
import { Flex } from '@chakra-ui/react'
import Benefits from '../components/Benefits'
import HowToUse from '../components/HowToUse'

const ProductsPage = () => {
  return (
    <Flex flexDirection={'column'}>
        <Shop />
        <Description />
        <Benefits />
        <HowToUse />
    </Flex>
  )
}

export default ProductsPage