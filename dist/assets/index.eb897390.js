var $=Object.defineProperty,P=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var I=(t,n,o)=>n in t?$(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,x=(t,n)=>{for(var o in n||(n={}))D.call(n,o)&&I(t,o,n[o]);if(C)for(var o of C(n))O.call(n,o)&&I(t,o,n[o]);return t},w=(t,n)=>P(t,H(n));var E=(t,n)=>{var o={};for(var i in t)D.call(t,i)&&n.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&C)for(var i of C(t))n.indexOf(i)<0&&O.call(t,i)&&(o[i]=t[i]);return o};import{r as g,j as N,c as J,s as d,N as B,L as Y,d as q,u as U,a as _,H as G,S as Q,R as b,b as V,e as X,f as Z}from"./vendor.3561f32c.js";const ee=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}};ee();let F=parseInt(window.localStorage.getItem("idMax")||"0");const y=()=>(F+=1,window.localStorage.setItem("idMax",F.toString()),F),A=(t,n)=>{const o=g.exports.useRef(0);g.exports.useEffect(()=>{o.current+=1}),g.exports.useEffect(()=>{o.current>1&&t()},[t,n])},k=()=>{const[t,n]=g.exports.useState([]);return g.exports.useEffect(()=>{let a=JSON.parse(window.localStorage.getItem("tags")||"[]");a.length===0&&(a=[{id:y(),name:"\u8863"},{id:y(),name:"\u98DF"},{id:y(),name:"\u4F4F"},{id:y(),name:"\u884C"}]),n(a)},[]),A(()=>{window.localStorage.setItem("tags",JSON.stringify(t))},t),{tags:t,getName:a=>{const u=t.filter(p=>p.id===a)[0];return u?u.name:""},setTags:n,findTag:a=>t.filter(u=>u.id===a)[0],findTagIndex:a=>{let u=-1;for(let p=0;p<t.length;p++)if(t[p].id===a){u=p;break}return u},addTag:()=>{console.log("addTag");const a=window.prompt("\u65B0\u6807\u7B7E\u7684\u540D\u79F0\u4E3A");a!==null&&a!==""&&n([...t,{id:y(),name:a}])},updateTag:(a,{name:u})=>{n(t.map(p=>p.id===a?{id:a,name:u}:p))},deleteTag:a=>{n(t.filter(u=>u.id!==a))}}},e=N.exports.jsx,l=N.exports.jsxs,te=N.exports.Fragment,m=t=>{const c=t,{name:n,children:o,className:i}=c,r=E(c,["name","children","className"]);return e("svg",w(x({className:J("icon",i)},r),{"aria-hidden":"true",children:n&&e("use",{href:`#icon-${n}`})}))},ne=d.nav`
  background: #fff;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);
  > ul{
    display: flex;
    > li {
        width: 33.33%;
        text-align: center;
        >a{
            padding: 4px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            >.icon{
                width: 24px;
                height: 24px;;
            }
            &.selected {
                color: red;
                .icon {
                    fill: red;
                }
            }       
        }
    }
  }
`,re=()=>e(ne,{children:l("ul",{children:[e("li",{children:l(B,{to:"/tags",activeClassName:"selected",children:[e(m,{name:"tag"}),"\u6807\u7B7E\u9875"]})}),e("li",{children:l(B,{to:"/money",activeClassName:"selected",children:[e(m,{name:"money"}),"\u8BB0\u8D26\u9875"]})}),e("li",{children:l(B,{to:"/statistics",activeClassName:"selected",children:[e(m,{name:"chart"}),"\u7EDF\u8BA1\u9875"]})})]})}),oe=d.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

`,ie=d.div`
    flex-grow: 1;
    overflow: auto;
`,v=t=>{const n=g.exports.useRef(null);return g.exports.useEffect(()=>{setTimeout(()=>{!n.current||(n.current.scrollTop=t.scrollTop)},0)},[t.scrollTop]),l(oe,{children:[e(ie,{ref:n,className:t.className,children:t.children}),e(re,{})]})};v.defaultProps={scrollTop:0};const L=d.button`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 18px;
  color: #fff;
  background: #767676;
`,S=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,f=d.div`
  height: 16px;
`,ce=d.ol`
  font-size: 16px;
  background: #fff;
  > li{
    /* //#E5E5E7 */
    margin:0 16px;
    border-bottom: 1px solid #D5D5D9;
    line-height: 20px;
    >a{
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
          width: 20px;
          height: 20px;;
      }      
    }

  }
