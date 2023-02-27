import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  tableCode?: string[];
};
export const Table: React.FC<Props> = (props: Props) => {
  const { tableCode } = props;
  const resolveTableCode = (tableCode?: string[]) => {
    if (tableCode === undefined) {
      return "";
    }
    return tableCode.reduce((a, b) => a + "\n" + b, "");
  };
  return (
    <>
      <ReactMarkdown
        children={resolveTableCode(tableCode)}
        remarkPlugins={[remarkGfm]}
      />
    </>
  );
};
