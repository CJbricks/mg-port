import { React, useState } from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';


// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Scars() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(0);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '50%', md: '50%' });
  const side = useBreakpointValue({ base: '0%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Body Modification',
      text:
        ""
      
    },
    {
      title: 'Scarification',
      text:
        ""
      
    },
    {
      title: 'Piercing',
      text:
        ""
      
    },
  ];

  return (
    <Box
      bg={'gray.200'}
      p={4}
      position={'relative'}
      height={['300px','400px' , 'full']}
      width={'full'}
      overflow={'hidden'}
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <div>
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
      </div>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'100%'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            >
            <Image src='/Images/scarification-mg-color.jpg' alt="mario-gonz-scar-image-color" position='absolute' zIndex='-1' />
            
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.2xl" height="600px" position="relative" textAlign={['left', 'left']}>
              <Stack
                spacing={2}
                w={['full']}
                maxW={'xl'}
                position="absolute"
                top='40%'
                left='-70%'
                transform="translate(0, -150%)">

                  {/* If box background is active change Stack > top=50% */}

                {/*<Box w={['90%', '90%', 'full']} bg={'gray.100'} opacity={'85%'} p={5} position={'absolute'} z-index={-1} borderRadius={'20px'} boxShadow='-1px 3px 10px 0px rgba(0,0,0,0.75)'>*/}
                  <Heading color={'white'} fontSize={{ base: '3xl', md: '4xl', lg: '7xl' }} fontWeight={700} p={2} borderRadius={'5px'}>
                    {card.title}
                  </Heading>
                  <Text color={'teal.400'} fontSize={{ base: 'sm', lg: 'md' }} fontWeight={600} p={[4, 0, 0]}>
                    {card.text}
                  </Text>
               {/* </Box>*/}
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}