import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const MotionBox = motion(Box);

const Skills = () => {
  const textColor = useColorModeValue("gray.400", "gray.300");
  const cardBg = useColorModeValue("gray.800", "gray.700");

  const skills = [
    {
      category: "Mobile Development",
      items: [
        { name: "React Native", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Swift", level: 85 },
      ],
    },
    {
      category: "State Management & Tools",
      items: [
        { name: "Redux/Redux Toolkit", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "React Navigation", level: 95 },
        { name: "Git", level: 90 },
      ],
    },
    {
      category: "Additional Skills",
      items: [
        { name: "UI/UX Design", level: 90 },
        { name: "Performance Optimization", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Agile/Scrum", level: 85 },
      ],
    },
  ];

  return (
    <Box id="skills" py={24} bg="gray.900">
      <Container maxW="1400px">
        <VStack spacing={16}>
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, brand.500, accent.500)"
              bgClip="text"
            >
              Skills & Expertise
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="800px">
              Technologies and tools I use to create impactful mobile apps.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
            {skills.map((skillGroup, index) => (
              <MotionBox
                key={index}
                p={8}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <VStack spacing={6} align="stretch">
                  <Heading size="md" color="brand.500">
                    {skillGroup.category}
                  </Heading>
                  <SimpleGrid columns={2} spacing={4}>
                    {skillGroup.items.map((skill, skillIndex) => (
                      <VStack key={skillIndex} align="center">
                        <CircularProgress
                          value={skill.level}
                          color="brand.500"
                          size="80px"
                          thickness="8px"
                        >
                          <CircularProgressLabel color="white">
                            {skill.level}%
                          </CircularProgressLabel>
                        </CircularProgress>
                        <Text fontSize="sm" color={textColor}>
                          {skill.name}
                        </Text>
                      </VStack>
                    ))}
                  </SimpleGrid>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;
