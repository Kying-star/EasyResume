import { useState } from "react";
import { baseData } from "../../data/index";
import { Render } from "../Render";
import { Studio } from "../Studio";
import "./index.less";
export const Main = () => {
  const [code, setCode] = useState<string>(baseData);
  return (
    <>
      <div className={"main-container"}>
        <Studio code={code} setCode={setCode}></Studio>
        <Render code={code}></Render>
      </div>
    </>
  );
};
