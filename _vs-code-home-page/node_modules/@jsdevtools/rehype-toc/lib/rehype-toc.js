"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toc = void 0;
const create_toc_1 = require("./create-toc");
const customization_hooks_1 = require("./customization-hooks");
const fiind_headings_1 = require("./fiind-headings");
const find_main_node_1 = require("./find-main-node");
const insert_toc_1 = require("./insert-toc");
const options_1 = require("./options");
/**
 * This is a Rehype plugin that adds a table of contents (TOC) that links to all
 * the `<h1>` - `<h6>` headings no the page.
 */
function toc(opts) {
    let options = new options_1.NormalizedOptions(opts);
    return function transformer(root) {
        // Find the <main> or <body> element
        let [mainNode, mainParent] = find_main_node_1.findMainNode(root);
        // Find all heading elements
        let headings = fiind_headings_1.findHeadings(mainNode, options);
        // Create the table of contents
        let tocNode = create_toc_1.createTOC(headings, options);
        // Allow the user to customize the table of contents before we add it to the page
        let node = customization_hooks_1.customizationHooks(tocNode, options);
        if (node) {
            // Add the table of contents to the <main> element
            insert_toc_1.insertTOC(node, mainNode, mainParent, options);
        }
        return root;
    };
}
exports.toc = toc;
//# sourceMappingURL=rehype-toc.js.map