import GlobalStyles from '@frontend/styles/GlobalStyles';
import styled from 'styled-components';

export const Btn = styled.button`
  background: #6b09e8;
  color: #ffffff;

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 1.33;
    padding: 12px 151px;
    border-radius: 24px;
  }
`;

export const FormContainer = styled.div`
  background: #eef3ff;
`;
export const Form = styled.form`
  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
`;
export const Item = styled.li`
  @media (min-width: 1024px) {
    &:not(:last-child) {
      margin-bottom: 17px;
    }
  }
`;
export const Label = styled.label`
  color: #6c6ba1;
  @media (min-width: 1024px) {
    font-size: 14px;
    line-height: 1.35;
    margin-bottom: 4px;
  }
`;
export const Input = styled.input`
  border: 1px solid #afb0d0;
  border-radius: 20px;
  color: #110178;
  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 1.5;
    padding-left: 14px;
  }
`;

export const Forget = styled.p`
  color: #6b09e8;
  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
