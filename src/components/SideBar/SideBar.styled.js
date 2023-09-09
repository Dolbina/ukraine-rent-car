
import styled from 'styled-components';

export const Sidebar = styled.aside`
  width: 225px;
  height: 100vh; 
  background-color: #f1f1f1;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;



export const SidebarContent = styled.div`
 
`;

export const SidebarHeading = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #121417;
  margin-bottom: 10px;
`;

export const SidebarLink = styled.a`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
 
`;

export const BurgerButton = styled.button`
  position: fixed;
  top: 20px;
  left: 80px;
  z-index: 5;
  border: none;
  background-color: transparent;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right:16px;
  z-index: 8;
  border: none; 
`;


