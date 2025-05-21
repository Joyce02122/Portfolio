import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';

const FooterContainer = styled.footer`
  background: #F5F7FA;
  color: ${theme.colors.text};
  padding: ${theme.spacing.xl} 0;
  margin-top: auto;
  border-top: 1px solid ${theme.colors.lightGray};
`;

const FooterContent = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing.lg};
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.9375rem;
  margin: 0;
  opacity: 0.9;
`;

const ContactSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

const ContactText = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
`;

const SocialLink = styled.a`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  opacity: 0.9;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © {new Date().getFullYear()} Joyce Chou. All rights reserved.
        </Copyright>
        <ContactSection>
          <ContactText>Feel free to contact! :D</ContactText>
          <SocialLinks>
            <SocialLink href="mailto:joycechou234@gmail.com" target="_blank" rel="noopener noreferrer">
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/yuhsin-chou" target="_blank" rel="noopener noreferrer">
              <IconWrapper>
                <FaLinkedin />
              </IconWrapper>
            </SocialLink>
          </SocialLinks>
        </ContactSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 