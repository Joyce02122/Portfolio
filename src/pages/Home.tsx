import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const Hero = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.lg} 0;
  width: 100%;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.xxl};
  margin-bottom: ${theme.spacing.xl};
  width: 100%;
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: left;
    padding: 0 ${theme.spacing.xl};
  }
`;

const HeroText = styled.div`
  flex: 1;
  text-align: left;
  max-width: 600px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
    width: 100%;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 1;
    justify-content: center;
  }
`;

const Avatar = styled(motion.div)`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background-color: ${theme.colors.lightGray};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 240px;
    height: 240px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 200px;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Greeting = styled(motion.h1)`
  font-family: 'Dancing Script', cursive;
  font-size: 3.5rem;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const Title = styled(motion.h2)`
  font-size: ${theme.typography.fontSize.h1};
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.primary};
`;

const Subtitle = styled(motion.p)`
  font-size: ${theme.typography.fontSize.h3};
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text};
  max-width: 600px;
`;

const Description = styled(motion.p)`
  font-size: 1.35rem;
  color: #4A5568;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.xl};
  max-width: 600px;
  font-weight: 400;
  text-align: left;

  strong {
    font-weight: 700;
    color: ${theme.colors.primary};
  }

  .highlight {
    position: relative;
    display: inline;
    color: #4A5568;
    text-decoration: underline;
    text-decoration-color: #FFD700;
    text-decoration-thickness: 0.35em;
    text-decoration-skip-ink: none;
    text-underline-offset: 0.4em;
    text-decoration-style: wavy;
    text-decoration-skip-ink: none;
    text-underline-offset: 0.4em;
    background-image: url("data:image/svg+xml,%3Csvg width='200' height='20' viewBox='0 0 200 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10C0 10 40 0 100 10C160 20 200 10 200 10' stroke='%23FFD700' stroke-width='8' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-position: 0 1.2em;
    background-size: 200% 0.5em;
    padding-bottom: 0.2em;
    text-decoration: none;
  }
`;

const FeaturedSection = styled.section`
  width: 100%;
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.lg} ${theme.spacing.xl};
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: #2D3748;
  margin-bottom: ${theme.spacing.xl};
  text-align: left;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.xl};
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.background};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.medium};
    border: 1px solid ${theme.colors.primary};
    border-radius: 16px;

    h3, h4 {
      color: ${theme.colors.primary};
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.sm};

  h3 {
    font-size: 1.4rem;
    margin: 0;
    color: ${theme.colors.text};
    font-weight: 600;
    line-height: 1.3;
  }

  h4 {
    font-size: 1.1rem;
    margin: 0;
    color: ${theme.colors.text};
    font-weight: 400;
    line-height: 1.4;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
  margin-top: auto;
`;

const Tag = styled.span`
  background: ${theme.colors.lightGray};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.2px;
`;

const projects = [
  {
    id: 'cuteasy',
    title: 'CutEasy',
    subtitle: 'Seamless Appointment Management Platform for Salons and Customers',
    tags: ['B2B SaaS', 'Workflow Optimization', 'Design System'],
    image: '/home/cuteasy.png'
  },
  {
    id: 'glingling',
    title: 'Glingling',
    subtitle: 'Circular Marketplace for Upcycled Household Items',
    tags: ['Mobile Design', 'Product-Market Fit', 'Service Innovation'],
    image: '/home/glingling.png'
  },
  {
    id: 'trektopia',
    title: 'Trektopia',
    subtitle: 'Hiking Journey Reflection Platform with Outdoor IoT Integration',
    tags: ['Platform Design', 'Gamification', 'Hardware-Software Integration'],
    image: '/home/trektopia.png'
  },
  {
    id: 'smart-home',
    title: 'Co-Designing Smart Home IoT with Taiwanese Families',
    tags: ['HCI Research', 'Smart Home IoT', 'Family Behavior'],
    image: '/home/smart-iot.png'
  }
];

const Home: React.FC = () => {
  return (
    <>
      <Hero>
        <HeroContent>
          <HeroText>
            <Greeting
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm Joyce!
            </Greeting>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <strong>Product Designer</strong> who is passionate about turning design concepts into solutions that <span className="highlight">bring meaningful and joyful experiences to everyday life</span>.
            </Description>
          </HeroText>
          <HeroImage>
            <Avatar
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img src="/home/1.png" alt="Joyce Chou" />
            </Avatar>
          </HeroImage>
        </HeroContent>

        <FeaturedSection>
          <SectionTitle>Featured Projects</SectionTitle>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                as={motion.div}
              >
                <Link to={`/projects/${project.id}`}>
                  <ProjectImage src={project.image} alt={project.title} />
                  <ProjectContent>
                    <ProjectTitle>
                      <h3>{project.title}</h3>
                      {project.subtitle && <h4>{project.subtitle}</h4>}
                    </ProjectTitle>
                    <ProjectTags>
                      {project.tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </ProjectTags>
                  </ProjectContent>
                </Link>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </FeaturedSection>
      </Hero>
    </>
  );
};

export default Home;