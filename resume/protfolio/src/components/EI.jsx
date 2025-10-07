import React from 'react';
import styled from 'styled-components';
import ramImage from '../assets/ei.png';

const Section = styled.section`
  margin-bottom: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  flex: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WorkExperienceCard = styled.div`
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 0 2rem 2rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

const RoleTitle = styled.h3`
  color: #1a1a1a;
  font-size: 1.4rem;
  margin: 0 0 0.75rem 0;
  font-weight: 600;
  line-height: 1.3;
`;

const CompanyDetails = styled.p`
  font-weight: 500;
  color: #495057;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  line-height: 1.4;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
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

const Description = styled.p`
  color: #666;
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
  text-align: justify;
`;

const SkillsCard = styled.div`
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: fit-content;
  align-self: flex-start;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #f8f9fa;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SkillLabel = styled.strong`
  color: #007bff;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const SkillValue = styled.span`
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
`;

const EI = () => {
  const workExperience = [
    {
      role: "Software Development Engineer",
      company: "Educational Initiatives (EI)",
      location: "Bangalore, Karnataka",
      duration: "July 2024 - April 2025",
      type: "Internship & Full-time",
      description: "Worked as a software development engineer at Educational Initiatives, contributing to educational technology development and various learning platforms. Implemented new features for student assessment tools and learning management systems. Learned advanced React.js, Node.js, and database optimization techniques. Developed RESTful APIs and integrated third-party educational tools. Faced challenges in handling large-scale student data and optimizing application performance for thousands of concurrent users. Successfully delivered multiple features that improved student learning outcomes and teacher efficiency."
    }
  ];

  return (
    <Section id="ei">
      <ContentGrid>
        <WorkExperienceCard>
          <ImageContainer>
            <ProfileImage src={ramImage} alt="Ramachandran M" />
          </ImageContainer>
          <RoleTitle>{workExperience[0].role}</RoleTitle>
          <CompanyDetails>{workExperience[0].company} • {workExperience[0].location}</CompanyDetails>
          <DetailsContainer>
            <DetailBadge>{workExperience[0].duration}</DetailBadge>
            <DetailBadge style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', boxShadow: '0 2px 4px rgba(40, 167, 69, 0.2)' }}>{workExperience[0].type}</DetailBadge>
          </DetailsContainer>
          <Description>{workExperience[0].description}</Description>
        </WorkExperienceCard>
        
        <SkillsCard>
          <SkillsList>
            <SkillItem>
              <SkillLabel>Key Achievements</SkillLabel>
              <SkillValue>Improved student learning outcomes</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Challenges Overcome</SkillLabel>
              <SkillValue>Large-scale data handling & performance optimization</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Projects Delivered</SkillLabel>
              <SkillValue>Assessment tools & Learning management systems</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Problem-Solving (PAR)</SkillLabel>
              <SkillValue>Identified learning gaps → Developed assessment tools → Improved student performance by 25%</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Team Collaboration</SkillLabel>
              <SkillValue>Led cross-functional teams → Coordinated with teachers & students → Delivered user-centric solutions</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Communication Skills</SkillLabel>
              <SkillValue>Presented technical solutions to non-technical stakeholders → Documented complex processes → Trained end-users</SkillValue>
            </SkillItem>
          </SkillsList>
        </SkillsCard>
      </ContentGrid>
    </Section>
  );
};

export default EI; 