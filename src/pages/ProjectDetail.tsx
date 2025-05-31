import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
`;

const Subtitle = styled.span`
  color: ${theme.colors.gray};
  font-size: ${theme.typography.fontSize.h3};
  font-weight: ${theme.typography.fontWeight.regular};
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.large};
  margin-bottom: ${theme.spacing.xl};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  padding: ${theme.spacing.lg} 0;
  border-bottom: 1px solid ${theme.colors.lightGray};
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text};
  margin: 0;
  letter-spacing: -0.01em;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: nowrap;
  margin-right: ${theme.spacing.xl};
`;

const ProjectTag = styled.span`
  background: ${theme.colors.lightGray};
  color: ${theme.colors.text};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.small};
  font-size: 0.9rem;
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${theme.colors.gray};
    color: white;
  }
`;

const CompanyInfo = styled.div`
  color: ${theme.colors.text};
  margin-top: ${theme.spacing.xs};
  font-size: 0.9rem;
  opacity: 0.8;
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const TeamMember = styled.li`
  color: ${theme.colors.text};
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Duration = styled.div`
  color: ${theme.colors.text};
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Content = styled(motion.div)`
  background: white;
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
  line-height: 1.8;
  color: ${theme.colors.text};

  h2 {
    font-size: 2rem;
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.text};
    margin: 2rem 0 1rem;
    letter-spacing: -0.02em;

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text};
    margin: 1.5rem 0 1rem;
    letter-spacing: -0.01em;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.text};
    margin: 1.2rem 0 0.8rem;
  }

  p {
    margin: 1rem 0;
    line-height: 1.8;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;

    li {
      margin: 0.5rem 0;
      line-height: 1.6;
    }
  }

  em {
    font-style: italic;
    color: ${theme.colors.gray};
  }

  .process-steps {
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacing.lg};
    margin: 2rem 0;
    overflow-x: auto;
    padding: ${theme.spacing.md} 0;
  }

  .process-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.md};
    min-width: 200px;
    text-align: center;
  }

  .process-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${theme.colors.lightGray};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacing.sm};
    transition: all 0.3s ease;

    svg {
      width: 40px;
      height: 40px;
      color: ${theme.colors.text};
    }

    &:hover {
      background: ${theme.colors.gray};
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

      svg {
        color: white;
      }
    }
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.lg};
  margin: ${theme.spacing.xl} 0;
`;

const ProjectImageGrid = styled(motion.img)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.xs};
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const ProcessGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing.lg};
  margin: ${theme.spacing.xl} 0;
  overflow-x: auto;
  padding: ${theme.spacing.md} 0;
`;

const ProcessItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  min-width: 200px;
  text-align: center;
`;

const ProcessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.sm};
  transition: all 0.3s ease;

  svg {
    width: 40px;
    height: 40px;
    color: ${theme.colors.text};
  }

  &:hover {
    background: ${theme.colors.gray};
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    svg {
      color: white;
    }
  }
