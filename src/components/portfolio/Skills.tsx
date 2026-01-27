'use client';

/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const SkillsSection = styled.section`
  padding: 5rem 1.5rem;
  background: white;

  @media (max-width: 768px) {
    padding: 3.5rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const SectionSubtitle = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.125rem);
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
`;

const SkillCard = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem 1rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.2);
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem;
  }
`;

const SkillIcon = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  ${SkillCard}:hover & {
    animation: ${float} 2s ease-in-out infinite;
  }

  svg {
    width: 64px;
    height: 64px;

    @media (max-width: 768px) {
      width: 52px;
      height: 52px;
    }

    @media (max-width: 480px) {
      width: 48px;
      height: 48px;
    }
  }
`;

const SkillName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Spring Boot',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#6DB33F"/>
          <path d="M44 20c-2.667 4-6 8.667-10 14-4-5.333-7.333-10-10-14h20z" fill="#fff"/>
          <circle cx="32" cy="32" r="6" fill="#fff"/>
        </svg>
      )
    },
    {
      name: 'Java',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="#f89820"/>
          <text x="32" y="40" fontSize="24" fill="#fff" textAnchor="middle" fontWeight="bold">Java</text>
        </svg>
      )
    },
    {
      name: 'React',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#61DAFB"/>
          <circle cx="32" cy="32" r="6" fill="#282C34"/>
          <ellipse cx="32" cy="32" rx="20" ry="8" stroke="#282C34" strokeWidth="2" fill="none"/>
          <ellipse cx="32" cy="32" rx="8" ry="20" stroke="#282C34" strokeWidth="2" fill="none"/>
          <ellipse cx="32" cy="32" rx="17" ry="14" stroke="#282C34" strokeWidth="2" fill="none" transform="rotate(60 32 32)"/>
        </svg>
      )
    },
    {
      name: 'Next.js',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="#000"/>
          <text x="32" y="38" fontSize="14" fill="#fff" textAnchor="middle" fontWeight="bold">NEXT.js</text>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="#F7DF1E"/>
          <text x="32" y="42" fontSize="28" fill="#000" textAnchor="middle" fontWeight="bold">JS</text>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="#3178C6"/>
          <text x="32" y="42" fontSize="28" fill="#fff" textAnchor="middle" fontWeight="bold">TS</text>
        </svg>
      )
    },
    {
      name: 'MongoDB',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#4DB33D"/>
          <path d="M32 12l-4 8v20l4 8 4-8V20l-4-8z" fill="#fff"/>
          <ellipse cx="32" cy="20" rx="6" ry="3" fill="#fff"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" fill="#68A063"/>
          <path d="M32 16l-12 8v16l12 8 12-8V24l-12-8z" fill="#fff"/>
        </svg>
      )
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <SectionSubtitle>Technologies I work with</SectionSubtitle>
        
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <SkillIcon>
                {skill.icon}
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
