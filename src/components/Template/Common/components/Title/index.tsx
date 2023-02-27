type Props = {
  title: string;
};
export const Title: React.FC<Props> = ({ title }) => {
  return (
    <>
      <h3>{title}</h3>
    </>
  );
};
