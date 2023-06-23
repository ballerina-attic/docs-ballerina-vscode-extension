"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeadings = void 0;
const type_guards_1 = require("./type-guards");
/**
 * Finds all HTML heading nodes (`<h1>` through `<h6>`)
 */
function findHeadings(node, options) {
    let headingNodes = [];
    findHeadingsRecursive(node, headingNodes, options);
    return headingNodes;
}
exports.findHeadings = findHeadings;
/**
 * Recursively crawls the HAST tree and adds all HTML heading nodes to the given array.
 */
function findHeadingsRecursive(node, headingNodes, options) {
    if (type_guards_1.isHeadingNode(node, options)) {
        headingNodes.push(node);
    }
    if (node.children) {
        let parent = node;
        for (let child of parent.children) {
            findHeadingsRecursive(child, headingNodes, options);
        }
    }
}
//# sourceMappingURL=fiind-headings.js.map