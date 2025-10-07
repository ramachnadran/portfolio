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
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 4px rgba(40, 167, 69, 0.2);
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
  color: #28a745;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  transition: color 0.3s ease;
  
  &:hover {
    color: #20c997;
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

const CARES = () => {
  const workExperience = [
    {
      role: "Software Development Engineer",
      company: "CARES Team - Educational Initiatives",
      location: "Bangalore, Karnataka",
      duration: "July 2024 - April 2025",
      type: "Full-time",
      description: "Started as an intern and transitioned to full-time role, working on multiple educational technology projects. Developed OMR scanner for automated exam processing that scans student answer sheets and extracts data including student name, class, roll number, questions attempted, correct/incorrect answers, and marks within one second. Built OCR attendance system for schools to track student presence automatically. Created question paper assembly page with chapter split table functionality using PHP for legacy products. Implemented misconception explanation and remedial instruction features for questions. Developed comprehensive APIs for question management (add, delete, edit, update) using Python. Built LLM-powered textbook analysis system using Retrieval-Augmented Generation (RAG) to extract chapters, topics, subtopics, and questions with marks based on subject and class. Resolved multiple production bugs in legacy systems and created dynamic HTML reports for teachers. Currently working on CORE platform projects including textbook mapping APIs using Node.js for internal users and teachers, developing 20+ notification scenarios for email notifications, and building AI-powered audio reports using Claude AI and Eleven Labs API for teacher performance analysis."
    }
  ];

  return (
    <Section id="cares">
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
              <SkillValue>OMR Scanner (1-second processing), OCR Attendance System, Question Paper Assembly with Chapter Split, LLM Textbook Analysis (RAG), CORE Platform APIs, Audio Reports with Claude AI, Legacy System Maintenance, Dynamic Teacher Reports, Notification System Development</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Technical Skills & Technologies</SkillLabel>
              <SkillValue>Python, Node.js, Angular, PHP, Eleven Labs API, Claude AI, MySQL, REST APIs, Database Optimization, API Development, Frontend Development, Backend Development, AI/ML Integration</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Key Achievements & Metrics</SkillLabel>
              <SkillValue>Reduced OMR processing time to 1 second, developed 6+ production features, created 20+ notification scenarios, built dynamic teacher reporting system, integrated multiple AI services, resolved 15+ production bugs, improved system performance by 40%</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Problem-Solving & Technical Challenges</SkillLabel>
              <SkillValue>Resolved production bugs in legacy PHP systems, optimized database queries for large datasets, implemented efficient API endpoints for real-time processing, integrated multiple third-party services (Claude, Eleven Labs), handled complex data extraction from textbooks, improved system scalability and performance</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Team Collaboration & Stakeholder Management</SkillLabel>
              <SkillValue>Worked with cross-functional teams on CORE platform development, collaborated with teachers for requirement gathering and feedback, coordinated with internal users for textbook mapping specifications, partnered with AI/ML team for LLM integration, mentored junior developers, participated in code reviews and technical discussions</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Communication & Documentation</SkillLabel>
              <SkillValue>Gathered detailed requirements from teachers and educational staff, documented comprehensive API specifications, created intuitive user interfaces for internal tools, presented technical solutions to stakeholders, provided training for new features, wrote technical documentation and user guides</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Project Management & Delivery</SkillLabel>
              <SkillValue>Managed multiple concurrent projects, delivered features on time, conducted thorough testing and quality assurance, implemented best practices for code maintainability, participated in agile development processes, provided regular project updates to stakeholders</SkillValue>
            </SkillItem>
            <SkillItem>
              <SkillLabel>Innovation & Continuous Learning</SkillLabel>
              <SkillValue>Implemented AI-powered solutions for educational content analysis, explored new technologies for better user experience, contributed to architectural decisions, stayed updated with latest industry trends, suggested process improvements and optimizations</SkillValue>
            </SkillItem>
          </SkillsList>
        </SkillsCard>
      </ContentGrid>
    </Section>
  );
};

export default CARES; 