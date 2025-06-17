import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaPatreon,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";
import Typed from "typed.js";
import myImage from "../assets/myImage.png";
import resume from "../assets/Abdullah Jaspal(Senior Software Engineer) (1).pdf";

const MotionBox = motion(Box);

const Hero = () => {
  const textColor = useColorModeValue("gray.400", "gray.300");
  const accentColor = useColorModeValue("brand.500", "accent.500");
  const cardBg = useColorModeValue("gray.800", "gray.700");
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ["Software Engineer", "Mobile App Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <Box
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      pt="80px"
      bg="gray.900"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="1400px">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={12}
          position="relative"
          zIndex={1}
        >
          <VStack spacing={8} align={{ base: "center", md: "start" }} flex={1}>
            <Text color={accentColor} fontWeight="bold" fontSize="lg">
              Hey, I'm
            </Text>
            <Heading
              as="h1"
              size="3xl"
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
            >
              Abdullah Jaspal
            </Heading>
            <Heading as="h2" size="xl" color={textColor}>
              <span ref={el} />
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="600px">
              Over 5 years of experience crafting high-performance mobile apps
              with React Native, TypeScript, and modern tools. I build
              intuitive, user-focused solutions for iOS and Android.
            </Text>
            <HStack spacing={4}>
              <Button
                colorScheme="blue"
                size="lg"
                onClick={() => (window.location.href = "#contact")}
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = "#projects")}
              >
                View My Work
              </Button>
              <Button
                as="a"
                href={resume}
                download
                variant="outline"
                size="lg"
                leftIcon={<FaDownload />}
              >
                Resume
              </Button>
            </HStack>
            <HStack spacing={4}>
              <Button
                as="a"
                href="https://github.com/AbdullahJaspal"
                target="_blank"
                variant="ghost"
                leftIcon={<FaGithub />}
                color={textColor}
              >
                GitHub
              </Button>
              <Button
                as="a"
                href="https://www.linkedin.com/in/abdullah-jaspal"
                target="_blank"
                variant="ghost"
                leftIcon={<FaLinkedin />}
                color={textColor}
              >
                LinkedIn
              </Button>
              <Button
                as="a"
                href="https://stackoverflow.com/users/16298813/abdullah-jaspal"
                target="_blank"
                variant="ghost"
                leftIcon={<FaStackOverflow />}
                color={textColor}
              >
                Stack Overflow
              </Button>
              <Button
                as="a"
                href="https://www.patreon.com/c/Cryptix_007"
                target="_blank"
                variant="ghost"
                leftIcon={<FaPatreon />}
                color={textColor}
              >
                Patreon
              </Button>
              <Button
                as="a"
                href="https://x.com/abdulla72345997"
                target="_blank"
                variant="ghost"
                leftIcon={<FaTwitter />}
                color={textColor}
              >
                X
              </Button>
            </HStack>
          </VStack>
          <MotionBox
            flex={1}
            position="relative"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Box
              position="absolute"
              top="-10%"
              left="-10%"
              right="-10%"
              bottom="-10%"
              bg={cardBg}
              borderRadius="50%"
              filter="blur(50px)"
              zIndex={0}
            />
            <Image
              src={myImage}
              alt="Profile"
              borderRadius="full"
              w={{ base: "250px", md: "350px" }}
              h={{ base: "250px", md: "350px" }}
              boxShadow="2xl"
              position="relative"
              zIndex={1}
              bg="white"
              p={2}
            />
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
