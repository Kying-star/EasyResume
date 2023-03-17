import { InputNumber } from "antd";
import "./index.less";
import { useRecoilState } from "recoil";
import { textState } from "../../data/store";
export const Console = () => {
  const [text, setText] = useRecoilState(textState);
  return (
    <div className="console-main">
      fontSize
      <InputNumber
        min={1}
        max={30}
        defaultValue={text}
        onChange={(value) => {
          setText(value ?? 14);
        }}
      />
      fontSize
      <InputNumber min={1} max={10} defaultValue={3} />
    </div>
  );
};
