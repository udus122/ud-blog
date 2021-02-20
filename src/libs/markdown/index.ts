import remark from "remark";
import strip from "strip-markdown";

export const markdownToPlain = async (markdown: string): Promise<string> => {
  const result = await remark().use(strip).process(markdown);
  return result.toString();
};
