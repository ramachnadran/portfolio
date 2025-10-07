import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: white;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #007bff;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const SectionTitle = styled.h2`
  color: #1e3c72;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #007bff;
  padding-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const CertificationCard = styled.div`
  padding: 1.5rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background: #f8f9fa;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  
  &.nptel {
    color: #ff6b35;
  }
  
  &.great-learning {
    color: #0066cc;
  }
  
  &.spoken-tutorial {
    color: #ff6b35;
  }
  
  &.livewire {
    color: #28a745;
  }
`;

const Title = styled.h3`
  color: #1e3c72;
  font-size: 1.1rem;
  margin: 0;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Certifications = () => {
  const certificationsData = [
    {
      logo: "NPTEL",
      title: "Big Data Computing",
      logoClass: "nptel"
    },
    {
      logo: "Great Learning",
      title: "Ethical Hacking, Tkinter & Threading and Scheduling",
      logoClass: "great-learning"
    },
    {
      logo: "Spoken Tutorial at IIT Bombay",
      title: "C Programming Training",
      logoClass: "spoken-tutorial"
    },
    {
      logo: "LIVEWIRE, Madurai",
      title: "MASTER IN PYTHON FULL STACK AND WEB DESIGN",
      logoClass: "livewire"
    }
  ];

  return (
    <Section id="certifications">
      <SectionTitle>CERTIFICATIONS</SectionTitle>
      <CertificationsGrid>
        {certificationsData.map((cert, index) => (
          <CertificationCard key={index}>
            <Logo className={cert.logoClass}>{cert.logo}</Logo>
            <Title>{cert.title}</Title>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </Section>
  );
};

export default Certifications; 