import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  display: inline-block;
  min-width: 274px;
  height: 44px;
 align-items: center;
  text-align: center;

  cursor: pointer;
  border: none;

  margin-top: 100px;
  background-color: transparent;

  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  color: #3470ff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;


export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;