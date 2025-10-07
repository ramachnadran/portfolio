import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  margin-bottom: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SectionTitle = styled.h2`
  color: #1a1a1a;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SkillCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CardTitle = styled.h3`
  color: #1a1a1a;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background: ${props => props.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
    border-radius: 2px;
  }
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h4`
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  
  &:before {
    content: '▸';
    color: #667eea;
    font-weight: bold;
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #495057;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid #dee2e6;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }
`;

const Skills = () => {
  const collegeSkills = {
    technical: [
      "Advanced Python",
      "Django",
      "MongoDB",
      "Xampp server",
      "Azure 900",
      "C",
      "C++",
      "Basic of Java & Kotlin",
      "Internet Of Things (IoT)",
      "Javascript"
    ],
    developerTools: [
      "Android Studio",
      "VS code AnacondaNavigator",
      "PyCharm",
      "Arduino",
      "IntelliJ",
      "Adobe Photoshop",
      "Raspberry Pi"
    ],
    nonTechnical: [
      "Microsoft Word",
      "Microsoft PowerPoint",
      "Photoshop",
      "Communication Skills"
    ]
  };

  const eiSkills = {
    programmingLanguages: [
      "Python",
      "Node.js",
      "JavaScript",
      "PHP",
      "TypeScript",
      "HTML/CSS"
    ],
    frameworks: [
      "Angular",
      "React.js",
      "Django",
      "Express.js"
    ],
    databases: [
      "MySQL",
      "PostgreSQL",
      "MongoDB"
    ],
    tools: [
      "Git",
      "VS Code",
      "Postman",
      "Cursor"
    ],
    apis: [
      "REST APIs",
      "Third-party API Integration",
      "Claude AI API",
      "Eleven Labs API",
      "ProctorEdu API"
    ],
    technologies: [
      "Retrieval-Augmented Generation (RAG)",
      "AI/ML Integration",
      "OCR Technology",
      "OMR Processing",
      "LLM Integration"
    ]
  };

  return (
    <Section id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <SkillsGrid>
        <SkillCard gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
          <CardTitle gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">College Skills</CardTitle>
          
          <SkillCategory>
            <CategoryTitle>Technical Skills</CategoryTitle>
            <SkillList>
              {collegeSkills.technical.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </SkillList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>Developer Tools</CategoryTitle>
            <SkillList>
              {collegeSkills.developerTools.map((tool, index) => (
                <SkillTag key={index}>{tool}</SkillTag>
              ))}
            </SkillList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>Non-Technical</CategoryTitle>
            <SkillList>
              {collegeSkills.nonTechnical.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </SkillList>
          </SkillCategory>
        </SkillCard>
        
        <SkillCard gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
          <CardTitle gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">EI Skills (CARES + CREST)</CardTitle>
          
          <SkillCategory>
            <CategoryTitle>Programming Languages</CategoryTitle>
            <SkillList>
              {eiSkills.programmingLanguages.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </SkillList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>Frameworks & Libraries</CategoryTitle>
            <SkillList>
              {eiSkills.frameworks.map((framework, index) => (
                <SkillTag key={index}>{framework}</SkillTag>
              ))}
            </SkillList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>Databases</CategoryTitle>
            <SkillList>
              {eiSkills.databases.map((db, index) => (
                <SkillTag key={index}>{db}</SkillTag>
              ))}
            </SkillList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>Development Tools</CategoryTitle>
            <SkillList>
              {eiSkills.tools.map((tool, index) => (
                <SkillTag key={index}>{tool}</SkillTag>
              ))}
            </SkillList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>APIs & Integrations</CategoryTitle>
            <SkillList>
              {eiSkills.apis.map((api, index) => (
                <SkillTag key={index}>{api}</SkillTag>
              ))}
            </SkillList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>Advanced Technologies</CategoryTitle>
            <SkillList>
              {eiSkills.technologies.map((tech, index) => (
                <SkillTag key={index}>{tech}</SkillTag>
              ))}
            </SkillList>
          </SkillCategory>
        </SkillCard>
      </SkillsGrid>
    </Section>
  );
};

export default Skills; 