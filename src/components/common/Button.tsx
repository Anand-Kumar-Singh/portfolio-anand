'use client';

/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
`;

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' | 'outline' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  border: 2px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
  font-family: inherit;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    animation: ${shimmer} 1.5s infinite;
    opacity: 1;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }

  /* Primary variant */
  ${({ variant }) => variant === 'primary' && `
    background: white;
    color: #1a202c;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.95);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      border-color: rgba(255, 255, 255, 0.4);
    }

    &:active:not(:disabled) {
      transform: translateY(0) scale(0.98);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  `}

  /* Secondary variant */
  ${({ variant }) => variant === 'secondary' && `
    background: white;
    color: #1a202c;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.95);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      border-color: rgba(255, 255, 255, 0.4);
    }

    &:active:not(:disabled) {
      transform: translateY(0) scale(0.98);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  `}

  /* Outline variant */
  ${({ variant }) => variant === 'outline' && `
    background-color: transparent;
    color: var(--text-primary);
    border: 2px solid var(--border-color);

    &:hover:not(:disabled) {
      border-color: var(--primary-color);
      color: var(--primary-color);
      background: rgba(102, 126, 234, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }

    &:active:not(:disabled) {
      transform: translateY(0) scale(0.98);
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    flex-shrink: 0;
    width: 18px;
    height: 18px;
  }

  &:hover:not(:disabled) svg {
    transform: translateX(4px);
    animation: ${bounce} 0.6s ease-in-out;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  className,
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
    >
      {icon && iconPosition === 'left' && <IconWrapper>{icon}</IconWrapper>}
      {children}
      {icon && iconPosition === 'right' && <IconWrapper>{icon}</IconWrapper>}
    </StyledButton>
  );
};

export default Button;
