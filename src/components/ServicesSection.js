import React from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.section`
  padding: 80px 20px;
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-weight: 600;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 28px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  margin-bottom: 15px;
  font-weight: 500;
`;

const ServiceDescription = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
`;

const ServicesSection = () => {
  return (
    <ServicesWrapper id="services">
      <Title>Nossos Serviços</Title>
      <ServicesGrid>
        <ServiceCard>
          <ServiceTitle>Desenvolvimento Web</ServiceTitle>
          <ServiceDescription>
            Criamos sites incríveis e responsivos que atendem às suas necessidades.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Design Gráfico</ServiceTitle>
          <ServiceDescription>
            Nossos designs são únicos, criativos e feitos sob medida para você.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Marketing Digital</ServiceTitle>
          <ServiceDescription>
            Expandimos sua presença online com estratégias eficazes.
          </ServiceDescription>
        </ServiceCard>
      </ServicesGrid> 
    </ServicesWrapper>
  );
};

export default ServicesSection;
