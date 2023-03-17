import { resumeHeight, resumeWidth } from "../../../data/store";
import { Config, SectionType } from "../../../types";
import { Header } from "./Header";
import { useRecoilValue } from "recoil";
import "./index.less";
import { Section } from "./Section";

type Props = {
  config: Config;
  sections: SectionType[];
};
export const Common: React.FC<Props> = ({ config, sections }) => {
  const _resumeHeight = useRecoilValue(resumeHeight);
  const _resumeWidth = useRecoilValue(resumeWidth);
  return (
    <div
      className="content"
      style={{
        width: _resumeWidth,
        height: _resumeHeight,
      }}
    >
      <Header config={config}></Header>
      <Section sections={sections}></Section>
    </div>
  );
};
