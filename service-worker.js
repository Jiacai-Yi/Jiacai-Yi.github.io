if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,a)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=a(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"35612af6a904d0c60cef4907537a0894"},{url:"about/index.html",revision:"875a5e90758342c599aec8293644681d"},{url:"acknowledgement/index.html",revision:"395f8b296ca0d2220b281b058355ca3f"},{url:"archives/2021/07/index.html",revision:"d5942c2df81db940e9b7b252f4251e25"},{url:"archives/2021/12/index.html",revision:"9cb4c16dfe643a68b66cb68eebfe1654"},{url:"archives/2021/index.html",revision:"916a75fb011bdf478360175aeb71fd70"},{url:"archives/index.html",revision:"2bbfe06c934407b96a4f1b2e1fd70443"},{url:"article/2e5d82da.html",revision:"833ec4092a786fd86b3c91afc762c89e"},{url:"article/4a17b156.html",revision:"7948a941c7263fc26256b3437c1f3408"},{url:"article/92149899.html",revision:"369341efebbc5b5036edc8963e58f338"},{url:"categories/index.html",revision:"7ac774860b6c6dc934315635780cf26a"},{url:"categories/博文阅览/index.html",revision:"bcd4d9961e1fe550a8fb8c717157e671"},{url:"categories/杂货间/index.html",revision:"432f281847808855ff5a034c09e93bc9"},{url:"categories/研究成果/index.html",revision:"2a2838e1df3c346062d613b2ef5f695b"},{url:"css/first.css",revision:"10fd456039faf14ad0e4010149c40d15"},{url:"css/style.css",revision:"e16111047c138ff7fbed24114e96104e"},{url:"index.html",revision:"72a1aae013c36241faf01c292f7f7fed"},{url:"js/aplayer.js",revision:"0256a926f30b74f07457e05f236adec2"},{url:"js/app.js",revision:"e5a3d395fbda8b563dafbea9beb79acf"},{url:"js/issues.js",revision:"d450701b133a092543f48ffc22ce966e"},{url:"js/search/algolia.js",revision:"3a8dc835cb0dbe9ceea9e4f83237a799"},{url:"js/search/azure.js",revision:"1e73788c42d8a55e4b26b32470c4deb2"},{url:"js/search/baidu.js",revision:"4247fb05f942bf561a59975ece561cb2"},{url:"js/search/google.js",revision:"ea57d9d8604b92e062162ccca76b7f5e"},{url:"js/search/hexo.js",revision:"9e1783dc56f7541ea906411167cca5f9"},{url:"js/valine.js",revision:"15d0f1f9d975de124ef5389385961992"},{url:"shuoshuo/index.html",revision:"79387310a7c3fb21e7bdb29cf184dd8f"},{url:"sw-register.js",revision:"fda8f67ca9793b308b3b71ceece0eda9"},{url:"sw.js",revision:"f0a3b6938aba2d64edd63606ceaefea4"},{url:"tags/ADMET/index.html",revision:"154777e4ede80f3337aa1c4fd5e36b4a"},{url:"tags/AI/index.html",revision:"6fa1bafc932afc81ee529e578f5983c4"},{url:"tags/Drug-Discovery/index.html",revision:"1d39d8204264b9d0c3618d447e5b933d"},{url:"tags/Hexo/index.html",revision:"07f3a555e0d17f9864a1edd2a0de4090"},{url:"tags/index.html",revision:"cf9112ab7b7debef6535d7b585f90bc9"},{url:"tags/Nucleic-Acids-Research/index.html",revision:"44af1795aa842e22390512a323af6a0c"},{url:"tags/Project/index.html",revision:"6a9e5b274c90513b20e8e6d5b6be478d"}],{})}));
//# sourceMappingURL=service-worker.js.map
