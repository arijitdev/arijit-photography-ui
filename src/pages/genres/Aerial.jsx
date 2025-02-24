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
import photos from "../../data/photos"; // full array or a separate “aerial” array

export default function Aerial() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // If you have a single photos array with categories, filter them:
    const aerialPhotos = photos.filter((photo) => photo.category === "aerial");

    const handleOpenLightbox = (index) => {
        setLightboxIndex(index);
        onOpen();
    };

    const handlePrev = () => {
        setLightboxIndex((i) => (i === 0 ? aerialPhotos.length - 1 : i - 1));
    };

    const handleNext = () => {
        setLightboxIndex((i) => (i === aerialPhotos.length - 1 ? 0 : i + 1));
    };

    return (
        <PageLayout>
            <Flex flex="1" minH="85vh" bgColor="#27272b" fontFamily="'Cinzel', serif" width="100%">
                <Box py={16} px={16} bgColor="#27272b" color="white">
                    <Heading
                        size="xl"
                        textAlign="center"
                        mb={10}
                        fontFamily="'Cinzel', serif"
                        fontWeight="100"
                        letterSpacing="widest"
                        textTransform="uppercase"
                    >
                        Aerial
                    </Heading>
                    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
                        {aerialPhotos.map((photo, index) => (
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
                {/* Lightbox Modal */}
                <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
                    <ModalOverlay />
                    <ModalContent bg="#27272b">
                        <ModalCloseButton color="white" />
                        <ModalBody display="flex" justifyContent="center" alignItems="center" p={4}>
                            <Image
                                src={aerialPhotos[lightboxIndex].src}
                                alt={aerialPhotos[lightboxIndex].src}
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
                                    {aerialPhotos[lightboxIndex].title}
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
            </Flex>
        </PageLayout>
    );
}
