import { useState } from "react";
import { baseData } from "../../data/index";
import { Render } from "../Render";
import { Studio } from "../Studio";
import "./index.less";
export const Main = () => {
  const [code, setCode] = useState<string>(baseData);
  const [isShowStudio, setIsShowStudio] = useState(false);

  return (
    <>
      <div className={"main-container"}>
        {isShowStudio ? <Studio code={code} setCode={setCode}></Studio> : <></>}
        <Render
          code={code}
          studioShow={isShowStudio}
          setStudioShow={setIsShowStudio}
        ></Render>
      </div>
    </>
  );
};
