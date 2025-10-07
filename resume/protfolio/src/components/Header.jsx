import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(90deg, #e0e7ff 0%, #f0f4ff 100%);
  color: #333;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
  text-align: center;
  border-bottom: 1px solid #e9ecef;
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0.25rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 400;
  color: #6c757d;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <MainTitle>RAMACHANDRAN MURUGAN</MainTitle>
      <Subtitle>SOFTWARE DEVELOPMENT ENGINEER</Subtitle>
    </HeaderContainer>
  );
};

export default Header; 