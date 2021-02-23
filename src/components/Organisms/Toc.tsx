import type { TocInfo } from "@/types";

type Props = {
  toc: TocInfo;
  inBody?: boolean;
};

const Toc = ({ toc, inBody = false }: Props): JSX.Element => {
  const TocList = (
    <ul>
      {toc.map((item) => (
        <li key={item.id} className={`ml-${(item.depth - 2) * 6}`}>
          <a href={`#${item.id}`}>{item.value}</a>
        </li>
      ))}
    </ul>
  );

  if (inBody) {
    return (
      <details>
        <summary>目次</summary>
        {TocList}
      </details>
    );
  }
  return TocList;
};

export default Toc;
