import React from 'react';
import styled from 'styled-components';
import ramImage from '../assets/ram1.jpg';

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

const StatementCard = styled.div`
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 3px solid #007bff;
`;

const Statement = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin: 0;
  text-align: justify;
`;

const DetailsCard = styled.div`
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: fit-content;
  align-self: flex-start;
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #f8f9fa;
  
  &:last-child {
    border-bottom: none;
  }
`;

const DetailLabel = styled.strong`
  color: #007bff;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const DetailValue = styled.span`
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
`;

const About = () => {
  return (
    <Section id="about">
      <ContentGrid>
        <StatementCard>
          <ImageContainer>
            <ProfileImage src={ramImage} alt="Ramachandran M" />
          </ImageContainer>
          <Statement>
            I am a Computer Engineering graduate with a strong technical foundation and a passion for solving real-world problems through technology. I've gained hands-on experience working at an ed-tech company, where I contributed to impactful projects and developed a deeper understanding of user-centric design and product development. I'm now looking forward to the next phase of my career in a reputed organization, where I can continue growing, learning, and making meaningful contributions.
          </Statement>
        </StatementCard>
        
        <DetailsCard>
          <DetailsList>
            <DetailItem>
              <DetailLabel>Date of Birth</DetailLabel>
              <DetailValue>19 May 2003</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Marital Status</DetailLabel>
              <DetailValue>Un Married</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Languages Known</DetailLabel>
              <DetailValue>English, Tamil & Kannada</DetailValue>
            </DetailItem>
          </DetailsList>
        </DetailsCard>
      </ContentGrid>
    </Section>
  );
};

export default About; 