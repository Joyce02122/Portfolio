import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const AboutContainer = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${theme.spacing.xl};
`;

const Introduction = styled.div`
  margin-bottom: ${theme.spacing.xxl};
  max-width: 800px;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xl};
`;

const ResumeButton = styled.a`
  display: inline-block;
  background: ${theme.colors.primary};
  color: white;
  padding: 12px 32px;
  border-radius: 25px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Section = styled.section`
  margin-bottom: ${theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xl};
  font-weight: 600;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const SkillCategory = styled.div`
  background: ${theme.colors.lightGray};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.medium};
`;

const SkillCategoryTitle = styled.h3`
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
  font-size: 1.2rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.text};
  font-size: 1rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: ${theme.spacing.xl};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${theme.colors.primary};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing.xl};
  padding-left: ${theme.spacing.xl};

  &::before {
    content: '';
    position: absolute;
    left: -${theme.spacing.xl};
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${theme.colors.primary};
    border: 3px solid white;
    box-shadow: 0 0 0 2px ${theme.colors.primary};
  }
`;

const TimelineTitle = styled.h3`
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
  font-size: 1.3rem;
`;

const TimelineCompany = styled.h4`
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xs};
  font-size: 1.1rem;
  font-weight: 500;
`;

const TimelineDate = styled.p`
  color: ${theme.colors.gray};
  margin-bottom: ${theme.spacing.sm};
  font-size: 0.9rem;
`;

const TimelineLocation = styled.p`
  color: ${theme.colors.gray};
  margin-bottom: ${theme.spacing.sm};
  font-size: 0.9rem;
`;

const TimelineDescription = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
  font-size: 1rem;
`;

const EducationSection = styled.div`
  margin-top: ${theme.spacing.xxl};
`;

const EducationItem = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const EducationTitle = styled.h3`
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
  font-size: 1.3rem;
`;

const EducationSchool = styled.h4`
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xs};
  font-size: 1.1rem;
  font-weight: 500;
`;

const EducationDate = styled.p`
  color: ${theme.colors.gray};
  margin-bottom: ${theme.spacing.sm};
  font-size: 0.9rem;
`;

const EducationLocation = styled.p`
  color: ${theme.colors.gray};
  margin-bottom: ${theme.spacing.sm};
  font-size: 0.9rem;
`;

const AwardsSection = styled.div`
  margin-top: ${theme.spacing.xxl};
`;

const AwardsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AwardItem = styled.li`
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text};
  font-size: 1rem;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Introduction>
        <IntroText>
          I design user-centered systems for complex platforms, combining my experience in B2B SaaS UX with a growing interest in IoT products. My strength lies in bridging the gap between digital interfaces and physical interactions, turning complexity into clarity and creating innovative, efficient, and scalable experiences.
        </IntroText>
        <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          View Resume
        </ResumeButton>
      </Introduction>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <SkillCategoryTitle>UX/UI Design</SkillCategoryTitle>
            <SkillList>
              <SkillItem>User Research & Usability Testing</SkillItem>
              <SkillItem>User Flow & Journey Mapping</SkillItem>
              <SkillItem>Wireframe & Rapid Prototyping</SkillItem>
              <SkillItem>System Architecture</SkillItem>
              <SkillItem>Hardware-Software Integration</SkillItem>
              <SkillItem>Digital Fabrication</SkillItem>
            </SkillList>
          </SkillCategory>
          <SkillCategory>
            <SkillCategoryTitle>Tools</SkillCategoryTitle>
            <SkillList>
              <SkillItem>Figma, Adobe Creative Suite</SkillItem>
              <SkillItem>Rhino3D, Fusion 360</SkillItem>
              <SkillItem>Python, C++, React</SkillItem>
              <SkillItem>HTML, CSS, Javascript</SkillItem>
              <SkillItem>KiCad, Arduino, ESP32</SkillItem>
            </SkillList>
          </SkillCategory>
        </SkillsGrid>
      </Section>

      <Section>
        <SectionTitle>Work Experience</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineTitle>UX/UI Designer</TimelineTitle>
            <TimelineCompany>YITI TECH Co., Ltd.</TimelineCompany>
            <TimelineDate>Jul 2022 - Aug 2024</TimelineDate>
            <TimelineLocation>Taipei, Taiwan</TimelineLocation>
            <TimelineDescription>
              Optimized a B2B SaaS platform for the haircare industry, improving usability and workflow efficiency through data insights, competitive analysis, and user research.
            </TimelineDescription>
          </TimelineItem>

          <TimelineItem>
            <TimelineTitle>HCI Research Assistant</TimelineTitle>
            <TimelineCompany>Everyday Creativity Lab (HCI Lab) at NYCU</TimelineCompany>
            <TimelineDate>Sep 2023 - Aug 2024</TimelineDate>
            <TimelineLocation>Hsinchu, Taiwan</TimelineLocation>
            <TimelineDescription>
              Conducted user research & qualitative analysis on smart home IoT, interviewing 20+ parent-child households to explore energy-saving behaviors.
            </TimelineDescription>
          </TimelineItem>

          <TimelineItem>
            <TimelineTitle>Product / UX Designer</TimelineTitle>
            <TimelineCompany>Glingling - sustainability-focused startup</TimelineCompany>
            <TimelineDate>Jun 2023 - Nov 2023</TimelineDate>
            <TimelineLocation>Hsinchu, Taiwan</TimelineLocation>
            <TimelineDescription>
              Designed a marketplace for upcycling by integrating UX research, business strategy, and digital platform design.
            </TimelineDescription>
          </TimelineItem>

          <TimelineItem>
            <TimelineTitle>Graphic Design Intern</TimelineTitle>
            <TimelineCompany>ARETE Digital Social Marketing Co., Ltd.</TimelineCompany>
            <TimelineDate>Jul 2021 - Sep 2021</TimelineDate>
            <TimelineLocation>Taipei, Taiwan</TimelineLocation>
            <TimelineDescription>
              Performed basic audience research and A/B testing to evaluate design effectiveness and refine content based on user feedback.
            </TimelineDescription>
          </TimelineItem>
        </Timeline>
      </Section>

      <EducationSection>
        <SectionTitle>Education</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineTitle>M.S in Technology Innovation (HCI)</TimelineTitle>
            <TimelineCompany>University of Washington</TimelineCompany>
            <TimelineDate>2024 - Present</TimelineDate>
            <TimelineLocation>Bellevue, WA</TimelineLocation>
          </TimelineItem>

          <TimelineItem>
            <TimelineTitle>Major in Arts and Design</TimelineTitle>
            <TimelineCompany>National Tsing Hua University</TimelineCompany>
            <TimelineDate>2019 - 2023</TimelineDate>
            <TimelineLocation>Hsinchu, Taiwan</TimelineLocation>
          </TimelineItem>

          <TimelineItem>
            <TimelineTitle>Minor in Communication and Technology</TimelineTitle>
            <TimelineCompany>National Yang Ming Chiao Tung University (NYCU)</TimelineCompany>
            <TimelineDate>2020 - 2024</TimelineDate>
            <TimelineLocation>Hsinchu, Taiwan</TimelineLocation>
          </TimelineItem>
        </Timeline>
      </EducationSection>

      <AwardsSection>
        <SectionTitle>Awards</SectionTitle>
        <AwardsList>
          <AwardItem>LINE FRESH 2022 Campus Competition 1st place</AwardItem>
          <AwardItem>MEICHU Hackathon 2022 2nd place</AwardItem>
          <AwardItem>Young Pin Design Award 2023 - Product Design Category Finalist</AwardItem>
          <AwardItem>Hotai Group Corporate Social Responsibility (CSR) Initiative</AwardItem>
        </AwardsList>
      </AwardsSection>
    </AboutContainer>
  );
};

export default About;