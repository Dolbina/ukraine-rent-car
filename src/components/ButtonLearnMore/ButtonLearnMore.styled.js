import styled from "styled-components";

export const Btn = styled.button`
  display: inline-block;
  min-width: 274px;
  height: 44px;
   padding: 12px 99px;
text-align: center;

  cursor: pointer;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;

  margin-top: 28px;

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

