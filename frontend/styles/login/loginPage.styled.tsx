import styled from 'styled-components';

const bgDesktop1x = '/images/bg1.jpg';
const bgDesktop2x = '/images/bg1R.jpg';

export const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  background-color: #eef3ff;
  height: 100%;
`;
export const BgContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #eef3ff;
  width: 100%;
  // background-image: url('/images/background-small.jpg');
  height: 100vh;
  @media (min-width: 1024px) {
    background-image: url('/images/bgDesk1x.jpg');
}
    @media (min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2), (min-width: 1024px) and (min-resolution: 192dpi) {
    background-image: url('/images/bgDesk2x.jpg');
  }
}

// @media (min-width: 768px) {
//   .background {
//     background-image: url('/images/background-medium.jpg');
//   }
// }



/* Retina displays */
// @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//   .background {
//     background-image: url('/images/background-small@2x.jpg');
//   }
// }

// @media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2), (min-width: 768px) and (min-resolution: 192dpi) {
//   .background {
//     background-image: url('/images/background-medium@2x.jpg');
//   }
// }


`;
