import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../styles/theme';
import Footer from './Footer';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.background};
  padding: ${theme.spacing.md} 0;
  box-shadow: ${theme.shadows.small};
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

const Logo = styled(Link)`
  font-size: ${theme.typography.fontSize.h3};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  text-decoration: none;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.98);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.xl};
    gap: ${theme.spacing.xl};
    transform: translateX(${props => props.$isOpen ? '0' : '100%'});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(8px);
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${theme.colors.primary};
    background: rgba(0, 0, 0, 0.05);
  }

  &.active {
    color: ${theme.colors.primary};
    font-weight: 600;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const ExternalLink = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primary};
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const MenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${theme.colors.primary};
  padding: ${theme.spacing.sm};
  z-index: 1001;
  transition: all 0.3s ease;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Main = styled.main`
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  background: ${theme.colors.background};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.lg};
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Header>
        <Nav>
          <Logo to="/" onClick={handleNavClick}>Joyce Chou</Logo>
          <NavLinks $isOpen={isMenuOpen}>
            <NavLink to="/work" className={location.pathname === '/work' ? 'active' : ''} onClick={handleNavClick}>
              Work
            </NavLink>
            <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={handleNavClick}>
              About
            </NavLink>
            <ExternalLink href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={handleNavClick}>
              Resume
            </ExternalLink>
          </NavLinks>
          <MenuButton onClick={toggleMenu} $isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout; 