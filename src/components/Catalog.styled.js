import styled from 'styled-components';

export const InputWrap = styled.div`
  display: flex;
  gap:18px;
  justify-content: center;
  width: 859px;
  margin-bottom: 50px;
   
`;

export const SelectMakes = styled.select`
  width: auto;
  height: 48px;
  padding: 14px 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border: none;
`;
export const InputLeft = styled.input`
  
  width: 160px;
  height: 48px;
  padding: 14px 93px 14px 24px;
  align-items: center;

  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
   border: none; 
`;

export const InputRight = styled.input`
 
  width: 160px;
  height: 48px;
  padding: 14px 115px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0px 14px 14px 0px;
  background-color: #f7f7fb;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
   border: none;
`;

