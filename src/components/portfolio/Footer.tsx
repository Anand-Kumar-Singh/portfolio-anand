'use client';

/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './styles/Footer.styles';

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.Container>
        <p>&copy; 2024 Anand Singh. All rights reserved.</p>
      </S.Container>
    </S.FooterContainer>
  );
};

export default Footer;
