import $cgWTI$react, {useContext as $cgWTI$useContext, useMemo as $cgWTI$useMemo, useState as $cgWTI$useState, useLayoutEffect as $cgWTI$useLayoutEffect} from "react";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9d939cbc98267846$exports = {};

$parcel$export($9d939cbc98267846$exports, "SSRProvider", () => $9d939cbc98267846$export$9f8ac96af4b1b2ae);
$parcel$export($9d939cbc98267846$exports, "useSSRSafeId", () => $9d939cbc98267846$export$619500959fc48b26);
$parcel$export($9d939cbc98267846$exports, "useIsSSR", () => $9d939cbc98267846$export$535bd6ca7f90a273);

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $9d939cbc98267846$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $9d939cbc98267846$var$SSRContext = /*#__PURE__*/ $cgWTI$react.createContext($9d939cbc98267846$var$defaultContext);
function $9d939cbc98267846$export$9f8ac96af4b1b2ae(props) {
    let cur = $cgWTI$useContext($9d939cbc98267846$var$SSRContext);
    let value = $cgWTI$useMemo(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $9d939cbc98267846$var$defaultContext ? '' : `${cur.prefix}-${++cur.current}`,
            current: 0
        })
    , [
        cur
    ]);
    return(/*#__PURE__*/ $cgWTI$react.createElement($9d939cbc98267846$var$SSRContext.Provider, {
        value: value
    }, props.children));
}
let $9d939cbc98267846$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
function $9d939cbc98267846$export$619500959fc48b26(defaultId) {
    let ctx = $cgWTI$useContext($9d939cbc98267846$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $9d939cbc98267846$var$defaultContext && !$9d939cbc98267846$var$canUseDOM) console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    return $cgWTI$useMemo(()=>defaultId || `react-aria${ctx.prefix}-${++ctx.current}`
    , [
        defaultId
    ]);
}
function $9d939cbc98267846$export$535bd6ca7f90a273() {
    let cur = $cgWTI$useContext($9d939cbc98267846$var$SSRContext);
    let isInSSRContext = cur !== $9d939cbc98267846$var$defaultContext;
    let [isSSR, setIsSSR] = $cgWTI$useState(isInSSRContext);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof window !== 'undefined' && isInSSRContext) // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $cgWTI$useLayoutEffect(()=>{
        setIsSSR(false);
    }, []);
    return isSSR;
}




export {$9d939cbc98267846$export$9f8ac96af4b1b2ae as SSRProvider, $9d939cbc98267846$export$619500959fc48b26 as useSSRSafeId, $9d939cbc98267846$export$535bd6ca7f90a273 as useIsSSR};
//# sourceMappingURL=module.js.map
