import { Box } from "@chakra-ui/react";
import React from "react";

export default function MainCard({ player }) {
  return (
    <Box
      color="white"
      className="player"
      fontSize="24px"
      w="250px"
      textAlign="center"
      my="6px"
      p="20px"
    >
      {player}
    </Box>
  );
}
