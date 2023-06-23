import { Node } from "unist";
import { NormalizedOptions } from "./options";
import { HtmlElementNode } from "./types";
/**
 * Inserts the table of contents at the specified position, relative to the given nodes.
 *
 * @param toc - The table of contents node to insert
 * @param target - The node to insert `toc` in/before/after
 * @param parent - The parent node of `target`. This is used for inserting `toc` before/after `target`
 * @param options - The `position` option determines where `toc` is inserted
 */
export declare function insertTOC(toc: Node, target: HtmlElementNode, parent: HtmlElementNode, { position }: NormalizedOptions): void;
