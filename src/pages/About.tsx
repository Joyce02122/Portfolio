import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const AboutSection = styled.section`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  background: white;
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
`;

const PageTitle = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: ${theme.typography.fontSize.h1};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
`;

const Content = styled(motion.div)`
  background: white;
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
`;

const Section = styled.div`
  margin-bottom: ${theme.spacing.xl};

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize.h2};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
`;

const Text = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`;

const SkillsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${theme.spacing.md};
`;

const SkillItem = styled.li`
  background: ${theme.colors.background};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  text-align: center;
  font-weight: ${theme.typography.fontWeight.medium};
`;

const About: React.FC = () => {
  return (
    <AboutSection>
      <PageTitle>Nice to meet you!</PageTitle>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </Title>
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Section>
          <SectionTitle>Introduction</SectionTitle>
          <Text>
            I'm a passionate UX designer with over 5 years of experience in creating
            intuitive and engaging digital experiences. My approach combines user-centered
            design principles with modern aesthetics to deliver solutions that not only
            look great but also solve real user problems.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Experience</SectionTitle>
          <Text>
            Throughout my career, I've worked with various clients ranging from startups
            to established enterprises. I specialize in user research, wireframing,
            prototyping, and visual design, always keeping the end-user at the center
            of the design process.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsList>
            <SkillItem>User Research</SkillItem>
            <SkillItem>Wireframing</SkillItem>
            <SkillItem>Prototyping</SkillItem>
            <SkillItem>Visual Design</SkillItem>
            <SkillItem>Figma</SkillItem>
            <SkillItem>Adobe XD</SkillItem>
            <SkillItem>Sketch</SkillItem>
            <SkillItem>User Testing</SkillItem>
          </SkillsList>
        </Section>
      </Content>
    </AboutSection>
  );
};

export default About;