import { useEffect, useState } from "react";
import { configResolver, contentResolver, parseTree } from "./utils";
import "./index.less";
import { H } from "../../components/Template/components/components/H";
import { Table } from "../../components/Template/components/components/Table";
import { Common } from "../../components/Template/components";
import { baseData } from "../../data";
import { Config, SectionType } from "../../types";
type Props = {
  code: string;
};

export const Render: React.FC<Props> = (props: Props) => {
  const { code } = props;
  const [config, setConfig] = useState<Config>({
    name: "string",
    github: "string",
    profiles: ["string", "[]"],
    contacts: ["string", "[]"],
  });

  const [sections, setSections] = useState<SectionType[]>([]);
  // resolve code -> obj
  useEffect(() => {
    try {
      let treeData = parseTree(baseData);
      setConfig(configResolver(treeData.children[0]));
      setSections(contentResolver(treeData.children[1]) as SectionType[]);
    } catch (error) {
      console.log(error);
    }
  }, [code]);

  return (
    <>
      <div className="render">
        <Common config={config} sections={sections} />
      </div>
    </>
  );
};
