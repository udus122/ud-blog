import remark from "remark";
import strip from "strip-markdown";
import find from "unist-util-find";
import remove from "unist-util-remove";

export const markdownToPlain = async (markdown: string): Promise<string> => {
  const result = await remark().use(strip).process(markdown);
  return result.toString();
};

export const separateTitleBody = async (
  markdown: string
): Promise<{ title: string; body: string }> => {
  const titleNode = await remark()
    .use(() => {
      return (tree) => {
        return find(tree, { type: "heading", depth: 1 });
      };
    })
    .process(markdown);
  const title = titleNode.toString().replace("# ", "");

  const bodyNode = await remark()
    .use(() => {
      return (tree) => {
        return remove(tree, { type: "heading", depth: 1 });
      };
    })
    .process(markdown);
  const body = await bodyNode.toString();

  return { title, body };
};