`;function ae(){const{tags:t,addTag:n}=k();return l(v,{children:[e(ce,{children:t.map(o=>e("li",{children:l(Y,{to:"/tags/"+o.id,children:[e("span",{className:"oneLine",children:o.name}),e(m,{name:"right"})]})},o.id))}),l(S,{children:[e(f,{}),e(f,{}),e(f,{}),e(L,{onClick:n,children:"\u65B0\u589E\u6807\u7B7E"}),e(f,{})]})]})}const se=d.section`
  background: #ffffff; padding: 12px 16px;
  flex-grow: 1;
  display: flex; flex-direction: column;
  justify-content: flex-end;align-items: flex-start;
  >ol{ margin: 0 -12px;
    >li{
      display: inline-block; margin: 8px 12px; padding: 3px 18px;
      font-size: 14px; background: #D9D9D9; border-radius: 18px;
      &.selected {
        background: #f60;
      }
    }
  }
  > button{ background: none; border: none;
    padding: 2px 4px; margin-top: 8px;
    border-bottom: 1px solid #333; color:#666;
  }
`,le=t=>{const n=t.value,{tags:o,addTag:i}=k(),r=s=>{n.indexOf(s)>=0?t.onChange(n.filter(a=>a!==s)):t.onChange([...n,s])},c=s=>n.indexOf(s)>=0?"selected":"";return l(se,{children:[e("ol",{children:o.map(s=>e("li",{className:c(s.id),onClick:()=>r(s.id),children:s.name},s.id))}),e("button",{onClick:i,children:"\u65B0\u589E\u6807\u7B7E"})]})},de=d.label`
  display: flex;
  align-items: center;
  >span{
    margin-right: 16px;
    white-space: nowrap;
  }
  >input{
    display: block;
    width: 100%;
    height: 44px;
    background: none; border: none;
  }
