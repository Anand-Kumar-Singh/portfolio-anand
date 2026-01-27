'use client';

/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import * as S from './styles/Header.styles';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav') && !target.closest('button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.Logo>
            <h2>Anand Singh | Full Stack Developer</h2>
          </S.Logo>

          {/* Desktop Navigation */}
          <S.DesktopNav>
            <S.Nav isOpen={false}>
              <ul>
                <li>
                  <S.NavLink
                    href="#home"
                    isActive={activeSection === 'home'}
                    onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                  >
                    Home
                  </S.NavLink>
                </li>
                <li>
                  <S.NavLink
                    href="#about"
                    isActive={activeSection === 'about'}
                    onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                  >
                    About
                  </S.NavLink>
                </li>
                <li>
                  <S.NavLink
                    href="#projects"
                    isActive={activeSection === 'projects'}
                    onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                  >
                    Projects
                  </S.NavLink>
                </li>
                <li>
                  <S.NavLink
                    href="#skills"
                    isActive={activeSection === 'skills'}
                    onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                  >
                    Skills
                  </S.NavLink>
                </li>
                <li>
                  <S.NavLink
                    href="#contact"
                    isActive={activeSection === 'contact'}
                    onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  >
                    Contact
                  </S.NavLink>
                </li>
              </ul>
            </S.Nav>

            <S.SocialLinks>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
            </S.SocialLinks>
          </S.DesktopNav>

          {/* Mobile Controls */}
          <S.MobileControls>
            <S.SocialLinks>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
            </S.SocialLinks>

            <S.HamburgerButton 
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </S.HamburgerButton>
          </S.MobileControls>
        </S.HeaderWrapper>
      </S.HeaderContainer>

      {/* Mobile Navigation Menu */}
      <S.Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <S.Nav isOpen={isMenuOpen}>
        <ul>
          <li>
            <S.NavLink
              href="#home"
              isActive={activeSection === 'home'}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </S.NavLink>
          </li>
          <li>
            <S.NavLink
              href="#about"
              isActive={activeSection === 'about'}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </S.NavLink>
          </li>
          <li>
            <S.NavLink
              href="#projects"
              isActive={activeSection === 'projects'}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Projects
            </S.NavLink>
          </li>
          <li>
            <S.NavLink
              href="#skills"
              isActive={activeSection === 'skills'}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Skills
            </S.NavLink>
          </li>
          <li>
            <S.NavLink
              href="#contact"
              isActive={activeSection === 'contact'}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </S.NavLink>
          </li>
        </ul>
      </S.Nav>
    </>
  );
};

export default Header;
