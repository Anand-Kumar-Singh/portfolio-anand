import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(26, 32, 44, 0.98);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${slideDown} 0.6s ease-out;
`;

export const HeaderWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.875rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

export const Logo = styled.div`
  h2 {
    color: white;
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
    line-height: 1.2;
    z-index: 1001;
    position: relative;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 0.85rem;
    }
  }
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 75%;
    max-width: 320px;
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    padding: 5rem 2rem 2rem;
    box-shadow: ${props => props.isOpen ? '-5px 0 20px rgba(0, 0, 0, 0.5)' : 'none'};
    z-index: 1000;
    border-left: 2px solid rgba(102, 126, 234, 0.3);
  }

  ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    align-items: center;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      padding-top: 1rem;
    }
  }

  li {
    margin: 0;
    width: 100%;
  }
`;

export const NavLink = styled.a<{ isActive: boolean }>`
  color: ${props => props.isActive ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  font-size: 0.95rem;
  padding: 0.25rem 0;
  white-space: nowrap;
  display: block;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 0.75rem 1rem;
    width: 100%;
    border-radius: 8px;
    background: ${props => props.isActive ? 'rgba(102, 126, 234, 0.2)' : 'transparent'};
    
    &:hover {
      background: rgba(102, 126, 234, 0.15);
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.875rem;

  a {
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    padding: 0.25rem;

    &:hover {
      color: white;
      transform: translateY(-3px) scale(1.1);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 768px) {
    position: relative;
    z-index: 1001;
  }
`;

export const HamburgerButton = styled.button<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 28px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  cursor: pointer;
  padding: 6px 4px;
  z-index: 1001;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 100%;
    height: 3px;
    background: white;
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
    transform-origin: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

    &:nth-of-type(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translateY(9px)' : 'rotate(0)'};
    }

    &:nth-of-type(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
      transform: ${props => props.isOpen ? 'translateX(-20px)' : 'translateX(0)'};
    }

    &:nth-of-type(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translateY(-9px)' : 'rotate(0)'};
    }
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    animation: ${fadeIn} 0.3s ease;
  }
`;

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileControls = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
