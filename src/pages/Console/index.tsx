import { Input, InputNumber, Radio, Switch } from "antd";
import "./index.less";
import { useRecoilState } from "recoil";
import {
  commonColumnCount,
  fontFamily,
  fontSize,
  resumeHeight,
  resumeWidth,
  ShowPic,
} from "../../data/store";
import { ConsoleLine } from "./ConsoleLine";
export const Console = () => {
  const [_fontSize, setFontSize] = useRecoilState(fontSize);
  const [_fontFamily, setFontFamily] = useRecoilState(fontFamily);
  const [_resumeHeight, setResumeHeight] = useRecoilState(resumeHeight);
  const [_resumeWidth, setResumeWidth] = useRecoilState(resumeWidth);
  const [_columnCount, setColumnCount] = useRecoilState(commonColumnCount);
  const [_showPic, setShowPic] = useRecoilState(ShowPic);
  return (
    <div className="console-main">
      <ConsoleLine configName={"fontSize"}>
        <InputNumber
          min={1}
          max={30}
          defaultValue={_fontSize}
          onChange={(value) => {
            setFontSize(value ?? 14);
          }}
        />
      </ConsoleLine>
      <ConsoleLine configName={"fontFamily"}>
        <Input
          style={{
            width: "350px",
          }}
          placeholder={_fontFamily}
          value={_fontFamily}
          onChange={(e) => setFontFamily(e.target.value ?? _fontFamily)}
        />
      </ConsoleLine>
      <ConsoleLine configName={"resumeHeight"}>
        <Input
          style={{
            width: "350px",
          }}
          placeholder={_resumeHeight}
          value={_resumeHeight}
          onChange={(e) => setResumeHeight(e.target.value ?? _resumeHeight)}
        />
      </ConsoleLine>
      <ConsoleLine configName={"resumeWidth"}>
        <Input
          style={{
            width: "350px",
          }}
          placeholder={_resumeWidth}
          value={_resumeWidth}
          onChange={(e) => setResumeWidth(e.target.value ?? _resumeWidth)}
        />
      </ConsoleLine>
      <ConsoleLine configName={"column-count"}>
        <Input
          style={{
            width: "350px",
          }}
          placeholder={`${_columnCount}`}
          value={_columnCount}
          onChange={(e) => setColumnCount(e.target.value ?? _columnCount)}
        />
      </ConsoleLine>
      <ConsoleLine configName={"show picture?"}>
        <Switch onChange={setShowPic} defaultChecked></Switch>
      </ConsoleLine>
    </div>
  );
};
