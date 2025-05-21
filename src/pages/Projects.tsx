import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const ProjectsContainer = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.xl};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  padding: ${theme.spacing.xl} 0;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.lg};
`;

const ProjectTitle = styled.h3`
  font-size: ${theme.typography.fontSize.h3};
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.primary};
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
`;

const ProjectLink = styled(Link)`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: ${theme.typography.fontWeight.bold};
  display: inline-block;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    description: 'A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
    image: 'https://via.placeholder.com/400x200',
    link: '/projects/1'
  },
  {
    id: 2,
    title: 'Mobile App Design',
    description: 'Design of a fitness tracking mobile application with focus on user engagement and retention.',
    image: 'https://via.placeholder.com/400x200',
    link: '/projects/2'
  },
  {
    id: 3,
    title: 'Dashboard Interface',
    description: 'Creation of an intuitive dashboard interface for a data analytics platform.',
    image: 'https://via.placeholder.com/400x200',
    link: '/projects/3'
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink to={project.link}>View Project →</ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects; 