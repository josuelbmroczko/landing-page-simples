import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 80px 20px;
  background: linear-gradient(to right, #ffffff, #e0eafc);
  text-align: center;
  position: relative;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 200%;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 70%);
    transform: translateX(-50%);
    z-index: 0;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #ff6f61;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-family: 'Roboto', sans-serif;
  position: relative;
  padding: 0 20px;
  z-index: 1;

  ::before {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #ff6f61;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    opacity: 0.3;
  }
`;

const AboutSection = () => {
  return (
    <AboutWrapper id="about">
      <Title>Sobre Nós</Title>
      <Description>
        Somos uma empresa comprometida em entregar soluções criativas e inovadoras para nossos clientes.
        Nossa missão é proporcionar experiências únicas e transformar ideias em realidade.
      </Description>
    </AboutWrapper>
  );
};

export default AboutSection;
