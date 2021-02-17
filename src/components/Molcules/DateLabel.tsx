type Props = {
  children?: Date | undefined;
  className?: string;
};

const dateLabel = ({ children, className }: Props): JSX.Element => {
  return (
    <span className={`text-gray-400 leading-none text-sm py-1 ${className}`}>
      {children?.toLocaleDateString()}
    </span>
  );
};

export default dateLabel;
