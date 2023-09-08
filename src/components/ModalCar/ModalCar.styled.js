import styled from 'styled-components';
import {
  SubtitleCard
} from 'components/CarCard/CarCard.styled';

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    & > svg > path {
      fill: #3093c2;
    }
  }
`;

export const CloseBtnWrap = styled.div`
  display: flex;
  justify-content: right;

`;
export const ModalWrap = styled.div`
  width: 461px;
  height: 100%;
  padding: 0px 24px 24px 24px;
 
  background-color: #fff;
`;

export const Img = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 248px;
  border-radius: 14px;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f2;
`;

export const SubtitleCardForModal = styled(SubtitleCard)`
margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
`;

export const Description = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
  margin-top:14px; 
`;
export const Accessories = styled.h3`
  color: #121417;
  font-size: 14px;
 
  font-weight: 500;
  line-height: 1.43;
  margin-top: 24px;
`;

export const AgeWrap = styled.div`
  display: inline-block;
  padding: 7px 14px;
  min-width: auto;
  height: 32px;
  border: none;
  border-radius: 35px;
  background-color: #f9f9f9;
  color: #363535;
  font-weight: 400;
  line-height: 1.5;
  margin:4px;
`;
export const AgeBlue = styled.span`
  color: #3470ff;
`;
export const Rental = styled.div`
  display: inline-block;
  min-width: 168px;
  height: 44px;
  padding: 12px 50px;
  text-align: center;

  cursor: pointer;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;

  margin-top: 24px;

  color: #fff;
  font-family: inherit;
  font-size: 14px;

  font-weight: 600;
  line-height: 1.43;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;