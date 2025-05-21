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
`;

const Logo = styled(Link)`
  font-size: ${theme.typography.fontSize.h3};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  text-decoration: none;
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: ${theme.colors.background};
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacing.lg};
    gap: ${theme.spacing.md};
    box-shadow: ${theme.shadows.medium};
    transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${props => props.$isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? theme.typography.fontWeight.bold : theme.typography.fontWeight.regular};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Main = styled.main`
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  background: ${theme.colors.background};
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

  return (
    <>
      <Header>
        <Nav>
          <Logo to="/">Joyce Chou</Logo>
          <MenuButton onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </MenuButton>
          <NavLinks $isOpen={isMenuOpen}>
            <NavLink to="/" $isActive={location.pathname === '/'}>
              Home
            </NavLink>
            <NavLink to="/projects" $isActive={location.pathname === '/projects'}>
              Projects
            </NavLink>
            <NavLink to="/about" $isActive={location.pathname === '/about'}>
              About
            </NavLink>
          </NavLinks>
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout; 