import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const WorkExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`;

const ExperienceCard = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border-left: 4px solid #17a2b8;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: #ffffff;
  }
`;

const RoleTitle = styled.h3`
  color: #1a1a1a;
  font-size: 1.3rem;
  margin: 0 0 0.75rem 0;
  font-weight: 600;
  line-height: 1.3;
`;

const CompanyDetails = styled.p`
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
  background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 4px rgba(23, 162, 184, 0.2);
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 1rem 0 0 0;
  font-size: 0.95rem;
`;

const Internship = () => {
  const workExperience = [
    {
      role: "Software Development Engineer Intern",
      company: "Educational Initiatives (EI)",
      location: "Bangalore, Karnataka",
      duration: "Jan 2024 - July 2024",
      type: "Internship",
      description: "Worked as a software development engineer intern, gaining hands-on experience in educational technology development and contributing to various learning platforms."
    }
  ];

  return (
    <Section id="internship">
      <WorkExperienceList>
        {workExperience.map((exp, index) => (
          <ExperienceCard key={index}>
            <RoleTitle>{exp.role}</RoleTitle>
            <CompanyDetails>{exp.company} • {exp.location}</CompanyDetails>
            <DetailsContainer>
              <DetailBadge>{exp.duration}</DetailBadge>
              <DetailBadge style={{ background: 'linear-gradient(135deg, #ffc107 0%, #ff8f00 100%)', boxShadow: '0 2px 4px rgba(255, 193, 7, 0.2)' }}>{exp.type}</DetailBadge>
            </DetailsContainer>
            <Description>{exp.description}</Description>
          </ExperienceCard>
        ))}
      </WorkExperienceList>
    </Section>
  );
};

export default Internship; 