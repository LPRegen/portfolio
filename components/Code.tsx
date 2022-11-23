import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.min.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

interface CodeProps {
  language: string;
  code: string;
}

export const Code = ({ language, code }: CodeProps) => {
  require(`prismjs/components/prism-${language}`);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="bg-red-200">
      {/* TODO Display highlighted lines */}
      <div>Just asd another code block</div>
      <pre className="line-numbers">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <p>Language: {language}</p>
    </div>
  );
};
