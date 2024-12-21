import{j as e}from"./jsx-runtime-BMrMXMSG.js";import{f as o,A as r}from"./ArticleHeader-BHYaRTsD.js";const s={title:"how to prevent Windows 10 from restarting without consent",datePublished:"2024-04-30T00:00:00-05:00",dateUpdated:"2024-12-19T00:00:00-05:00"},a=()=>[{title:o(s.title)}];function i(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"",children:s.title}),`
`,e.jsx(r,{datePublished:s.datePublished,dateUpdated:s.dateUpdated}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["Windows 10 has the regrettable default behavior of automatically restarting after it automatically installs security updates, meaning that my computer is liable to restart itself whenever the f*** it feels like. That sucks. The most charitable view I can take on it is that Microsoft wanted to err on the side of security. The thing is, I'm ",e.jsx(n.em,{children:"always"})," in the middle of things when I'm getting up from my computer and it drives me nuts to come back and find that it restarted overnight or while I was out on a walk."]}),`
`,e.jsx(n.p,{children:"Let's stop the madness. This guide will prevent Windows from restarting both while the computer is active and while sleeping."}),`
`,e.jsx(n.p,{children:"It's possible that only one or some of these steps are needed, but by this point I don't care enough to be precise. Shotgun time."}),`
`,e.jsx(n.p,{children:"Warning: This guide involves getting into some of the dark depths of Windows. Read the whole guide before you do anything and be careful to follow the directions exactly. I've done my best to be thorough but I'm not responsible if something goes wrong. Blame Microsoft for not making it easier to disable this behavior!"}),`
`,e.jsx(n.p,{children:"For reference, I'm using Windows 10 Pro, version 22H2 (up to date as of this writing — Dec 18, 2024)."}),`
`,e.jsx(n.h2,{id:"step-1-edit-registry",className:"heading-link",children:e.jsx(n.a,{href:"#step-1-edit-registry",children:"step 1: edit registry"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Press ",e.jsx(n.strong,{children:"Win+R"})," and type in ",e.jsx(n.strong,{children:"regedit"}),". Press ",e.jsx(n.strong,{children:"Enter"}),"."]}),`
`,e.jsxs(n.li,{children:["In the nav panel on the left, go to:",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"HKEY_LOCAL_MACHINE"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"\\SOFTWARE"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"\\Policies"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"\\Microsoft"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"\\Windows"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"\\WindowsUpdate"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"\\AU"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["If you don't see it, you may have to create ",e.jsx(n.strong,{children:"\\WindowsUpdate\\AU"})]}),`
`,e.jsxs(n.li,{children:["Right-click anywhere in the white space and choose ",e.jsx(n.strong,{children:"“New → DWORD (32-bit) Value”"}),". Give it the name ",e.jsx(n.strong,{children:"“NoAutoRebootWithLoggedOnUsers”"})," and the value of ",e.jsx(n.code,{children:"0x00000001"})," or just ",e.jsx(n.code,{children:"1"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"step-2-edit-group-policies",className:"heading-link",children:e.jsx(n.a,{href:"#step-2-edit-group-policies",children:"step 2: edit group policies"})}),`
`,e.jsxs(n.p,{children:["This step might only be relevant for Windows 10 Pro installations (not Windows 10 Home). You can check by pressing ",e.jsx(n.strong,{children:"Win+X"})," then ",e.jsx(n.strong,{children:"Y"}),", then look under ",e.jsx(n.strong,{children:"“Windows specifications → Edition”"}),"."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Press ",e.jsx(n.strong,{children:"Win+R"})," and type in ",e.jsx(n.strong,{children:"gpedit.msc"}),". Press ",e.jsx(n.strong,{children:"Enter"}),"."]}),`
`,e.jsxs(n.li,{children:["In the nav panel on the left, go to ",e.jsx(n.strong,{children:"Computer Configuration → Administrative Template → Windows Components → Windows Update"}),"."]}),`
`,e.jsxs(n.li,{children:["Double-click on ",e.jsx(n.strong,{children:"“Configure Automatic Updates”"})," and click ",e.jsx(n.strong,{children:"Enabled"})," (on the left side). Click ",e.jsx(n.strong,{children:"OK"}),".",`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["You can configure the specific behavior you want in the dropdown under ",e.jsx(n.strong,{children:"“Options: Configure automatic updating”"}),". Read the “Help” panel on the right for details. I have mine set to ",e.jsx(n.strong,{children:"“2 - Notify for download and auto install”"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Double-click on ",e.jsx(n.strong,{children:"“No auto-restart with logged on users for scheduled automatic updates installations”"})," and click ",e.jsx(n.strong,{children:"Enabled"})," (on the left side). Click ",e.jsx(n.strong,{children:"OK"}),"."]}),`
`,e.jsxs(n.li,{children:["Double-click on ",e.jsx(n.strong,{children:"“Allow Automatic Updates immediate installation”"})," and click ",e.jsx(n.strong,{children:"Disabled"})," (on the left side). Click ",e.jsx(n.strong,{children:"OK"}),"."]}),`
`,e.jsxs(n.li,{children:["This step might not be needed but I do it just to be sure. Double-click on ",e.jsx(n.strong,{children:"“Enabling Windows Update Power Management to automatically wake up the system to install scheduled updates”"})," and click ",e.jsx(n.strong,{children:"Disabled"})," (on the left side). Click ",e.jsx(n.strong,{children:"OK"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"step-3-edit-task-schedules",className:"heading-link",children:e.jsx(n.a,{href:"#step-3-edit-task-schedules",children:"step 3: edit task schedules"})}),`
`,e.jsxs(n.p,{children:["This step might only be relevant for Windows 10 Pro installations (not Windows 10 Home). You can check by pressing ",e.jsx(n.strong,{children:"Win+X"})," then ",e.jsx(n.strong,{children:"Y"}),", then look under ",e.jsx(n.strong,{children:"“Windows specifications → Edition”"}),"."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Open the Start Menu (or press the Windows key) then type ",e.jsx(n.strong,{children:"“Task Scheduler”"}),". Press ",e.jsx(n.strong,{children:"Enter"}),"."]}),`
`,e.jsxs(n.li,{children:["In the nav panel on the left, go to ",e.jsx(n.strong,{children:"Task Scheduler (Local) → Task Scheduler Library → Microsoft → Windows → UpdateOrchestrator"}),"."]}),`
`,e.jsxs(n.li,{children:["Right-click on any tasks with names that start with ",e.jsx(n.strong,{children:"“Reboot”"})," and click ",e.jsx(n.strong,{children:"Disable"}),".",`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["On my system there are two tasks, ",e.jsx(n.strong,{children:"“Reboot_AC”"})," and ",e.jsx(n.strong,{children:"“Reboot_Battery”"}),", but on yours it might just be ",e.jsx(n.strong,{children:"“Reboot”"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"step-4-restart",className:"heading-link",children:e.jsx(n.a,{href:"#step-4-restart",children:"step 4: restart"})}),`
`,e.jsx(n.p,{children:"Restart your computer to make the changes take effect. You might as well install updates now to make Windows shut up about it."}),`
`,e.jsx(n.h2,{id:"from-now-on",className:"heading-link",children:e.jsx(n.a,{href:"#from-now-on",children:"from now on"})}),`
`,e.jsxs(n.p,{children:["From now on you will have to manually click the button to download and install Windows updates. Windows will put an icon in your system tray, notifications, all sorts of stuff to try to get you to update. Do it on your own time. ",e.jsx(n.strong,{children:"But remember: once you click “Install updates”, Windows can restart your computer at any time."})," The key to avoiding unexpected restarts is to only install updates when you're prepared to shut down or restart."]}),`
`,e.jsxs(n.p,{children:["To update: open the Start Menu (or press the Windows key), type ",e.jsx(n.strong,{children:"“Windows Update”"}),", and press ",e.jsx(n.strong,{children:"Enter"}),". Click the ",e.jsx(n.strong,{children:"“Install”"})," button and wait."]}),`
`,e.jsx(n.h2,{id:"references",className:"heading-link",children:e.jsx(n.a,{href:"#references",children:"references"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"https://www.thewindowsclub.com/windows-updates-restart-disable"}),`
`,e.jsx(n.li,{children:"https://justpaste.it/HowDisableWindows10Update"}),`
`,e.jsx(n.li,{children:"https://superuser.com/questions/957267/how-to-disable-automatic-reboots-in-windows-10/"}),`
`]})]})}function h(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default,a as meta};
