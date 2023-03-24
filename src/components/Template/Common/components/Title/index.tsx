import { useRecoilValue } from "recoil";
import { TitleFontSize } from "../../../../../data/store";
type Props = {
  title: string;
};
export const Title: React.FC<Props> = ({ title }) => {
  const _titleFontSize = useRecoilValue(TitleFontSize);
  return (
    <>
      <h3
        style={{
          fontSize: `${_titleFontSize}px`,
        }}
      >
        {title}
      </h3>
    </>
  );
};
