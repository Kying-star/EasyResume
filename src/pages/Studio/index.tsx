import "./index.less";
import MonacoEditor from "react-monaco-editor";
import { useEffect, useState } from "react";
import { editor } from "monaco-editor";
import { Button, message } from "antd";
type Props = {
  setCode: (code: string) => void;
  code: string;
};
export const Studio: React.FC<Props> = (props: Props) => {
  const { code, setCode } = props;
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(1000);
  const [fileHandle, setFileHandle] = useState<FileSystemFileHandle | null>(
    null
  );
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

  const saveToFile = async (content: string) => {
    console.log(content);
    if (!content) {
      return;
    }
    const wrappedContent = `export const baseData = \`${content}\``;

    if (!fileHandle) {
      const options = {
        types: [
          {
            description: "TypeScript Files",
            accept: {
              "text/typescript": [".ts"],
            },
          },
        ],
        suggestedName: "index.ts",
      };
      try {
        // @ts-ignore
        const handle = await window.showSaveFilePicker(options);
        setFileHandle(handle);
      } catch (err) {
        console.error("用户取消了文件选择", err);
        return;
      }
    }

    try {
      const writable = await fileHandle?.createWritable();
      await writable?.write(wrappedContent);
      await writable?.close();
      message.success("文件保存成功");
      console.log("文件保存成功");
    } catch (err) {
      console.error("保存文件时出错", err);
    }
  };

  return (
    <div className="studio">
      <Button onClick={() => saveToFile(code)}>保存到文件</Button>
      <MonacoEditor
        width={width}
        height={height}
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={(code) => {
          setCode(code);
          localStorage.setItem("code", code);
        }}
      />
    </div>
  );
};
