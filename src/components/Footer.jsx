import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ md: "space-between", base: "center" }}
      h={{ md: "10vh", base: "100%" }}
      flexDirection={{ md: "row", sm: "column", base: "column" }}
      px={{ md: "100px", base: "10px" }}
      pt={{ md: "0", base: "60px" }}
      className="footer"
      gap={{ md: "0", base: "20px" }}
    >
      <Box
        display="flex"
        flexDirection={{ md: "row", sm: "column", base: "column" }}
        gap={{ md: "0", base: "20px" }}
      >
        <Text>𝕄𝕆𝕕𝕖𝕧𝕔𝕠_𝕋𝕖𝕒𝕞</Text>
        <Box
          display="flex"
          alignItems="center"
          gap="20px"
          flexDirection={{ md: "row", sm: "column", base: "column" }}
        >
          <li className="a">
            О клубе <span></span>
          </li>
          <li className="a">
            Залы <span></span>
          </li>
          <li className="a">
            Игры <span></span>
          </li>
          <li className="a">
            Цены <span></span>
          </li>
          <li className="a">
            Контакты <span></span>
          </li>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap="10px"
        flexDirection={{ md: "row", sm: "column", base: "column" }}
      >
        <Text>Политика конфиденциальности</Text>
        <Text>Обработка персональных данных</Text>
      </Box>
    </Box>
  );
}
