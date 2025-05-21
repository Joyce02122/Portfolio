import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const ProjectsContainer = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xl};
  text-align: left;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const ProjectCard = styled(motion.div)`
  display: flex;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 400px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
  }
`;

const ProjectImage = styled.div`
  flex: 0 0 600px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;

    ${ProjectCard}:hover & {
      transform: scale(1.05);
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex: 0 0 300px;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  padding: ${theme.spacing.xl} ${theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${theme.spacing.lg};
`;

const ProjectHeader = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.text};
  margin: 0 0 ${theme.spacing.sm};
  font-weight: 600;
`;

const ProjectSubtitle = styled.h3`
  font-size: 1.2rem;
  color: ${theme.colors.text};
  margin: 0;
  font-weight: 500;
  line-height: 1.5;
  opacity: 0.8;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing.lg};
`;

const Tag = styled.span`
  background: ${theme.colors.lightGray};
  color: ${theme.colors.text};
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9375rem;
  font-weight: 500;
  opacity: 0.9;
`;

const ViewButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary};
  color: white;
  padding: 12px 32px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  border: 2px solid ${theme.colors.primary};

  &:hover {
    background: transparent;
    color: ${theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    margin-top: ${theme.spacing.md};
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

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <ProjectsList>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, rotateX: 30, y: 50 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <div>
                <ProjectHeader>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  {project.subtitle && <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>}
                </ProjectHeader>
                <ProjectTags>
                  {project.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ProjectTags>
              </div>
              <ViewButton to={`/projects/${project.id}`}>
                View Project
              </ViewButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default Projects; 