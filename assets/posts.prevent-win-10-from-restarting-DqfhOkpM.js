import{g as v,r as j,R as l,j as t}from"./jsx-runtime-BMrMXMSG.js";import{f as k,A as O}from"./ArticleHeader-CALjWnEo.js";var m={exports:{}},W="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",T=W,P=T;function y(){}function w(){}w.resetWarningCache=y;var _=function(){function n(s,i,o,d,U,b){if(b!==P){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}n.isRequired=n;function e(){return n}var r={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:w,resetWarningCache:y};return r.PropTypes=r,r};m.exports=_();var E=m.exports;const a=v(E);function h(){return h=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},h.apply(this,arguments)}function R(n,e){if(n==null)return{};var r=I(n,e),s,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)s=o[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(r[s]=n[s])}return r}function I(n,e){if(n==null)return{};var r={},s=Object.keys(n),i,o;for(o=0;o<s.length;o++)i=s[o],!(e.indexOf(i)>=0)&&(r[i]=n[i]);return r}var u=j.forwardRef(function(n,e){var r=n.color,s=r===void 0?"currentColor":r,i=n.size,o=i===void 0?24:i,d=R(n,["color","size"]);return l.createElement("svg",h({ref:e,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),l.createElement("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),l.createElement("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),l.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))});u.propTypes={color:a.string,size:a.oneOfType([a.string,a.number])};u.displayName="AlertTriangle";function p(){return p=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},p.apply(this,arguments)}function C(n,e){if(n==null)return{};var r=N(n,e),s,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)s=o[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(r[s]=n[s])}return r}function N(n,e){if(n==null)return{};var r={},s=Object.keys(n),i,o;for(o=0;o<s.length;o++)i=s[o],!(e.indexOf(i)>=0)&&(r[i]=n[i]);return r}var g=j.forwardRef(function(n,e){var r=n.color,s=r===void 0?"currentColor":r,i=n.size,o=i===void 0?24:i,d=C(n,["color","size"]);return l.createElement("svg",p({ref:e,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),l.createElement("circle",{cx:"12",cy:"12",r:"10"}),l.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),l.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))});g.propTypes={color:a.string,size:a.oneOfType([a.string,a.number])};g.displayName="Info";function S({type:n="info",children:e}){const r=n==="info"?g:u;return t.jsxs("div",{className:"callout flex flex-col xs:flex-row gap-4 items-center w-full border border-primary rounded-xl px-4 py-4 xs:py-2 mb-4",children:[t.jsx("div",{className:"h-12 w-12 shrink-0",children:t.jsx(r,{strokeWidth:"1px",className:"h-full w-full"})}),t.jsx("div",{className:"grow",children:e})]})}const c={title:"how to prevent Windows 10 from restarting without consent",datePublished:"2024-04-30T00:00:00-05:00",dateUpdated:"2024-12-19T00:00:00-05:00"},D=()=>[{title:k(c.title)}];function f(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"",children:c.title}),`
`,t.jsx(O,{datePublished:c.datePublished,dateUpdated:c.dateUpdated}),`
`,t.jsx(e.hr,{}),`
`,t.jsx(S,{type:"warning",children:t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Warning:"}),` This guide involves getting into some of the dark depths of
Windows. Read the whole guide before you do anything and be careful to follow
the directions exactly. I've done my best to be thorough but I'm not
responsible if something goes wrong. Blame Microsoft for not making it easier
to disable this behavior!`]})}),`
`,t.jsxs(e.p,{children:["Windows 10 has the regrettable default behavior of automatically restarting after it automatically installs security updates, meaning that my computer is liable to restart itself whenever the f*** it feels like. That sucks. The most charitable view I can take on it is that Microsoft wanted to err on the side of security. The thing is, I'm ",t.jsx(e.em,{children:"always"})," in the middle of things when I'm getting up from my computer and it drives me nuts to come back and find that it restarted overnight or while I was out on a walk."]}),`
`,t.jsx(e.p,{children:"Let's stop the madness. This guide will prevent Windows from restarting both while the computer is active and while sleeping."}),`
`,t.jsx(e.p,{children:"It's possible that only one or some of these steps are needed, but by this point I don't care enough to be precise. Shotgun time."}),`
`,t.jsx(e.p,{children:"For reference, I'm using Windows 10 Pro, version 22H2 (up to date as of this writing — Dec 18, 2024)."}),`
`,t.jsx(e.h2,{id:"step-1-edit-registry",className:"heading-link",children:t.jsx(e.a,{href:"#step-1-edit-registry",children:"step 1: edit registry"})}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsxs(e.li,{children:["Press ",t.jsx(e.strong,{children:"Win+R"})," and type in ",t.jsx(e.strong,{children:"regedit"}),". Press ",t.jsx(e.strong,{children:"Enter"}),"."]}),`
`,t.jsxs(e.li,{children:["In the nav panel on the left, go to:",`
`,t.jsxs(e.ol,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.strong,{children:"HKEY_LOCAL_MACHINE"})}),`
`,t.jsx(e.li,{children:t.jsx(e.strong,{children:"\\SOFTWARE"})}),`
`,t.jsx(e.li,{children:t.jsx(e.strong,{children:"\\Policies"})}),`
`,t.jsx(e.li,{children:t.jsx(e.strong,{children:"\\Microsoft"})}),`
`,t.jsx(e.li,{children:t.jsx(e.strong,{children:"\\Windows"})}),`
`,t.jsx(e.li,{children:t.jsx(e.strong,{children:"\\WindowsUpdate"})}),`
`,t.jsx(e.li,{children:t.jsx(e.strong,{children:"\\AU"})}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:["If you don't see it, you may have to create ",t.jsx(e.strong,{children:"\\WindowsUpdate\\AU"})]}),`
`,t.jsxs(e.li,{children:["Right-click anywhere in the white space and choose ",t.jsx(e.strong,{children:"“New → DWORD (32-bit) Value”"}),". Give it the name ",t.jsx(e.strong,{children:"“NoAutoRebootWithLoggedOnUsers”"})," and the value of ",t.jsx(e.code,{children:"0x00000001"})," or just ",t.jsx(e.code,{children:"1"}),"."]}),`
`]}),`
`,t.jsx(e.h2,{id:"step-2-edit-group-policies",className:"heading-link",children:t.jsx(e.a,{href:"#step-2-edit-group-policies",children:"step 2: edit group policies"})}),`
`,t.jsxs(e.p,{children:["This step might only be relevant for Windows 10 Pro installations (not Windows 10 Home). You can check by pressing ",t.jsx(e.strong,{children:"Win+X"})," then ",t.jsx(e.strong,{children:"Y"}),", then look under ",t.jsx(e.strong,{children:"“Windows specifications → Edition”"}),"."]}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsxs(e.li,{children:["Press ",t.jsx(e.strong,{children:"Win+R"})," and type in ",t.jsx(e.strong,{children:"gpedit.msc"}),". Press ",t.jsx(e.strong,{children:"Enter"}),"."]}),`
`,t.jsxs(e.li,{children:["In the nav panel on the left, go to ",t.jsx(e.strong,{children:"Computer Configuration → Administrative Template → Windows Components → Windows Update"}),"."]}),`
`,t.jsxs(e.li,{children:["Double-click on ",t.jsx(e.strong,{children:"“Configure Automatic Updates”"})," and click ",t.jsx(e.strong,{children:"Enabled"})," (on the left side). Click ",t.jsx(e.strong,{children:"OK"}),".",`
`,t.jsxs(e.ol,{children:[`
`,t.jsxs(e.li,{children:["You can configure the specific behavior you want in the dropdown under ",t.jsx(e.strong,{children:"“Options: Configure automatic updating”"}),". Read the “Help” panel on the right for details. I have mine set to ",t.jsx(e.strong,{children:"“2 - Notify for download and auto install”"}),"."]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:["Double-click on ",t.jsx(e.strong,{children:"“No auto-restart with logged on users for scheduled automatic updates installations”"})," and click ",t.jsx(e.strong,{children:"Enabled"})," (on the left side). Click ",t.jsx(e.strong,{children:"OK"}),"."]}),`
`,t.jsxs(e.li,{children:["Double-click on ",t.jsx(e.strong,{children:"“Allow Automatic Updates immediate installation”"})," and click ",t.jsx(e.strong,{children:"Disabled"})," (on the left side). Click ",t.jsx(e.strong,{children:"OK"}),"."]}),`
`,t.jsxs(e.li,{children:["This step might not be needed but I do it just to be sure. Double-click on ",t.jsx(e.strong,{children:"“Enabling Windows Update Power Management to automatically wake up the system to install scheduled updates”"})," and click ",t.jsx(e.strong,{children:"Disabled"})," (on the left side). Click ",t.jsx(e.strong,{children:"OK"}),"."]}),`
`]}),`
`,t.jsx(e.h2,{id:"step-3-edit-task-schedules",className:"heading-link",children:t.jsx(e.a,{href:"#step-3-edit-task-schedules",children:"step 3: edit task schedules"})}),`
`,t.jsxs(e.p,{children:["This step might only be relevant for Windows 10 Pro installations (not Windows 10 Home). You can check by pressing ",t.jsx(e.strong,{children:"Win+X"})," then ",t.jsx(e.strong,{children:"Y"}),", then look under ",t.jsx(e.strong,{children:"“Windows specifications → Edition”"}),"."]}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsxs(e.li,{children:["Open the Start Menu (or press the Windows key) then type ",t.jsx(e.strong,{children:"“Task Scheduler”"}),". Press ",t.jsx(e.strong,{children:"Enter"}),"."]}),`
`,t.jsxs(e.li,{children:["In the nav panel on the left, go to ",t.jsx(e.strong,{children:"Task Scheduler (Local) → Task Scheduler Library → Microsoft → Windows → UpdateOrchestrator"}),"."]}),`
`,t.jsxs(e.li,{children:["Right-click on any tasks with names that start with ",t.jsx(e.strong,{children:"“Reboot”"})," and click ",t.jsx(e.strong,{children:"Disable"}),".",`
`,t.jsxs(e.ol,{children:[`
`,t.jsxs(e.li,{children:["On my system there are two tasks, ",t.jsx(e.strong,{children:"“Reboot_AC”"})," and ",t.jsx(e.strong,{children:"“Reboot_Battery”"}),", but on yours it might just be ",t.jsx(e.strong,{children:"“Reboot”"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,t.jsx(e.h2,{id:"step-4-restart",className:"heading-link",children:t.jsx(e.a,{href:"#step-4-restart",children:"step 4: restart"})}),`
`,t.jsx(e.p,{children:"Restart your computer to make the changes take effect. You might as well install updates now to make Windows shut up about it."}),`
`,t.jsx(e.h2,{id:"from-now-on",className:"heading-link",children:t.jsx(e.a,{href:"#from-now-on",children:"from now on"})}),`
`,t.jsxs(e.p,{children:["From now on you will have to manually click the button to download and install Windows updates. Windows will put an icon in your system tray, notifications, all sorts of stuff to try to get you to update. Do it on your own time. ",t.jsx(e.strong,{children:"But remember: once you click “Install updates”, Windows can restart your computer at any time."})," The key to avoiding unexpected restarts is to only install updates when you're prepared to shut down or restart."]}),`
`,t.jsxs(e.p,{children:["To update: open the Start Menu (or press the Windows key), type ",t.jsx(e.strong,{children:"“Windows Update”"}),", and press ",t.jsx(e.strong,{children:"Enter"}),". Click the ",t.jsx(e.strong,{children:"“Install”"})," button and wait."]}),`
`,t.jsx(e.h2,{id:"references",className:"heading-link",children:t.jsx(e.a,{href:"#references",children:"references"})}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"https://www.thewindowsclub.com/windows-updates-restart-disable"}),`
`,t.jsx(e.li,{children:"https://justpaste.it/HowDisableWindows10Update"}),`
`,t.jsx(e.li,{children:"https://superuser.com/questions/957267/how-to-disable-automatic-reboots-in-windows-10/"}),`
`]})]})}function L(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(f,{...n})}):f(n)}const z=Object.freeze(Object.defineProperty({__proto__:null,default:L,frontmatter:c,meta:D},Symbol.toStringTag,{value:"Module"}));export{L as M,z as _,D as m};
