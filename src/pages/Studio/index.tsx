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
  const [width, setWidth] = useState<number>(0);
  const options: editor.IStandaloneEditorConstructionOptions = {
    selectOnLineNumbers: true,
    minimap: {
      enabled: false,
    },
  };
  useEffect(() => {
    // console.log(document.body.clientWidth, document.body.clientHeight);
    setHeight(document.body.clientHeight);
    setWidth(document.body.clientWidth / 2);
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
          console.log(code);
        }}
      />
    </div>
  );
};
