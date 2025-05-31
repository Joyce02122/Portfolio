import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { useNavigate } from 'react-router-dom';

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
  gap: ${theme.spacing.xl};
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
  flex: 1.2;
  text-align: left;
  width: 100%;

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: 2;
    width: 100%;
  }
`;

const HeroImage = styled.div`
  flex: 0.8;
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

const Description = styled(motion.p)`
  font-size: 1.35rem;
  color: #4A5568;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
  width: 100%;
  font-weight: 400;
  text-align: left;
  white-space: normal;

  strong {
    font-weight: 700;
    color: ${theme.colors.primary};
  }

  .highlight {
    position: relative;
    display: inline;
    color: #4A5568;
    text-decoration: none;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10C0 10 20 0 50 10C80 20 100 10 100 10' stroke='%23FFD700' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-position: 0 1.2em;
    background-size: 100% 0.8em;
    padding-bottom: 0.2em;
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
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  height: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 320px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 280px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

    .overlay {
      opacity: 1;
      backdrop-filter: blur(4px);
    }

    .content {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xl};
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 16px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectContent = styled.div`
  color: white;
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-top: 60px;
  position: relative;
  height: 100%;
  padding-bottom: 80px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-top: 40px;
    gap: ${theme.spacing.sm};
    padding-bottom: 70px;
  }
`;

const ProjectTitle = styled.div`
  margin-bottom: ${theme.spacing.md};

  h3 {
    font-size: 1.8rem;
    margin: 0;
    color: white;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${theme.spacing.md};
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1.5rem;
    }
  }

  h4 {
    font-size: 1.4rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 500;
    line-height: 1.5;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1.1rem;
    }
  }
`;

const ProjectTags = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.sm};
  min-height: 40px;
  position: relative;
  max-width: 100%;
  padding-bottom: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xl};
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing.lg};
    padding-bottom: ${theme.spacing.xs};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.12);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.2px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: max-content;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0 2px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    padding: 4px 12px;
    height: 28px;
  }

  ${ProjectCard}:hover & {
    background: rgba(255, 255, 255, 0.18);
    transform: translateY(-2px);
  }
`;

const ViewButton = styled.button`
  display: inline-block;
  background: rgba(255, 255, 255, 0.95);
  color: ${theme.colors.primary};
  padding: 12px 32px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(20px);
  opacity: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  white-space: nowrap;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 10px 24px;
    font-size: 1rem;
    bottom: 16px;
    width: auto;
    min-width: 140px;
  }

  ${ProjectCard}:hover & {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }

  &:hover {
    background: white;
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  &.disabled {
    background: rgba(255, 255, 255, 0.7);
    color: #666;
    cursor: default;
    pointer-events: none;

    &:hover {
      transform: translateX(-50%) translateY(0);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xl};
  white-space: pre-line;
`;

const BoldText = styled.span`
  font-weight: 600;
`;

const HighlightedText = styled.span`
  text-decoration: wavy underline #FFD700;
`;

const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.xl};
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  color: ${theme.colors.gray};
`;

const ScrollIcon = styled.span`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
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
  margin-top: ${theme.spacing.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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

const Home: React.FC = () => {
  const navigate = useNavigate();

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
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <strong>Product designer</strong> with experience in <strong>B2B SaaS</strong> and <strong>B2C web/mobile</strong>.
              <br />
              I design <span className="highlight">user-centered</span>, <span className="highlight">scalable</span>, and <span className="highlight">innovative</span> solutions that simplify complex problems and <span className="highlight">bring meaningful value to everyday life</span>.
            </Description>
          </HeroText>
          <HeroImage>
            <Avatar
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <img src="/Home/1.png" alt="Joyce Chou" />
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
        </FeaturedSection>
      </Hero>
    </>
  );
};

export default Home;