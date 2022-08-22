import React from 'react';

interface ParagraphProps {
  content: string;
}

export const Paragraph = ({ content }: ParagraphProps) => <p>{content}</p>;
