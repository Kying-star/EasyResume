import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./index.less";
type Props = {
  source?: string[];
};

export const P: React.FC<Props> = ({ source }) => {
  return (
    <div className="p-space">
      {source?.map((e, index) => (
        <ReactMarkdown key={`${e}${index}`} rehypePlugins={[rehypeRaw]}>
          {e}
        </ReactMarkdown>
      ))}
    </div>
  );
};
