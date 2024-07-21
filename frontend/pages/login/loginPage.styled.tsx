import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BgContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 1024px) {
    background-image: url(${'@frontend/public/images/bg1.jpg'});
  }
`;
