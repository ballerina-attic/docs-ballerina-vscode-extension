"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMainNode = void 0;
const type_guards_1 = require("./type-guards");
/**
 * Returns the `<main>` node, or the `<body>` node if there is no `<main>`.
 * The second node returned is the parent of the first node.
 */
function findMainNode(root) {
    let [body, bodyParent] = findTagName(root, "body");
    let [main, mainParent] = findTagName(body || root, "main");
    if (main) {
        return [main, mainParent || body || root];
    }
    else {
        return [
            body || root,
            bodyParent || root
        ];
    }
}
exports.findMainNode = findMainNode;
/**
 * Recursively crawls the HAST tree and finds the first element with the specified tag name.
 */
function findTagName(node, tagName) {
    if (type_guards_1.isHtmlElementNode(node) && node.tagName === tagName) {
        return [node, undefined];
    }
    if (node.children) {
        let parent = node;
        for (let child of parent.children) {
            let [found] = findTagName(child, tagName);
            if (found) {
                return [found, parent];
            }
        }
    }
    return [undefined, undefined];
}
//# sourceMappingURL=find-main-node.js.map