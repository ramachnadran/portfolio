import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #ffffff;
  color: #333;
  padding: 1rem 1.5rem;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1350px;
  margin: 0 auto;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-top: 1px solid #eef0f2;
  border-radius: 12px;
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.75rem;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    text-align: center;
    border-radius: 10px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const ProjectBadge = styled.span`
  background: #e0e7ff;
  color: #007bff;
  padding: 0.35rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const ProjectDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: #495057;
  font-weight: 500;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem 0.75rem;
  }
`;

const ProjectDetail = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.2;
  white-space: nowrap;
`;

const Separator = styled.span`
  color: #6c757d;
  font-weight: 300;
  margin: 0 0.5rem;
`;

const NavigationDots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #007bff;
  transition: background 0.3s ease;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ProjectInfo>
        <ProjectBadge>GET IN TOUCH</ProjectBadge>
        <ProjectDetails>
          <ProjectDetail>
            <span>📍</span>
            <span>Madurai, India</span>
          </ProjectDetail>
          <Separator>•</Separator>
          <ProjectDetail>
            <span>📞</span>
            <span>+91-8870320379</span>
          </ProjectDetail>
          <Separator>•</Separator>
          <ProjectDetail>
            <span>✉️</span>
            <span>ramachandranbe2003@gmail.com</span>
          </ProjectDetail>
        </ProjectDetails>
      </ProjectInfo>
      
      <NavigationDots>
        <Dot active={true} />
        <Dot active={false} />
        <Dot active={false} />
        <Dot active={false} />
      </NavigationDots>
    </FooterContainer>
  );
};

export default Footer; 