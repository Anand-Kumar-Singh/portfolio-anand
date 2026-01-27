'use client';

/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Button from '../common/Button';

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

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectPreview = styled.div<{ gradient: string }>`
  background: ${props => props.gradient};
  padding: 2rem;
  min-height: 250px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ProjectTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: auto;
  align-self: flex-start;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }
`;

const ViewMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;
`;

interface Project {
  id: number;
  title: string;
  description: string;
  tag: string;
  gradient: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with Spring Boot backend and React frontend.',
      tag: 'E-commerce Platform',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'Real-time task management tool with drag-and-drop features using React and Node.js.',
      tag: 'Task Manager App',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio built with Next.js, TypeScript, and Emotion CSS.',
      tag: 'Portfolio Website',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  const ArrowIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 3l-1.5 1.5L13.75 10l-5.25 5.5L10 17l7-7z"/>
    </svg>
  );

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <SectionSubtitle>Recent work and personal projects</SectionSubtitle>
        
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectPreview gradient={project.gradient}>
                <ProjectTag>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="4" y="4" width="6" height="6" rx="1"/>
                    <rect x="4" y="14" width="6" height="6" rx="1"/>
                    <rect x="14" y="4" width="6" height="6" rx="1"/>
                    <rect x="14" y="14" width="6" height="6" rx="1"/>
                  </svg>
                  <span>{project.tag}</span>
                </ProjectTag>
              </ProjectPreview>
              <ProjectInfo>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        
        <ViewMore>
          <Button variant="outline" icon={ArrowIcon} iconPosition="right">
            View More Projects
          </Button>
        </ViewMore>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
