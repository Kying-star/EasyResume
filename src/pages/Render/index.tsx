import { useEffect } from "react";
import { baseData } from "../../data/copy";
import { parseTree } from "./utils";
type Props = {
  code: string;
};
export const Render: React.FC<Props> = (props: Props) => {
  const { code } = props;
  // resolve code -> obj
  useEffect(() => {
    try {
      // console.log(JSON.stringify(parseTree(baseData)));
    } catch (error) {
      console.log(error);
    }
  }, [code]);

  return <></>;
};