`,R=t=>{const r=t,{label:n,children:o}=r,i=E(r,["label","children"]);return l(de,{children:[e("span",{children:t.label}),e("input",x({},i))]})},ue=d.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`,he=t=>{const n=t.value;return e(ue,{children:e(R,{label:"\u5907\u6CE8",type:"text",placeholder:"\u8FD9\u91CC\u6DFB\u52A0\u5907\u6CE8",value:n,onChange:i=>{t.onChange(i.target.value)}})})},pe=d.section`
font-size: 24px;
> ul{
  display: flex;
  >li{
    padding: 16px 0;
    width: 50%;
    text-align: center;
    position: relative;
    &.selected::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background: #333;
    }
  }
}
`,j=t=>{const n={"-":"\u652F\u51FA","+":"\u6536\u5165"},[o]=g.exports.useState(["-","+"]),i=t.value;return e(pe,{children:e("ul",{children:o.map(r=>e("li",{className:i===r?"selected":"",onClick:()=>t.onChange(r),children:n[r]},r))})})},ge=(t,n)=>{switch(t){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return n==="0"?t:n+t;case".":return n.indexOf(".")>=0?n:n+".";case"\u5220\u9664":return n.length===1?"":n.slice(0,-1)||"";case"\u6E05\u7A7A":return"";default:return""}},fe=d.section`
display: flex;
flex-direction: column;
>output{
  background: #fff;
  font-size: 36px;
  line-height: 72px;
  text-align: right;
  padding: 0 16px;
  box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,.25),
              inset 0 5px 5px -5px rgba(0,0,0,.25);
}
>.pad{
  >button{
    font-size: 18px;
    float: left;
    width: 25%;
    height: 64px;
    border: none;
    &.OK {
      height: 128px;
      float: right;
    }
    &.zero {
      width: 50%;
    }
    &:nth-child(1) {
      background: #f2f2f2;
    }
    &:nth-child(2),
    &:nth-child(5) {
      background: #E0E0E0;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9) {
      background: #D3D3D3;
    }
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(10) {
      background: #C1C1C1;
    }
    &:nth-child(8),
    &:nth-child(11),
    &:nth-child(13) {
      background: #B8B8B8;
    }
    &:nth-child(12){
      background: #9A9A9A;
    }
    &:nth-child(14) {
      background: #A9A9A9;

    }
  }

}
`,xe=t=>{const[n,o]=g.exports.useState(t.value.toString()),i=c=>{let s;c.length>16?s=c.slice(0,16):c.length===0?s="0":s=c,o(s),t.onChange(parseFloat(s))};return l(fe,{children:[e("output",{children:n}),l("div",{className:"pad clearfix",onClick:c=>{const s=c.target.textContent;if(s!==null){if(s==="OK"){t.onOK&&t.onOK();return}"0123456789.".split("").concat(["\u5220\u9664","\u6E05\u7A7A"]).indexOf(s)>=0&&i(ge(s,n))}},children:[e("button",{children:"1"}),e("button",{children:"2"}),e("button",{children:"3"}),e("button",{children:"\u5220\u9664"}),e("button",{children:"4"}),e("button",{children:"5"}),e("button",{children:"6"}),e("button",{children:"\u6E05\u7A7A"}),e("button",{children:"7"}),e("button",{children:"8"}),e("button",{children:"9"}),e("button",{className:"OK",children:"OK"}),e("button",{className:"zero",children:"0"}),e("button",{className:"dot",children:"."})]})]})},M=()=>{const[t,n]=g.exports.useState([]);return g.exports.useEffect(()=>{n(JSON.parse(window.localStorage.getItem("records")||"[]"))},[]),A(()=>{window.localStorage.setItem("records",JSON.stringify(t))},t),{records:t,addRecordItem:i=>{if(i.amount<=0)return alert("\u8BF7\u8F93\u5165\u91D1\u989D"),!1;if(i.tagIds.length===0)return alert("\u8BF7\u9009\u62E9\u6807\u7B7E"),!1;const r=w(x({},i),{createdAt:new Date().toISOString()});return n([...t,r]),!0}}},me=d(v)`
display: flex;
flex-direction: column;
`,be=d.div`
  background: #c4c4c4;
`,W={tagIds:[],note:"",category:"-",amount:0};function ye(){const[t,n]=g.exports.useState(W),{addRecordItem:o}=M(),i=c=>{n(x(x({},t),c))},r=()=>{o(t)&&(alert("\u4FDD\u5B58\u6210\u529F"),n(W))};return l(me,{scrollTop:9999,children:[e(le,{value:t.tagIds,onChange:c=>i({tagIds:c})}),e(he,{value:t.note,onChange:c=>i({note:c})}),e(be,{children:e(j,{value:t.category,onChange:c=>i({category:c})})}),e(xe,{value:t.amount,onChange:c=>i({amount:c}),onOK:r})]})}const ve=d.div`
  background: #fff;
`,Ce=d.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`,ke=d.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;function we(){const[t,n]=g.exports.useState("-"),{records:o}=M(),{getName:i}=k(),r={};o.filter(h=>h.category===t).forEach(h=>{const a=q(h.createdAt).format("YYYY\u5E74MM\u6708DD\u65E5");a in r||(r[a]=[]),r[a].push(h)});const s=Object.entries(r).sort((h,a)=>h[0]===a[0]?0:h[0]>a[0]?-1:h[0]<a[0]?1:0);return console.log(s),l(v,{children:[e(ve,{children:e(j,{value:t,onChange:h=>n(h)})}),s.map(([h,a])=>l("div",{children:[e(ke,{children:h}),a.map(u=>l(Ce,{children:[e("div",{className:"tags oneLine",children:u.tagIds.map(p=>e("span",{children:i(p)},p)).reduce((p,T,z,K)=>p.concat(z<K.length-1?[T,"\uFF0C"]:[T]),[])}),u.note&&e("div",{className:"note",children:u.note}),l("div",{className:"amount",children:["\uFFE5",u.amount]})]}))]}))]})}const Ee=d.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
  >.icon {
    width: 18px;
    height: 18px;
  }
`,Ne=d.div`
  background: #fff;
  margin-top: 8px;
  padding: 0 16px;
`,Be=()=>{const{findTag:t,updateTag:n,deleteTag:o}=k(),{id:i}=U(),r=t(parseInt(i)),c=a=>l(te,{children:[e(Ne,{children:e(R,{label:"\u6807\u7B7E\u540D",type:"text",placeholder:"\u6807\u7B7E\u540D",value:a.name,onChange:u=>{n(a.id,{name:u.target.value})}})}),l(S,{children:[e(f,{}),e(f,{}),e(f,{}),e(L,{onClick:()=>o(a.id),children:"\u5220\u9664\u6807\u7B7E"})]})]}),s=_();return l(v,{children:[l(Ee,{children:[e(m,{name:"left",onClick:()=>{s.goBack()}}),e("span",{children:"\u7F16\u8F91\u6807\u7B7E"}),e(m,{})]}),r?c(r):l(S,{children:[e(f,{}),e(f,{}),"tag \u4E0D\u5B58\u5728"]})]})},Fe=d.div`
  color: #333;
  max-width: 568px;
  margin: 0 auto;
`;function Se(){return e(Fe,{children:e(G,{children:l(Q,{children:[e(b,{exact:!0,path:"/tags",children:e(ae,{})}),e(b,{exact:!0,path:"/tags/:id",children:e(Be,{})}),e(b,{exact:!0,path:"/money",children:e(ye,{})}),e(b,{exact:!0,path:"/statistics",children:e(we,{})}),e(V,{exact:!0,from:"/",to:"/money"}),e(b,{path:"*",children:e(Te,{})})]})})})}function Te(){return e("div",{children:"\u9875\u9762\u4E0D\u5B58\u5728\uFF0C\u8BF7\u8F93\u5165\u6B63\u5730\u5740\uFF01\uFF01"})}X.render(e(Z.StrictMode,{children:e(Se,{})}),document.getElementById("root"));
