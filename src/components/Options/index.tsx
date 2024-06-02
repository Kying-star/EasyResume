import { Button, Modal } from "antd";
import "./index.less";
import {
  CodepenOutlined,
  ControlOutlined,
  PrinterOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { themeColor } from "../../styles";
import { CommonSectionThemeColor, CommonThemeColor } from "../../store/store";
import { themeKey, themes } from "../../styles/theme";

interface Props {
  handlePrint: () => void;
  setStudioShow: (showState: boolean) => void;
  studioShow: boolean;
  setConsoleShow: (state: boolean) => void;
  consoleShow: boolean;
}

const Options: React.FC<Props> = ({
  handlePrint,
  setStudioShow,
  studioShow,
  setConsoleShow,
  consoleShow,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [themeColor, setThemeColor] = useRecoilState(CommonThemeColor);

  const [themeSectionColor, setThemeSectionColor] = useRecoilState(
    CommonSectionThemeColor
  );

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const setTheme = (theme: themeKey) => {
    setThemeColor(themes[theme].headerColor);
    setThemeSectionColor(themes[theme].selectionColor);
  };
  return (
    <div className="options">
      <Button icon={<PrinterOutlined />} onClick={handlePrint} />
      <Button
        icon={<CodepenOutlined />}
        onClick={() => setStudioShow(!studioShow)}
      />
      <Button
        icon={<ControlOutlined />}
        onClick={() => setConsoleShow(!consoleShow)}
      />
      <Button icon={<ShopOutlined />} onClick={() => showModal()} />
      <Modal
        title="皮肤市场"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{
          gap: 10,
        }}
      >
        {Object.keys(themes).map((item) => {
          const key = item as themeKey;
          return (
            <Button
              style={{
                background: `linear-gradient(${themes[key].headerColor} , ${themes[key].selectionColor})`,
                color: "#ffffff",
                margin: "5px",
              }}
              onClick={() => setTheme(key)}
            >
              {key}
            </Button>
          );
        })}
      </Modal>
    </div>
  );
};

export default Options;
