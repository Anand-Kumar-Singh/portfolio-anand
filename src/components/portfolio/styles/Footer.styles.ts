import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  background-color: #171923;
  padding: 2rem 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 1rem 0;
    font-size: 0.9rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }

  p {
    margin: 0;
    line-height: 1.5;
  }
`;
