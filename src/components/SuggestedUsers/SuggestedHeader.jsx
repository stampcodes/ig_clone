import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar name="As a programmer" size={"lg"} src="/profilepic.png" />
          <Text fontSize={12} fontWeight={"bold"}>
            asaprogrammer_
          </Text>
        </Flex>
        <Link
          as={RouterLink}
          to={"/auth"}
          fontSize={14}
          color={"blue.500"}
          fontWeight={600}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          bg={"transparent"}
        >Log out</Link>
      </Flex>
    </>
  );
};

export default SuggestedHeader;
