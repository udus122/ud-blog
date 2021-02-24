import { extractToc } from "@/libs/markdown";

type Props = {
  markdown: string;
};

const Toc = ({ markdown }: Props): JSX.Element => {
  const toc = extractToc(markdown);

  return (
    <ul>
      {toc.map((item) => (
        <li key={item.id} className={`ml-${(item.depth - 2) * 6}`}>
          <a href={`#${encodeURIComponent(item.id)}`}>{item.value}</a>
        </li>
      ))}
    </ul>
  );
};

export default Toc;
