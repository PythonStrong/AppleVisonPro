import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { VR } from '../assets'
import { FaChevronLeft, FaChevronRight, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function MainBottom() {
    return (
        <Box px={{ md: '100px', base: '10px' }} mt='110px'>
            {/* for woman  */}
            <Box className='mainBottom'>
                <Heading color='white' textTransform='uppercase'>галерея</Heading>
                <Box display='flex' alignItems='center' justifyContent='space-between' flexDir={{ md: 'row', sm: 'column', base: 'column' }}>
                    <Image src={VR} w='800px' />
                    <Box className="box" mt={{ md: '0', base: '20px' }}>
                        <Box>
                            <Stack
                                mt="6"
                                spacing="3"
                                p="16px 16px"
                                textAlign="center"
                                gap="20px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                flexDir="column"
                            >
                                <Text w="300px" lineHeight='40px'>
                                    В нашем клубе найдутся игры для всех возрастов!Для детей от 12 лет есть увлекательное развивающие игры, проводя время в которых можно зарядиться настроем и даже узнать что-то новое.Приходите с детьми и разделите с ними веселье
                                </Text>
                                <Box display='flex' color={'white'} fontSize='25px' alignItems='center' gap='4px'>
                                    <FaChevronLeft size={30} />
                                    <Text>01/03</Text>
                                    <FaChevronRight size={30} />
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* for map  */}
            <Box color='white' display='flex' alignItems='center' justifyContent='space-between' mt='60px' pb='60px' flexDirection={{ md: 'row', base: 'column' }}>
                <Box display='flex' flexDirection='column' gap='20px'>
                    <Text fontSize='50px' fontWeight='900'>Контакты</Text>
                    <Text fontSize='28px' fontWeight='800'>Адрес</Text>
                    <Text>Москва, метро Виртуальная, ул. Реальность,  3-1</Text>
                    <Text fontSize='28px' fontWeight='800'>Телефон</Text>
                    <Text>+7 (925) 880-15-12</Text>
                    <Text fontSize='28px' fontWeight='800'>Социальные сети</Text>
                    <Box display='flex' alignItems='center' gap='10px'>
                        <FaFacebook size={30} style={{ color: 'white' }} />
                        <FaInstagram size={30} style={{ color: 'white' }} />
                        <FaYoutube size={30} style={{ color: 'white' }} />
                    </Box>
                </Box>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7273.273574605613!2d139.70453040160632!3d35.699988848931795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2059b7fd4b%3A0xec61c68fe232efd2!2sShinjuku%20City%2C%20Tokyo%2C%20Japan!5e1!3m2!1sen!2s!4v1710252048751!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </Box>
    )
}
