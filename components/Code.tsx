"use client";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/themes/prism-tomorrow.min.css";
import { useEffect } from "react";

interface CodeProps {
  language?: string;
  code: string;
}

export const Code = ({ language, code }: CodeProps) => {
  if (language === "tsx") {
    require(`prismjs/components/prism-jsx`);
    require(`prismjs/components/prism-tsx`);
  } else {
    require(`prismjs/components/prism-${language}`);
  }
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="w-[90vw] max-w-3xl">
      <pre className="line-numbers">
        <code className={`lang-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
