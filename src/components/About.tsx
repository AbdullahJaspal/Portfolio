import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const MotionBox = motion(Box);

const About = () => {
  const textColor = useColorModeValue("gray.400", "gray.300");
  const cardBg = useColorModeValue("gray.800", "gray.700");

  const features = [
    {
      icon: FaCode,
      title: "Technical Expertise",
      description:
        "Mastery in React Native, TypeScript, Swift, Redux, and Firebase for robust mobile solutions.",
    },
    {
      icon: FaLaptopCode,
      title: "Development Approach",
      description:
        "Prioritizing clean code, performance optimization, and engaging animations.",
    },
    {
      icon: FaMobileAlt,
      title: "Professional Impact",
      description:
        "Led high-impact projects, boosted app performance, and mentored teams.",
    },
  ];

  return (
    <Box id="about" py={24} bg="gray.900">
      <Container maxW="1400px">
        <VStack spacing={16}>
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
            >
              About Me
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="800px">
              I'm a Mobile App Developer with over 5 years of experience in
              React Native, building high-performance apps for iOS and Android.
              I leverage TypeScript for scalable code and focus on delivering
              seamless UI/UX and optimized performance.
            </Text>
          </VStack>
          <HStack
            spacing={8}
            align="stretch"
            direction={{ base: "column", md: "row" }}
            w="100%"
          >
            {features.map((feature, index) => (
              <MotionBox
                key={index}
                flex={1}
                p={8}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                _hover={{ transform: "translateY(-8px)" }}
              >
                <VStack spacing={4} align="start">
                  <Icon as={feature.icon} w={8} h={8} color="brand.500" />
                  <Heading size="md" color="white">
                    {feature.title}
                  </Heading>
                  <Text color={textColor}>{feature.description}</Text>
                </VStack>
              </MotionBox>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
