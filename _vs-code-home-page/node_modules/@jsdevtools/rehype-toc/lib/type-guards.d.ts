import { Node } from "unist";
import { NormalizedOptions } from "./options";
import { HeadingNode, HtmlElementNode } from "./types";
/**
 * Determines whether the given node is an HTML element.
 */
export declare function isHtmlElementNode(node: Node): node is HtmlElementNode;
/**
 * Determines whether the given node is an HTML heading node, according to the specified options
 */
export declare function isHeadingNode(node: Node, options: NormalizedOptions): node is HeadingNode;
