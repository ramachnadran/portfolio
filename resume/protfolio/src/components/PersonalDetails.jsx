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

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const DetailCard = styled.div`
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background: #f8f9fa;
`;

const DetailLabel = styled.strong`
  color: #1e3c72;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DetailValue = styled.p`
  color: #495057;
  margin: 0;
  font-size: 1rem;
  line-height: 1.4;
`;

const PersonalDetails = () => {
  const personalData = [
    {
      label: "Father's Name",
      value: "Mr. Murugan S"
    },
    {
      label: "Mother's Name",
      value: "Mrs. Eswari M"
    },
    {
      label: "Hobbies",
      value: "Learning New Technologies & Watching Political News"
    },
    {
      label: "Permanent Address",
      value: "5.3.11, Teachers Colony, Sholavandan, Madurai, Tamil Nadu, 625 214."
    }
  ];

  return (
    <Section id="personal">
      <SectionTitle>PERSONAL DETAILS</SectionTitle>
      <DetailsGrid>
        {personalData.map((detail, index) => (
          <DetailCard key={index}>
            <DetailLabel>{detail.label}</DetailLabel>
            <DetailValue>{detail.value}</DetailValue>
          </DetailCard>
        ))}
      </DetailsGrid>
    </Section>
  );
};

export default PersonalDetails; 