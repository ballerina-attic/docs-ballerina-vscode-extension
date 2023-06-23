import { NormalizedOptions } from "./options";
import { HeadingNode, HtmlElementNode } from "./types";
/**
 * Creates a `<nav>` and/or `<ol>` element containing the table of contents.
 */
export declare function createTOC(headings: HeadingNode[], options: NormalizedOptions): HtmlElementNode;