`;

const ProcessTitle = styled.h4`
  font-size: 1rem;
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.4;
`;

const projects = [
  {
    id: 'cuteasy',
    title: 'CutEasy',
    subtitle: 'Designing a Seamless Experience for Salons and Clients',
    company: 'YITI TECH',
    duration: '2022.07 – 2024.08',
    image: '/images/cuteasy-cover.jpg',
    tags: ['B2B SaaS', 'Workflow Optimization', 'Design System'],
    team: [
      'UX/UI Designer ⭐️',
      'Front-End Engineer',
      'Back-End Engineer',
      'Product Manager'
    ],
    content: `
      <h2>Overview</h2>
      <p>CutEasy is a SaaS platform tailored for hair salons, combining a robust B2B backend system for salon staff with a B2B2C booking experience for clients. I was responsible for designing both sides of the product experience — from streamlining complex salon operations to optimizing customer appointment flows.</p>

      <h2>01｜Background & Challenge</h2>
      <p>Hair salons in Taiwan often rely on outdated tools like paper records or fragmented apps for managing bookings, payments, and customer data.</p>
      <p>CutEasy aimed to provide:</p>
      <ul>
        <li>A centralized system for salons (B2B)</li>
        <li>A user-friendly appointment interface for customers (B2B2C)</li>
      </ul>

      <h3>My Role 👋🏻</h3>
      <ul>
        <li>Contributed to UX research and design for both salon-side (dashboard) and customer-side (appointment app)</li>
        <li>Collaborated with PMs, engineers, and stakeholders across the full design cycle</li>
        <li>Built a design system to ensure consistency and efficiency across platforms</li>
      </ul>

      <p><em>Due to NDA…</em><br>
      While visual details are simplified or masked, all UX decisions, flows, and research insights are my own. High-fidelity mockups can be shared during interviews upon request.</p>

      <h2>02｜Design Process</h2>
      <p>Discover → Define → Design → Deliver</p>
      <p>Across both salon-side and client-side flows</p>
      <div class="process-steps">
        <div class="process-step">
          <div class="process-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
              <path d="M16 16h5v5"/>
            </svg>
          </div>
          <h4>Competitive analysis on SaaS & beauty apps</h4>
        </div>
        <div class="process-step">
          <div class="process-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              <path d="M21 21v-2a4 4 0 0 0-3-3.87"/>
            </svg>
          </div>
          <h4>Field study & user interviews</h4>
        </div>
        <div class="process-step">
          <div class="process-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              <path d="M12 6h4"/>
              <path d="M12 10h4"/>
              <path d="M12 14h4"/>
              <path d="M8 6h.01"/>
              <path d="M8 10h.01"/>
              <path d="M8 14h.01"/>
            </svg>
          </div>
          <h4>Information architecture mapping</h4>
        </div>
        <div class="process-step">
          <div class="process-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4"/>
              <path d="M12 18v4"/>
              <path d="m4.93 4.93 2.83 2.83"/>
              <path d="m16.24 16.24 2.83 2.83"/>
              <path d="M2 12h4"/>
              <path d="M18 12h4"/>
              <path d="m4.93 19.07 2.83-2.83"/>
              <path d="m16.24 7.76 2.83-2.83"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h4>Prototyping & usability testing</h4>
        </div>
      </div>

      <h2>03｜Design Highlights</h2>
      <h3>Part A｜B2B: Optimizing Salon Management Workflows</h3>
      
      <h4>Challenge</h4>
      <p>Salon staff struggled with:</p>
      <ul>
        <li>Booking clashes across staff</li>
        <li>Manual payment tracking</li>
        <li>Unstructured client records</li>
      </ul>

      <h4>Key Design Actions</h4>
      <ul>
        <li>Redesigned POS flow for walk-in + appointment customers</li>
        <li>Built modular booking interface with weekly calendar view</li>
        <li>Introduced automated reminders & customer history tagging</li>
      </ul>

      <h4>Key Deliverables</h4>
      <ul>
        <li>Dashboard UI: Booking, customer profiles, POS</li>
        <li>Design system: Colors, components, spacing rules</li>
        <li>Operational guidelines: Used to train new salon staff</li>
      </ul>

      <h4>Impact</h4>
      <ul>
        <li>Reduced average booking process time by 30%</li>
        <li>Lowered support tickets by ~30% after design system launch</li>
        <li>Salon retention increased based on feedback from 5 early adopters</li>
      </ul>

      <h3>Part B｜B2B2C: Designing a Smooth Client Booking Flow</h3>
      
      <h4>Challenge</h4>
      <p>Clients found existing salon booking tools confusing or outdated. They needed:</p>
      <ul>
        <li>A clear, fast, mobile-friendly interface</li>
        <li>Real-time visibility into available slots</li>
        <li>Transparent stylist/service selection</li>
      </ul>

      <h4>Key Design Actions</h4>
      <ul>
        <li>Designed a 4-step booking flow: choose stylist → pick time → confirm</li>
        <li>Added client reminders, calendar sync, and service preferences</li>
        <li>Created mobile-first responsive design</li>
      </ul>

      <h4>Key Deliverables</h4>
      <ul>
        <li>Mobile & Web UI prototypes</li>
        <li>User journey mapping</li>
        <li>Usability test results (before/after comparison)</li>
      </ul>

      <h4>Impact</h4>
      <ul>
        <li>Task success rate improved from 60% → 92%</li>
        <li>Reduced drop-off in booking flow by 40%</li>
        <li>Average booking completion time reduced to under 90 seconds</li>
      </ul>

      <h2>04｜Reflection & Takeaways</h2>
      <p>This was my first time participating in a product design project from concept to launch, and it felt incredibly rewarding to experience the full development process. Throughout the project, I spent a lot of time working closely with product managers and engineers to clarify user needs, define essential features, and evaluate technical feasibility. This not only helped me learn how to better articulate my ideas, but also strengthened my ability to communicate effectively with cross-functional teams. I gained a deeper understanding of how to collaborate with others to ensure the product's successful implementation.</p>
    `
  },
  {
    id: 'glingling',
    title: 'Glingling',
    subtitle: 'Circular Marketplace for Upcycled Household Items',
    tags: ['Mobile Design', 'Product-Market Fit', 'Service Innovation'],
    image: '/Home/glingling.png',
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
    image: '/Home/trektopia.png',
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
    image: '/Home/smart-iot.png',
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
  const navigate = useNavigate();

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
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title} - <Subtitle>{project.subtitle}</Subtitle>
      </Title>
      <ProjectImage
        src={project.image}
        alt={project.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <ProjectInfo>
        <InfoSection>
          <InfoTitle>Project Type:</InfoTitle>
          <ProjectTags>
            {project.tags.map((tag, index) => (
              <ProjectTag key={index}>{tag}</ProjectTag>
            ))}
          </ProjectTags>
          <CompanyInfo>@{project.company}</CompanyInfo>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Team:</InfoTitle>
          <TeamList>
            {project.team?.map((member, index) => (
              <TeamMember key={index}>{member}</TeamMember>
            ))}
          </TeamList>
        </InfoSection>

        <InfoSection>
          <InfoTitle>Duration:</InfoTitle>
          <Duration>{project.duration}</Duration>
        </InfoSection>
      </ProjectInfo>
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {project.content && (
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        )}
        <ImageGrid>
          <ProjectImageGrid
            src="/images/cuteasy-dashboard.jpg"
            alt="CutEasy Dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          />
          <ProjectImageGrid
            src="/images/cuteasy-booking.jpg"
            alt="CutEasy Booking Flow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          />
        </ImageGrid>
      </Content>
    </ProjectContainer>
  );
};

export default ProjectDetail; 