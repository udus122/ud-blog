import remark from "remark";
import strip from "strip-markdown";
import find from "unist-util-find";
import remove from "unist-util-remove";
import visit from "unist-util-visit";
import toString from "mdast-util-to-string";
import GithubSlugger from "github-slugger";
import type { TocInfo } from "@/types";

export const markdownToPlain = async (markdown: string): Promise<string> => {
  const result = await remark().use(strip).processSync(markdown);
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

  const bodyNode = remark()
    .use(() => {
      return (tree) => {
        return remove(tree, { type: "heading", depth: 1 });
      };
    })
    .processSync(markdown);
  const body = await bodyNode.toString();

  return { title, body };
};

// マークダウン文字列から目次情報を抽出する
const githubSlugger = new GithubSlugger();
export const extractToc = (markdown: string): TocInfo => {
  const ast = remark().parse(markdown);
  const toc: TocInfo = [];

  githubSlugger.reset();

  visit(ast, "heading", (node) => {
    const value = toString(node);
    const id = githubSlugger.slug(value);
    toc.push({
      value,
      id,
      depth: node.depth as number,
    });
  });
  return toc;
};
