import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-bg-light);
 box-shadow: var(--shadow-light);
  width: calc(100% - 24px);
  height: 80px;
  border: solid 1px black;
  border-top: none;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

export const SwitcherContainer = styled.div`
  display: flex;
  gap: 10px; 
  margin-right: 24px;
  align-items: center; 
`;
