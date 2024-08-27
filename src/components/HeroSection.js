import React, { useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';


const HeroWrapper = styled.section`
 
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #ff6f61, #ffcccb);
  color: white;
  text-align: center;
  padding: 0 20px;

  .textos{
    visibility: hidden;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin: 10px 0 20px 0;
`;

const Button = styled.a`
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  background-color: #333;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;



const HeroSection = () => {

 useEffect(()=>{
  const sr = ScrollReveal({reset:true});
   sr.reveal('.textos',{
    duration: 2000,
    rotate: { x: 100, y: 100, z: 0 }, // Animação de rotação
    opacity: 0.5, // Exemplo adicional, ajusta a opacidade
    scale: 0.9 
   })
 
  
 },[])

  return (
    <HeroWrapper id="hero">
      <div className='textos'>
      <Title>Maria Eduarda design gráfico</Title>
      <Subtitle>Soluções tecnologicas </Subtitle>
      <Button href="#about">Saiba Mais</Button>
      </div>
    </HeroWrapper>
  );
};

export default HeroSection;
