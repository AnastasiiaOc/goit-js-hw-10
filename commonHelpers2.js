import"./assets/styles-e0f5d054.js";import{i as s}from"./assets/vendor-ad859c2f.js";const n=document.querySelector(".form");n.addEventListener("submit",r);function r(t){t.preventDefault();const e=new FormData(t.target),o=e.get("delay"),i=e.get("state");a(o,i),n.reset()}function a(t,e){return new Promise((o,i)=>{setTimeout(()=>{e==="fulfilled"?o(`✅ Fulfilled promise in ${t*1e3}ms`):i(`❌ Rejected promise in ${t}ms`)},t)}).then(o=>{s.show({message:o,messageColor:"#FFFFFF",backgroundColor:"#59a10d",position:"topRight",icon:""})}).catch(o=>{s.show({message:o,messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",icon:""})})}
//# sourceMappingURL=commonHelpers2.js.map
