"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildClass = exports.NormalizedOptions = void 0;
/**
 * Normalized, sanitized, and complete settings,
 * with default values for anything that wasn't specified by the caller.
 */
class NormalizedOptions {
    /**
     * Applies default values for any unspecified options
     */
    constructor(options = {}) {
        let cssClasses = options.cssClasses || {};
        this.nav = options.nav === undefined ? true : Boolean(options.nav);
        this.position = options.position || "afterbegin";
        this.headings = options.headings || ["h1", "h2", "h3", "h4", "h5", "h6"];
        this.cssClasses = {
            toc: cssClasses.toc === undefined ? "toc" : cssClasses.toc,
            list: cssClasses.list === undefined ? "toc-level" : cssClasses.list,
            listItem: cssClasses.listItem === undefined ? "toc-item" : cssClasses.listItem,
            link: cssClasses.link === undefined ? "toc-link" : cssClasses.link,
        };
        this.customizeTOC = options.customizeTOC;
        this.customizeTOCItem = options.customizeTOCItem;
    }
}
exports.NormalizedOptions = NormalizedOptions;
/**
 * Builds a CSS class string from the given user-defined class name
 */
function buildClass(name, suffix) {
    if (name) {
        let cssClass = name;
        if (suffix) {
            cssClass += ` ${name}-${suffix}`;
        }
        return cssClass;
    }
}
exports.buildClass = buildClass;
//# sourceMappingURL=options.js.map