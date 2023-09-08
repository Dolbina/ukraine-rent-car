import {
  Sidebar,
  SidebarContent,
  SidebarHeading,
  SidebarLink,
 
} from '../SideBar/SideBar.styled';

const SidebarComponent = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeading>Cars for rent</SidebarHeading>
        <SidebarLink href="#">Order History</SidebarLink>
        <SidebarLink href="#">Link 2</SidebarLink>

        <SidebarLink href="#">Link 3</SidebarLink>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarComponent;
