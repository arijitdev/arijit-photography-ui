import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import PageLayout from "../layouts/PageLayout";

export default function Contact() {
    return (
        <PageLayout>
            <Flex
                flex="1"
                minH="85vh"
                bgColor="#27272b"
                fontFamily="'Cinzel', serif"
                width="100%"
            >
                <Box py={16} px={16} bgColor="#27272b" color="white">
                    <Heading size="xl" mb={6} fontFamily="'Cinzel', serif" fontWeight="400">
                        Contact Me
                    </Heading>
                    <Text fontSize="lg" maxW="600px" mx="auto" mb={8} color="white">
                        Have a project in mind or want to discuss a collaboration?
                        Feel free to reach out!
                    </Text>
                    <Button
                        colorScheme="blackAlpha"
                        onClick={() => window.open("mailto:contact@arijitphotography.com", "_blank")}
                    >
                        Say Hello
                    </Button>
                </Box>
            </Flex>
        </PageLayout>
    );
}
