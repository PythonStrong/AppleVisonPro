import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MainTopPicture } from "../assets";
import Card from "./Card";

export default function MainTop() {
    return (
        <Box px={{ md: "100px", base: "20px" }}>
            {/* for man  */}
            <Box textColor="white" h="90vh">
                <Text fontSize="46px" fontWeight="700" pt="60px">
                    О нашем клубе
                </Text>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    flexDirection={{ md: "row", base: "column" }}
                >
                    <Image src={MainTopPicture} width={{ xl: "890px", md: "700px" }} />
                    <Box
                        width={{ md: "300px", base: "100%" }}
                        display="flex"
                        alignItems="flex-start"
                        flexDirection="column"
                        gap="10px"
                    >
                        <Text fontSize="20px" fontWeight="600">
                            ᏝᎾᏒᎬᎷ ᎨᏢᏕᏬᎷ ᎠᎾᏝᎾᏒ ᏕᎨᏖ ᎯᎷᎬᏖ, ᏨᎾᏁᏕᎬᏨᏖᎬᏖᏬᏒ ᎯᎠᎨᏢᎨᏕᎨᏨᎨᏁᎶ ᎬᏝᎨᏖ.
                            ᏅᏬᎨᏕᏅᏬᎯᎷ, ᏖᎬᎷᏢᎾᏒᎨᏰᏬᏕ.
                        </Text>
                        <Text>
                            Наш клуб виртуальной реальности начал свою деятельность не так
                            давно. Тем не менее, мы уверены - вскоре о нас узнают далеко за
                            пределами компьютерных залов.
                        </Text>
                        <Text>
                            Наш клуб виртуальной реальности начал свою деятельность не так
                            давно. Тем не менее, мы уверены - вскоре о нас узнают далеко за
                            пределами компьютерных залов.
                        </Text>
                        <Text>
                            Мы делаем виртуальные миры доступными каждому, приходите и
                            испытайте эти ощущения сами!
                        </Text>
                    </Box>
                </Box>
            </Box>
            {/* for cards  */}
            <Box mt={{ md: '10px', base: '140px' }}>
                <Text fontSize='50px' color='white' fontWeight='800'>Игровые залы</Text>
                <Box display='flex' height={{ md: '100vh', base: '100%' }} alignItems='center' justifyContent={{ md: 'space-between', base: 'center' }} gap={{ md: '0', base: '20px' }} flexWrap='wrap'>
                    <Card />
                    <Card />
                    <Card />
                    <Box display='flex' h alignItems='center' justifyContent={{ md: 'space-between', base: 'center' }} gap={{ md: '0', base: '20px' }} flexWrap='wrap' w='100%' mt='40px'>
                        <Card />
                        <Card />
                        <Card />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
