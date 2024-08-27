import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #1a1a1d;
  color: white;
  text-align: center;
  padding: 20px;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>© 2024 Maria Eduarda. Todos os direitos reservados.</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
