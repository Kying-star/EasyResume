import { useEffect } from "react";
import { parseTree } from "./utils";
import "./index.less";
import { H } from "../../components/Template/components/components/H";
import { Table } from "../../components/Template/components/components/Table";
import { Common } from "../../components/Template/components";
type Props = {
  code: string;
};
export const Render: React.FC<Props> = (props: Props) => {
  const { code } = props;
  const markdownSource = `| 政治 | 英语（二） | 数学（二） | 数据数据工程基础 | 总分 |\n| :--: | :--: | :--: | :--: | :--: |\n| 100  | 100         | 150       | 150             | 500  | `;

  // resolve code -> obj
  useEffect(() => {
    try {
      // console.log(JSON.stringify(parseTree(baseData)));
    } catch (error) {
      console.log(error);
    }
  }, [code]);

  return (
    <>
      <div className="render">
        <Common />
      </div>
    </>
  );
};
