'use client';

import React from 'react';
import { StyledRegistry } from './registry';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return <StyledRegistry>{children}</StyledRegistry>;
}
