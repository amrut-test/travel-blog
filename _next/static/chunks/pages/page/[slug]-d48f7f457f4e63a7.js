(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{2738:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/[slug]",function(){return a(5566)}])},4037:function(e,r,a){"use strict";var t=a(5893),s=a(1664),l=a.n(s),n=a(7294);let c=e=>{let{section:r,currentPage:a,totalPages:s}=e,c=[];for(let i=1;i<=s;i++)c.push(i);return(0,t.jsx)(t.Fragment,{children:s>1&&(0,t.jsxs)("nav",{className:"mb-4 flex justify-center space-x-4","aria-label":"Pagination",children:[a>1?(0,t.jsx)(l(),{href:2===a?"".concat(r?"/"+r:"/"):"".concat(r?"/"+r:"","/page/").concat(a-1),className:"rounded-lg border border-primary px-2 py-2 text-dark",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"sr-only",children:"Previous"}),(0,t.jsx)("svg",{className:"mt-1 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})]})}):(0,t.jsx)("span",{className:"rounded-lg border border-primary px-2 py-2 text-dark",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"sr-only",children:"Previous"}),(0,t.jsx)("svg",{className:"mt-1 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})]})}),c.map((e,s)=>(0,t.jsx)(n.Fragment,{children:e===a?(0,t.jsx)("span",{"aria-current":"page",className:"rounded-lg border border-primary bg-primary px-4 py-2 text-white",children:e}):(0,t.jsx)(l(),{href:0===s?"".concat(r?"/"+r:"/"):"".concat(r?"/"+r:"","/page/").concat(e),passHref:!0,"aria-current":"page",className:"rounded-lg border border-primary px-4 py-2 text-dark",children:e})},"page-".concat(s))),s>a?(0,t.jsx)(l(),{href:"".concat(r?"/"+r:"","/page/").concat(a+1),className:"rounded-lg border border-primary px-2 py-2 text-dark",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"sr-only",children:"Next"}),(0,t.jsx)("svg",{className:"mt-1 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})}):(0,t.jsx)("span",{className:"rounded-lg border border-primary px-2 py-2 text-dark",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"sr-only",children:"Next"}),(0,t.jsx)("svg",{className:"mt-1 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})})]})})};r.Z=c},2324:function(e,r,a){"use strict";var t=a(5893),s=a(6626),l=a(4996),n=a(1360),c=a(5675),i=a.n(c),o=a(1664),d=a.n(o);let m=e=>{let{posts:r,authors:a,className:c}=e,{summary_length:o}=s.Xd;return(0,t.jsx)("div",{className:"row space-y-10 ".concat(c),children:r.map((e,r)=>(0,t.jsxs)("div",{className:"".concat(0===r?"col-12":"col-12 sm:col-6"," shadow-lg hover:scale-105 duration-200 dark:shadow-slate-700 rounded-lg p-5"),children:[e.frontmatter.image&&(0,t.jsx)(d(),{href:"/".concat(e.slug),className:"block hover:text-primary",children:(0,t.jsx)(i(),{className:"rounded-lg",src:e.frontmatter.image,alt:e.frontmatter.title,width:0===r?"925":"445",height:0===r?"475":"230",priority:0===r})}),(0,t.jsxs)("ul",{className:"mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text",children:[(0,t.jsx)("li",{children:a.filter(r=>e.frontmatter.authors.map(e=>(0,n.lV)(e)).includes((0,n.lV)(r.frontmatter.title))).map((e,r)=>(0,t.jsxs)(d(),{href:"/authors/".concat((0,n.lV)(e.frontmatter.title)),className:"flex items-center hover:text-primary",children:[e.frontmatter.image&&(0,t.jsx)(i(),{src:e.frontmatter.image,alt:e.frontmatter.title,height:50,width:50,className:"mr-2 h-6 w-6 rounded-full"}),(0,t.jsx)("span",{children:e.frontmatter.title})]},"author-".concat(r)))}),(0,t.jsx)("li",{children:(0,l.Z)(e.frontmatter.date)}),(0,t.jsx)("li",{children:(0,t.jsx)("ul",{children:e.frontmatter.categories.map((e,r)=>(0,t.jsx)("li",{className:"inline-block",children:(0,t.jsxs)(d(),{href:"/categories/".concat((0,n.lV)(e)),className:"mr-3 hover:text-primary",children:["▣ ",(0,n.OI)(e)]})},"category-".concat(r)))})})]}),(0,t.jsx)("h3",{className:"mb-2",children:(0,t.jsx)(d(),{href:"/".concat(e.slug),className:"block hover:text-primary",children:e.frontmatter.title})}),(0,t.jsxs)("p",{className:"text-text",children:[e.content&&e.content.slice(0,Number(o)),"..."]})]},"key-".concat(r)))})};r.Z=m},4996:function(e,r,a){"use strict";var t=a(722);let s=e=>(0,t.formatInTimeZone)(e,"America/New_York","dd MMM yyyy");r.Z=s},5566:function(e,r,a){"use strict";a.r(r),a.d(r,{__N_SSG:function(){return i}});var t=a(5893),s=a(4037),l=a(2909),n=a(2324);let c=e=>{let{posts:r,authors:a,currentPage:c,pagination:i}=e,o=c*i,d=Math.ceil(r.length/i),m=r.slice(o-i,o);return(0,t.jsx)(l.Z,{children:(0,t.jsx)("section",{className:"section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"pb-5",children:[(0,t.jsx)("div",{className:"pb-4 text-5xl text-slate-700 dark:text-slate-300",children:"Articles"}),(0,t.jsx)("hr",{})]}),(0,t.jsx)(n.Z,{className:"mb-16",posts:m,authors:a}),(0,t.jsx)(s.Z,{totalPages:d,currentPage:c})]})})})};var i=!0;r.default=c}},function(e){e.O(0,[260,148,722,909,774,888,179],function(){return e(e.s=2738)}),_N_E=e.O()}]);