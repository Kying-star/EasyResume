import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./index.less";
type Props = {
  source?: string[];
  fontSize?: number;
};

export const P: React.FC<Props> = ({ source, fontSize }) => {
  return (
    <div
      className="p-space"
      style={{
        fontSize: fontSize,
      }}
    >
      {source?.map((e, index) => (
        <ReactMarkdown key={`${e}${index}`} rehypePlugins={[rehypeRaw]}>
          {e}
        </ReactMarkdown>
      ))}
    </div>
  );
};
