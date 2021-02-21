/* eslint-disable import/no-unresolved */
import { Node } from "unist";

/**
 * Find
 *
 * @param {Node} tree - Root node
 * @param {string|object|function} [condition] - Condition to match node.
 */
declare function find(
  tree: Node,
  condition: string | { [key]: boolean } | function
): undefined;

export default find;
