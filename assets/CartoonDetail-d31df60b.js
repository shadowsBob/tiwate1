import{a as f}from"./products-7bd580fa.js";import{_ as C,u as h,r as g,a as u,o as s,b as n,d as r,e as c,F as k,f as x,w as p,l as v}from"./index-7d98706d.js";import{d as y}from"./request-39338cfd.js";const I={class:"all"},b={class:"nav"},D={class:"contain"},w=["src"],B={class:"footer"},L={__name:"CartoonDetail",setup(N){const{push:_}=h(),t=g([]);f().then(a=>{t.value=a.data.map(e=>({...e,coverImage:y(e.coverImage)})),t.value=t.value.sort((e,o)=>{e.id-o.id})});const l=()=>{_({name:"CartoonDetail2"})},m=a=>{_({name:"Cartoon"})};return(a,e)=>{const o=u("van-nav-bar"),d=u("van-button");return s(),n("div",I,[r("div",b,[c(o,{title:"第一话","left-text":"返回","left-arrow":"",onClickLeft:m})]),r("div",D,[(s(!0),n(k,null,x(t.value,i=>(s(),n("img",{key:i.id,src:i.coverImage,alt:""},null,8,w))),128))]),r("div",B,[c(d,{type:"primary",onClick:l},{default:p(()=>[v("上一话")]),_:1}),c(d,{type:"primary",onClick:l},{default:p(()=>[v("下一话")]),_:1})])])}}},A=C(L,[["__scopeId","data-v-3ee2f169"]]);export{A as default};