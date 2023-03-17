import { Drawer } from "antd";
import { useEffect, useState } from "react";
import { baseData } from "../../data/index";
import { Console } from "../Console";
import { Render } from "../Render";
import { Studio } from "../Studio";
import "./index.less";
export const Main = () => {
  // state
  const [code, setCode] = useState<string>("");
  const [isShowStudio, setIsShowStudio] = useState(false);
  const [isShowConsole, setIsShowConsole] = useState(false);

  //method
  const onClose = () => {
    setIsShowStudio(false);
    setIsShowConsole(false);
  };

  // effect
  useEffect(() => {
    if (localStorage.getItem("code") === null) {
      setCode(baseData);
    } else {
      setCode(localStorage.getItem("code") as string);
    }
  }, []);

  return (
    <>
      <div className={"main-container"}>
        <Drawer
          size="large"
          title="Studio"
          placement="left"
          bodyStyle={{
            padding: "0",
          }}
          onClose={onClose}
          open={isShowStudio}
        >
          <Studio code={code} setCode={setCode}></Studio>
        </Drawer>
        <Drawer
          size="large"
          title="Console"
          placement="left"
          bodyStyle={{
            padding: "0",
          }}
          onClose={onClose}
          open={isShowConsole}
        >
          <Console></Console>
        </Drawer>
        <Render
          code={code}
          studioShow={isShowStudio}
          setStudioShow={setIsShowStudio}
          consoleShow={isShowConsole}
          setConsoleShow={setIsShowConsole}
        ></Render>
      </div>
    </>
  );
};
