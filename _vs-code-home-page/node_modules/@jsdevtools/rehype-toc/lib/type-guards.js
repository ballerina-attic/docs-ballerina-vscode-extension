"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHeadingNode = exports.isHtmlElementNode = void 0;
/**
 * Determines whether the given node is an HTML element.
 */
function isHtmlElementNode(node) {
    return typeof node === "object" &&
        node.type === "element" &&
        typeof node.tagName === "string" &&
        "properties" in node &&
        typeof node.properties === "object";
}
exports.isHtmlElementNode = isHtmlElementNode;
/**
 * Determines whether the given node is an HTML heading node, according to the specified options
 */
function isHeadingNode(node, options) {
    return isHtmlElementNode(node) && options.headings.includes(node.tagName);
}
exports.isHeadingNode = isHeadingNode;
//# sourceMappingURL=type-guards.js.map