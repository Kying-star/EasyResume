import React from "react";
import ReactMarkdown from "react-markdown";
import "./index.less";
import rehypeRaw from "rehype-raw";
type Props = {
  source?: string[];
};

export const H: React.FC<Props> = ({ source }) => {
  return (
    <div className="h-space">
      {source?.map((e) => (
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{"#### " + e}</ReactMarkdown>
      ))}
    </div>
  );
};
