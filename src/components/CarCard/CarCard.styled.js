import styled from 'styled-components';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

export const CardWrap = styled.div`
  height: 426px;
  width: 274px;
  
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
  background-color: #f3f3f2;
`;

export const Img = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  
`;

export const IconWrap = styled.div`
 position: absolute;
            top: 14px;
            right: 14px;
            z-index: 2;
`;

export const IconHeart = styled(IoMdHeart)`
  width: 18px;
height: 18px;
  color: #3470FF;
`;

export const IconHeartEmpty = styled(IoMdHeartEmpty)`
  width: 18px;
  height: 18px;
  color: #fff;
`;

export const SubtitleCard = styled.h2`
  color: #121417;
  font-size: 16px;
 
  font-weight: 500;
  line-height: 1.5;
  margin-top: 14px;
`;

export const SubtitleCardBlue = styled.span`
  color: #3470ff;
`;
export const SubtitleWrap = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
`;

export const TextWrap = styled.div`
  display: flex;
  padding-right: 9px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const TextWrapAddress = styled.div`
  display: flex;
 
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
