import "./index.less";
import MonacoEditor from "react-monaco-editor";
import { useEffect, useState } from "react";
import { editor } from "monaco-editor";
type Props = {
  setCode: (code: string) => void;
  code: string;
};
export const Studio: React.FC<Props> = (props: Props) => {
  const { code, setCode } = props;
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(782);
  const options: editor.IStandaloneEditorConstructionOptions = {
    selectOnLineNumbers: true,
    minimap: {
      enabled: false,
    },
    wordWrap: "on",
  };
  useEffect(() => {
    setHeight(document.body.clientHeight);
  }, []);
  return (
    <div className="studio">
      <MonacoEditor
        width={width}
        height={height}
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={(code) => {
          setCode(code);
          // console.log(code);
          localStorage.setItem("code", code);
        }}
      />
    </div>
  );
};
