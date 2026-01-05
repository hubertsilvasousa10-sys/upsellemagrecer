
// Add React import to fix the "Cannot find namespace 'React'" error for React.ReactNode
import React from 'react';

export interface ProductItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Benefit {
  title: string;
  description: string;
}