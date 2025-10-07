import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: white;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
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

const WorkshopsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const WorkshopCard = styled.div`
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background: #f8f9fa;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const WorkshopTitle = styled.h3`
  color: #1e3c72;
  font-size: 1rem;
  margin: 0;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const WorkshopLocation = styled.p`
  color: #6c757d;
  font-size: 0.9rem;
  margin: 0.5rem 0 0 0;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Workshops = () => {
  const workshopsData = [
    {
      title: "Internet Of Things Workshop",
      location: "KLN College Of Engineering"
    },
    {
      title: "Code Troubleshooting (JAVA)",
      location: "Prog Tec academy at KLN College Of Engineering"
    },
    {
      title: "3D Printing Workshop",
      location: "National Institute of Technology at Tiruchirappalli"
    },
    {
      title: "Python & Data Science Essential Bootcamp",
      location: "Lets Upgrade"
    },
    {
      title: "HTML & CSS Essential Bootcamp",
      location: "Lets Upgrade"
    },
    {
      title: "JavaScript Essential Bootcamp",
      location: "Lets Upgrade"
    },
    {
      title: "Node Js Essential Bootcamp",
      location: "Lets Upgrade"
    },
    {
      title: "Python Programming Essential Bootcamp",
      location: "Lets Upgrade"
    },
    {
      title: "Flutter Flow Workshop",
      location: "Google, Bangalore"
    }
  ];

  return (
    <Section id="workshops">
      <SectionTitle>WORKSHOPS ATTENDED</SectionTitle>
      <WorkshopsGrid>
        {workshopsData.map((workshop, index) => (
          <WorkshopCard key={index}>
            <WorkshopTitle>{workshop.title}</WorkshopTitle>
            <WorkshopLocation>{workshop.location}</WorkshopLocation>
          </WorkshopCard>
        ))}
      </WorkshopsGrid>
    </Section>
  );
};

export default Workshops; 