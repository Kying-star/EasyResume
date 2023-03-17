import { SectionType } from "../../../../types";
import { H } from "../components/H";
import { P } from "../components/P";
import { Table } from "../components/Table";
import { Title } from "../components/Title";
import { useRecoilValue } from "recoil";
import "./index.less";
import { commonColumnCount } from "../../../../data/store";
type Props = {
  sections: SectionType[];
};
export const Section: React.FC<Props> = ({ sections }) => {
  const _columnCount = useRecoilValue(commonColumnCount);
  return (
    <div
      className="section"
      style={{
        columnCount: _columnCount,
      }}
    >
      {sections.map((section: SectionType, index) => {
        return (
          <div className="item" key={`${section.title}${index}`}>
            <Title title={section.title} />
            <div className="si-p">
              {section.childList?.map((item) => {
                if (item.name === "p") {
                  return <P key={`${item.value}`} source={item.value} />;
                }
                if (item.name === "h") {
                  return <H key={`${item.value}`} source={item.value} />;
                }
              })}
              <Table tableCode={section.tableList} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
