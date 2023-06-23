import { Node } from "unist";
import { NormalizedOptions } from "./options";
import { HeadingNode } from "./types";
/**
 * Finds all HTML heading nodes (`<h1>` through `<h6>`)
 */
export declare function findHeadings(node: Node, options: NormalizedOptions): HeadingNode[];
