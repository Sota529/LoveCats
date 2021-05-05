//chakra
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

interface Props {
  Component: React.ReactNode;
}

const DetailModal: React.FC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box onClick={onOpen}>{props.Component}</Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx="auto">{props.Component}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default DetailModal;
