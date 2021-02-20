import Link from "next/link";

import CategoryLabel from "@/components/Molcules/CategoryLabel";
import DateLabel from "@/components/Molcules/DateLabel";

type Props = {
  title: string;
  date: Date | undefined;
  articleUrl: string;
  imageUrl?: string | undefined;
  imageTitle?: string | undefined;
};

const ArticleCard = ({ title, date, articleUrl }: Props): JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-self-center max-w-sm w-full">
      <CategoryLabel>{"CATEGORY"}</CategoryLabel>
      <Link href={articleUrl}>
        <a className="self-stretch">
          <h2 className="text-xl font-bold text-gray-900 mt-4 mb-4">{title}</h2>
          <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <span className="text-steel-500 inline-flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </span>
            <DateLabel className="inline-flex items-center ml-auto">
              {date}
            </DateLabel>
          </div>
        </a>
      </Link>
      <a className="inline-flex" href="#">
        <span className="inline-block py-1 px-2 rounded bg-blue-50 text-steel-500 text-xs font-medium tracking-widest">
          {"TAGS"}
        </span>
        <span className="flex-grow flex pl-4">
          <span className="title-font font-medium text-gray-900"></span>
        </span>
      </a>
    </div>
  );
};

export default ArticleCard;
