import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  source: string;
};

export const H: React.FC<Props> = ({ source }) => {
  return <ReactMarkdown>{source}</ReactMarkdown>;
};
