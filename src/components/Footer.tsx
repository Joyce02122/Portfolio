import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { theme } from '../styles/theme';

const FooterContainer = styled.footer`
  background: #F5F7FA;
  color: ${theme.colors.text};
  padding: ${theme.spacing.xl} 0;
  border-top: 1px solid ${theme.colors.lightGray};
`;

const FooterContent = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: ${theme.spacing.md};
  }
`;

const ContactSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
`;

const ContactText = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;
  color: ${theme.colors.text};
  margin: 0;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
`;

const SocialLink = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 1.5rem;
`;

const Copyright = styled.p`
  font-size: 0.9375rem;
  margin: 0;
  opacity: 0.9;
  text-align: right;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ContactSection>
          <ContactText>Feel free to contact! :D</ContactText>
          <SocialLinks>
            <SocialLink href="mailto:joycechou234@gmail.com" target="_blank" rel="noopener noreferrer">
              <IconWrapper>
                {FaEnvelope({})}
              </IconWrapper>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/yuhsin-chou" target="_blank" rel="noopener noreferrer">
              <IconWrapper>
                {FaLinkedin({})}
              </IconWrapper>
            </SocialLink>
          </SocialLinks>
        </ContactSection>
        <Copyright>
          © {new Date().getFullYear()} Joyce Chou. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 