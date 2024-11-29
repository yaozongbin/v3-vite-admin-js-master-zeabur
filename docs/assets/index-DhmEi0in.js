import{C as Y,d as re,r as Te,a as k,_ as V,u as G,c as E,b as g,o as f,e as w,f as h,g as d,w as _,T as ve,h as S,i as ne,j as u,K as Ve,k as ae,l as le,m as B,t as M,n as oe,F as D,p as $e,q as Ae,s as Me,v as j,x as P,y as ie,z as ce,A as ge,E as we,B as R,D as A,G as Fe,H as ue,I as Le,J as Ie,L as Pe,M as Ne,N as Re,O as De,P as ze,Q as He,R as Be,S as Oe,U as Ue,V as qe,W as Xe,X as Ge}from"./index-D3UxO2Fv.js";const We=()=>localStorage.getItem(Y.SIDEBAR_STATUS),ee=n=>{localStorage.setItem(Y.SIDEBAR_STATUS,n)},je=()=>localStorage.getItem(Y.ACTIVE_THEME_NAME||null),Ye=n=>{localStorage.setItem(Y.ACTIVE_THEME_NAME,n)},O={Mobile:0,Desktop:1},K=re("app",()=>{const n=Te({opened:We()!=="closed",withoutAnimation:!1}),e=k(O.Desktop);return{device:e,sidebar:n,toggleSidebar:s=>{n.opened=!n.opened,n.withoutAnimation=s,n.opened?ee("opened"):ee("closed")},toggleDevice:s=>{e.value=s},closeSidebar:s=>{n.opened=!1,n.withoutAnimation=s,ee("closed")}}}),W={Left:"left",Top:"top",LeftTop:"left-top"},F={layoutMode:W.Left,showSettings:!0,showTagsView:!0,fixedHeader:!0,fixedFooter:!0,showSidebarLogo:!0,showNotify:!0,showThemeSwitch:!0,showScreenfull:!0,showGreyMode:!1,showColorWeakness:!1},q=re("settings",()=>{const n=k(F.layoutMode),e=k(F.fixedHeader),t=k(F.fixedFooter),o=k(F.showSettings),r=k(F.showTagsView),s=k(F.showSidebarLogo),a=k(F.showNotify),l=k(F.showThemeSwitch),i=k(F.showScreenfull),p=k(F.showGreyMode),m=k(F.showColorWeakness);return{setLayoutMode:v=>{n.value=v,console.log(v)},layoutMode:n,fixedHeader:e,fixedFooter:t,showSettings:o,showTagsView:r,showSidebarLogo:s,showNotify:a,showThemeSwitch:l,showScreenfull:i,showGreyMode:p,showColorWeakness:m}}),Ke={class:"app-main"},Je={class:"app-scrollabr"},Ze={setup(n){const e=G(),t=E(()=>e.path);return(o,r)=>{const s=g("router-view"),a=g("el-backtop");return f(),w("section",Ke,[h("div",Je,[d(s,null,{default:_(({Component:l})=>[d(ve,{name:"fade-transform",mode:"out-in"},{default:_(()=>[(f(),S(Ve,null,[(f(),S(ne(l),{key:u(t),class:"app-container-grow"}))],1024))]),_:2},1024)]),_:1})]),d(a,{right:50,bottom:50})])}}},Qe=V(Ze,[["__scopeId","data-v-70e6ce96"]]);function et(n){for(var e=[],t=0;t<n.length;){var o=n[t];if(o==="*"||o==="+"||o==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(o==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(o==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(o==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(o===":"){for(var r="",s=t+1;s<n.length;){var a=n.charCodeAt(s);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){r+=n[s++];continue}break}if(!r)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:r}),t=s;continue}if(o==="("){var l=1,i="",s=t+1;if(n[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<n.length;){if(n[s]==="\\"){i+=n[s++]+n[s++];continue}if(n[s]===")"){if(l--,l===0){s++;break}}else if(n[s]==="("&&(l++,n[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));i+=n[s++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(t));if(!i)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:i}),t=s;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function tt(n,e){e===void 0&&(e={});for(var t=et(n),o=e.prefixes,r=o===void 0?"./":o,s="[^".concat(st(e.delimiter||"/#?"),"]+?"),a=[],l=0,i=0,p="",m=function(z){if(i<t.length&&t[i].type===z)return t[i++].value},c=function(z){var X=m(z);if(X!==void 0)return X;var me=t[i],ke=me.type,Ee=me.index;throw new TypeError("Unexpected ".concat(ke," at ").concat(Ee,", expected ").concat(z))},v=function(){for(var z="",X;X=m("CHAR")||m("ESCAPED_CHAR");)z+=X;return z};i<t.length;){var y=m("CHAR"),x=m("NAME"),b=m("PATTERN");if(x||b){var C=y||"";r.indexOf(C)===-1&&(p+=C,C=""),p&&(a.push(p),p=""),a.push({name:x||l++,prefix:C,suffix:"",pattern:b||s,modifier:m("MODIFIER")||""});continue}var T=y||m("ESCAPED_CHAR");if(T){p+=T;continue}p&&(a.push(p),p="");var Z=m("OPEN");if(Z){var C=v(),fe=m("NAME")||"",Q=m("PATTERN")||"",Ce=v();c("CLOSE"),a.push({name:fe||(Q?l++:""),pattern:fe&&!Q?s:Q,prefix:C,suffix:Ce,modifier:m("MODIFIER")||""});continue}c("END")}return a}function nt(n,e){return ot(tt(n,e),e)}function ot(n,e){e===void 0&&(e={});var t=rt(e),o=e.encode,r=o===void 0?function(i){return i}:o,s=e.validate,a=s===void 0?!0:s,l=n.map(function(i){if(typeof i=="object")return new RegExp("^(?:".concat(i.pattern,")$"),t)});return function(i){for(var p="",m=0;m<n.length;m++){var c=n[m];if(typeof c=="string"){p+=c;continue}var v=i?i[c.name]:void 0,y=c.modifier==="?"||c.modifier==="*",x=c.modifier==="*"||c.modifier==="+";if(Array.isArray(v)){if(!x)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(v.length===0){if(y)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var b=0;b<v.length;b++){var C=r(v[b],c);if(a&&!l[m].test(C))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(C,'"'));p+=c.prefix+C+c.suffix}continue}if(typeof v=="string"||typeof v=="number"){var C=r(String(v),c);if(a&&!l[m].test(C))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(C,'"'));p+=c.prefix+C+c.suffix;continue}if(!y){var T=x?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(T))}}return p}}function st(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function rt(n){return n&&n.sensitive?"":"i"}const at={key:0,class:"no-redirect"},lt=["onClick"],it={setup(n){const e=G(),t=ae(),o=k([]),r=()=>{o.value=e.matched.filter(l=>l.meta&&l.meta.title&&l.meta.breadcrumb!==!1)},s=l=>{const{params:i}=e;return nt(l)(i)},a=l=>{const{redirect:i,path:p}=l;if(i){t.push(i);return}t.push(s(p))};return le(()=>e.path,l=>{l.startsWith("/redirect/")||r()}),r(),(l,i)=>{const p=g("el-breadcrumb-item"),m=g("el-breadcrumb");return f(),S(m,{class:"app-breadcrumb"},{default:_(()=>[(f(!0),w(D,null,B(o.value,(c,v)=>(f(),S(p,{key:c.path},{default:_(()=>[c.redirect==="noredirect"||v===o.value.length-1?(f(),w("span",at,M(c.meta.title),1)):(f(),w("a",{key:1,onClick:oe(y=>a(c),["prevent"]),href:""},M(c.meta.title),9,lt))]),_:2},1024))),128))]),_:1})}}},ct=V(it,[["__scopeId","data-v-8b0dda9c"]]),ut={props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],setup(n,{emit:e}){const t=n,o=()=>{e("toggle-click")};return(r,s)=>{const a=g("el-icon");return f(),w("div",{onClick:o},[d(a,{size:20,class:"icon"},{default:_(()=>[t.isActive?(f(),S(u($e),{key:0})):(f(),S(u(Ae),{key:1}))]),_:1})])}}},dt={props:{panelContent:{type:String,default:"主题配置"}},setup(n){const e=k(!1);return(t,o)=>{const r=g("el-icon"),s=g("el-tooltip"),a=g("el-drawer");return f(),w("div",{class:"handle-button",onClick:o[1]||(o[1]=l=>e.value=!0)},[d(s,{content:n.panelContent,placement:"top"},{default:_(()=>[d(r,{size:24},{default:_(()=>[d(u(Me))]),_:1})]),_:1},8,["content"]),d(a,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),size:"300px","with-header":!1},{default:_(()=>[j(t.$slots,"default",{},void 0,!0)]),_:3},8,["modelValue"])])}}},ft=V(dt,[["__scopeId","data-v-927200b1"]]),J=q(),mt=E(()=>J.layoutMode===W.Left),pt=E(()=>J.layoutMode===W.Top),_t=E(()=>J.layoutMode===W.LeftTop),ht=n=>{J.setLayoutMode(n)};function vt(){return{isLeft:mt,isTop:pt,isLeftTop:_t,setLayoutMode:ht}}const gt={class:"select-layout-mode"},wt={setup(n){const{isTop:e,setLayoutMode:t}=vt();return(o,r)=>{const s=g("el-header"),a=g("el-main"),l=g("el-container"),i=g("el-tooltip");return f(),w("div",gt,[d(i,{content:"顶部模式"},{default:_(()=>[d(l,{class:P(["layout-mode top",{active:u(e)}]),onClick:r[0]||(r[0]=p=>u(t)(u(W).Top))},{default:_(()=>[d(s),d(a)]),_:1},8,["class"])]),_:1})])}}},bt=V(wt,[["__scopeId","data-v-930f6bfa"]]),L=n=>(ie("data-v-084d5c0c"),n=n(),ce(),n),yt={class:"drawer-container"},St=L(()=>h("h4",{style:{"text-align":"center"}},"布局配置",-1)),xt=L(()=>h("h3",{class:"drawer-title"},"系统布局配置",-1)),Ct={class:"drawer-item"},kt=L(()=>h("span",null,"显示标签栏",-1)),Et={class:"drawer-item"},Tt=L(()=>h("span",null,"显示侧边栏 Logo",-1)),Vt={class:"drawer-item"},$t=L(()=>h("span",null,"固定 Header",-1)),At={class:"drawer-item"},Mt=L(()=>h("span",null,"固定 Footer",-1)),Ft={class:"drawer-item"},Lt=L(()=>h("span",null,"显示消息通知",-1)),It={class:"drawer-item"},Pt=L(()=>h("span",null,"显示切换主题按钮",-1)),Nt={class:"drawer-item"},Rt=L(()=>h("span",null,"显示全屏按钮",-1)),Dt={class:"drawer-item"},zt=L(()=>h("span",null,"显示灰色模式",-1)),Ht={class:"drawer-item"},Bt=L(()=>h("span",null,"显示色弱模式",-1)),Ot={setup(n){const e=q();return(t,o)=>{const r=g("el-switch");return f(),w("div",yt,[St,d(bt),h("div",null,[xt,h("div",Ct,[kt,d(r,{modelValue:u(e).showTagsView,"onUpdate:modelValue":o[0]||(o[0]=s=>u(e).showTagsView=s),class:"drawer-switch"},null,8,["modelValue"])]),h("div",Et,[Tt,d(r,{modelValue:u(e).showSidebarLogo,"onUpdate:modelValue":o[1]||(o[1]=s=>u(e).showSidebarLogo=s),class:"drawer-switch"},null,8,["modelValue"])]),h("div",Vt,[$t,d(r,{modelValue:u(e).fixedHeader,"onUpdate:modelValue":o[2]||(o[2]=s=>u(e).fixedHeader=s),class:"drawer-switch"},null,8,["modelValue"])]),h("div",At,[Mt,d(r,{modelValue:u(e).fixedFooter,"onUpdate:modelValue":o[3]||(o[3]=s=>u(e).fixedFooter=s),class:"drawer-switch"},null,8,["modelValue"])]),h("div",Ft,[Lt,d(r,{modelValue:u(e).showNotify,"onUpdate:modelValue":o[4]||(o[4]=s=>u(e).showNotify=s),class:"drawer-switch"},null,8,["modelValue"])]),h("div",It,[Pt,d(r,{modelValue:u(e).showThemeSwitch,"onUpdate:modelValue":o[5]||(o[5]=s=>u(e).showThemeSwitch=s),class:"drawer-switch"},null,8,["modelValue"])]),h("div",Nt,[Rt,d(r,{modelValue:u(e).showScreenfull,"onUpdate:modelValue":o[6]||(o[6]=s=>u(e).showScreenfull=s),class:"drawer-switch"},null,8,["modelValue"])]),h("div",Dt,[zt,d(r,{modelValue:u(e).showGreyMode,"onUpdate:modelValue":o[7]||(o[7]=s=>u(e).showGreyMode=s),class:"drawer-switch"},null,8,["modelValue"])]),h("div",Ht,[Bt,d(r,{modelValue:u(e).showColorWeakness,"onUpdate:modelValue":o[8]||(o[8]=s=>u(e).showColorWeakness=s),class:"drawer-switch"},null,8,["modelValue"])])])])}}},Ut=V(Ot,[["__scopeId","data-v-084d5c0c"]]),pe=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],N=(()=>{if(typeof document>"u")return!1;const n=pe[0],e={};for(const t of pe)if((t==null?void 0:t[1])in document){for(const[r,s]of t.entries())e[n[r]]=s;return e}return!1})(),_e={change:N.fullscreenchange,error:N.fullscreenerror};let $={request(n=document.documentElement,e){return new Promise((t,o)=>{const r=()=>{$.off("change",r),t()};$.on("change",r);const s=n[N.requestFullscreen](e);s instanceof Promise&&s.then(r).catch(o)})},exit(){return new Promise((n,e)=>{if(!$.isFullscreen){n();return}const t=()=>{$.off("change",t),n()};$.on("change",t);const o=document[N.exitFullscreen]();o instanceof Promise&&o.then(t).catch(e)})},toggle(n,e){return $.isFullscreen?$.exit():$.request(n,e)},onchange(n){$.on("change",n)},onerror(n){$.on("error",n)},on(n,e){const t=_e[n];t&&document.addEventListener(t,e,!1)},off(n,e){const t=_e[n];t&&document.removeEventListener(t,e,!1)},raw:N};Object.defineProperties($,{isFullscreen:{get:()=>!!document[N.fullscreenElement]},element:{enumerable:!0,get:()=>document[N.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[N.fullscreenEnabled]}});N||($={isEnabled:!1});const H=$,qt={props:{element:{type:String,default:"html"},openTips:{type:String,default:"全屏"},exitTips:{type:String,default:"退出全屏"},contentOpenTips:{type:String,default:"内容页放大"},contentExitTips:{type:String,default:"内容页复原"},content:{type:Boolean,default:!1}},setup(n){const e=n,t=k(!1),o=E(()=>t.value?e.exitTips:e.openTips),r=E(()=>t.value?"fullscreen-exit":"fullscreen"),s=()=>{const c=document.querySelector(e.element)||void 0;H.isEnabled?H.toggle(c):we.warning("您的浏览器无法工作")},a=()=>{t.value=H.isFullscreen,t.value||(document.body.className="")};ge(c=>{H.isEnabled&&H.on("change",a),c(()=>{H.isEnabled&&H.off("change",a)})});const l=k(!1),i=E(()=>l.value?e.contentExitTips:e.contentOpenTips),p=E(()=>l.value?"fullscreen-exit":"fullscreen"),m=()=>{l.value=!l.value,document.body.className=l.value?"content-large":""};return(c,v)=>{const y=g("svg-icon"),x=g("el-tooltip");return n.content?(f(),S(x,{key:1,effect:"dark",content:u(i),placement:"bottom"},{default:_(()=>[d(y,{name:u(p),onClick:m},null,8,["name"])]),_:1},8,["content"])):(f(),S(x,{key:0,effect:"dark",content:u(o),placement:"bottom"},{default:_(()=>[d(y,{name:u(r),onClick:s},null,8,["name"])]),_:1},8,["content"]))}}},be=V(qt,[["__scopeId","data-v-969ec2a2"]]),Xt={class:"card-header"},Gt={class:"card-title"},Wt={class:"card-time"},jt={key:0,class:"card-avatar"},Yt=["src"],Kt={class:"card-body"},Jt={props:{list:{type:Object,required:!0}},setup(n){const e=n;return(t,o)=>{const r=g("el-empty"),s=g("el-tag"),a=g("el-card");return e.list.length===0?(f(),S(r,{key:0})):(f(!0),w(D,{key:1},B(e.list,(l,i)=>(f(),S(a,{key:i,shadow:"never",class:"card-container"},{header:_(()=>[h("div",Xt,[h("div",null,[h("span",null,[h("span",Gt,M(l.title),1),l.extra?(f(),S(s,{key:0,type:l.status,effect:"plain",size:"small"},{default:_(()=>[R(M(l.extra),1)]),_:2},1032,["type"])):A("",!0)]),h("div",Wt,M(l.datetime),1)]),l.avatar?(f(),w("div",jt,[h("img",{src:l.avatar,width:"34",alt:"NotifyFreeIcon"},null,8,Yt)])):A("",!0)])]),default:_(()=>[h("div",Kt,M(l.description??"No Data"),1)]),_:2},1024))),128))}}},Zt=V(Jt,[["__scopeId","data-v-f29226a4"]]),Qt=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"Notify组件完成",datetime:"一个月前",description:"mock数据配合el-card遍历挂载到页面上去,使用Vue的computed钩子函数计算角标值,以组件方式引入ElementPlus@icon里的图标。"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"Screenfull组件完成",datetime:"两个月前",description:"利用插件screenfull.js配合el-tooltip进行放大全屏功能,配合封装svg-icon来实现图标的切换。"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"SvgIcon组件完成",datetime:"四个月前",description:"iconfont官网下载svg图标,封装svgicon组件便于各个组件之间交互使用svg图标。"}],en=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"Star Wars",description:"May the Force be with you.",datetime:"2023-10-1"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"Casablanca",description:"Here's looking at you, kid",datetime:"2023-11-11"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"Forrest Gump",description:"Life is like a box of chocolates, you never know what you're gonna get",datetime:"2024-4-7"}],tn=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:""},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],nn={class:"notify"},on={class:"notify-history"},sn={setup(n){const e=E(()=>{let l=0;for(let i=0;i<s.value.length;i++)l+=s.value[i].list.length;return l}),t=99,o=350,r=k("通知"),s=k([{name:"通知",type:"primary",list:Qt},{name:"消息",type:"danger",list:en},{name:"待办",type:"warning",list:tn}]),a=()=>{we.success(`跳转到${r.value}历史页面`)};return(l,i)=>{const p=g("el-icon"),m=g("el-tooltip"),c=g("el-badge"),v=g("el-scrollbar"),y=g("el-tab-pane"),x=g("el-tabs"),b=g("el-button"),C=g("el-popover");return f(),w("div",nn,[d(C,{placement:"bottom",width:o,trigger:"click"},{reference:_(()=>[d(c,{value:u(e),max:t,hidden:u(e)===0},{default:_(()=>[d(m,{effect:"dark",content:"消息通知",placement:"bottom"},{default:_(()=>[d(p,{size:20},{default:_(()=>[d(u(Fe))]),_:1})]),_:1})]),_:1},8,["value","hidden"])]),default:_(()=>[d(x,{modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=T=>r.value=T),class:"demo-tabs",stretch:""},{default:_(()=>[(f(!0),w(D,null,B(s.value,(T,Z)=>(f(),S(y,{name:T.name,key:Z},{label:_(()=>[R(M(T.name)+" ",1),d(c,{value:T.list.length,max:t,type:T.type},null,8,["value","type"])]),default:_(()=>[d(v,{height:"400px"},{default:_(()=>[d(Zt,{list:T.list},null,8,["list"])]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),h("div",on,[d(b,{link:"",onClick:a},{default:_(()=>[R("查看"+M(r.value)+"历史",1)]),_:1})])]),_:1})])}}},rn=V(sn,[["__scopeId","data-v-eab12092"]]),ye="normal",an=[{title:"默认",name:ye},{title:"暗黑",name:"dark"},{title:"深蓝",name:"dark-blue"}],de=k(je()||ye),ln=n=>{console.log("主题模式:",n),de.value=n},cn=n=>{document.documentElement.className=n,console.log("设置主题模式:",n)},un=()=>{ge(()=>{const n=de.value;cn(n),Ye(n)})};function dn(){return{themeList:an,activeThemeName:de,initTheme:un,setTheme:ln}}const fn={setup(n){const{themeList:e,activeThemeName:t,setTheme:o,initTheme:r}=dn(),s=(a,l)=>{const i=a.clientX,p=a.clientY,m=Math.hypot(Math.max(i,window.innerWidth-i),Math.max(p,window.innerHeight-p)),c=document.documentElement.style;c.setProperty("--v3-theme-x",`${i}px`),c.setProperty("--v3-theme-y",`${p}px`),c.setProperty("--v3-theme-r",`${m}px`);const v=()=>{document.body.classList.add("theme-transition"),setTimeout(()=>{o(l),document.body.classList.remove("theme-transition")},500)};document.startViewTransition?document.startViewTransition(v):v()};return ue(()=>{r()}),(a,l)=>{const i=g("el-icon"),p=g("el-tooltip"),m=g("el-dropdown-item"),c=g("el-dropdown-menu"),v=g("el-dropdown");return f(),w("div",null,[d(v,{trigger:"click"},{dropdown:_(()=>[d(c,null,{default:_(()=>[(f(!0),w(D,null,B(u(e),(y,x)=>(f(),S(m,{"aria-hidden":"true",key:x,disabled:u(t)===y.name,onClick:b=>s(b,y.name)},{default:_(()=>[h("span",null,M(y.title),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),default:_(()=>[h("div",null,[d(p,{effect:"dark",content:"主题模式",placement:"bottom"},{default:_(()=>[d(i,{size:20},{default:_(()=>[d(u(Le))]),_:1})]),_:1})])]),_:1})])}}},mn={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",class:"icon",viewBox:"0 0 1024 1024"},pn=h("path",{d:"M64 512c0 195.2 124.8 361.6 300.8 422.4 22.4 6.4 19.2-9.6 19.2-22.4v-76.8c-134.4 16-140.8-73.6-150.4-89.6-19.2-32-60.8-38.4-48-54.4 32-16 64 3.2 99.2 57.6 25.6 38.4 76.8 32 105.6 25.6 6.4-22.4 19.2-44.8 35.2-60.8C281.6 691.2 224 604.8 224 502.4c0-48 16-96 48-131.2-22.4-60.8 0-115.2 3.2-121.6 57.6-6.4 118.4 41.6 124.8 44.8 32-9.6 70.4-12.8 112-12.8s80 6.4 112 12.8c12.8-9.6 67.2-48 121.6-44.8 3.2 6.4 25.6 57.6 6.4 118.4 32 38.4 48 83.2 48 131.2 0 102.4-57.6 188.8-201.6 214.4 22.4 22.4 38.4 54.4 38.4 92.8v112c0 9.6 0 19.2 16 19.2C832 876.8 960 710.4 960 512c0-246.4-201.6-448-448-448S64 265.6 64 512"},null,-1),_n=[pn];function hn(n,e){return f(),w("svg",mn,[..._n])}const vn={render:hn},gn={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",class:"icon",viewBox:"0 0 1024 1024"},wn=h("path",{fill:"#D81E06",d:"M512 960C265.6 960 64 758.4 64 512S265.6 64 512 64s448 201.6 448 448-201.6 448-448 448"},null,-1),bn=h("path",{fill:"#FFF",d:"M721.664 467.968h-235.52a22.27 22.27 0 0 0-20.736 20.736v51.776c0 10.368 10.368 20.736 20.736 20.736H628.48c10.368 0 20.736 10.304 20.736 20.672v10.368c0 33.664-28.48 62.08-62.144 62.08H392.896a22.27 22.27 0 0 1-20.672-20.672V436.928c0-33.664 28.48-62.08 62.08-62.08h287.36a22.27 22.27 0 0 0 20.736-20.736v-51.84a22.27 22.27 0 0 0-20.736-20.672h-287.36A152.96 152.96 0 0 0 281.6 434.368v287.36c0 10.304 10.368 20.672 20.736 20.672h302.848c75.072 0 137.216-62.08 137.216-137.216v-116.48a22.27 22.27 0 0 0-20.736-20.736"},null,-1),yn=[wn,bn];function Sn(n,e){return f(),w("svg",gn,[...yn])}const xn={render:Sn},Cn={xmlns:"http://www.w3.org/2000/svg",width:"23.375",height:"16",class:"icon",viewBox:"0 0 1496 1024"},kn=h("path",{d:"M329.563 659.126c43.157-39.233 62.774-94.16 58.85-149.088 3.924-43.157-11.77-86.314-39.233-117.7-23.54-19.618-51.004-31.388-82.39-31.388q41.195-17.655 58.85-58.85c19.617-35.31 31.387-78.468 31.387-121.625 3.923-51.004-11.77-102.008-47.08-141.241C270.712 11.77 223.631 0 176.551 0H0v721.9h180.475c54.927 3.924 109.855-19.616 149.088-62.774M58.851 58.851h117.7c66.698 0 117.702 54.927 117.702 121.624 0 39.234-15.694 82.39-35.31 113.778-19.617 27.463-51.004 39.234-82.391 35.31H58.85zm31.387 329.563h90.237c94.161 0 149.088 51.004 149.088 121.624 0 31.387-11.77 62.774-31.387 90.238-27.463 35.31-74.544 58.85-117.7 58.85H62.773V388.414zM478.65 0h58.85v721.9h-58.85zm482.575 655.203c39.234-51.004 54.927-109.854 54.927-172.628 3.924-62.774-15.693-125.548-51.004-176.552-31.387-43.157-82.39-66.697-137.318-62.774-54.927-3.923-109.854 23.54-145.164 66.697-39.234 51.004-58.85 113.778-54.928 176.552-3.923 62.774 15.694 125.548 51.004 176.552 35.31 43.157 86.314 66.697 137.318 62.774 58.85-3.924 109.855-27.464 145.165-70.62M686.59 478.651c-3.923-47.08 11.77-94.16 35.31-133.394 23.54-27.464 62.774-47.08 102.008-47.08s74.544 15.693 98.084 47.08c47.08 82.39 47.08 184.398 0 266.789-23.54 31.387-58.85 47.08-98.084 47.08s-74.544-15.693-98.084-47.08c-31.387-39.234-43.157-86.314-39.234-133.395m804.291 270.713V239.326h-58.85v58.85c-27.464-43.157-78.468-66.697-129.472-58.85-51.003-3.924-105.93 19.617-137.318 58.85-39.233 51.004-58.85 113.778-58.85 180.475 0 54.928 23.54 109.855 58.85 149.088 27.464 39.234 70.621 58.851 117.702 58.851 51.003 3.923 102.007-15.693 133.394-58.85l15.694-31.388v149.089c0 39.233-11.77 78.467-27.464 113.777l-35.31 43.157c-66.698 39.234-153.012 39.234-219.71 0-113.777-54.927-333.486-51.003-372.72 90.238L835.679 1024c19.617-39.234 51.004-70.62 90.238-90.238 23.54-11.77 141.241 3.924 188.322 23.54 11.77 7.847 27.463 11.77 43.157 15.694h7.846c27.464 7.847 58.851 15.694 90.238 15.694 149.088 0 235.402-58.85 235.402-239.326m-94.16-168.705c-27.464 27.464-62.775 47.08-102.008 51.004-39.234-3.924-74.544-19.617-102.008-51.004-23.54-31.387-35.31-70.62-31.387-109.854-3.923-43.157 7.847-86.315 35.31-125.548 23.54-31.387 62.774-47.08 98.085-47.08s74.544 11.77 102.007 35.31c19.617 35.31 31.387 74.544 35.31 113.777v31.387c0 39.234-11.77 74.544-35.31 102.008"},null,-1),En=[kn];function Tn(n,e){return f(),w("svg",Cn,[...En])}const Vn={render:Tn},$n={xmlns:"http://www.w3.org/2000/svg",width:"21.035",height:"20",class:"icon",viewBox:"0 0 1077 1024"},An=h("path",{d:"M652.235 701.152c8.679 0 15.677 7.033 15.677 15.712v67.544c0 29.502-23.91 53.48-53.274 53.48H239.386c-29.364 0-53.274-24.012-53.274-53.48V239.592c0-29.502 23.91-53.48 53.274-53.48h375.183c29.364 0 53.274 24.012 53.274 53.48v58.934a15.711 15.711 0 1 1-31.32 0v-58.9a22.023 22.023 0 0 0-21.954-22.023H239.386a22.023 22.023 0 0 0-21.955 22.023v544.817c0 12.143 9.88 22.023 21.955 22.023h375.252c12.075 0 21.954-9.88 21.954-22.023v-67.545c0-8.679 6.998-15.711 15.643-15.711zm212.822-197.9a15.78 15.78 0 0 1 0 22.264l-124.18 124.592a15.574 15.574 0 0 1-22.127 0 15.78 15.78 0 0 1 0-22.229l102.638-103.015H446.994a15.711 15.711 0 0 1 0-31.457H810.96L715.594 397.7a15.78 15.78 0 0 1 0-22.23 15.643 15.643 0 0 1 22.16 0z"},null,-1),Mn=[An];function Fn(n,e){return f(),w("svg",$n,[...Mn])}const Ln={render:Fn},In={class:"navigation-bar"},Pn={class:"right-menu"},Nn={class:"right-menu-avatar"},Rn={target:"_blank",href:"https://yaozongbin.pages.dev/"},Dn=R("  博客"),zn={target:"_blank",href:"https://github.com/yaozongbin0828"},Hn=R("  Github "),Bn={target:"_blank",href:"https://gitee.com/yaozongbin"},On=R("  Gitee "),Un={style:{display:"block"}},qn=R(" 退出登录 "),Xn={setup(n){const e=K(),t=Ie(),o=ae(),r=q(),s=E(()=>r.showSettings),a=E(()=>e.sidebar),l=E(()=>r.showScreenfull),i=()=>{e.toggleSidebar(!1)},p=()=>{t.logout(),o.push("/login")};return(m,c)=>{const v=g("el-avatar"),y=g("el-dropdown-item"),x=g("el-dropdown-menu"),b=g("el-dropdown");return f(),w("div",In,[d(ut,{"is-active":u(a).opened,class:"hamburger",onToggleClick:i},null,8,["is-active"]),d(ct,{class:"breadcrumb"}),h("div",Pn,[d(fn,{class:"right-menu-item",style:{padding:"3px 12px 0 0"}}),d(be,{class:P({screenfull:u(l)})},null,8,["class"]),u(s)?(f(),S(ft,{key:0},{default:_(()=>[d(Ut)]),_:1})):A("",!0),d(rn),d(b,{class:"right-menu-item"},{dropdown:_(()=>[d(x,null,{default:_(()=>[h("a",Rn,[d(y,null,{default:_(()=>[d(u(Vn)),Dn]),_:1})]),h("a",zn,[d(y,null,{default:_(()=>[d(u(vn)),Hn]),_:1})]),h("a",Bn,[d(y,null,{default:_(()=>[d(u(xn)),On]),_:1})]),d(y,{divided:"",onClick:p},{default:_(()=>[h("span",Un,[d(u(Ln),{style:{"vertical-align":"middle",margin:"0 0 3px 0"}}),qn])]),_:1})]),_:1})]),default:_(()=>[h("div",Nn,[d(v,{icon:u(Pe),size:30},null,8,["icon"]),h("span",null,M(u(t).username),1)])]),_:1})])])}}},Gn=V(Xn,[["__scopeId","data-v-07d12b5c"]]),se=n=>/^(https?:|mailto:|tel:)/.test(n),Wn=["href"],jn={props:{to:{type:String,required:!0}},setup(n){const e=n;return(t,o)=>{const r=g("router-link");return u(se)(e.to)?(f(),w("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[j(t.$slots,"default")],8,Wn)):(f(),S(r,{key:1,to:e.to},{default:_(()=>[j(t.$slots,"default")]),_:3},8,["to"]))}}};function I(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function he(n,e){for(var t="",o=0,r=-1,s=0,a,l=0;l<=n.length;++l){if(l<n.length)a=n.charCodeAt(l);else{if(a===47)break;a=47}if(a===47){if(!(r===l-1||s===1))if(r!==l-1&&s===2){if(t.length<2||o!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var i=t.lastIndexOf("/");if(i!==t.length-1){i===-1?(t="",o=0):(t=t.slice(0,i),o=t.length-1-t.lastIndexOf("/")),r=l,s=0;continue}}else if(t.length===2||t.length===1){t="",o=0,r=l,s=0;continue}}e&&(t.length>0?t+="/..":t="..",o=2)}else t.length>0?t+="/"+n.slice(r+1,l):t=n.slice(r+1,l),o=l-r-1;r=l,s=0}else a===46&&s!==-1?++s:s=-1}return t}function Yn(n,e){var t=e.dir||e.root,o=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+o:t+n+o:o}var U={resolve:function(){for(var e="",t=!1,o,r=arguments.length-1;r>=-1&&!t;r--){var s;r>=0?s=arguments[r]:(o===void 0&&(o=process.cwd()),s=o),I(s),s.length!==0&&(e=s+"/"+e,t=s.charCodeAt(0)===47)}return e=he(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(I(e),e.length===0)return".";var t=e.charCodeAt(0)===47,o=e.charCodeAt(e.length-1)===47;return e=he(e,!t),e.length===0&&!t&&(e="."),e.length>0&&o&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return I(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var o=arguments[t];I(o),o.length>0&&(e===void 0?e=o:e+="/"+o)}return e===void 0?".":U.normalize(e)},relative:function(e,t){if(I(e),I(t),e===t||(e=U.resolve(e),t=U.resolve(t),e===t))return"";for(var o=1;o<e.length&&e.charCodeAt(o)===47;++o);for(var r=e.length,s=r-o,a=1;a<t.length&&t.charCodeAt(a)===47;++a);for(var l=t.length,i=l-a,p=s<i?s:i,m=-1,c=0;c<=p;++c){if(c===p){if(i>p){if(t.charCodeAt(a+c)===47)return t.slice(a+c+1);if(c===0)return t.slice(a+c)}else s>p&&(e.charCodeAt(o+c)===47?m=c:c===0&&(m=0));break}var v=e.charCodeAt(o+c),y=t.charCodeAt(a+c);if(v!==y)break;v===47&&(m=c)}var x="";for(c=o+m+1;c<=r;++c)(c===r||e.charCodeAt(c)===47)&&(x.length===0?x+="..":x+="/..");return x.length>0?x+t.slice(a+m):(a+=m,t.charCodeAt(a)===47&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(I(e),e.length===0)return".";for(var t=e.charCodeAt(0),o=t===47,r=-1,s=!0,a=e.length-1;a>=1;--a)if(t=e.charCodeAt(a),t===47){if(!s){r=a;break}}else s=!1;return r===-1?o?"/":".":o&&r===1?"//":e.slice(0,r)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');I(e);var o=0,r=-1,s=!0,a;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var l=t.length-1,i=-1;for(a=e.length-1;a>=0;--a){var p=e.charCodeAt(a);if(p===47){if(!s){o=a+1;break}}else i===-1&&(s=!1,i=a+1),l>=0&&(p===t.charCodeAt(l)?--l===-1&&(r=a):(l=-1,r=i))}return o===r?r=i:r===-1&&(r=e.length),e.slice(o,r)}else{for(a=e.length-1;a>=0;--a)if(e.charCodeAt(a)===47){if(!s){o=a+1;break}}else r===-1&&(s=!1,r=a+1);return r===-1?"":e.slice(o,r)}},extname:function(e){I(e);for(var t=-1,o=0,r=-1,s=!0,a=0,l=e.length-1;l>=0;--l){var i=e.charCodeAt(l);if(i===47){if(!s){o=l+1;break}continue}r===-1&&(s=!1,r=l+1),i===46?t===-1?t=l:a!==1&&(a=1):t!==-1&&(a=-1)}return t===-1||r===-1||a===0||a===1&&t===r-1&&t===o+1?"":e.slice(t,r)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return Yn("/",e)},parse:function(e){I(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var o=e.charCodeAt(0),r=o===47,s;r?(t.root="/",s=1):s=0;for(var a=-1,l=0,i=-1,p=!0,m=e.length-1,c=0;m>=s;--m){if(o=e.charCodeAt(m),o===47){if(!p){l=m+1;break}continue}i===-1&&(p=!1,i=m+1),o===46?a===-1?a=m:c!==1&&(c=1):a!==-1&&(c=-1)}return a===-1||i===-1||c===0||c===1&&a===i-1&&a===l+1?i!==-1&&(l===0&&r?t.base=t.name=e.slice(1,i):t.base=t.name=e.slice(l,i)):(l===0&&r?(t.name=e.slice(1,a),t.base=e.slice(1,i)):(t.name=e.slice(l,a),t.base=e.slice(l,i)),t.ext=e.slice(a,i)),l>0?t.dir=e.slice(0,l-1):r&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};U.posix=U;var Kn=U;const Se=Ne(Kn),Jn={key:2},Zn={props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,default:""}},setup(n){const e=n,t=E(()=>e.item.children?e.item.children.filter(a=>!(a.meta&&a.meta.hidden)).length:0),o=E(()=>{if(t.value>1)return null;if(e.item.children){for(const s of e.item.children)if(!s.meta||!s.meta.hidden)return s}return{...e.item,path:""}}),r=s=>se(s)?s:se(e.basePath)?e.basePath:Se.resolve(e.basePath,s);return(s,a)=>{var c;const l=g("svg-icon"),i=g("el-menu-item"),p=g("sidebar-item",!0),m=g("el-sub-menu");return(c=e.item.meta)!=null&&c.hidden?A("",!0):(f(),w("div",{key:0,class:P({"simple-mode":e.isCollapse,"first-level":e.isFirstLevel})},[u(o)&&!u(o).children?(f(),w(D,{key:0},[u(o).meta?(f(),S(jn,{key:0,to:r(u(o).path)},{default:_(()=>[d(i,{index:r(u(o).path)},Re({default:_(()=>[u(o).meta.svgIcon?(f(),S(l,{key:0,name:u(o).meta.svgIcon},null,8,["name"])):u(o).meta.elIcon?(f(),S(ne(u(o).meta.elIcon),{key:1,class:"el-icon"})):A("",!0)]),_:2},[u(o).meta.title?{name:"title",fn:_(()=>[R(M(u(o).meta.title),1)])}:void 0]),1032,["index"])]),_:1},8,["to"])):A("",!0)],64)):(f(),S(m,{key:1,index:r(e.item.path),teleported:""},{title:_(()=>[e.item.meta&&e.item.meta.svgIcon?(f(),S(l,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):e.item.meta&&e.item.meta.elIcon?(f(),S(ne(e.item.meta.elIcon),{key:1,class:"el-icon"})):A("",!0),e.item.meta&&e.item.meta.title?(f(),w("span",Jn,M(e.item.meta.title),1)):A("",!0)]),default:_(()=>[e.item.children?(f(!0),w(D,{key:0},B(e.item.children,v=>(f(),S(p,{key:v.path,item:v,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":r(v.path)},null,8,["item","is-collapse","base-path"]))),128)):A("",!0)]),_:1},8,["index"]))],2))}}},Qn=V(Zn,[["__scopeId","data-v-13976170"]]),eo=""+new URL("logo-BY3URNHQ.png",import.meta.url).href,to=""+new URL("logo-text-1-CHuEm79x.png",import.meta.url).href,xe=n=>(ie("data-v-fe4be8c5"),n=n(),ce(),n),no=xe(()=>h("img",{src:eo,class:"sidebar-logo"},null,-1)),oo=xe(()=>h("img",{src:to,class:"sidebar-logo-text"},null,-1)),so={props:{collapse:{type:Boolean,default:!0}},setup(n){const e=n;return(t,o)=>{const r=g("router-link");return f(),w("div",{class:P(["sidebar-logo-container",{collapse:e.collapse}])},[d(ve,{name:"sidebar-logo-fade"},{default:_(()=>[e.collapse?(f(),S(r,{key:"collapse",to:"/"},{default:_(()=>[no]),_:1})):(f(),S(r,{key:"expand",to:"/"},{default:_(()=>[oo]),_:1}))]),_:1})],2)}}},ro=V(so,[["__scopeId","data-v-fe4be8c5"]]),te=n=>{let e="";try{e=getComputedStyle(document.documentElement).getPropertyValue(n)}catch(t){console.error(t)}return e},ao={setup(n){const e=te("--v3-sidebar-menu-bg-color"),t=te("--v3-sidebar-menu-text-color"),o=te("--v3-sidebar-menu-active-text-color"),r=G(),s=K(),a=De(),l=q(),{showSidebarLogo:i}=ze(l),p=E(()=>{const{meta:c,path:v}=r;return c!=null&&c.activeMenu?c.activeMenu:v}),m=E(()=>!s.sidebar.opened);return(c,v)=>{const y=g("el-menu"),x=g("el-scrollbar");return f(),w("div",{class:P({"has-logo":u(i)})},[u(i)?(f(),S(ro,{key:0,collapse:u(m)},null,8,["collapse"])):A("",!0),d(x,{"wrap-class":"scrollbar-wrapper"},{default:_(()=>[d(y,{"default-active":u(p),collapse:u(m),"background-color":u(e),"text-color":u(t),"active-text-color":u(o),"unique-opened":!0,"collapse-transition":!1,mode:"vertical"},{default:_(()=>[(f(!0),w(D,null,B(u(a).routes,b=>(f(),S(Qn,{key:b.path,item:b,"base-path":b.path,"is-collapse":u(m)},null,8,["item","base-path","is-collapse"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])]),_:1})],2)}}},lo=V(ao,[["__scopeId","data-v-d1da17ff"]]),io=re("tags-view",()=>{const n=k([]),e=k([]);return{visitedViews:n,cachedViews:e,addVisitedView:a=>{n.value.some((l,i)=>{if(l.path===a.path)return l.fullPath!==a.fullPath&&(n.value[i]=Object.assign({},a)),!0})||n.value.push(Object.assign({},a))},addCachedView:a=>{var l;typeof a.name=="string"&&(e.value.includes(a.name)||(l=a.meta)!=null&&l.keepAlive&&e.value.push(a.name))},delVisitedView:a=>{for(const[l,i]of n.value.entries())if(i.path===a.path){n.value.splice(l,1);break}},delCachedView:a=>{if(typeof a.name!="string")return;const l=e.value.indexOf(a.name);l>-1&&e.value.splice(l,1)}}}),co={class:"scroll-container"},uo={class:"largeBtn"},fo={props:{tagRefs:{type:Object,required:!0}},setup(n){const e=k(),t=q();return(o,r)=>(f(),w("div",co,[h("div",{ref_key:"scrollbarContentRef",ref:e,class:"scrollbar-content"},[j(o.$slots,"default",{},void 0,!0)],512),h("div",uo,[u(t).showScreenfull?(f(),S(be,{key:0,content:!0})):A("",!0)])]))}},mo=V(fo,[["__scopeId","data-v-c36c3a31"]]),po={class:"tags-view-container"},_o={setup(n){const e=G();ae();const t=io(),o=He(),r=k([]);let s=[];const a=v=>v.path===e.path,l=(v,y="/")=>{let x=[];return v.forEach(b=>{var C;if((C=b.meta)!=null&&C.affix){const T=Se.resolve(y,b.path);x.push({fullPath:T,path:T,name:b.name,meta:{...b.meta}})}}),x},i=()=>{s=l(o.routes);for(const v of s)v.name&&t.addVisitedView(v)},p=v=>{t.delVisitedView(v),t.delCachedView(v)},m=()=>{e.name&&(t.addVisitedView(e),t.addCachedView(e))},c=v=>{var y;return(y=v.meta)==null?void 0:y.affix};return le(e,()=>{m()},{deep:!0}),ue(()=>{i(),m()}),(v,y)=>{const x=g("el-icon");return f(),w("div",po,[d(mo,{class:"tags-view-wrapper",tagRefs:r.value},{default:_(()=>[(f(!0),w(D,null,B(u(t).visitedViews,b=>(f(),S(u(Oe),{ref_for:!0,ref_key:"tagRefs",ref:r,key:b.path,class:P([a(b)?"active":"","tags-view-item"]),to:{path:b.path,query:b.query},onMouseup:oe(C=>!c(b)&&p(b),["middle"])},{default:_(()=>{var C;return[R(M((C=b.meta)==null?void 0:C.title)+" ",1),c(b)?A("",!0):(f(),S(x,{key:0,size:12,onClick:oe(T=>p(b),["prevent","stop"])},{default:_(()=>[d(u(Be),{class:"close"})]),_:2},1032,["onClick"]))]}),_:2},1032,["class","to","onMouseup"]))),128))]),_:1},8,["tagRefs"])])}}},ho=V(_o,[["__scopeId","data-v-474d2d96"]]),vo=992,go=()=>{const n=G(),e=K(),t=()=>document.body.getBoundingClientRect().width-1<vo,o=()=>{if(!document.hidden){const r=t();e.toggleDevice(r?O.Mobile:O.Desktop),r&&e.closeSidebar(!0)}};le(()=>n.name,()=>{e.device===O.Mobile&&e.sidebar.opened&&e.closeSidebar(!1)}),Ue(()=>{window.addEventListener("resize",o)}),ue(()=>{t()&&(e.toggleDevice(O.Mobile),e.closeSidebar(!0))}),qe(()=>{window.removeEventListener("resize",o)})};var wo={VITE_ROUTER_HISTORY:"hash",VITE_PUBLIC_PATH:"/v3-vite-admin-js-master/",VITE_USER_NODE_ENV:"production",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const bo=n=>(ie("data-v-513eec48"),n=n(),ce(),n),yo={class:"layout-footer"},So=bo(()=>h("a",{href:"https://github.com/yaozongbin/v3-vite-admin-js-master"}," MIT © 2023-PRESENT @yaozongbin ",-1)),xo=[So],Co={setup(n){const e=wo.VITE_APP_TITLE;return console.log(" MIT © 2023-PRESENT @yaozongbin "+e),(t,o)=>(f(),w("footer",yo,xo))}},ko=V(Co,[["__scopeId","data-v-513eec48"]]),Eo={setup(n){const e=K(),t=q();go();const o=E(()=>({hideSidebar:!e.sidebar.opened,openSidebar:e.sidebar.opened,withoutAnimation:e.sidebar.withoutAnimation,mobile:e.device===O.Mobile,showGreyMode:s.value,showColorWeakness:a.value})),r=E(()=>t.showTagsView),s=E(()=>t.showGreyMode),a=E(()=>t.showColorWeakness),l=E(()=>t.fixedHeader),i=E(()=>t.fixedFooter),p=()=>{e.closeSidebar(!1)};return(m,c)=>(f(),w("div",{class:P([u(o),"app-wrapper"])},[u(o).mobile&&u(o).openSidebar?(f(),w("div",{key:0,class:"drawer-bg",onClick:p})):A("",!0),d(u(lo),{class:"sidebar-container"}),h("div",{class:P([{hasTagsView:u(r)},"main-container"])},[h("div",{class:P({"fixed-header":u(l)})},[d(u(Gn)),Xe(d(u(ho),null,null,512),[[Ge,u(r)]])],2),d(u(Qe)),d(ko,{class:P({"fixed-footer":u(i)})},null,8,["class"])],2)],2))}},Vo=V(Eo,[["__scopeId","data-v-b40aca14"]]);export{Vo as default};
