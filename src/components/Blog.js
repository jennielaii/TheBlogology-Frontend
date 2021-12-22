import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Avatar,
  IconButton
} from "@chakra-ui/react";
import axios from "axios";
import env from "react-dotenv";
import { AuthContext } from "../context/AuthContext";
import { RiHeart2Line } from "react-icons/ri";
import { BsBookmarkPlus } from "react-icons/bs";

// const iconProps = {
//   variant: "ghost",
//   size: "lg",
//   isRound: true
// };

const iconProps = {
  variant: "outline",
  size: "lg",
  isRound: true
};

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const Blog = ({ match }) => {
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${env}/blogs/${Number(match.params.id)}`, {
        withCredentials: true
      })
      .then(response => {
        setBlog(response.data);
        setUser(response.data.user);
        setIsVisible(true);
      })
      .catch(err => console.log(err));
    window.scrollTo(0, 0);
  }, [match.params.id]);

  return (
    <>
      {/* <motion.div animate={{ scale: 1.5 }} transition={{ duration: 0.5 }}> */}
      {blog ? (
        <Flex
          maxWidth="1200px"
          margin="0 auto"
          p="20px"
          display={{ sm: "block", md: "flex" }}
          justifyContent="center"
          mt="5em"
        >
          <Box
            width={{ base: 1, sm: "100%", md: "10rem" }}
            height="max-content"
            m={{ base: "0 auto" }}
            mx={2}
            p={"12px"}
            display={{ sm: "none", md: "block", lg: "block" }}
          >
            <Stack spacing={5} align="center">
              <IconButton
                aria-label="like icon"
                fontSize="20px"
                isRound={true}
                icon={() => <RiHeart2Line />}
                variantColor="red"
                {...iconProps}
              />
              <IconButton
                aria-label="like icon"
                fontSize="20px"
                isRound={true}
                icon={() => <BsBookmarkPlus />}
                variantColor="red"
                {...iconProps}
              />
            </Stack>
          </Box>
          <Box
            width={{ base: 1, sm: "35rem", md: "75rem" }}
            height="max-content"
            shadow="md"
            borderWidth="1px"
            borderRadius=""
            rounded="md"
            mx={2}
            m={{ sm: "0 auto" }}
          >
            <>
              {blog.image && (
                <Image
                  src={`${env}${blog.image}`}
                  // fallbackSrc="https://via.placeholder.com/500/DCDFDF/ffffff/?text=BlogImage"
                  // alt="Blog image"
                  w="100%"
                  objectFit="cover"
                  borderRadius="5px 5px 0 0"
                  style={{
                    height: "45vh"
                  }}
                />
              )}
              <Box
                w="100%"
                h="100%"
                bg="#fff"
                p="25px"
                borderRadius={blog.image ? "0 0 5px 5px" : "5px"}
              >
                <Stack spacing={3}>
                  <Heading as="h1" size="2xl">
                    {blog.title}
                  </Heading>

                  <Stack isInline spacing={3} align="center">
                    <Avatar
                      src={user.image && `${env}${user.image}`}
                    ></Avatar>
                    <Box>
                      <Heading as="h1" size="md">
                        {user.name}
                      </Heading>
                    </Box>
                    <Box>
                      <Text fontSize="xs" mt="0.3em">
                        9 Oct
                      </Text>
                    </Box>
                  </Stack>
                </Stack>
                <Text mt={4} fontWeight="450" fontSize="1.2rem">
                "I am in the right place at the right time, doing the right thing"
                </Text>
              </Box>
            </>
          </Box>
          <Box
            width={{ base: 1, sm: 1 / 2, md: 2 / 4 }}
            height="max-content"
            display={{ sm: "none", md: "none", lg: "block" }}
            shadow="md"
            borderWidth="1px"
            // flex="1"
            rounded="md"
            p={"12px"}
            bg="#fff"
            mx={2}
          >
            <Stack isInline spacing={3} align="center">
              <Avatar
                size="lg"
                src={
                  authContext.isAuth && `${env}${authContext.user.image}`
                }
              ></Avatar>
              <Box>
                <Heading as="h1" size="md">
                  {authContext.isAuth && authContext.user.name}
                </Heading>
              </Box>
            </Stack>
            <Stack spacing={2}>
              <Text mt={4} fontWeight="450">
              "You are loved just for being who you are, just for existing"
              </Text>
              <Box>
                <Box color="gray.400" fontWeight="450">
                  Work
                </Box>
                <Stack isInline align="center">
                  <Box fontWeight="450">The Blogology</Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Flex>
      ) : (
        <null />
      )}
      {/* </motion.div> */}
    </>
  );
};

export default Blog;
