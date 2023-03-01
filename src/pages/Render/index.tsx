import { SetStateAction, useEffect, useRef, useState } from "react";

import "./index.less";
import { Common } from "../../components/Template/Common";
import { Config, SectionType } from "../../types";
import { parseTree, configResolver, contentResolver } from "./utils";
import { useReactToPrint } from "react-to-print";
import React from "react";
import { commonFontFamily } from "../../styles";
import { FloatButton } from "antd";
import {
  MenuOutlined,
  PrinterOutlined,
  CodepenOutlined,
} from "@ant-design/icons";
type Props = {
  code: string;
  studioShow: boolean;
  setStudioShow: (showState: boolean) => void;
};

export const Render: React.FC<Props> = (props: Props) => {
  const { code, setStudioShow, studioShow } = props;
  const [config, setConfig] = useState<Config>({
    name: "",
    github: "",
    profiles: [],
    contacts: [],
  });
  const [sections, setSections] = useState<SectionType[]>([]);
  const printableRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => printableRef.current,
  });
  // resolve code -> obj
  useEffect(() => {
    try {
      let treeData = parseTree(code);
      setConfig(configResolver(treeData.children[0]));
      setSections(contentResolver(treeData.children[1]) as SectionType[]);
      console.log(config);
    } catch (error) {
      console.log(error);
    }
  }, [code]);

  const PrintableContent = React.forwardRef<
    HTMLDivElement,
    { children: React.ReactNode }
  >((props, ref) => {
    return <div ref={ref}>{props.children}</div>;
  });

  return (
    <>
      <div
        className="render"
        style={{
          fontFamily: commonFontFamily,
        }}
      >
        <PrintableContent ref={printableRef}>
          <Common config={config} sections={sections} />
        </PrintableContent>
      </div>
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 10 }}
        icon={<MenuOutlined />}
      >
        <FloatButton icon={<PrinterOutlined />} onClick={handlePrint} />
        <FloatButton
          icon={<CodepenOutlined />}
          onClick={() => setStudioShow(!studioShow)}
        />
      </FloatButton.Group>
    </>
  );
};
