import { Node } from "unist";
import { HtmlElementNode } from "./types";
/**
 * Returns the `<main>` node, or the `<body>` node if there is no `<main>`.
 * The second node returned is the parent of the first node.
 */
export declare function findMainNode(root: Node): [HtmlElementNode, HtmlElementNode];
