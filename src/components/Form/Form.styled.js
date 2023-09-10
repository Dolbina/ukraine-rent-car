import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field as FieldSelect,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  gap: 18px;
  justify-content: center;
  width: 859px;
  margin-bottom: 50px;
 
  
`;
export const WrapForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  color: #8a8a89;

  font-size: 14px;

  font-weight: 500;
  line-height: 1.29;
  margin-bottom:8px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 10px;
  color: red;
`;
export const Field = styled(FieldSelect)`
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

export const FieldInputLeft = styled(Field)`
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

export const FieldInputRight = styled(Field)`
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

export const InputMileageWrap = styled.div`
display: flex;
flex-wrap: no-wrap;

`
export const InputMileageWrapSecond = styled.div`
display:flex;
flex-direction:column;`

export const ButtonSearch = styled.button`
  min-width: 136px;
  height: 48px;
  padding: 14px 44px;
  text-align: center;
  justify-content: center;
  align-items: center;
   align-self: flex-end;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-family: inherit;
  font-size: 14px;

  font-weight: 600;
  line-height: 1.43;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;