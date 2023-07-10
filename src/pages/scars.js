import React from 'react'
import { Container, Heading, VStack, Text, Box, Link, Image } from '@chakra-ui/react'


export default function scars() {
  return (
    <>
    <Container maxW={'7xl'} p="10" justify={'center'} alignItems={'center'}>
      <Heading as="h2" color={'gray.900'} fontWeight={'700'} align={'center'} fontSize={['xl', '2xl', '8xl']}>Scarification</Heading>
      <Box
        m={5}
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        border={''}
        height={'full'}
        borderRadius={'5px'}
        boxShadow={'-1px 3px 5px 0px rgba(0,0,0,0.75)'} >

      <Image src='/Images/scarification-mg-bw.jpg' alt="scalpel-image-mg" />
      </Box>
        <VStack padding={["20px", "50px", "100px"]}spacing="2" alignItems="flex-start">
            <Heading as="h2" borderRadius={'5px'}></Heading>
              <Text as="p" fontSize="lg">
              
              </Text>
              <Text as="p" fontSize="lg">
              
              </Text>
              <Text as="p" fontSize="lg">
              
              </Text>
              <Heading as='h2' mt={2}>
               
              </Heading>
              <Text as='p' fontSize='lg'>
              
              </Text>
          </VStack>
      </Container>
    </>
  )
}
