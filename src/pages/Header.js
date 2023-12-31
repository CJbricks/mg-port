import React from 'react'
import { Box, Image } from '@chakra-ui/react'


export default function Header() {
  return (
   <>
      <Box
            height={'100%'}
            width={'100%'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover">

            <Image src='/Images/mario-red.jpg' alt="mg-logo-banner-image"
            width={'100%'} />
        </Box>
   </>
  )
}
