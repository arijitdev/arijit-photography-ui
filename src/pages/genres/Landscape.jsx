import { useState } from "react";
import {
    Box,
    Heading,
    SimpleGrid,
    Image,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    IconButton,
    Flex,
    Text
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import PageLayout from "../../layouts/PageLayout";
import photos from "../../data/photos";

export default function Landscape() {
    // Filter photos for 'Landscape'
    const landscapePhotos = photos.filter(photo => photo.category === "landscape");

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const handleOpenLightbox = (index) => {
        setLightboxIndex(index);
        onOpen();
    };

    const handlePrev = () => {
        setLightboxIndex((i) => (i === 0 ? landscapePhotos.length - 1 : i - 1));
    };

    const handleNext = () => {
        setLightboxIndex((i) => (i === landscapePhotos.length - 1 ? 0 : i + 1));
    };

    return (
        <PageLayout>
            <Box py={16} px={16} bgColor="#27272b" color="white" minH="85vh">
                <Heading
                    size="xl"
                    textAlign="center"
                    mb={10}
                    fontFamily="'Cinzel', serif"
                    fontWeight="100"
                    letterSpacing="widest"
                    textTransform="uppercase"
                >
                    Landscape
                </Heading>
                <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
                    {landscapePhotos.map((photo, index) => (
                        <Box
                            key={photo.src}
                            cursor="pointer"
                            onClick={() => handleOpenLightbox(index)}
                            overflow="hidden"
                            borderRadius="md"
                            boxShadow="md"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.src}
                                objectFit="cover"
                                w="100%"
                                h="200px"
                                transition="transform 0.3s"
                                _hover={{ transform: "scale(1.05)" }}
                            />
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>

            {/* Lightbox */}
            <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
                <ModalOverlay />
                <ModalContent bg="#27272b">
                    <ModalCloseButton color="white" />
                    <ModalBody display="flex" justifyContent="center" alignItems="center" p={4}>
                        <Image
                            src={landscapePhotos[lightboxIndex].src}
                            alt={landscapePhotos[lightboxIndex].src}
                            maxH="80vh"
                            objectFit="contain"
                        />
                    </ModalBody>
                    <Flex justify="space-between" align="center" px={6} pb={6}>
                        <IconButton
                            icon={<ArrowLeftIcon />}
                            onClick={handlePrev}
                            aria-label="Previous"
                            variant="outline"
                            color="white"
                            borderColor="whiteAlpha.800"
                            _hover={{ bg: "whiteAlpha.200" }}
                        />
                        <Box mt={2} textAlign="center"
                             fontFamily="'Cinzel', serif"
                             fontWeight="100"
                             letterSpacing="wider"
                             textTransform="uppercase"
                             color="white">
                            <Text fontSize="lg" fontWeight="bold" >
                                {landscapePhotos[lightboxIndex].title}
                            </Text>
                        </Box>
                        <IconButton
                            icon={<ArrowRightIcon />}
                            onClick={handleNext}
                            aria-label="Next"
                            variant="outline"
                            color="white"
                            borderColor="whiteAlpha.800"
                            _hover={{ bg: "whiteAlpha.200" }}
                        />
                    </Flex>
                </ModalContent>
            </Modal>
        </PageLayout>
    );
}
