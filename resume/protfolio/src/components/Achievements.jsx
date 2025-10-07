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

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AchievementItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  color: #495057;
  line-height: 1.6;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:before {
    content: "🏆";
    margin-right: 0.75rem;
    font-size: 1.1rem;
  }
`;

const HighlightedAchievement = styled(AchievementItem)`
  color: #dc3545;
  font-weight: 600;
  
  &:before {
    content: "🌟";
  }
`;

const Achievements = () => {
  const achievementsData = [
    "Got the Award \"BEST INNOVATION PROJECT WITH POTENTIAL FOR KLNCE INCUBATORS\" from KLNCE.",
    "Won the First Prize in Code Crack conducted by the Solamalai College Of Engineering.",
    "Won the First Prize in Slide Presentation conducted by the Solamalai College Of Engineering.",
    "Won the First Prize in Mindrick conducted by the KLN College of Engineering.",
    "Won the Second Prize in a Project Presentation conducted by the KLN College of Engineering.",
    "Won the Second Prize in Project Pharaohs Conducted by the Velammal College Of Engineering.",
    "Completed 13 Google Android Development Badges (ramar2003ramar@gmail.com).",
    "Selected an Ideation Camp of Tamilnadu Student Innovators (TNSI) for Smart Water Quality Monitoring and Detection.",
    "Selected an Ideation Camp of Tamilnadu Student Innovators (TNSI) for Affordable Assets."
  ];

  return (
    <Section id="achievements">
      <SectionTitle>ACHIEVEMENTS</SectionTitle>
      <AchievementsList>
        {achievementsData.map((achievement, index) => {
          const isHighlighted = achievement.includes("TNSI") || achievement.includes("BEST INNOVATION");
          const AchievementComponent = isHighlighted ? HighlightedAchievement : AchievementItem;
          
          return (
            <AchievementComponent key={index}>
              {achievement}
            </AchievementComponent>
          );
        })}
      </AchievementsList>
    </Section>
  );
};

export default Achievements; 