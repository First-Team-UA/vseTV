import styled from 'styled-components';

export const PassContainer = styled.div`
  border: 1px solid #7e5eff4d;
  background-color: #eef3ff;

  @media (min-width: 1024px) {
    padding: 32px;
    border-radius: 40px;
  }
`;

// export const PassHeader = styled.h2``;

// export const PassForm = styled.form``;

// export const PassList = styled.ul``;

// export const PassItem = styled.li``;

// export const PassLabel = styled.label``;

// export const PassInput = styled.input``;

export const InfoContainer = styled.div`
  border: 1px solid #7e5eff4d;
  background-color: #eef3ff;

  @media (min-width: 1024px) {
    border-radius: 40px;
    margin-right: 16px;
    max-width: 600px;
    padding: 32px;
  }
`;

export const InfoHeader = styled.h2`
  color: #110178;
  padding: 0;
  margin: 0;

  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 1.35;
    margin-bottom: 28px;
  }
`;

export const InfoForm = styled.form``;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
`;

export const InfoItem = styled.li`
  @media (min-width: 1024px) {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const InfoLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: #6c6ba1;
  @media (min-width: 1024px) {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 4px;
  }
`;

export const InfoInput = styled.input`
  border: 1px solid #afb0d0;
  color: #110178;
  @media (min-width: 1024px) {
    max-width: 536px;
    border-radius: 20px;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const Btn = styled.button`
  background-color: #6b09e8;
  color: #ffffff;
  border: none;
  float: right;

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 1.33;
    padding: 12px 33px;
    border-radius: 24px;
  }
`;
