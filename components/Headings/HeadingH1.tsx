import React from 'react';

interface HeadingProps {
  title: string;
}

export const HeadingH1 = ({ title }: HeadingProps) => <h1>{title}</h1>;
