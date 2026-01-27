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

const AboutSection = styled.section`
  padding: 5rem 1.5rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);

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
  margin-bottom: 1.5rem;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const AboutIntro = styled.p`
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Highlight = styled.span`
  color: var(--primary-color);
  font-weight: 600;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ExpertiseCard = styled.div`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
    color: var(--text-primary);
    margin: 1rem 0 0.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: var(--text-secondary);
    margin: 0;
  }
`;

const ExpertiseIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: transform 0.3s ease;

  ${ExpertiseCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutIntro>
          I'm a passionate full-stack developer specializing in building robust web applications using{' '}
          <Highlight>Spring Boot</Highlight>, <Highlight>React</Highlight>, and{' '}
          <Highlight>Next.js</Highlight>.
        </AboutIntro>
        
        <ExpertiseGrid>
          <ExpertiseCard>
            <ExpertiseIcon>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#77B55A"/>
                <path d="M24 12v24M16 20l8-8 8 8M16 28l8 8 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ExpertiseIcon>
            <h3>Backend Expert</h3>
            <p>Spring Boot & Java</p>
          </ExpertiseCard>
          
          <ExpertiseCard>
            <ExpertiseIcon>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#61DAFB"/>
                <path d="M24 18a6 6 0 100 12 6 6 0 000-12z" fill="#282C34"/>
                <ellipse cx="24" cy="24" rx="12" ry="4" stroke="#282C34" strokeWidth="2" fill="none"/>
                <ellipse cx="24" cy="24" rx="4" ry="12" stroke="#282C34" strokeWidth="2" fill="none"/>
              </svg>
            </ExpertiseIcon>
            <h3>Frontend Specialist</h3>
            <p>React & Next.js</p>
          </ExpertiseCard>
        </ExpertiseGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
