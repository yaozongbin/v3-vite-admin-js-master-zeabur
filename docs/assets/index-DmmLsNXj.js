import{_ as x,k as y,a as f,r as V,e as b,f as i,g as t,w as l,j as o,Y as k,b as n,o as R,Z as C,$ as z,n as B,y as F,z as I,B as S,J as U}from"./index-DfYzoEv9.js";const q=""+new URL("logo-text-2-CVewf8RJ.png",import.meta.url).href,K=r=>(F("data-v-7846fcc5"),r=r(),I(),r),M={class:"login-container"},N={class:"login-card"},J=K(()=>i("div",{class:"title"},[i("img",{src:q,alt:""})],-1)),L={class:"content"},j=S(" 登 录 "),E={setup(r){const g=y(),c=f(null),a=f(!1),e=V({username:"admin",password:"123456"}),w={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},p=()=>{var d;(d=c.value)==null||d.validate(s=>{if(s)a.value=!0,U().login({username:e.username,password:e.password}).then(()=>{console.log(a.value),g.push({path:"/"})}).catch(()=>{e.password=""}).finally(()=>{a.value=!1});else return!1})};return(d,s)=>{const m=n("el-input"),_=n("el-form-item"),h=n("el-button"),v=n("el-form");return R(),b("div",M,[i("div",N,[J,i("div",L,[t(v,{ref_key:"loginFormRef",ref:c,model:o(e),rules:w,onKeyup:k(p,["enter"])},{default:l(()=>[t(_,{prop:"username"},{default:l(()=>[t(m,{modelValue:o(e).username,"onUpdate:modelValue":s[0]||(s[0]=u=>o(e).username=u),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":o(C),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(_,{prop:"password"},{default:l(()=>[t(m,{modelValue:o(e).password,"onUpdate:modelValue":s[1]||(s[1]=u=>o(e).password=u),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":o(z),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])]),_:1}),t(h,{loading:a.value,type:"primary",size:"large",onClick:B(p,["prevent"])},{default:l(()=>[j]),_:1},8,["loading","onClick"])]),_:1},8,["model","onKeyup"])])])])}}},Y=x(E,[["__scopeId","data-v-7846fcc5"]]);export{Y as default};
