import React from 'react'
import Shop from '../components/Shop'
import Description from '../components/Description'
import { Flex } from '@chakra-ui/react'

const ProductsPage = () => {
  return (
    <Flex flexDirection={'column'} gap={'80px'}>
        <Shop />
        <Description />
    </Flex>
  )
}

export default ProductsPage