import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

export const floatImage = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 16px 48px rgba(102, 126, 234, 0.4), 0 0 0 16px rgba(102, 126, 234, 0.1);
  }
  50% {
    box-shadow: 0 16px 48px rgba(102, 126, 234, 0.6), 0 0 0 20px rgba(102, 126, 234, 0.15);
  }
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  padding: 6rem 1.5rem 3rem;
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 5rem 1rem 2.5rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 4.5rem 0.875rem 2rem;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const HeroContent = styled.div`
  color: white;
  animation: ${fadeInLeft} 1s ease-out;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${fadeInUp} 1s ease-out;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 0.75rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 968px) {
    font-size: 2.25rem;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    font-size: 1.875rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const HeroSubtitle = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
`;

export const HeroTech = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.875rem;
  line-height: 1.3;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;

  @media (max-width: 968px) {
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.625rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  max-width: 500px;
  line-height: 1.5;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;

  @media (max-width: 968px) {
    margin: 0 auto 1.25rem;
    max-width: 90%;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.8s ease-out 0.8s both;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    gap: 0.625rem;

    button {
      width: 100% !important;
      justify-content: center;
      padding: 0.75rem 1.25rem !important;
      font-size: 0.875rem !important;
    }
  }
`;

export const HeroImage = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  animation: ${fadeInRight} 1s ease-out;

  @media (max-width: 968px) {
    height: 380px;
    animation: ${scaleIn} 1s ease-out;
  }

  @media (max-width: 768px) {
    height: 320px;
  }

  @media (max-width: 480px) {
    height: 280px;
  }
`;

export const IllustrationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const TechIcon = styled.div<{ position: number }>`
  position: absolute;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.position * 0.5}s;
  z-index: 1;

  ${props => {
    switch (props.position) {
      case 1:
        return `top: 5%; left: 5%;`;
      case 2:
        return `top: 10%; right: 5%;`;
      case 3:
        return `bottom: 15%; right: 5%;`;
      case 4:
        return `bottom: 10%; left: 5%;`;
      default:
        return '';
    }
  }}

  @media (max-width: 480px) {
    ${props => {
      switch (props.position) {
        case 1:
          return `top: 3%; left: 3%;`;
        case 2:
          return `top: 6%; right: 3%;`;
        case 3:
          return `bottom: 12%; right: 3%;`;
        case 4:
          return `bottom: 8%; left: 3%;`;
        default:
          return '';
      }
    }}
  }
`;

export const TechLogo = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
  background: white;
  border-radius: 10px;
  padding: 7px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    padding: 4px;
    border-radius: 6px;
  }
`;

export const DeveloperImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 260px;
  }

  @media (max-width: 480px) {
    max-width: 220px;
  }
`;

export const DeveloperImg = styled.img`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center top;
  border-radius: 50%;
  border: 6px solid rgba(102, 126, 234, 0.3);
  box-shadow: 0 16px 48px rgba(102, 126, 234, 0.4),
              0 0 0 16px rgba(102, 126, 234, 0.1);
  animation: ${floatImage} 6s ease-in-out infinite, ${pulse} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    max-width: 260px;
    border: 4px solid rgba(102, 126, 234, 0.3);
    box-shadow: 0 10px 32px rgba(102, 126, 234, 0.4),
                0 0 0 10px rgba(102, 126, 234, 0.1);
  }

  @media (max-width: 480px) {
    max-width: 220px;
    border: 3px solid rgba(102, 126, 234, 0.3);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4),
                0 0 0 8px rgba(102, 126, 234, 0.1);
  }
`;
