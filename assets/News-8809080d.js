import{b as R,c as V}from"./articles-5237ba5d.js";import{_ as C,r as o,u as S,j as P,k as U,a as r,o as s,b as m,d,e as h,w as _,F as p,f as b,h as I,p as j,i as q}from"./index-7d98706d.js";import{d as D}from"./request-39338cfd.js";const F=n=>(j("data-v-09de540b"),n=n(),q(),n),z=F(()=>d("header",{class:"header"},[d("img",{src:"https://ys.mihoyo.com/main/_nuxt/img/aea44cf.png",alt:""}),d("img",{class:"imgmax",src:"https://pic3.zhimg.com/v2-944276b6fafa45c9e0118fa3574ac732_b.jpg",alt:""})],-1)),E={__name:"News",setup(n){const v=o(0),f=o([]),w=o(),g=o([]),u=o(!1),{push:x}=S();o(0),P();const y=e=>{x({name:"Detail",params:{id:e}})};R().then(e=>{g.value=e.data}),U((e,a)=>{i(e.query.id)});const i=async e=>{const a=await V(w.value,e);console.log(a.data),f.value=a.data.map(l=>({...l,coverImage:D(l.coverImage)}))},k=()=>{setTimeout(()=>{u.value=!1},1e3),i()};return i(),(e,a)=>{const l=r("van-card"),N=r("van-pull-refresh"),A=r("van-tab"),B=r("van-tabs");return s(),m(p,null,[z,d("main",null,[h(B,{active:v.value,"onUpdate:active":a[1]||(a[1]=c=>v.value=c),"title-active-color":"#f4d8a8","title-inactive-color":"#393b40",color:"black"},{default:_(()=>[(s(!0),m(p,null,b(g.value,c=>(s(),I(A,{title:c.name,to:{name:"News",query:{id:c.id}}},{default:_(()=>[h(N,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=t=>u.value=t),"success-text":"刷新成功",onRefresh:k},{default:_(()=>[(s(!0),m(p,null,b(f.value,t=>(s(),I(l,{id:"van-card",title:t.name,desc:t.desc,thumb:t.coverImage,onClick:L=>y(t.id)},null,8,["title","desc","thumb","onClick"]))),256))]),_:1},8,["modelValue"])]),_:2},1032,["title","to"]))),256))]),_:1},8,["active"])])],64)}}},H=C(E,[["__scopeId","data-v-09de540b"]]);export{H as default};
