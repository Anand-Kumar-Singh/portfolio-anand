'use client';

/** @jsxImportSource @emotion/react */
import React from 'react';
import Button from '../common/Button';
import * as S from './styles/Hero.styles';

const Hero: React.FC = () => {
  const ArrowIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 3l-1.5 1.5L13.75 10l-5.25 5.5L10 17l7-7z"/>
    </svg>
  );

  const MailIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
    </svg>
  );

  return (
    <S.HeroSection id="home">
      <S.HeroContainer>
        <S.HeroContent>
          <S.HeroTitle>
            Hi, I'm Anand Singh,<br />
            <S.HeroSubtitle>Full Stack Developer</S.HeroSubtitle>
          </S.HeroTitle>
          <S.HeroTech>Spring Boot | React | Next.js</S.HeroTech>
          <S.HeroDescription>
            I build scalable full-stack applications with modern technologies.
          </S.HeroDescription>
          <S.HeroButtons>
            <Button
              variant="primary"
              icon={ArrowIcon}
              iconPosition="right"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              icon={MailIcon}
              iconPosition="left"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </S.HeroButtons>
        </S.HeroContent>
        <S.HeroImage>
          <S.IllustrationContainer>
            <S.TechIcon position={1}>
              <S.TechLogo src="/images/springboot.png" alt="Spring Boot" />
            </S.TechIcon>
            <S.TechIcon position={2}>
              <S.TechLogo src="/images/reactjs.png" alt="React" />
            </S.TechIcon>
            <S.TechIcon position={3}>
              <S.TechLogo src="/images/javascript.png" alt="JavaScript" />
            </S.TechIcon>
            <S.TechIcon position={4}>
              <S.TechLogo src="/images/java.png" alt="Java" />
            </S.TechIcon>
            <S.DeveloperImageWrapper>
              <S.DeveloperImg 
                src="/images/profile.png" 
                alt="Anand Singh - Full Stack Developer"
              />
            </S.DeveloperImageWrapper>
          </S.IllustrationContainer>
        </S.HeroImage>
      </S.HeroContainer>
    </S.HeroSection>
  );
};

export default Hero;
