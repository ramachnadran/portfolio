import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`;

const EducationCard = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border-left: 4px solid #007bff;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: #ffffff;
  }
`;

const DegreeTitle = styled.h3`
  color: #1a1a1a;
  font-size: 1.3rem;
  margin: 0 0 0.75rem 0;
  font-weight: 600;
  line-height: 1.3;
`;

const Institution = styled.p`
  font-weight: 500;
  color: #495057;
  margin: 0 0 1rem 0;
  font-size: 1rem;
  line-height: 1.4;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const DetailBadge = styled.span`
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
`;

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's Degree - B.E. - CSE",
      institution: "K.L.N. College of Engineering, Madurai.",
      score: "8.7 CGPA",
      period: "2020-24 - Pursuing | Autonomous"
    },
    {
      degree: "Higher Secondary Course",
      institution: "Vivekananda Higher Secondary School, Thiruvedagam (west).",
      score: "78.8%",
      period: "2020 | State Board"
    },
    {
      degree: "Secondary School Leaving Certificate",
      institution: "Vivekananda Higher Secondary School, Thiruvedagam (west).",
      score: "81.2%",
      period: "2018 | State Board"
    }
  ];

  return (
    <Section id="education">
      <EducationList>
        {educationData.map((edu, index) => (
          <EducationCard key={index}>
            <DegreeTitle>{edu.degree}</DegreeTitle>
            <Institution>{edu.institution}</Institution>
            <DetailsContainer>
              <DetailBadge>{edu.score}</DetailBadge>
              <DetailBadge>{edu.period}</DetailBadge>
            </DetailsContainer>
          </EducationCard>
        ))}
      </EducationList>
    </Section>
  );
};

export default Education; 