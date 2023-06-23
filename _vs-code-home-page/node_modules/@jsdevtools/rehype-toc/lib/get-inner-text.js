"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInnerText = void 0;
/**
 * Returns the text content of all children of the given node
 */
function getInnerText(node) {
    let text = "";
    if (node.type === "text") {
        text += node.value || "";
    }
    if (node.children) {
        let parent = node;
        for (let child of parent.children) {
            text += getInnerText(child);
        }
    }
    return text;
}
exports.getInnerText = getInnerText;
//# sourceMappingURL=get-inner-text.js.map