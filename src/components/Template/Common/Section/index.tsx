import { SectionType } from "../../../../types";
import { H } from "../components/H";
import { P } from "../components/P";
import { Table } from "../components/Table";
import { Title } from "../components/Title";
import "./index.less";
type Props = {
  sections: SectionType[];
};
export const Section: React.FC<Props> = ({ sections }) => {
  return (
    <div className="section">
      {sections.map((section: SectionType) => {
        return (
          <div className="item" key={section.title}>
            <Title title={section.title} />
            <div className="si-p">
              {section.childList?.map((item) => {
                if (item.name === "p") {
                  return <P source={item.value} />;
                }
                if (item.name === "h") {
                  return <H source={item.value} />;
                }
              })}
              {/* {section.pList?.map((item) => {
                return <P source={item} />;
              })} */}
              <Table tableCode={section.tableList} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
