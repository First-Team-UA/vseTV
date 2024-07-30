import GlobalStyles from '@frontend/styles/GlobalStyles';
import Image from 'next/image';
import styled from 'styled-components';

export const Btn = styled.button`
  background: #6b09e8;
  color: #ffffff;
  cursor: pointer;
  border: none;
  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 1.33;
    padding: 12px 151px;
    border-radius: 24px;
  }
`;

export const FormContainer = styled.div``;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1024px) {
    font-size: 14px;
    line-height: 1.35;
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
    margin-top: 4px;
    width: 95%;
  }
`;

export const Forget = styled.p`
  color: #6b09e8;
  cursor: pointer;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ImageContainer = styled.div``;

export const Img = styled(Image)``;
