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

const projects = [
  {
    id: 'cuteasy',
    title: 'CutEasy',
    subtitle: 'Seamless Appointment Management Platform for Salons and Customers',
    tags: ['B2B SaaS', 'Workflow Optimization', 'Design System'],
    image: '/home/cuteasy.png',
    overview: 'A comprehensive B2B SaaS platform designed to streamline appointment management for hair salons and enhance customer experience.',
    challenge: 'The haircare industry faced significant challenges in managing appointments, inventory, and customer relationships. The existing solutions were outdated and difficult to use, leading to inefficiencies and customer dissatisfaction.',
    solution: 'Designed and implemented a comprehensive B2B SaaS platform that streamlined operations for hair salons. The solution included an intuitive appointment system, inventory management, and customer relationship management tools.',
    results: [
      'Reduced customer support inquiries by 30%',
      'Improved user satisfaction scores by 45%',
      'Streamlined appointment booking process by 60%',
      'Increased platform adoption rate by 25%'
    ],
    tools: ['Figma', 'Adobe XD', 'React', 'Node.js'],
    company: 'YITI TECH Co., Ltd.',
    duration: 'Jul 2022 - Aug 2024',
    role: 'UX/UI Designer',
    location: 'Taipei, Taiwan'
  },
  {
    id: 'glingling',
    title: 'Glingling',
    subtitle: 'Circular Marketplace for Upcycled Household Items',
    tags: ['Mobile Design', 'Product-Market Fit', 'Service Innovation'],
    image: '/home/glingling.png',
    overview: 'A mobile-first marketplace platform that connects users who want to upcycle their household items with those looking for sustainable alternatives.',
    challenge: 'Traditional marketplaces lacked focus on sustainability and circular economy principles. Users needed a dedicated platform for upcycling and sustainable consumption.',
    solution: 'Created a mobile-first marketplace with features specifically designed for upcycling, including item verification, sustainability impact tracking, and community engagement tools.',
    results: [
      'Achieved 10,000+ active users within first 3 months',
      'Facilitated over 5,000 successful upcycling transactions',
      'Reduced waste by an estimated 15 tons',
      'Built a community of 2,000+ sustainability advocates'
    ],
    tools: ['Figma', 'React Native', 'Firebase', 'Node.js'],
    company: 'Glingling',
    duration: 'Jan 2023 - Present',
    role: 'Lead Designer',
    location: 'Taipei, Taiwan'
  },
  {
    id: 'trektopia',
    title: 'Trektopia',
    subtitle: 'Hiking Journey Reflection Platform with Outdoor IoT Integration',
    tags: ['Platform Design', 'Gamification', 'Outdoor IoT'],
    image: '/home/trektopia.png',
    overview: 'An innovative platform that combines hiking experiences with IoT technology to create meaningful journey reflections and community engagement.',
    challenge: 'Hikers lacked a way to document and share their experiences meaningfully, while outdoor IoT devices were not effectively integrated into the hiking experience.',
    solution: 'Developed a platform that integrates IoT sensors with a mobile app to automatically capture hiking data and create personalized journey reflections.',
    results: [
      'Increased user engagement by 200%',
      'Created 50,000+ journey reflections',
      'Integrated with 3 major IoT device manufacturers',
      'Built a community of 20,000+ active hikers'
    ],
    tools: ['Figma', 'React', 'Python', 'IoT SDK'],
    company: 'Trektopia',
    duration: 'Mar 2023 - Present',
    role: 'UX Designer',
    location: 'Taipei, Taiwan'
  },
  {
    id: 'smart-home',
    title: 'Co-Designing Smart Home IoT with Taiwanese Families',
    tags: ['HCI Research', 'Smart Home IoT', 'Family Behavior'],
    image: '/home/smart-iot.png',
    overview: 'A research project exploring how Taiwanese families interact with smart home IoT devices and how to design better user experiences for them.',
    challenge: 'Smart home IoT devices often fail to account for cultural differences and family dynamics in Taiwanese households.',
    solution: 'Conducted extensive user research with 20+ Taiwanese families to understand their needs and behaviors, then co-designed solutions with them.',
    results: [
      'Published research paper in CHI 2023',
      'Identified 5 key cultural factors affecting IoT adoption',
      'Developed 3 new interaction patterns for family IoT',
      'Created design guidelines for Taiwanese smart homes'
    ],
    tools: ['Research Methods', 'Qualitative Analysis', 'Prototyping', 'User Testing'],
    company: 'National Taiwan University',
    duration: 'Sep 2022 - Jun 2023',
    role: 'Research Assistant',
    location: 'Taipei, Taiwan'
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <ProjectContainer>
        <BackLink to="/projects">← Back to Projects</BackLink>
        <Title>Project not found</Title>
      </ProjectContainer>
    );
  }

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
          <Text>{project.overview}</Text>
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
          <ul>
            {project.results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </Section>

        <Section>
          <SectionTitle>Project Details</SectionTitle>
          <ul>
            <li><strong>Company:</strong> {project.company}</li>
            <li><strong>Duration:</strong> {project.duration}</li>
            <li><strong>Role:</strong> {project.role}</li>
            <li><strong>Location:</strong> {project.location}</li>
            <li><strong>Tools:</strong> {project.tools.join(', ')}</li>
          </ul>
        </Section>
      </Content>
    </ProjectContainer>
  );
};

export default ProjectDetail; 