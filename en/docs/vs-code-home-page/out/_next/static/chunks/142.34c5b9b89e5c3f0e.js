(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{6142:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return Fe}});var t=o(5893),a=o(7294),s=o(4184),r=o.n(s),l=o(7126),i=o(5446),c=o(6611),d=o(6792);const u=a.forwardRef((({bsPrefix:e,className:n,as:o,...a},s)=>{e=(0,d.vE)(e,"navbar-brand");const l=o||(a.href?"a":"span");return(0,t.jsx)(l,{...a,ref:s,className:r()(n,e)})}));u.displayName="NavbarBrand";var f=u,p=o(1505),h=o(5257),m=o(2646);var v=function(...e){return e.filter((e=>null!=e)).reduce(((e,n)=>{if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(...o){e.apply(this,o),n.apply(this,o)}}),null)},g=o(4509),b=o(2785);const x={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function N(e,n){const o=n[`offset${e[0].toUpperCase()}${e.slice(1)}`],t=x[e];return o+parseInt((0,p.Z)(n,t[0]),10)+parseInt((0,p.Z)(n,t[1]),10)}const E={[h.Wj]:"collapse",[h.Ix]:"collapsing",[h.d0]:"collapsing",[h.cn]:"collapse show"},y={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:N},_=a.forwardRef((({onEnter:e,onEntering:n,onEntered:o,onExit:s,onExiting:l,className:i,children:c,dimension:d="height",getDimensionValue:u=N,...f},p)=>{const h="function"===typeof d?d():d,x=(0,a.useMemo)((()=>v((e=>{e.style[h]="0"}),e)),[h,e]),y=(0,a.useMemo)((()=>v((e=>{const n=`scroll${h[0].toUpperCase()}${h.slice(1)}`;e.style[h]=`${e[n]}px`}),n)),[h,n]),_=(0,a.useMemo)((()=>v((e=>{e.style[h]=null}),o)),[h,o]),w=(0,a.useMemo)((()=>v((e=>{e.style[h]=`${u(h,e)}px`,(0,g.Z)(e)}),s)),[s,u,h]),k=(0,a.useMemo)((()=>v((e=>{e.style[h]=null}),l)),[h,l]);return(0,t.jsx)(b.Z,{ref:p,addEndListener:m.Z,...f,"aria-expanded":f.role?f.in:null,onEnter:x,onEntering:y,onEntered:_,onExit:w,onExiting:k,childRef:c.ref,children:(e,n)=>a.cloneElement(c,{...n,className:r()(i,c.props.className,E[e],"width"===h&&"collapse-horizontal")})})}));_.defaultProps=y;var w=_,k=o(4819);const T=a.forwardRef((({children:e,bsPrefix:n,...o},s)=>{n=(0,d.vE)(n,"navbar-collapse");const r=(0,a.useContext)(k.Z);return(0,t.jsx)(w,{in:!(!r||!r.expanded),...o,children:(0,t.jsx)("div",{ref:s,className:n,children:e})})}));T.displayName="NavbarCollapse";var Z=T,j=o(8146);const C=a.forwardRef((({bsPrefix:e,className:n,children:o,label:s,as:l="button",onClick:i,...c},u)=>{e=(0,d.vE)(e,"navbar-toggler");const{onToggle:f,expanded:p}=(0,a.useContext)(k.Z)||{},h=(0,j.Z)((e=>{i&&i(e),f&&f()}));return"button"===l&&(c.type="button"),(0,t.jsx)(l,{...c,ref:u,onClick:h,"aria-label":s,className:r()(n,e,!p&&"collapsed"),children:o||(0,t.jsx)("span",{className:`${e}-icon`})})}));C.displayName="NavbarToggle",C.defaultProps={label:"Toggle navigation"};var B=C,O=o(7216);function R(e){void 0===e&&(e=(0,O.Z)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(o){return e.body}}function S(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}var L=o(3004),P=o(7130),D=o(3935),F=o(6454),$=o(6852),I=o(8833);const M=(0,o(2747).PB)("modal-open");var W=class{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:o=!1}={}){this.handleContainerOverflow=n,this.isRTL=o,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){const n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},o=this.isRTL?"paddingLeft":"paddingRight",t=this.getElement();e.style={overflow:t.style.overflow,[o]:t.style[o]},e.scrollBarWidth&&(n[o]=`${parseInt((0,p.Z)(t,o)||"0",10)+e.scrollBarWidth}px`),t.setAttribute(M,""),(0,p.Z)(t,n)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(M),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return-1!==n?n:(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==n||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n)}remove(e){const n=this.modals.indexOf(e);-1!==n&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const A=(0,a.createContext)(L.Z?window:void 0);A.Provider;function H(){return(0,a.useContext)(A)}const U=(e,n)=>{var o;return L.Z?null==e?(n||(0,O.Z)()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(o=e)&&o.nodeType&&e||null):null};const V=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let K;function Q(e){const n=H(),o=e||function(e){return K||(K=new W({ownerDocument:null==e?void 0:e.document})),K}(n),t=(0,a.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:()=>o.add(t.current),remove:()=>o.remove(t.current),isTopModal:()=>o.isTopModal(t.current),setDialogRef:(0,a.useCallback)((e=>{t.current.dialog=e}),[]),setBackdropRef:(0,a.useCallback)((e=>{t.current.backdrop=e}),[])})}const z=(0,a.forwardRef)(((e,n)=>{let{show:o=!1,role:s="dialog",className:r,style:l,children:i,backdrop:c=!0,keyboard:d=!0,onBackdropClick:u,onEscapeKeyDown:f,transition:p,backdropTransition:h,autoFocus:m=!0,enforceFocus:v=!0,restoreFocus:g=!0,restoreFocusOptions:b,renderDialog:x,renderBackdrop:N=(e=>(0,t.jsx)("div",Object.assign({},e))),manager:E,container:y,onShow:_,onHide:w=(()=>{}),onExit:k,onExited:T,onExiting:Z,onEnter:C,onEntering:B,onEntered:O}=e,M=function(e,n){if(null==e)return{};var o,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,V);const W=function(e,n){const o=H(),[t,s]=(0,a.useState)((()=>U(e,null==o?void 0:o.document)));if(!t){const n=U(e);n&&s(n)}return(0,a.useEffect)((()=>{n&&t&&n(t)}),[n,t]),(0,a.useEffect)((()=>{const n=U(e);n!==t&&s(n)}),[e,t]),t}(y),A=Q(E),K=(0,F.Z)(),z=(0,I.Z)(o),[G,J]=(0,a.useState)(!o),q=(0,a.useRef)(null);(0,a.useImperativeHandle)(n,(()=>A),[A]),L.Z&&!z&&o&&(q.current=R()),p||o||G?o&&G&&J(!1):J(!0);const Y=(0,j.Z)((()=>{if(A.add(),ae.current=(0,P.Z)(document,"keydown",oe),te.current=(0,P.Z)(document,"focus",(()=>setTimeout(ee)),!0),_&&_(),m){const e=R(document);A.dialog&&e&&!S(A.dialog,e)&&(q.current=e,A.dialog.focus())}})),X=(0,j.Z)((()=>{var e;(A.remove(),null==ae.current||ae.current(),null==te.current||te.current(),g)&&(null==(e=q.current)||null==e.focus||e.focus(b),q.current=null)}));(0,a.useEffect)((()=>{o&&W&&Y()}),[o,W,Y]),(0,a.useEffect)((()=>{G&&X()}),[G,X]),(0,$.Z)((()=>{X()}));const ee=(0,j.Z)((()=>{if(!v||!K()||!A.isTopModal())return;const e=R();A.dialog&&e&&!S(A.dialog,e)&&A.dialog.focus()})),ne=(0,j.Z)((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===c&&w())})),oe=(0,j.Z)((e=>{d&&27===e.keyCode&&A.isTopModal()&&(null==f||f(e),e.defaultPrevented||w())})),te=(0,a.useRef)(),ae=(0,a.useRef)(),se=(...e)=>{J(!0),null==T||T(...e)},re=p;if(!W||!(o||re&&!G))return null;const le=Object.assign({role:s,ref:A.setDialogRef,"aria-modal":"dialog"===s||void 0},M,{style:l,className:r,tabIndex:-1});let ie=x?x(le):(0,t.jsx)("div",Object.assign({},le,{children:a.cloneElement(i,{role:"document"})}));re&&(ie=(0,t.jsx)(re,{appear:!0,unmountOnExit:!0,in:!!o,onExit:k,onExiting:Z,onExited:se,onEnter:C,onEntering:B,onEntered:O,children:ie}));let ce=null;if(c){const e=h;ce=N({ref:A.setBackdropRef,onClick:ne}),e&&(ce=(0,t.jsx)(e,{appear:!0,in:!!o,children:ce}))}return(0,t.jsx)(t.Fragment,{children:D.createPortal((0,t.jsxs)(t.Fragment,{children:[ce,ie]}),W)})}));z.displayName="Modal";var G=Object.assign(z,{Manager:W}),J=o(1068),q=(0,c.Z)("offcanvas-body");const Y={[h.d0]:"show",[h.cn]:"show"},X=a.forwardRef((({bsPrefix:e,className:n,children:o,...s},l)=>(e=(0,d.vE)(e,"offcanvas"),(0,t.jsx)(b.Z,{ref:l,addEndListener:m.Z,...s,childRef:o.ref,children:(t,s)=>a.cloneElement(o,{...s,className:r()(n,o.props.className,(t===h.d0||t===h.Ix)&&`${e}-toggling`,Y[t])})}))));X.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},X.displayName="OffcanvasToggling";var ee=X;var ne=a.createContext({onHide(){}}),oe=o(5697),te=o.n(oe);const ae={"aria-label":te().string,onClick:te().func,variant:te().oneOf(["white"])},se=a.forwardRef((({className:e,variant:n,...o},a)=>(0,t.jsx)("button",{ref:a,type:"button",className:r()("btn-close",n&&`btn-close-${n}`,e),...o})));se.displayName="CloseButton",se.propTypes=ae,se.defaultProps={"aria-label":"Close"};var re=se;const le=a.forwardRef((({closeLabel:e,closeVariant:n,closeButton:o,onHide:s,children:r,...l},i)=>{const c=(0,a.useContext)(ne),d=(0,j.Z)((()=>{null==c||c.onHide(),null==s||s()}));return(0,t.jsxs)("div",{ref:i,...l,children:[r,o&&(0,t.jsx)(re,{"aria-label":e,variant:n,onClick:d})]})}));le.defaultProps={closeLabel:"Close",closeButton:!1};var ie=le;const ce=a.forwardRef((({bsPrefix:e,className:n,...o},a)=>(e=(0,d.vE)(e,"offcanvas-header"),(0,t.jsx)(ie,{ref:a,...o,className:r()(n,e)}))));ce.displayName="OffcanvasHeader",ce.defaultProps={closeLabel:"Close",closeButton:!1};var de=ce;const ue=(fe="h5",a.forwardRef(((e,n)=>(0,t.jsx)("div",{...e,ref:n,className:r()(e.className,fe)}))));var fe,pe=(0,c.Z)("offcanvas-title",{Component:ue});var he=o(930);function me(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const ve=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ge=".sticky-top",be=".navbar-toggler";class xe extends W{adjustAndStore(e,n,o){const t=n.style[e];n.dataset[e]=t,(0,p.Z)(n,{[e]:`${parseFloat((0,p.Z)(n,e))+o}px`})}restore(e,n){const o=n.dataset[e];void 0!==o&&(delete n.dataset[e],(0,p.Z)(n,{[e]:o}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(function(e,n){e.classList?e.classList.add(n):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(e,n)||("string"===typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}(n,"modal-open"),!e.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",t=this.isRTL?"marginLeft":"marginRight";(0,he.Z)(n,ve).forEach((n=>this.adjustAndStore(o,n,e.scrollBarWidth))),(0,he.Z)(n,ge).forEach((n=>this.adjustAndStore(t,n,-e.scrollBarWidth))),(0,he.Z)(n,be).forEach((n=>this.adjustAndStore(t,n,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();!function(e,n){e.classList?e.classList.remove(n):"string"===typeof e.className?e.className=me(e.className,n):e.setAttribute("class",me(e.className&&e.className.baseVal||"",n))}(n,"modal-open");const o=this.isRTL?"paddingLeft":"paddingRight",t=this.isRTL?"marginLeft":"marginRight";(0,he.Z)(n,ve).forEach((e=>this.restore(o,e))),(0,he.Z)(n,ge).forEach((e=>this.restore(t,e))),(0,he.Z)(n,be).forEach((e=>this.restore(t,e)))}}let Ne;var Ee=xe;function ye(e){return(0,t.jsx)(ee,{...e})}function _e(e){return(0,t.jsx)(J.Z,{...e})}const we=a.forwardRef((({bsPrefix:e,className:n,children:o,"aria-labelledby":s,placement:l,show:i,backdrop:c,keyboard:u,scroll:f,onEscapeKeyDown:p,onShow:h,onHide:m,container:v,autoFocus:g,enforceFocus:b,restoreFocus:x,restoreFocusOptions:N,onEntered:E,onExit:y,onExiting:_,onEnter:w,onEntering:T,onExited:Z,backdropClassName:C,manager:B,...O},R)=>{const S=(0,a.useRef)();e=(0,d.vE)(e,"offcanvas");const{onToggle:L}=(0,a.useContext)(k.Z)||{},P=(0,j.Z)((()=>{null==L||L(),null==m||m()})),D=(0,a.useMemo)((()=>({onHide:P})),[P]);const F=(0,a.useCallback)((n=>(0,t.jsx)("div",{...n,className:r()(`${e}-backdrop`,C)})),[C,e]);return(0,t.jsx)(ne.Provider,{value:D,children:(0,t.jsx)(G,{show:i,ref:R,backdrop:c,container:v,keyboard:u,autoFocus:g,enforceFocus:b&&!f,restoreFocus:x,restoreFocusOptions:N,onEscapeKeyDown:p,onShow:h,onHide:P,onEnter:(e,...n)=>{e&&(e.style.visibility="visible"),null==w||w(e,...n)},onEntering:T,onEntered:E,onExit:y,onExiting:_,onExited:(e,...n)=>{e&&(e.style.visibility=""),null==Z||Z(...n)},manager:function(){return B||(f?(S.current||(S.current=new Ee({handleContainerOverflow:!1})),S.current):(Ne||(Ne=new xe(e)),Ne));var e}(),transition:ye,backdropTransition:_e,renderBackdrop:F,renderDialog:a=>(0,t.jsx)("div",{role:"dialog",...a,...O,className:r()(n,e,`${e}-${l}`),"aria-labelledby":s,children:o})})})}));we.displayName="Offcanvas",we.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};var ke=Object.assign(we,{Body:q,Header:de,Title:pe});const Te=a.forwardRef(((e,n)=>{const o=(0,a.useContext)(k.Z);return(0,t.jsx)(ke,{ref:n,show:!(null==o||!o.expanded),...e})}));Te.displayName="NavbarOffcanvas";var Ze=Te;const je=(0,c.Z)("navbar-text",{Component:"span"}),Ce=a.forwardRef(((e,n)=>{const{bsPrefix:o,expand:s,variant:c,bg:u,fixed:f,sticky:p,className:h,as:m="nav",expanded:v,onToggle:g,onSelect:b,collapseOnSelect:x,...N}=(0,i.Ch)(e,{expanded:"onToggle"}),E=(0,d.vE)(o,"navbar"),y=(0,a.useCallback)(((...e)=>{null==b||b(...e),x&&v&&(null==g||g(!1))}),[b,x,v,g]);void 0===N.role&&"nav"!==m&&(N.role="navigation");let _=`${E}-expand`;"string"===typeof s&&(_=`${_}-${s}`);const w=(0,a.useMemo)((()=>({onToggle:()=>null==g?void 0:g(!v),bsPrefix:E,expanded:!!v})),[E,v,g]);return(0,t.jsx)(k.Z.Provider,{value:w,children:(0,t.jsx)(l.Z.Provider,{value:y,children:(0,t.jsx)(m,{ref:n,...N,className:r()(h,E,s&&_,c&&`${E}-${c}`,u&&`bg-${u}`,p&&`sticky-${p}`,f&&`fixed-${f}`)})})})}));Ce.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},Ce.displayName="Navbar";var Be=Object.assign(Ce,{Brand:f,Collapse:Z,Offcanvas:Ze,Text:je,Toggle:B}),Oe=o(682),Re=o(4607),Se=o(1058),Le=o(5640),Pe=o(9060),De=o.n(Pe),Fe=function(e){var n=e.launcher;return o.g.location.pathname.indexOf("learn")>0&&(n+="-learn"),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Be,{className:"home"===n?"".concat(De()[n]," navbar-dark"):De()[n],expand:"lg",sticky:"top",children:(0,t.jsxs)(Oe.Z,{fluid:!0,className:"home"===n?De().toggleFloat:null,children:["home"!==n?(0,t.jsxs)(Be.Brand,{href:"".concat(Le.O,"/"),className:De().logo,children:[(0,t.jsx)(Se.Z,{src:"".concat(Le.O,"/images/ballerina-logo-white.svg"),height:28,width:150,alt:"Ballerina Logo"})," VS Code extension"]}):null,(0,t.jsx)(Be.Toggle,{"aria-controls":"navbarScroll"}),(0,t.jsx)(Be.Collapse,{id:"navbarScroll",className:De().navItems,children:(0,t.jsxs)(Re.Z,{className:"".concat(De().topNav," ms-auto my-2 my-lg-0"),navbarScroll:!0,children:[(0,t.jsx)(Re.Z.Link,{className:"downloads"===n?"".concat(De().active," ").concat(De().navItem):"".concat(De().navItem),href:"https://wso2.com/ballerina/vscode/docs/",children:"Docs"}),(0,t.jsx)(Re.Z.Link,{className:De().navItem,href:"https://ballerina.io/",target:"_blank",rel:"noreferrer",children:"Ballerina"})]})})]})})})}},9060:function(e){e.exports={navbar:"TopNav_navbar__SJ78B",home:"TopNav_home__uZ6Dl",docs:"TopNav_docs__ZwmCb",downloads:"TopNav_downloads__B11H3",other:"TopNav_other__FEtcU","docs-learn":"TopNav_docs-learn__T6ij6",usecases:"TopNav_usecases__U9WMf",community:"TopNav_community__7NkTx",brokenLink:"TopNav_brokenLink__0WTZb","brokenLink-learn":"TopNav_brokenLink-learn__PfGZg",rn:"TopNav_rn__UDldu",logo:"TopNav_logo__jMnQY",navItems:"TopNav_navItems__JW0kZ",topNav:"TopNav_topNav__Zzb38",navItem:"TopNav_navItem__Hr5i7",navbarScrollingDropdown:"TopNav_navbarScrollingDropdown__PUDvQ",active:"TopNav_active__ASxj2",toggleFloat:"TopNav_toggleFloat__uwpG2",searchButton:"TopNav_searchButton__PZ4rQ",searchButtonContainer:"TopNav_searchButtonContainer__xgSI5",searchButtonIcon:"TopNav_searchButtonIcon__kOUN9","DocSearch-Button-Placeholder":"TopNav_DocSearch-Button-Placeholder__4LlUg",searchButtonKeys:"TopNav_searchButtonKeys__NUK31",hackathonBanner:"TopNav_hackathonBanner__qr5r0",dropDownItem:"TopNav_dropDownItem__hc5yc"}}}]);