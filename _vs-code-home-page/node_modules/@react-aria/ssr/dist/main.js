var $8EJgg$react = require("react");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $dac019021ac61f1f$exports = {};

$parcel$export($dac019021ac61f1f$exports, "SSRProvider", () => $dac019021ac61f1f$export$9f8ac96af4b1b2ae);
$parcel$export($dac019021ac61f1f$exports, "useSSRSafeId", () => $dac019021ac61f1f$export$619500959fc48b26);
$parcel$export($dac019021ac61f1f$exports, "useIsSSR", () => $dac019021ac61f1f$export$535bd6ca7f90a273);

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $dac019021ac61f1f$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $dac019021ac61f1f$var$SSRContext = /*#__PURE__*/ ($parcel$interopDefault($8EJgg$react)).createContext($dac019021ac61f1f$var$defaultContext);
function $dac019021ac61f1f$export$9f8ac96af4b1b2ae(props) {
    let cur = $8EJgg$react.useContext($dac019021ac61f1f$var$SSRContext);
    let value = $8EJgg$react.useMemo(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $dac019021ac61f1f$var$defaultContext ? '' : `${cur.prefix}-${++cur.current}`,
            current: 0
        })
    , [
        cur
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($8EJgg$react)).createElement($dac019021ac61f1f$var$SSRContext.Provider, {
        value: value
    }, props.children));
}
let $dac019021ac61f1f$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
function $dac019021ac61f1f$export$619500959fc48b26(defaultId) {
    let ctx = $8EJgg$react.useContext($dac019021ac61f1f$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $dac019021ac61f1f$var$defaultContext && !$dac019021ac61f1f$var$canUseDOM) console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    return $8EJgg$react.useMemo(()=>defaultId || `react-aria${ctx.prefix}-${++ctx.current}`
    , [
        defaultId
    ]);
}
function $dac019021ac61f1f$export$535bd6ca7f90a273() {
    let cur = $8EJgg$react.useContext($dac019021ac61f1f$var$SSRContext);
    let isInSSRContext = cur !== $dac019021ac61f1f$var$defaultContext;
    let [isSSR, setIsSSR] = $8EJgg$react.useState(isInSSRContext);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof window !== 'undefined' && isInSSRContext) // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $8EJgg$react.useLayoutEffect(()=>{
        setIsSSR(false);
    }, []);
    return isSSR;
}


$parcel$exportWildcard(module.exports, $dac019021ac61f1f$exports);


//# sourceMappingURL=main.js.map
