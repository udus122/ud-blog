/* eslint-disable import/no-unresolved */
import { Node } from "unist";

declare function remove(tree: Node, test?: { [key]: unknown }): Node;

export default remove;
