import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const PageContainer = styled.div`
  width: 100%;
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  min-height: calc(100vh - 80px);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.lg};
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xl};
  font-weight: 600;
  letter-spacing: -0.5px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
  width: 100%;

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.lg};
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  background: white;
  box-shadow: ${theme.shadows.medium};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${theme.spacing.lg};
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  color: white;
  text-align: left;
`;

const ProjectTitle = styled.div`
  margin-bottom: ${theme.spacing.md};

  h3 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: ${theme.typography.fontWeight.bold};
  }

  h4 {
    font-size: 1rem;
    margin: ${theme.spacing.xs} 0 0;
    font-weight: ${theme.typography.fontWeight.regular};
    opacity: 0.8;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.small};
  font-size: 0.8rem;
`;

const ViewButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.medium};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-end;
  margin-top: ${theme.spacing.md};

  &:hover {
    background: ${theme.colors.secondary};
  }

  &.disabled {
    background: ${theme.colors.gray};
    cursor: not-allowed;
  }
`;

const projects = [
  {
    id: 'cuteasy',
    title: 'CutEasy',
    subtitle: 'Seamless Appointment Management Platform for Salons and Customers',
    tags: ['B2B SaaS', 'Workflow Optimization', 'Design System'],
    image: '/Home/cuteasy.png'
  },
  {
    id: 'glingling',
    title: 'Glingling',
    subtitle: 'Circular Marketplace for Upcycled Household Items',
    tags: ['Mobile Design', 'Product-Market Fit', 'Service Innovation'],
    image: '/Home/glingling.png'
  },
  {
    id: 'trektopia',
    title: 'Trektopia',
    subtitle: 'Hiking Journey Reflection Platform with Outdoor IoT Integration',
    tags: ['Platform Design', 'Gamification', 'Outdoor IoT'],
    image: '/Home/trektopia.png'
  },
  {
    id: 'smart-home',
    title: 'Co-Designing Smart Home IoT with Taiwanese Families',
    tags: ['HCI Research', 'Smart Home IoT', 'Family Behavior'],
    image: '/Home/smart-iot.png'
  }
];

const Work: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            as={motion.div}
            onClick={() => project.id !== 'smart-home' && navigate(`/projects/${project.id}`)}
            style={{ cursor: project.id === 'smart-home' ? 'default' : 'pointer' }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectOverlay className="overlay">
              <ProjectContent className="content">
                <ProjectTitle>
                  <h3>{project.title}</h3>
                  {project.subtitle && <h4>{project.subtitle}</h4>}
                </ProjectTitle>
                <ProjectTags>
                  {project.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ProjectTags>
                {project.id === 'smart-home' ? (
                  <ViewButton className="disabled">
                    In Progress...
                  </ViewButton>
                ) : (
                  <ViewButton>
                    View Project
                  </ViewButton>
                )}
              </ProjectContent>
            </ProjectOverlay>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PageContainer>
  );
};

export default Work; 