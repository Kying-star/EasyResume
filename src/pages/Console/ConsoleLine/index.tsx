import "./index.less";
type Props = {
  configName: string;
  children: React.ReactNode;
};
export const ConsoleLine: React.FC<Props> = (props: Props) => {
  const { configName, children } = props;

  return (
    <>
      <div className="console-main-line">
        <a className="console-main-a">{configName}</a>
        {children}
      </div>
    </>
  );
};
