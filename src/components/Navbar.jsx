import { Box, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";

export default function Navbar() {
    return (
        <Box height='100vh' backgroundImage='https://static.vecteezy.com/system/resources/previews/029/611/153/large_2x/a-beautiful-cyberpunk-girl-stands-against-the-backdrop-of-the-night-city-of-the-future-cyberpunk-concept-neural-network-ai-generated-photo.jpg' backgroundSize={'cover'} px={{ xl: '100px', md: '20px', sm: '10px' }} pt='20px'>
            {/* for desktop navbar  */}
            <Box display={{ md: 'flex', sm: 'none', base: 'none' }} alignItems='center' justifyContent='space-between' textColor='white'>
                <Box display='flex' gap={{ md: '80px', sm: '0' }} >
                    <Text>𝕄𝕆𝕕𝕖𝕧𝕔𝕠_𝕋𝕖𝕒𝕞</Text>
                    <ul>
                        <li className='a'>О клубе <span></span></li>
                        <li className='a'>Залы <span></span></li>
                        <li className='a'>Игры <span></span></li>
                        <li className='a'>Цены <span></span></li>
                        <li className='a'>Контакты <span></span></li>
                    </ul>
                </Box>
                <Box display='flex' alignItems='center' gap='30px'>
                    <Button variant='outline' colorScheme='white' borderRadius='70px'>Забронировать</Button>
                    <Text>8 (925)880-15-12</Text>
                </Box>
            </Box>


            {/* for mobl enav */}
            <Box className='nav' display={{ md: 'none', sm: 'flex' }}>
                <input type="checkbox" id="sidebar-active" />
                <label for="sidebar-active" class="open-sidebar-button">
                    <MdMenu style={{ color: 'white' }} size={25} />
                </label>
                <label id="overlay" for="sidebar-active"></label>
                <div class="links-container">
                    <label for="sidebar-active" class="close-sidebar-button">
                        <MdClose style={{ color: 'white' }} size={25} />
                    </label>
                    <ul>
                        <li className='a'>О клубе</li>
                        <li className='a'>Залы</li>
                        <li className='a'>Игры <span></span></li>
                        <li className='a'>Цены</li>
                        <li className='a'>Контакты</li>
                    </ul>
                </div>
            </Box>


            {/* for texts */}
            <Box h='40vh' display='flex' pt={{ md: '110px', sm: '30px', base: '30px' }} gap='12px' flexDirection='column' color='white' w={{ md: '430px', sm: '100%', base: '100%' }}>
                <Text fontSize={{ md: '56px', base: '50px' }} fontWeight='800'>Иследуй виртуальную реальность</Text>
                <Text>Виртуальная реальностью может быть веселой, но это также может быть очень страшным.Проведи свое время незабываемо в VR-клубе</Text>
                <Box display='flex' alignItems='center' gap='30px' mt='20px'>
                    <Button colorScheme='red' borderRadius='70px'>Выбрать игру</Button>
                    <Button variant='outline' colorScheme='red' _hover='none'>Наши цены</Button>
                </Box>
            </Box>


            {/* for icons  */}
            <Box h='40vh' pt={{ md: '300px', sm: '130px', base: '330px' }} display='flex' alignItems='center' gap='20px'>
                <FaInstagram size={40} style={{ color: 'white' }} />
                <FaLinkedin size={40} style={{ color: 'white' }} />
                <FaYoutube size={45} style={{ color: 'white' }} />
            </Box>

        </Box>

    )
}
