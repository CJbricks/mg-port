import {React, ReactNode} from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi'


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.900')} px={4} mt={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            bg={useColorModeValue('gray.200', 'gray.200')}
            color={useColorModeValue('alphaBlack.900', 'alphaBlack.900')}
                _hover={{
                  bg: 'gray.100',
                }}
            onClick={isOpen ? onClose : onOpen} >
              <BiMenu size='full' /> 
              </IconButton>
          <HStack spacing={8} alignItems={'center'}>
            <Box p={[0, 0, 4]}>
              <Image 
                src='/Images/mg-card.png' 
                alt='woofies-logo-small'
                width={20}
                height={20}
                />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                <Link 
                    href='/Body'
                    px={2}
                    py={1}
                    rounded={'full'}
                    _hover={{
                   textDecoration: 'none',
                   
                   bg: useColorModeValue('gray.400', 'gray.500'),
                 }}>Home</Link>
              <Link 
              href='./Programs'
               px={2}
               py={1}
               rounded={'full'}
               _hover={{
                 textDecoration: 'none',
                 bg: useColorModeValue('gray.400', 'gray.500'),
               }}>Services</Link>
              <Link 
                href='./Gallery'
                px={2}
                py={1}
                rounded={'full'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.400', 'gray.500'),
                }}>Gallery</Link>
                 <Link 
                href='./Contact'
                px={2}
                py={1}
                rounded={'full'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.400', 'gray.500'),
                }}>Contact</Link>
                
                
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
           
            {/* Jotform link */}
              <Link href='#' target='_blank'>
                <Button
                  variant={'outline'}
                  colorScheme={'black'}
                  size={'sm'}
                  mr={4}
                  _hover={{ bg: 'gray.200', color: 'gray.600' }}
                  >
                  Quote
                </Button>
              </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Link 
                    href='/Body'
                    px={2}
                    py={1}
                    rounded={'full'}
                    _hover={{
                   textDecoration: 'none',
                   
                   bg: useColorModeValue('gray.400', 'gray.500'),
                 }}>Home</Link>

            <Link 
                    href='/Contact'
                    px={2}
                    py={1}
                    rounded={'full'}
                    _hover={{
                   textDecoration: 'none',
                   
                   bg: useColorModeValue('gray.400', 'gray.500'),
                 }}>Contact</Link>
            <Link 
              href='./Programs'
               px={2}
               py={1}
               rounded={'full'}
               _hover={{
                 textDecoration: 'none',
                 bg: useColorModeValue('gray.400', 'gray.500'),
               }}>Services</Link>
              <Link 
                href='./Gallery'
                px={2}
                py={1}
                rounded={'full'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.400', 'gray.500'),
                }}>Gallery</Link>
            
                
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}></Box>
    </>
  );
}