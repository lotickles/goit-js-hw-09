var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");const r={form:document.querySelector("form.form"),delay:document.querySelector("input[name='delay']"),step:document.querySelector("input[name='step']"),amount:document.querySelector("input[name='amount']")},{form:u,delay:l,step:a,amount:d}=r;function s(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(e){if(e.preventDefault(),l.value<1||a.value<1||d.value<1)return i.Notify.failure("Please input a positive value"),void u.reset();let t=Number(l.value);for(let e=1;e<=d.value;e++)s(e,t).then((({position:e,delay:t})=>{i.Notify.success(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`Rejected promise ${e} in ${t}ms`)})),t+=Number(a.value)}));
//# sourceMappingURL=03-promises.d516589a.js.map
