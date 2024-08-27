import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #1a1a1d;
  padding: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  text-align: center;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 10px;
    transition: color 0.3s;

    &:hover {
      color: #ff6f61;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <a href="#hero">Home</a>
        <a href="#about">Sobre</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
