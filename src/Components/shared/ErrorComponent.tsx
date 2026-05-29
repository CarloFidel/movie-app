interface Props {
  error: string;
}

const ErrorComponent = ({ error }: Props) => {
  return (
      <div className=" px-10 py-20 border border-gray-400 rounded-3xl bg-primary-100 shadow-2xl">{error}</div>
  );
};

export default ErrorComponent;
