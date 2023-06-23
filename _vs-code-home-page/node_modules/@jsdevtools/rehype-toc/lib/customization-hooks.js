"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customizationHooks = void 0;
/**
 * Allows the user to customize the table of contents before it gets added to the page.
 */
function customizationHooks(toc, options) {
    let { customizeTOC, customizeTOCItem } = options;
    customizeNodes(toc, "li", customizeTOCItem);
    return customizationHook(customizeTOC, toc);
}
exports.customizationHooks = customizationHooks;
function customizeNodes(parent, tagName, hook) {
    if (!hook) {
        return;
    }
    for (let child of parent.children) {
        if (child.tagName === tagName) {
            let hookArgs = child.data && child.data.hookArgs;
            if (hookArgs) {
                let newChild = customizationHook(hook, child, hookArgs);
                replaceNode(parent, child, newChild);
            }
        }
        if (child.children) {
            customizeNodes(child, tagName, hook);
        }
    }
}
/**
 * Allows callers to customize the table of contents.
 */
function customizationHook(hook, node, args = []) {
    if (!hook) {
        // No customization. Use the original node.
        return node;
    }
    // Call the customization hook
    let newNode = hook(node, ...args);
    if (newNode && typeof newNode === "object") {
        // The hook returned a new Node to replace the original one
        return newNode;
    }
    else if (newNode === true || newNode === undefined) {
        // Use the original Node
        return node;
    }
    else {
        // The hook returned a falsy value, so discard the Node altogether
        return undefined;
    }
}
/**
 * Replaces the specified child node with a different node
 */
function replaceNode(parent, oldChild, newChild) {
    // We only need to do a replacement if the nodes ar different
    if (newChild !== oldChild) {
        let index = parent.children.indexOf(oldChild);
        if (newChild === undefined) {
            // Remove the old child
            parent.children.splice(index, 1);
        }
        else {
            // Replace the old child with the new child
            parent.children.splice(index, 1, newChild);
        }
    }
}
//# sourceMappingURL=customization-hooks.js.map