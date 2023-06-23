import { Node } from "unist";
import { NormalizedOptions } from "./options";
import { HtmlElementNode } from "./types";
/**
 * A function that allows callers to customize the table of contents
 */
export declare type CustomizationHook = (node: Node, ...args: unknown[]) => Node | boolean | undefined;
/**
 * Allows the user to customize the table of contents before it gets added to the page.
 */
export declare function customizationHooks(toc: HtmlElementNode, options: NormalizedOptions): Node | undefined;
