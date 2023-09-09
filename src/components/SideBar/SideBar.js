import { AiOutlineClose } from 'react-icons/ai';
import {
  CloseButton,
  Sidebar,
  SidebarContent,
  SidebarHeading,
  SidebarLink,
 
} from '../SideBar/SideBar.styled';
import { Rental } from 'components/ModalCar/ModalCar.styled';

const SidebarComponent = ({ isOpen, onClose }) => {
  return (
    <Sidebar open={isOpen}>
      <CloseButton onClick={onClose}>
        <AiOutlineClose size="18" fill="#121417" />
      </CloseButton>
      <SidebarContent>
        <SidebarHeading>Car for rent</SidebarHeading>
        <SidebarLink href="#">Order History</SidebarLink>
        <Rental>
          <a href="tel:+380730000000">Rental car</a>
        </Rental>

        
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarComponent;
