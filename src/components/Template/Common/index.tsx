import { Config, SectionType } from "../../../types";
import { Header } from "./Header";

import "./index.less";
import { Section } from "./Section";

type Props = {
  config: Config;
  sections: SectionType[];
};
export const Common: React.FC<Props> = ({ config, sections }) => {
  return (
    <div className="content">
      <Header config={config}></Header>
      <Section sections={sections}></Section>
    </div>
  );
};
