import React from "react";
import css from "./components.css";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function Card() {
  return (
    <Box className="card">
      <Box>
        <Image
          src="https://esportsadda.in/wp-content/uploads/2022/12/best-gaming-room-setup-1.webp"
          alt="Green double couch with wooden legs"
        />
        <Stack
          mt="6"
          spacing="3"
          p="14px 14px"
          textAlign="center"
          gap="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <Heading size="md">Розовый зал</Heading>
          <Text w="300px">
            Аренда розового зала : 9 VR зон - Standart VR, PS 4 Pro, KAT VRдо 10
            человек
          </Text>
          <button className="tech_btn">Забронировать</button>
        </Stack>
      </Box>
    </Box>
  );
}
