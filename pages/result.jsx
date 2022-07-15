import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Result = () => {
  const [res, setRes] = useState("");
  useEffect(() => {
    const result = localStorage.getItem("fytresult");
    setRes(result);
  });
  return (
    <Box>
      <Heading>Result: {res}</Heading>
    </Box>
  );
};
export default Result;
