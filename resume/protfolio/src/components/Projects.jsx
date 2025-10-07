import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: white;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #1e3c72;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #007bff;
  padding-bottom: 0.5rem;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectCard = styled.div`
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  background: #f8f9fa;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectHeader = styled.div`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 1rem 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  opacity: 0.9;
`;

const ProjectBody = styled.div`
  padding: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: #495057;
  line-height: 1.6;
  margin: 0;
`;

const HighlightedText = styled.span`
  color: #dc3545;
  font-weight: 600;
`;

const Projects = () => {
  const projectsData = [
    {
      title: "Speak and Be Heard",
      role: "Team Lead",
      teamSize: "05",
      technology: "Python, Artificial Intelligence",
      programmingLanguage: "Python",
      description: "As technology advances, we are moving closer and closer to a world where personal assistants are not just a luxury, but a necessity. With the help of the Natural Language Toolkit (NLTK), pyttsx3, and speech recognition library, we can create a personal assistant that is capable of understanding and responding to our every need."
    },
    {
      title: "Bus Seat Vacancy | In-House Intern at KLNIRP",
      role: "Team Lead",
      teamSize: "06",
      technology: "Raspberry Pi & Python Machine Learning",
      description: "Developed a system using Raspberry Pi and Python machine learning to detect and report seat vacancies in public buses. Achieved an accuracy rate of 95% and reduced passenger wait times by 30%."
    },
    {
      title: "KLN IRP Project Evaluation Website | In-House Intern at KLNIRP",
      role: "Team Member",
      teamSize: "06",
      technology: "PHP, 000 Web Host, WampServer",
      programmingLanguage: "PHP",
      description: "Developed a website using PHP to evaluate project proposals for a non-profit organization Achieved a 40% increase in project proposal submissions and reduced evaluation time by 50%. My role was only to deploy this project to 000 web host"
    },
    {
      title: "House Price Prediction",
      role: "Team Lead",
      teamSize: "03",
      technology: "Python Machine Learning, Data Analysis",
      description: "A project aimed at predicting the price of a house based on several key features such as location, size, and amenities. It was selected as the Ideation Camp of the Tamil Nadu Student Innovators (TNSI)",
      highlightedText: "It was selected as the Ideation Camp of the Tamil Nadu Student Innovators (TNSI)"
    },
    {
      title: "Smart Water Detection & Smart Water Quality Monitoring",
      role: "Team Lead",
      teamSize: "03",
      technology: "Arduino, Sensors, GSM",
      description: "A project aimed at monitoring the quality of water in real-time to detect potential hazards and prevent contamination. Seed money was received from IPC at the college. It was selected as the Ideation Camp of the Tamil Nadu Student Innovators (TNSI).",
      highlightedText: "It was selected as the Ideation Camp of the Tamil Nadu Student Innovators (TNSI)."
    }
  ];

  return (
    <Section id="projects">
      <SectionTitle>PROJECT EXPERIENCE</SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectMeta>
                <span><strong>Role:</strong> {project.role}</span>
                <span><strong>Team Size:</strong> {project.teamSize}</span>
                <span><strong>Technology:</strong> {project.technology}</span>
                {project.programmingLanguage && (
                  <span><strong>Programming Language:</strong> {project.programmingLanguage}</span>
                )}
              </ProjectMeta>
            </ProjectHeader>
            <ProjectBody>
              <ProjectDescription>
                {project.description}
                {project.highlightedText && (
                  <HighlightedText> {project.highlightedText}</HighlightedText>
                )}
              </ProjectDescription>
            </ProjectBody>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default Projects; 