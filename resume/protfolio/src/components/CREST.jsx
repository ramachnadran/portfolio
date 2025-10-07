import React from 'react';
import styled from 'styled-components';

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
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 4px rgba(255, 107, 53, 0.2);
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
  position: relative;
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SkillLabel = styled.strong`
  color: #ff6b35;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  transition: color 0.3s ease;
  
  &:hover {
    color: #f7931e;
  }
`;

const SkillValue = styled.span`
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 300px;
  max-width: 400px;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  ${SkillItem}:hover & {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
`;

const CREST = () => {
  const workExperience = [
    {
      role: "Software Development Engineer",
      company: "CREST Team - Educational Initiatives",
      location: "Bangalore, Karnataka",
      duration: "April 2025 - Present",
      type: "Full-time",
      description: "Joined newly formed CREST team for university entrance exam platform development. Selected as one of two developers (one from CARES, one from ASSET team) due to extensive CORE platform knowledge. Leading technical development without a dedicated tech lead, managing code reviews and approvals for PSE tickets. Implemented ProctorEdu third-party integration for exam proctoring with whitelist management and timeline controls. Created automation interfaces to reduce PSE tickets by consolidating three separate interfaces into one unified script for updating and inserting details across different tables. Developed university-specific entrance exam features by extending ASSET product with custom conditions, new APIs, and interfaces. Currently building question paper assembly interface for three universities with advanced filtering and customization capabilities."
    }
  ];

  return (
    <Section id="crest">
      <ContentGrid>
        <WorkExperienceCard>
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
              <SkillLabel>Key Projects & Responsibilities</SkillLabel>
              <SkillValue>ProctorEdu Integration, PSE Ticket Automation, University Entrance Exam Platform, Question Paper Assembly Interface, ASSET Product Extension, Code Review & Approval Management, Technical Leadership</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Technical Skills & Technologies</SkillLabel>
              <SkillValue>Node.js, Angular, Python, PostgreSQL, MySQL, Third-party API Integration, Database Optimization, API Development, Frontend Development, Backend Development, Automation Scripts</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Key Achievements & Metrics</SkillLabel>
              <SkillValue>Selected for new team due to CORE platform expertise, reduced PSE tickets through automation, implemented ProctorEdu integration successfully, developed university-specific features, leading technical development without dedicated tech lead, created unified automation interfaces</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Problem-Solving & Technical Challenges</SkillLabel>
              <SkillValue>Consolidated three separate interfaces into one unified script, extended ASSET product for university-specific requirements, implemented complex proctoring system with whitelist management, created automation solutions to reduce manual work, developed custom APIs for exam platform requirements</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Team Collaboration & Leadership</SkillLabel>
              <SkillValue>Acting as technical lead for new team, managing code reviews and PSE ticket approvals, collaborating with cross-functional teams for university requirements, coordinating with ASSET team for product integration, mentoring team members on best practices</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Communication & Documentation</SkillLabel>
              <SkillValue>Documenting API specifications for new features, creating technical documentation for automation scripts, communicating with university stakeholders for requirements, presenting technical solutions to management, providing training for new team processes</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Project Management & Delivery</SkillLabel>
              <SkillValue>Managing multiple concurrent development tasks, delivering features for three universities, conducting thorough testing for proctoring system, implementing best practices for new team, providing regular project updates to stakeholders</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Innovation & Process Improvement</SkillLabel>
              <SkillValue>Created automation solutions to reduce manual work, implemented modern tech stack (Node.js, Angular, Python) for new team, developed efficient database queries and APIs, suggested process improvements for PSE ticket management, contributed to architectural decisions for new platform</SkillValue>
            </SkillItem>
          </SkillsList>
        </SkillsCard>
      </ContentGrid>
    </Section>
  );
};

export default CREST; 