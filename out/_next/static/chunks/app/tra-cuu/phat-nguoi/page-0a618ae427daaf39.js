(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{22513:function(e,t,a){Promise.resolve().then(a.bind(a,25118))},52711:function(e,t,a){"use strict";var s=a(29222),l=a(47713);let r=s.Z.create({baseURL:"http"});r.interceptors.request.use(e=>{var t;return{...e,headers:{...(null==e?void 0:e.headers)||{},Authorization:"Bearer ".concat(null!==(t=(0,l.getCookie)("Authorization"))&&void 0!==t?t:""),"Content-Type":"application/json",Accept:"*/*"}}}),t.Z=r},33379:function(e,t,a){"use strict";a.d(t,{x:function(){return g}});var s=a(57437),l=a(93378),r=a(2265),n=a(1704),i=a(40754),o=a(22703);let d=n.fC;n.xz;let c=e=>{let{className:t,...a}=e;return(0,s.jsx)(n.h_,{className:(0,o.cn)(t),...a})};c.displayName=n.h_.displayName;let u=r.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(n.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80",a),...l})});u.displayName=n.aV.displayName;let f=r.forwardRef((e,t)=>{let{className:a,children:l,...r}=e;return(0,s.jsxs)(c,{children:[(0,s.jsx)(u,{}),(0,s.jsxs)(n.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",a),...r,children:[l,(0,s.jsxs)(n.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400",children:[(0,s.jsx)(i.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=n.VY.displayName;let p=r.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(n.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",a),...l})});p.displayName=n.Dx.displayName;let h=r.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(n.dk,{ref:t,className:(0,o.cn)("text-sm text-slate-500 dark:text-slate-400",a),...l})});h.displayName=n.dk.displayName;var x=a(24033);function g(e){let t=(0,x.useRouter)();return(0,s.jsx)("div",{children:(0,s.jsx)(d,{open:e.isShowDialog,onOpenChange:()=>{t.push("/dang-nhap")},children:(0,s.jsx)(f,{className:"sm:max-w-[425px]",children:(0,s.jsxs)("div",{className:"grid gap-4 py-4",children:[(0,s.jsx)("p",{children:"Phi\xean đăng nhập hết hạn, Vui l\xf2ng đăng nhập lại"}),(0,s.jsx)(l.z,{onClick:()=>t.push("/dang-nhap"),children:"Đăng nhập lại"})]})})})})}},25118:function(e,t,a){"use strict";a.r(t);var s=a(57437),l=a(52711),r=a(93378),n=a(93695),i=a(2265),o=a(33379),d=a(98315);t.default=()=>{let[e,t]=(0,i.useState)(!1),[a,c]=(0,i.useState)(null),[u,f]=(0,i.useState)([]),[p,h]=(0,i.useState)(""),[x,g]=(0,i.useState)(null),[m,b]=(0,i.useState)(!1),v=()=>{f([])},k=async()=>{v(),d.b.start(),b(!0);try{let e=p.replaceAll(/\s+/g,"").split(/[,;]/),t=[];for(let a of e){let e=await l.Z.post("http://14.225.5.61/iEnterprise/oauth/enterprise/minvoice/getTrafficSanction",{licenseNumber:a});console.log(e),t.push(a+"\n"+e.data.data)}f(t),y(t),b(!1)}catch(a){var e;d.b.stop(),(null==a?void 0:null===(e=a.response)||void 0===e?void 0:e.status)===401&&t(!0)}d.b.stop()},y=e=>{g(null);for(let t=0;t<e.length;t++){let a=e[t].split("\n");for(let e=0;e<a.length;e++)if("KIỂM TRA PHẠT NGUỘI"===a[e]){let e=a.slice(0,1).concat(a.slice(7));if(console.log(e),"Ch\xfac mừng!"===e[2]){console.log("??"),g(t=>(0,s.jsxs)(s.Fragment,{children:[t,(0,s.jsx)("hr",{className:"my-5 mx-10 bg-black h-[2px]"}),(0,s.jsxs)("div",{className:"pl-10",children:[(0,s.jsx)("p",{children:e[2]}),(0,s.jsx)("p",{children:e[3]})]})]}));break}g(t=>(0,s.jsxs)("div",{children:[t,(0,s.jsx)("hr",{className:"my-5 mx-10 bg-black h-[2px]"}),(0,s.jsx)("div",{className:"pl-10",children:e.slice(0,e.length-5).map((e,t)=>(0,s.jsx)("p",{children:0===t?"Biển số: ".concat(e.replace(/(\d{2}[A-Z])/,"$1-").replace(/(\d{2})(\d{2})$/,"$1.$2")):e}))})]}));break}}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.x,{isShowDialog:e}),(0,s.jsxs)("div",{className:"mt-10 min-w-fit w-1/2 mx-auto",children:[(0,s.jsx)(n.I,{onChange:e=>h(e.target.value),placeholder:"Kh\xf4ng cần nhập c\xe1c k\xed tự đặc biệt như . - "}),(0,s.jsx)("span",{className:"text-[14px] text-gray-500",children:"Nhập v\xe0o biển số xe hợp lệ, v\xed dụ: 20C11770. C\xe1c biển số xe c\xe1ch nhau bằng dấu , hoặc ;"}),(0,s.jsx)(r.z,{disabled:m,type:"button",onClick:k,className:"block mt-5 mx-auto",children:m?"Đang tra cứu":"Tra cứu"})]}),x]})}},93378:function(e,t,a){"use strict";a.d(t,{z:function(){return d}});var s=a(57437),l=a(2265),r=a(67256),n=a(96061),i=a(22703);let o=(0,n.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2  disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-800",{variants:{variant:{default:"bg-[#6366F1] text-slate-50 hover:bg-[#6366F1] dark:bg-[#6366F1] dark:text-slate-900 dark:hover:bg-[#6366F1]",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=l.forwardRef((e,t)=>{let{className:a,variant:l,size:n,asChild:d=!1,...c}=e,u=d?r.g7:"button";return(0,s.jsx)(u,{className:(0,i.cn)(o({variant:l,size:n,className:a})),ref:t,...c})});d.displayName="Button"},93695:function(e,t,a){"use strict";a.d(t,{I:function(){return n}});var s=a(57437),l=a(2265),r=a(22703);let n=l.forwardRef((e,t)=>{let{className:a,type:l,...n}=e;return(0,s.jsx)("input",{type:l,className:(0,r.cn)("flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",a),ref:t,...n})});n.displayName="Input"},22703:function(e,t,a){"use strict";a.d(t,{cn:function(){return r}});var s=a(57042),l=a(23986);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,l.m)((0,s.W)(t))}},98315:function(e,t,a){"use strict";a.d(t,{b:function(){return s}}),a(57437);let s={start:()=>{document.getElementById("app-loading-overlay").style.display="flex"},stop:()=>{document.getElementById("app-loading-overlay").style.display="none"}}}},function(e){e.O(0,[444,602,919,971,596,744],function(){return e(e.s=22513)}),_N_E=e.O()}]);