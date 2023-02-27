import { Config, SectionType } from "../../../types";
import { H } from "./components/H";
import { P } from "./components/P";
import { Title } from "./components/Title";
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
