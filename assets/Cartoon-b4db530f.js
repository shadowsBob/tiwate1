import{_ as m,r as v,j as h,u as g,a as f,o as c,b as r,d as e,e as _,w as i,F as x,f as C,l as d,t as I,p as y,i as b}from"./index-7d98706d.js";import{l as k}from"./products-7bd580fa.js";import{d as S}from"./request-39338cfd.js";const w=o=>(y("data-v-7a2932d7"),o=o(),b(),o),B={class:"all"},D=w(()=>e("nav",null,[e("img",{src:"https://ys.mihoyo.com/main/_nuxt/img/aea44cf.png",alt:""})],-1)),N={class:"box1"},V={class:"box2",route:""},z=["src"],F={class:"box2con"},R={__name:"Cartoon",setup(o){const a=v([]);h();const{push:p}=g(),u=()=>{p({name:"CartoonDetail"})};return k().then(s=>{console.log(s),a.value=s.data.map(t=>({...t,coverImage:S(t.coverImage)})),a.value=a.value.reverse()}),(s,t)=>{const l=f("van-button");return c(),r("div",B,[D,e("div",N,[_(l,{type:"primary",size:"small",hairline:""},{default:i(()=>[d("继续阅读")]),_:1}),_(l,{color:"rgb(25,25,25)",size:"small",hairline:"",to:{name:"CartoonDetail"}},{default:i(()=>[d("从头开始")]),_:1})]),e("div",V,[(c(!0),r(x,null,C(a.value,n=>(c(),r("div",{onClick:u,key:n.id},[e("img",{src:n.coverImage},null,8,z),e("div",F,I(n.desc),1)]))),128))])])}}},H=m(R,[["__scopeId","data-v-7a2932d7"]]);export{H as default};
