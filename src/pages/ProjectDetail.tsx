import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const ProjectContainer = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.xl};
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.primary};
  text-decoration: none;
  margin-bottom: ${theme.spacing.xl};
  font-weight: ${theme.typography.fontWeight.medium};

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const Title = styled(motion.h1)`
  font-size: ${theme.typography.fontSize.h1};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.large};
  margin-bottom: ${theme.spacing.xl};
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

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // This would typically come from an API or data store
  const project = {
    id: 1,
    title: 'E-commerce Redesign',
    image: 'https://via.placeholder.com/1000x400',
    description: 'A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
    challenge: 'The client needed to improve their conversion rate and reduce cart abandonment while maintaining their brand identity.',
    solution: 'Through extensive user research and testing, we identified key pain points in the user journey and implemented a streamlined checkout process with improved product visualization.',
    results: 'The redesign resulted in a 35% increase in conversion rate and a 40% reduction in cart abandonment.'
  };

  return (
    <ProjectContainer>
      <BackLink to="/projects">← Back to Projects</BackLink>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </Title>
      <ProjectImage
        src={project.image}
        alt={project.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <Text>{project.description}</Text>
        </Section>

        <Section>
          <SectionTitle>The Challenge</SectionTitle>
          <Text>{project.challenge}</Text>
        </Section>

        <Section>
          <SectionTitle>The Solution</SectionTitle>
          <Text>{project.solution}</Text>
        </Section>

        <Section>
          <SectionTitle>Results</SectionTitle>
          <Text>{project.results}</Text>
        </Section>
      </Content>
    </ProjectContainer>
  );
};

export default ProjectDetail; 