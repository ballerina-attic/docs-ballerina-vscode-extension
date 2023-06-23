import { Processor, Transformer } from "unified";
import { Options } from "./options";
/**
 * This is a Rehype plugin that adds a table of contents (TOC) that links to all
 * the `<h1>` - `<h6>` headings no the page.
 */
export declare function toc(this: Processor, opts?: Options): Transformer;
