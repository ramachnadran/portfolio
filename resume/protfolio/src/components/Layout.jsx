import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(90deg, #e0e7ff 0%, #f0f4ff 100%);
  display: flex;
  flex-direction: column;
`;

const MainLayout = styled.div`
  display: flex;
  flex: 1;
  padding: 0 1rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 100px);
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 0.5rem;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 70px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Layout = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <LayoutContainer>
      <Header />
      <MainLayout>
        <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
        <ContentArea>
          <Body activeSection={activeSection} />
        </ContentArea>
      </MainLayout>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </LayoutContainer>
  );
};

export default Layout; 