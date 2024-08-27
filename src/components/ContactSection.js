import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 80px 20px;
  background: linear-gradient(to right, #f7f7f7, #e0eafc);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 42px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;

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

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #ff6f61;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  resize: none;
  height: 120px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #ff6f61;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 15px;
  font-size: 18px;
  color: white;
  background-color: #ff6f61;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #e55d50;
    transform: scale(1.05);
  }
`;

const ContactSection = () => {
  return (
    <ContactWrapper id="contact">
      <Title>Entre em Contato</Title>
      <ContactForm>
        <Input type="text" placeholder="Seu Nome" />
        <Input type="email" placeholder="Seu Email" />
        <TextArea placeholder="Sua Mensagem" />
        <Button type="submit">Enviar</Button>
      </ContactForm>
    </ContactWrapper>
  );
};

export default ContactSection;
