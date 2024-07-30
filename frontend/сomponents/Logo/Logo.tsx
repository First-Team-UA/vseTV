import { LogoText, Accent, LogoContainer } from './Logo.styled';

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoText>
        VSE<Accent>TV</Accent>
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
