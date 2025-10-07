import React from 'react';
import styled from 'styled-components';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Certifications from './Certifications';
import Projects from './Projects';
import Achievements from './Achievements';
import Workshops from './Workshops';
import PersonalDetails from './PersonalDetails';
import WorkExperience from './WorkExperience';
import Internship from './Internship';
import KLNIRP from './KLNIRP';
import EI from './EI';
import CARES from './CARES';
import CREST from './CREST';

const BodyContainer = styled.div`
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 200px);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionHeader = styled.div`
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  padding: 1.5rem 2rem;
  border-radius: 8px 8px 0 0;
  margin: -2rem -2rem 2rem -2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: -1rem -1rem 1rem -1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const SectionIcon = styled.span`
  font-size: 1.5rem;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SectionSubtitle = styled.p`
  margin: 0;
  opacity: 0.9;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Body = ({ activeSection }) => {
  const getSectionIcon = (section) => {
    const icons = {
      about: '👤',
      education: '🎓',
      skills: '💻',
      certifications: '🏆',
      projects: '🚀',
      achievements: '⭐',
      workshops: '📚',
      personal: '📋',
      workExperience: '💼',
      internship: '🎯',
      klnirp: '🔬',
      ei: '💼',
      cares: '💼',
      crest: '💼'
    };
    return icons[section] || '📄';
  };

  const getSectionTitle = (section) => {
    const titles = {
      about: 'About Myself',
      education: 'Education',
      skills: 'Technical Skills',
      certifications: 'Certifications',
      projects: 'Project Experience',
      achievements: 'Achievements',
      workshops: 'Workshops Attended',
      personal: 'Personal Details',
      workExperience: 'Work Experience',
      internship: 'Internship',
      klnirp: 'K.L.N. Innovation & Research Park',
      ei: 'Educational Initiatives (EI)',
      cares: 'CARES Team',
      crest: 'CREST Team'
    };
    return titles[section] || 'Section';
  };

  const getSectionDescription = (section) => {
    const descriptions = {
      about: 'Learn more about my background, skills, and professional journey.',
      education: 'My academic background and educational achievements.',
      skills: 'Technical skills and tools I have mastered.',
      certifications: 'Professional certifications and training programs completed.',
      projects: 'Key projects I have worked on and their outcomes.',
      achievements: 'Awards, recognitions, and notable accomplishments.',
      workshops: 'Professional development workshops and training sessions.',
      personal: 'Personal information and additional details.',
      workExperience: 'My complete professional work experience and career journey.',
      internship: 'My internship experience and learning journey.',
      klnirp: 'Research and innovation experience at K.L.N. Innovation & Research Park.',
      ei: 'Leading educational technology company focused on K-12 learning solutions.',
      cares: 'Computer Aided Rehabilitation and Education System - Special Education Solutions.',
      crest: 'Competitive Reasoning and Entrance Test System - University Entrance Solutions.'
    };
    return descriptions[section] || 'Section content';
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'certifications':
        return <Certifications />;
      case 'projects':
        return <Projects />;
      case 'achievements':
        return <Achievements />;
      case 'workshops':
        return <Workshops />;
      case 'personal':
        return <PersonalDetails />;
      case 'workExperience':
        return <WorkExperience />;
      case 'internship':
        return <Internship />;
      case 'klnirp':
        return <KLNIRP />;
      case 'ei':
        return <EI />;
      case 'cares':
        return <CARES />;
      case 'crest':
        return <CREST />;
      default:
        return <About />;
    }
  };

  return (
    <BodyContainer>
      <SectionHeader>
        <SectionIcon>{getSectionIcon(activeSection)}</SectionIcon>
        <div>
          <SectionTitle>{getSectionTitle(activeSection)}</SectionTitle>
          <SectionSubtitle>{getSectionDescription(activeSection)}</SectionSubtitle>
        </div>
      </SectionHeader>
      
      <ContentArea>
        {renderActiveSection()}
      </ContentArea>
    </BodyContainer>
  );
};

export default Body; 