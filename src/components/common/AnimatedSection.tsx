'use client';

/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  className?: string;
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const animations = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
};

const AnimatedContainer = styled.div<{
  isVisible: boolean;
  animation: keyof typeof animations;
  delay: number;
}>`
  opacity: 0;
  ${({ isVisible, animation, delay }) =>
    isVisible &&
    `
    animation: ${animations[animation]} 0.8s ease-out ${delay}s forwards;
  `}
`;

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.1 });

  return (
    <AnimatedContainer
      ref={ref}
      isVisible={isVisible}
      animation={animation}
      delay={delay}
      className={className}
    >
      {children}
    </AnimatedContainer>
  );
};

export default AnimatedSection;
