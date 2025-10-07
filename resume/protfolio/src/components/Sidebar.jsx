import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.nav`
  width: 280px;
  background: #ffffff;
  height: calc(100vh - 100px);
  position: sticky;
  top: 100px;
  left: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  border-radius: 8px;
  margin: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0;
  position: relative;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  border-left: 4px solid transparent;
  cursor: pointer;
  
  &:hover {
    background: #f8f9fa;
    color: #007bff;
  }
  
  &.active {
    background: #e3f2fd;
    border-left-color: #007bff;
    color: #007bff;
  }
`;

const StepLabel = styled.span`
  flex: 1;
  font-size: 0.95rem;
`;

const SubNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: #f8f9fa;
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: 0;
  
  ${NavItem}:hover & {
    max-height: 200px;
  }
`;

const SubNavItem = styled.li`
  margin: 0;
  position: relative;
`;

const SubNavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem 0.75rem 3rem;
  color: #666;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  cursor: pointer;
  
  &:hover {
    background: #e9ecef;
    color: #007bff;
  }
  
  &.active {
    background: #e3f2fd;
    border-left-color: #007bff;
    color: #007bff;
  }
`;

const SubSubNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: #f1f3f4;
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: 0;
  
  ${SubNavItem}:hover & {
    max-height: 100px;
  }
`;

const SubSubNavItem = styled.li`
  margin: 0;
`;

const SubSubNavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem 0.5rem 4.5rem;
  color: #777;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  cursor: pointer;
  
  &:hover {
    background: #e9ecef;
    color: #007bff;
  }
  
  &.active {
    background: #e3f2fd;
    border-left-color: #007bff;
    color: #007bff;
  }
`;

const MobileTabsContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: sticky;
    top: 0;
    z-index: 100;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
`;

const MobileTabs = styled.div`
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  gap: 0.5rem;
  padding: 0.5rem;
  
  &::-webkit-scrollbar { display: none; }
`;

const MobileTab = styled.button`
  flex: 0 0 auto;
  border: 1px solid ${props => props.active ? '#007bff' : '#e9ecef'};
  background: ${props => props.active ? '#e3f2fd' : '#ffffff'};
  color: ${props => props.active ? '#007bff' : '#333'};
  border-radius: 20px;
  padding: 0.4rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
`;

const MobileSubTabsContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    background: #f8f9fa;
    border-top: 1px solid #eef0f2;
  }
`;

const Sidebar = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'about', label: 'ABOUT MYSELF' },
    { id: 'education', label: 'EDUCATION' },
    { 
      id: 'workExperience', 
      label: 'WORK EXPERIENCE',
      hasSubItems: true,
      subItems: [
        { 
          id: 'ei', 
          label: 'EI',
          hasSubItems: true,
          subItems: [
            { id: 'cares', label: 'CARES' },
            { id: 'crest', label: 'CREST' }
          ]
        }
      ]
    },
    { id: 'skills', label: 'TECHNICAL SKILLS' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'workshops', label: 'WORKSHOPS ATTENDED' },
    { id: 'personal', label: 'PERSONAL DETAILS' }
  ];

  const handleSectionClick = (sectionId) => {
    onSectionChange(sectionId);
  };

  const renderNavItem = (section) => {
    if (section.hasSubItems) {
      return (
        <NavItem key={section.id}>
          <NavLink
            className={activeSection === section.id ? 'active' : ''}
            onClick={() => handleSectionClick(section.id)}
          >
            <StepLabel>{section.label}</StepLabel>
          </NavLink>
          <SubNavList>
            {section.subItems.map((subItem) => (
              <SubNavItem key={subItem.id}>
                {subItem.hasSubItems ? (
                  <>
                    <SubNavLink
                      className={activeSection === subItem.id ? 'active' : ''}
                      onClick={() => handleSectionClick(subItem.id)}
                    >
                      <StepLabel>{subItem.label}</StepLabel>
                    </SubNavLink>
                    <SubSubNavList>
                      {subItem.subItems.map((subSubItem) => (
                        <SubSubNavItem key={subSubItem.id}>
                          <SubSubNavLink
                            className={activeSection === subSubItem.id ? 'active' : ''}
                            onClick={() => handleSectionClick(subSubItem.id)}
                          >
                            {subSubItem.label}
                          </SubSubNavLink>
                        </SubSubNavItem>
                      ))}
                    </SubSubNavList>
                  </>
                ) : (
                  <SubNavLink
                    className={activeSection === subItem.id ? 'active' : ''}
                    onClick={() => handleSectionClick(subItem.id)}
                  >
                    {subItem.label}
                  </SubNavLink>
                )}
              </SubNavItem>
            ))}
          </SubNavList>
        </NavItem>
      );
    }

    return (
      <NavItem key={section.id}>
        <NavLink
          className={activeSection === section.id ? 'active' : ''}
          onClick={() => handleSectionClick(section.id)}
        >
          <StepLabel>{section.label}</StepLabel>
        </NavLink>
      </NavItem>
    );
  };

  // Mobile: top-level tabs and contextual sub-tabs to reflect hierarchy
  const topLevelTabs = sections.map(s => ({ id: s.id, label: s.label, hasSubItems: !!s.hasSubItems }));
  const workExpSection = sections.find(s => s.id === 'workExperience');
  const eiItem = workExpSection?.subItems?.find(si => si.id === 'ei');
  const showSecondRow = ['workExperience', 'ei', 'cares', 'crest'].includes(activeSection);
  const showThirdRow = ['ei', 'cares', 'crest'].includes(activeSection);

  return (
    <>
      <MobileTabsContainer>
        <MobileTabs>
          {topLevelTabs.map(s => (
            <MobileTab
              key={s.id}
              active={activeSection === s.id}
              onClick={() => handleSectionClick(s.id)}
            >
              {s.label}
            </MobileTab>
          ))}
        </MobileTabs>
        {showSecondRow && workExpSection && (
          <MobileSubTabsContainer>
            <MobileTabs>
              {workExpSection.subItems.map(si => (
                <MobileTab
                  key={si.id}
                  active={activeSection === si.id}
                  onClick={() => handleSectionClick(si.id)}
                >
                  {si.label}
                </MobileTab>
              ))}
            </MobileTabs>
          </MobileSubTabsContainer>
        )}
        {showThirdRow && eiItem && (
          <MobileSubTabsContainer>
            <MobileTabs>
              {eiItem.subItems?.map(ssi => (
                <MobileTab
                  key={ssi.id}
                  active={activeSection === ssi.id}
                  onClick={() => handleSectionClick(ssi.id)}
                >
                  {ssi.label}
                </MobileTab>
              ))}
            </MobileTabs>
          </MobileSubTabsContainer>
        )}
      </MobileTabsContainer>

      <SidebarContainer>
        <NavList>
          {sections.map(renderNavItem)}
        </NavList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar; 