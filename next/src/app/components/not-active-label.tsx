import React from 'react';

export interface StatusLabelProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: StatusLabelProps) {
  return <span>{children}</span>;
}
