import ModalBody from "./ui/ModalBody";
import ModalCloseButton from "./ui/ModalCloseButton";
import ModalContainer from "./ui/ModalContainer";
import ModalContent from "./ui/ModalContent";
import ModalFooter from "./ui/ModalFooter";
import ModalHeader from "./ui/ModalHeader";
import ModalMain from "./ui/ModalMain";
import ModalOverlay from "./ui/ModalOverlay";

const Modal = Object.assign(ModalMain, {
  Overlay: ModalOverlay,
  Container: ModalContainer,
  Close: ModalCloseButton,
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export default Modal;
