import{j as s}from"./jsx-runtime-BMrMXMSG.js";import{f as l,A as t}from"./ArticleHeader-CALjWnEo.js";const a={title:"everyday Git aliases to speed up your workflow",datePublished:"2021-04-05T00:00:00-05:00",dateUpdated:"2024-12-18T00:00:00-05:00"},c=()=>[{title:l(a.title)}];function i(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.h1,{id:"",children:a.title}),`
`,s.jsx(t,{datePublished:a.datePublished,dateUpdated:a.dateUpdated}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.p,{children:["I originally ",s.jsx(e.a,{href:"https://www.linkedin.com/pulse/everyday-git-aliases-speed-up-your-workflow-benjamin-wilson/",children:"posted this article on LinkedIn"})," in April 2021. As of this writing (December 2024) I still use these aliases every time I use Git, which is pretty much every work day!"]}),`
`,s.jsx(e.p,{children:"I've updated the aliases to reflect the ones I use currently. I also added a bonus tip at the bottom, give it a look 😎"}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.p,{children:["Git. I use it everyday, and yet, for the longest time I accepted that I would have to type out ",s.jsx(e.code,{children:"git status"})," 25 times a day. I was also writing down translations of some of the more ambiguous commands into what I actually wanted to do (looking at you, ",s.jsx(e.code,{children:"git reset"}),"!), then typing them back in as needed. It worked, but it wasn't ideal."]}),`
`,s.jsx(e.p,{children:"Turns out, Git aliases serve both of these needs! If you don't know what an alias is, it's basically a different name for a command, with or without options. You can have as many or as few of these aliases as you like, and you can change the alias name and command to your liking. In this way, they are flexible enough to be set up both as shortcuts and as reference for more intuitive operations."}),`
`,s.jsx(e.p,{children:"Check out my Git aliases and explanations below, give them a try, and let me know if they improve your workflow!"}),`
`,s.jsx(e.h2,{id:"installation",className:"heading-link",children:s.jsx(e.a,{href:"#installation",children:"installation"})}),`
`,s.jsx(e.p,{children:"Installing one or more of these aliases globally is easy:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:["Run ",s.jsx(e.code,{children:"git config --global -e"})," to edit your global ",s.jsx(e.code,{children:".gitconfig"}),"."]}),`
`,s.jsxs(e.li,{children:["If there isn't already an ",s.jsx(e.code,{children:"[alias]"})," section, add one."]}),`
`,s.jsxs(e.li,{children:["Copy and paste the aliases you want to use under ",s.jsx(e.code,{children:"[alias]"}),", indented once."]}),`
`]}),`
`,s.jsxs(e.p,{children:["Thus your ",s.jsx(e.code,{children:".gitconfig"})," might look like this:"]}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ini",children:[s.jsx(e.span,{className:"hljs-section",children:"[alias]"}),`
    `,s.jsx(e.span,{className:"hljs-attr",children:"s"}),` = status
    `,s.jsx(e.span,{className:"hljs-attr",children:"aa"}),` = add -A
    `,s.jsx(e.span,{className:"hljs-attr",children:"unadd"}),` = reset HEAD
    `,s.jsx(e.span,{className:"hljs-comment",children:"# etc..."}),`
`]})}),`
`,s.jsx(e.p,{children:"To uninstall an alias, simply remove that line from the config."}),`
`,s.jsx(e.h2,{id:"the-short-list",className:"heading-link",children:s.jsx(e.a,{href:"#the-short-list",children:"the short list"})}),`
`,s.jsxs(e.p,{children:["View ",s.jsx(e.a,{href:"https://gist.github.com/benwilson34/58736ab2b55f7b69f68a0d71d388c072",children:"the short list gist"})," for installation instructions."]}),`
`,s.jsx(e.p,{children:"If you don't want to use all the aliases, these alone will save a ton of typing:"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ini",children:[s.jsx(e.span,{className:"hljs-attr",children:"s"}),` = status
`,s.jsx(e.span,{className:"hljs-attr",children:"aa"}),` = add -A
`,s.jsx(e.span,{className:"hljs-attr",children:"unadd"}),` = reset HEAD
`,s.jsx(e.span,{className:"hljs-attr",children:"c"}),` = commit
`,s.jsx(e.span,{className:"hljs-attr",children:"cm"}),` = commit -m
`,s.jsx(e.span,{className:"hljs-attr",children:"caam"}),` = !git add -A && git commit -m
`,s.jsx(e.span,{className:"hljs-attr",children:"ch"}),` = checkout
`,s.jsx(e.span,{className:"hljs-attr",children:"cb"}),` = checkout -b
`,s.jsx(e.span,{className:"hljs-attr",children:"main"}),` = !git checkout main && git pull
`,s.jsx(e.span,{className:"hljs-attr",children:"m"}),` = merge
`,s.jsx(e.span,{className:"hljs-attr",children:"mm"})," = merge --",s.jsx(e.span,{className:"hljs-literal",children:"no"}),`-edit
`]})}),`
`,s.jsx(e.h2,{id:"the-full-list",className:"heading-link",children:s.jsx(e.a,{href:"#the-full-list",children:"the full list"})}),`
`,s.jsxs(e.p,{children:["View ",s.jsx(e.a,{href:"https://gist.github.com/benwilson34/0a7c031250f0cb21c938402291d32203",children:"the full list gist"})," for installation instructions."]}),`
`,s.jsx(e.p,{children:"Looks like a lot, but don't worry, there are usage examples and explanations below!"}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ini",children:[s.jsx(e.span,{className:"hljs-attr",children:"s"}),` = status
`,s.jsx(e.span,{className:"hljs-attr",children:"discard"}),` = checkout --
`,s.jsx(e.span,{className:"hljs-attr",children:"discardall"}),` = reset --hard HEAD
`,s.jsx(e.span,{className:"hljs-attr",children:"forget"}),` = rm --cached
`,s.jsx(e.span,{className:"hljs-attr",children:"aa"}),` = add -A
`,s.jsx(e.span,{className:"hljs-attr",children:"unadd"}),` = reset HEAD
`,s.jsx(e.span,{className:"hljs-attr",children:"c"}),` = commit
`,s.jsx(e.span,{className:"hljs-attr",children:"cm"}),` = commit -m
`,s.jsx(e.span,{className:"hljs-attr",children:"cam"}),` = commit -am
`,s.jsx(e.span,{className:"hljs-attr",children:"caam"}),` = !git add -A && git commit -m
`,s.jsx(e.span,{className:"hljs-attr",children:"amend"})," = commit --amend --",s.jsx(e.span,{className:"hljs-literal",children:"no"}),`-edit
`,s.jsx(e.span,{className:"hljs-attr",children:"ch"}),` = checkout
`,s.jsx(e.span,{className:"hljs-attr",children:"cb"}),` = checkout -b
`,s.jsx(e.span,{className:"hljs-attr",children:"main"}),` = !git checkout main && git pull
`,s.jsx(e.span,{className:"hljs-attr",children:"m"}),` = merge
`,s.jsx(e.span,{className:"hljs-attr",children:"mm"})," = merge --",s.jsx(e.span,{className:"hljs-literal",children:"no"}),`-edit
`,s.jsx(e.span,{className:"hljs-attr",children:"pulldownbranch"})," = !git fetch origin ",s.jsx(e.span,{className:"hljs-variable",children:"$1"}),":",s.jsx(e.span,{className:"hljs-variable",children:"$1"})," ",s.jsx(e.span,{className:"hljs-comment",children:"#"}),`
`,s.jsx(e.span,{className:"hljs-attr",children:"uncommit"}),` = reset --soft HEAD~
`,s.jsx(e.span,{className:"hljs-attr",children:"graph"})," = log --graph --decorate --",s.jsx(e.span,{className:"hljs-literal",children:"on"}),`eline --simplify-by-decoration
`,s.jsx(e.span,{className:"hljs-attr",children:"showme"})," = show -s --format=",s.jsx(e.span,{className:"hljs-string",children:"'%h %s'"}),`
`,s.jsx(e.span,{className:"hljs-attr",children:"d"}),` = diff -b
`,s.jsx(e.span,{className:"hljs-attr",children:"dw"}),` = diff --word-diff-regex=.
`,s.jsx(e.span,{className:"hljs-attr",children:"stat"}),` = diff --stat
`,s.jsx(e.span,{className:"hljs-attr",children:"aliaslist"}),` = !git config --global -l | grep alias
`,s.jsx(e.span,{className:"hljs-attr",children:"deleteorig"})," = !find . -name ",s.jsx(e.span,{className:"hljs-string",children:"'*.orig'"}),` -delete
`,s.jsx(e.span,{className:"hljs-attr",children:"dt"})," = difftool --",s.jsx(e.span,{className:"hljs-literal",children:"no"}),`-prompt
`,s.jsx(e.span,{className:"hljs-attr",children:"mt"})," = mergetool --",s.jsx(e.span,{className:"hljs-literal",children:"no"}),`-prompt
`]})}),`
`,s.jsx(e.h2,{id:"explanations--usage-examples",className:"heading-link",children:s.jsx(e.a,{href:"#explanations--usage-examples",children:"explanations & usage examples"})}),`
`,s.jsx(e.h3,{id:"adding--discarding-changes",className:"heading-link",children:s.jsx(e.a,{href:"#adding--discarding-changes",children:"adding & discarding changes"})}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ini",children:[s.jsx(e.span,{className:"hljs-attr",children:"s"}),` = status
`,s.jsx(e.span,{className:"hljs-attr",children:"discard"}),` = checkout --
`,s.jsx(e.span,{className:"hljs-attr",children:"discardall"}),` = reset --hard HEAD
`,s.jsx(e.span,{className:"hljs-attr",children:"forget"}),` = rm --cached
`,s.jsx(e.span,{className:"hljs-attr",children:"aa"}),` = add -A
`,s.jsx(e.span,{className:"hljs-attr",children:"unadd"}),` = reset HEAD
`]})}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git s"})," - the humble status, by far my most used command, now only 5 keystrokes!"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git discard somefile.txt"})," - discard (uncommitted) changes made to ",s.jsx(e.code,{children:"somefile.txt"}),". Use with caution!"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git discardall"})," - discard all uncommitted changes. Use with caution!"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git forget someignoredfile.txt"})," - make Git stop tracking ",s.jsx(e.code,{children:"someignoredfile.txt"})," (most likely after it's been added to ",s.jsx(e.code,{children:".gitignore"}),")."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git aa"})," - add changes from all files, including new files."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git unadd somefile.txt"})," - as it sounds, reverse of ",s.jsx(e.code,{children:"git add"}),". Moves the changes to ",s.jsx(e.code,{children:"somefile.txt"})," out of index/staging."]}),`
`]}),`
`,s.jsx(e.h3,{id:"committing",className:"heading-link",children:s.jsx(e.a,{href:"#committing",children:"committing"})}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ini",children:[s.jsx(e.span,{className:"hljs-attr",children:"c"}),` = commit
`,s.jsx(e.span,{className:"hljs-attr",children:"cm"}),` = commit -m
`,s.jsx(e.span,{className:"hljs-attr",children:"cam"}),` = commit -am
`,s.jsx(e.span,{className:"hljs-attr",children:"caam"}),` = !git add -A && git commit -m
`,s.jsx(e.span,{className:"hljs-attr",children:"amend"})," = commit --amend --",s.jsx(e.span,{className:"hljs-literal",children:"no"}),`-edit
`,s.jsx(e.span,{className:"hljs-attr",children:"uncommit"}),` = reset --soft HEAD~
`]})}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git c"})," - commit staged changes."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:'git cm "make some change"'})," - commit with inline message."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:'git cam "make some change"'})," - commit all files (excluding new files) with inline message."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:'git caam "make some change"'})," - commit all files (including new files) with inline message."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git amend"})," - amend staged changes to previous commit, e.g. ",s.jsx(e.code,{children:"git aa && git amend"}),"."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git uncommit"})," - as it sounds, the reverse of ",s.jsx(e.code,{children:"git commit"}),". Remove the previous commit and put the changes back in the working copy."]}),`
`]}),`
`,s.jsx(e.h3,{id:"branching",className:"heading-link",children:s.jsx(e.a,{href:"#branching",children:"branching"})}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ini",children:[s.jsx(e.span,{className:"hljs-attr",children:"ch"}),` = checkout
`,s.jsx(e.span,{className:"hljs-attr",children:"cb"}),` = checkout -b
`,s.jsx(e.span,{className:"hljs-attr",children:"main"}),` = !git checkout main && git pull
`,s.jsx(e.span,{className:"hljs-attr",children:"m"}),` = merge
`,s.jsx(e.span,{className:"hljs-attr",children:"mm"})," = merge --",s.jsx(e.span,{className:"hljs-literal",children:"no"}),`-edit
`,s.jsx(e.span,{className:"hljs-attr",children:"pulldownbranch"})," = !git fetch origin ",s.jsx(e.span,{className:"hljs-variable",children:"$1"}),":",s.jsx(e.span,{className:"hljs-variable",children:"$1"})," ",s.jsx(e.span,{className:"hljs-comment",children:"#"}),`
`]})}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git ch somebranch"})," - checkout ",s.jsx(e.code,{children:"somebranch"}),"."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git cb somenewbranch"})," - create new branch called ",s.jsx(e.code,{children:"somenewbranch"})," and checkout."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git main"})," - checkout ",s.jsx(e.code,{children:"main"})," and get most recent changes."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git m somebranch"})," - merge ",s.jsx(e.code,{children:"somebranch"})," into current branch."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git mm somebranch"})," - merge ",s.jsx(e.code,{children:"somebranch"})," into current branch using default message."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git pulldownbranch somebranch"})," - fetch a copy of ",s.jsx(e.code,{children:"somebranch"})," from the remote without checking it out. Useful for doing diffs/merges using the target branch without having to stash or commit current changes."]}),`
`]}),`
`,s.jsx(e.h3,{id:"viewing-commitschanges",className:"heading-link",children:s.jsx(e.a,{href:"#viewing-commitschanges",children:"viewing commits/changes"})}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ini",children:[s.jsx(e.span,{className:"hljs-attr",children:"graph"})," = log --graph --decorate --",s.jsx(e.span,{className:"hljs-literal",children:"on"}),`eline --simplify-by-decoration
`,s.jsx(e.span,{className:"hljs-attr",children:"showme"})," = show -s --format=",s.jsx(e.span,{className:"hljs-string",children:"'%h %s'"}),`
`,s.jsx(e.span,{className:"hljs-attr",children:"d"}),` = diff -b
`,s.jsx(e.span,{className:"hljs-attr",children:"dw"}),` = diff --word-diff-regex=.
`,s.jsx(e.span,{className:"hljs-attr",children:"stat"}),` = diff --stat
`]})}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git graph"})," - view a condensed and rather pretty graph of the commits/branches in the repo."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git showme somebranch"})," - view the hash & message of the commit. In this case, it's the head (most recent commit) of the branch ",s.jsx(e.code,{children:"somebranch"}),". You can customize the format however you want by following the ",s.jsx(e.a,{href:"https://git-scm.com/docs/pretty-formats",children:"Git pretty formats doc"}),"."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git d"})," - view the current changes, ignoring whitespace changes. To compare two commits, use ",s.jsx(e.code,{children:"git d <commit1> <commit2>"}),", like ",s.jsx(e.code,{children:"git d HEAD~3 HEAD~2"}),"."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git dw"})," - more detailed diff; show changes to individual characters instead of whole lines."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git stat"})," - show current changes as a small graph. Can also be used with two commits like ",s.jsx(e.code,{children:"git d"}),"."]}),`
`]}),`
`,s.jsx(e.h3,{id:"others",className:"heading-link",children:s.jsx(e.a,{href:"#others",children:"others"})}),`
`,s.jsx(e.pre,{children:s.jsxs(e.code,{className:"hljs language-ini",children:[s.jsx(e.span,{className:"hljs-attr",children:"aliaslist"}),` = !git config --global -l | grep alias
`,s.jsx(e.span,{className:"hljs-attr",children:"deleteorig"})," = !find . -name ",s.jsx(e.span,{className:"hljs-string",children:"'\\*.orig'"}),` -delete
`,s.jsx(e.span,{className:"hljs-attr",children:"dt"})," = difftool --",s.jsx(e.span,{className:"hljs-literal",children:"no"}),`-prompt
`,s.jsx(e.span,{className:"hljs-attr",children:"mt"})," = mergetool --",s.jsx(e.span,{className:"hljs-literal",children:"no"}),`-prompt
`]})}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git aliaslist"})," - display all of your global aliases."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git deleteorig"})," - delete all .orig files in the whole local repo, useful after resolving a bunch of merge conflicts."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git dt"})," - if there is a diff program specified, open the current diff without prompting. Can also be used with two commits similar to git d."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"git mt"})," - if there is a merge program specified, open it without prompting. Useful when resolving a bunch of merge conflicts."]}),`
`]}),`
`,s.jsx(e.h2,{id:"conclusion",className:"heading-link",children:s.jsx(e.a,{href:"#conclusion",children:"conclusion"})}),`
`,s.jsx(e.p,{children:"Try these aliases out, hope one or all of these save you some time! And of course, you can adjust these or add your own to suit your needs."}),`
`,s.jsx(e.h3,{id:"bonus-tip",className:"heading-link",children:s.jsx(e.a,{href:"#bonus-tip",children:"bonus tip"})}),`
`,s.jsxs(e.p,{children:["Once you configure Git the way you like, commit the ",s.jsx(e.code,{children:".gitconfig"})," file to a repo, and push them up to GitHub or another Git host. Then on any machine you're working on, you can clone the repo to get the exact same configuration. If you make changes on one machine, commit and push those changes, then on your other machines you can simply ",s.jsx(e.code,{children:"git pull"})," to get the latest!"]}),`
`,s.jsx(e.p,{children:"Maybe I'll write a longer form article about how I set that up on my Windows machine with hard links... 🤔"})]})}function r(n={}){const{wrapper:e}=n.components||{};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}const o=Object.freeze(Object.defineProperty({__proto__:null,default:r,frontmatter:a,meta:c},Symbol.toStringTag,{value:"Module"}));export{r as M,o as _,c as m};
