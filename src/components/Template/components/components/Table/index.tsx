import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  tableCode: string;
};
export const Table: React.FC<Props> = (props: Props) => {
  const { tableCode } = props;
  return (
    <>
      <ReactMarkdown children={tableCode} remarkPlugins={[remarkGfm]} />
    </>
  );
};
