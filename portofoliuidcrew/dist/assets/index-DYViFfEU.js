import{r as l,j as e,R as N}from"./react-DvsdDthM.js";import{c as y}from"./react-dom-C30jrkNp.js";import{g as j}from"./gsap-DjKJqAo0.js";import{F as s,f as w,a as v,b as p,c as o,d as C,e as S,g as P}from"./@fortawesome-B70t7gSo.js";import{C as k,O as I,P as O,u as L}from"./@react-three-BcfAYDzZ.js";import{m as W}from"./framer-motion-DBWIWQA3.js";import{n as E,f as M,l as D}from"./@tsparticles-CBMZjMBy.js";import"./debounce-DH428MTX.js";import"./prop-types-DB9GUwJz.js";import"./three-CYHPcAjH.js";import"./react-use-measure-BmMy3EoY.js";import"./its-fine-z8kMFGEH.js";import"./react-reconciler-C16tENYH.js";import"./scheduler-CzFDRTuY.js";import"./three-stdlib-v__waRog.js";import"./@babel-CF3RwP-h.js";import"./zustand-D0D0Oln6.js";import"./suspend-react-BKIKQNXN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const f=j.timeline(),A=()=>{f.to("body",{duration:.1,css:{overflowY:"hidden"},ease:"power3.inOut"}).to(".landing",{duration:.05,css:{overflowY:"hidden",height:"90vh"}}).to(".texts-container",{duration:0,opacity:1,ease:"Power3.easeOut"}).from(".texts-container span",{duration:1.5,delay:1,y:70,skewY:10,stagger:.4,ease:"Power3.easeOut"}).to(".texts-container span",{duration:1,y:70,skewY:-20,stagger:.2,ease:"Power3.easeOut"}).to(".landing",{duration:.05,css:{overflowY:"hidden",height:"unset"}}).to("body",{duration:.1,css:{overflowY:"scroll"},ease:"power3.inOut"}).from(".landing__top .sub",{duration:1,opacity:0,y:80,ease:"expo.easeOut"}).to(".preloader",{duration:1.5,height:"0vh",ease:"Power3.easeOut",onComplete:F()},"-=2").from(".landing__main .text",{duration:2,y:10,opacity:0,stagger:{amount:2},ease:"power3.easeInOut"}).from(".links .item",{duration:.5,opacity:0,delay:window.innerWidth<763?-3:-.6,stagger:{amount:.5},ease:"expo.easeOut",onComplete:U()}).from(".main-circle",{duration:1,opacity:0,ease:"power3.easeInOut",onComplete:T()}).from(".shapes .shape",{duration:1,opacity:0,delay:-1,ease:"power3.easeInOut",stagger:1}).to(".preloader",{duration:0,css:{display:"none"}})},F=()=>{window.innerWidth<763&&f.from(".landing__main2",{duration:1,delay:0,opacity:0,y:80,ease:"expo.easeOut"})},T=()=>{j.timeline({repeat:-1}).to(".shapes .shape",{duration:4,rotate:360,delay:-1,ease:"power3.easeInOut",stagger:2}).to(".shapes .shape-3",{duration:1,rotate:360,delay:-2,ease:"power3.easeInOut"}).to(".shapes .shape",{duration:3,rotate:0,ease:"power3.easeInOut",stagger:1}).to(".shapes .shape",{duration:1,opacity:0,delay:-1,ease:"power3.easeInOut",stagger:1}).to(".shapes .shape",{duration:1.5,opacity:1,ease:"power3.easeInOut",stagger:1})},U=()=>{j.timeline({repeat:-1}).to(".shapes .main-circle",{duration:6,x:-30,y:-50,ease:"expo.easeOut"}).to(".shapes .main-circle",{duration:6,x:-30,y:50,ease:"expo.easeOut"}).to(".shapes .main-circle",{duration:4,x:0,y:0,ease:"expo.easeOut"})},B="/assets/logo-CkqgSsIr.png",z=()=>(l.useEffect(()=>{A()},[]),e.jsx("div",{className:"preloader",children:e.jsx("div",{className:"img-container",children:e.jsx("img",{src:B,alt:""})})})),q="/assets/favicon-CxzZXEdf.png",H=()=>e.jsx("nav",{children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"logo",children:[e.jsx("img",{src:q,alt:"logo"}),e.jsx("h3",{className:"logo-text",children:"I&D Crew | FullStack Developers"})]}),e.jsx("div",{className:"nav-wrapper",children:e.jsxs("ul",{className:"nav-items",children:[e.jsx("a",{href:"#about",children:e.jsx("li",{className:"nav-item",children:"About Us"})}),e.jsx("a",{href:"#services",children:e.jsx("li",{className:"nav-item",children:"Services"})}),e.jsx("a",{href:"#portofolio",children:e.jsx("li",{className:"nav-item",children:"Portofolio"})}),e.jsx("a",{href:"#contact",children:e.jsx("li",{className:"nav-item",children:"Contact"})})]})})]})});function _(){const[i,t]=l.useState(1),[a,c]=l.useState(0),n=d=>{const m=d.target.value;t(m),r(m)},r=d=>{if(d>2){let g=d*100-d*100*10/100;g+=50,c(g)}else c(d*100+50)};return e.jsx("div",{className:"slider-container",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"slider-section",children:[e.jsx("h3",{children:"Static Website"}),e.jsxs("label",{htmlFor:"static-pages-slider",children:["Number of Pages: ",i]}),e.jsx("input",{type:"range",id:"static-pages-slider",min:"1",max:"50",className:"slider",value:i,onChange:n}),e.jsx("div",{className:"price-display",children:e.jsxs("label",{htmlFor:"static-price-display",children:["Price: $",a.toFixed(2)]})})]})})})}function R(){const[i,t]=l.useState(null),a=n=>{t(n)},c=()=>{t(null)};return e.jsxs("div",{className:"services-container",children:[e.jsx("a",{className:"btn-shine",children:"Our Services"}),e.jsx("div",{className:"services-section",children:e.jsxs("ul",{className:"service-list",children:[e.jsxs("li",{className:"service-container",children:[e.jsxs("div",{className:"service-card",onClick:()=>a(1),children:[e.jsx(s,{icon:w,className:"service-icon"}),e.jsx("h3",{children:"UI/UX Consultancy"}),e.jsxs("div",{className:"learn-more-btn",children:["Learn More ",e.jsx(s,{icon:v})]})]}),e.jsx("div",{className:`service-modal flex-center ${i===1?"active":""}`,children:e.jsxs("div",{className:"service-modal-body",children:[e.jsxs("button",{className:"modal-close-btn",onClick:c,children:[e.jsx(s,{icon:p})," Close"]}),e.jsx("h3",{children:"UI/UX Consultancy"}),e.jsx("h4",{children:"What is UX consulting?"}),e.jsx("p",{children:"UX consulting helps companies improve their product’s overall usability and optimize expenses by implementing the right UX processes, methods, and tools."}),e.jsx("h4",{children:"What I provide"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(s,{icon:o})," Establish the right UX processes"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Create exceptional user experiences"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Discover new business opportunities"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Save resources"]})]})]})})]}),e.jsxs("li",{className:"service-container",children:[e.jsxs("div",{className:"service-card",onClick:()=>a(2),children:[e.jsx(s,{icon:C,className:"service-icon"}),e.jsx("h3",{children:"Branding & Design"}),e.jsxs("div",{className:"learn-more-btn",children:["Learn More ",e.jsx(s,{icon:v})]})]}),e.jsx("div",{className:`service-modal flex-center ${i===2?"active":""}`,children:e.jsxs("div",{className:"service-modal-body",children:[e.jsxs("button",{className:"modal-close-btn",onClick:c,children:[e.jsx(s,{icon:p})," Close"]}),e.jsx("h3",{children:"Branding & Design"}),e.jsx("h4",{children:"What is Brand & Design?"}),e.jsx("p",{children:"Brand Design can be defined as one of the crucial marketing practices of creating the name, logo, design, and the symbolic elements related to the brand to create a distinctive identity in comparison to the other brands in the market and also providing impetus to the product differentiation."}),e.jsx("h4",{children:"What I provide"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(s,{icon:o})," Logo Design"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Banner Design"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Visual Identity Packages"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Business Cards & Business Systems"]})]})]})})]}),e.jsxs("li",{className:"service-container",children:[e.jsxs("div",{className:"service-card",onClick:()=>a(3),children:[e.jsx(s,{icon:S,className:"service-icon"}),e.jsx("h3",{children:"Web Development"}),e.jsxs("div",{className:"learn-more-btn",children:["Learn More ",e.jsx(s,{icon:v})]})]}),e.jsx("div",{className:`service-modal flex-center ${i===3?"active":""}`,children:e.jsxs("div",{className:"service-modal-body",children:[e.jsxs("button",{className:"modal-close-btn",onClick:c,children:[e.jsx(s,{icon:p})," Close"]}),e.jsx("h3",{children:"Web Development"}),e.jsx("h4",{children:"What is Web Development?"}),e.jsx("p",{children:"Web development services are used to design, build, support, and evolve all types of web-based software."}),e.jsx("h4",{children:"What I provide"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(s,{icon:o})," Web application development"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Testing"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Maintenance"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Design personalizat"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Site-ul va fi optimizat pentru motoarele de cautare (SEO)"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Site-ul va fi securizat"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Site-ul va fi creat in 7-14 zile lucratoare"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Site-ul va fi scris de la 0."]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Site-ul va fi optimizat pentru toate dispozitivele"]})]}),e.jsx(_,{})]})})]}),e.jsxs("li",{className:"service-container",children:[e.jsxs("div",{className:"service-card",onClick:()=>a(4),children:[e.jsx(s,{icon:P,className:"service-icon"}),e.jsx("h3",{children:"Content Writing"}),e.jsxs("div",{className:"learn-more-btn",children:["Learn More ",e.jsx(s,{icon:v})]})]}),e.jsx("div",{className:`service-modal flex-center ${i===4?"active":""}`,children:e.jsxs("div",{className:"service-modal-body",children:[e.jsxs("button",{className:"modal-close-btn",onClick:c,children:[e.jsx(s,{icon:p})," Close"]}),e.jsx("h3",{children:"Content Writing"}),e.jsx("h4",{children:"What is Content Writing?"}),e.jsx("p",{children:"Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes."}),e.jsx("h4",{children:"What I provide"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(s,{icon:o})," Web content writing"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Blog writing for websites"]}),e.jsxs("li",{children:[e.jsx(s,{icon:o})," Social media content"]})]})]})})]})]})})]})}const X=({isMobile:i})=>{const t=L("./desktop_pc/scene.gltf");return e.jsxs("mesh",{receiveShadow:!0,castShadow:!0,children:[e.jsx("hemisphereLight",{intensity:.35,groundColor:"black"}),e.jsx("spotLight",{position:[-20,50,10],angle:.3,penumbra:1,intensity:1.5,castShadow:!0,"shadow-mapSize":1024}),e.jsx("pointLight",{position:[10,10,10],intensity:1}),e.jsx("directionalLight",{intensity:1,position:[5,10,7],castShadow:!0,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024}),e.jsx("primitive",{object:t.scene,scale:i?.7:.75,position:i?[0,-3,-2.2]:[0,-3.25,-1.5],rotation:[-.01,-.2,-.1]})]})},$=()=>{const[i,t]=l.useState(!1);return l.useEffect(()=>{const a=window.matchMedia("(max-width: 500px)");t(a.matches);const c=n=>{t(n.matches)};return a.addEventListener("change",c),()=>{a.removeEventListener("change",c)}},[]),e.jsxs(k,{frameloop:"demand",shadows:!0,dpr:[1,2],camera:{position:[20,3,5],fov:25},gl:{preserveDrawingBuffer:!0},children:[e.jsxs(l.Suspense,{fallback:null,children:[e.jsx(I,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2,mouseButtons:{LEFT:0,RIGHT:null,MIDDLE:1}}),e.jsx(X,{isMobile:i})]}),e.jsx(O,{all:!0})]})},Y=[{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",alt:"javascript logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",alt:"typescript logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",alt:"nodejs logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",alt:"express logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",alt:"npm logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",alt:"react logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",alt:"eslint logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",alt:"mongodb logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",alt:"html5 logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",alt:"css3 logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",alt:"python logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",alt:"flask logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",alt:"flutter logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",alt:"dart logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",alt:"androidstudio logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg",alt:"debian logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",alt:"bash logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",alt:"linux logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",alt:"docker logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",alt:"nginx logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",alt:"go logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",alt:"c logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",alt:"cplusplus logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",alt:"aftereffects logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",alt:"photoshop logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",alt:"git logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",alt:"github logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",alt:"canva logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",alt:"chrome logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",alt:"google logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",alt:"oracle logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",alt:"redis logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",alt:"sqlite logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",alt:"mysql logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",alt:"php logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",alt:"vscode logo"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",alt:"vim logo"}];function V(){return e.jsx("div",{className:"technologies-container",children:Y.map((i,t)=>e.jsx("div",{className:"technology-item",style:{"--order":t},children:e.jsx("img",{src:i.src,alt:i.alt})},t))})}const G=()=>e.jsxs("section",{className:"hero-container",children:[e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"hero-icon",children:[e.jsx("div",{className:"circle"}),e.jsx("div",{className:"line"})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"hero-text",children:["Hi, we are ",e.jsx("span",{className:"text-[#bf77f6]",children:"I&D Crew"})]}),e.jsxs("p",{className:"hero-subtext",children:["Full-stack developers, we create web pages/web apps with a focus on ",e.jsx("br",{})," both UI/UX design and back-end functionality. ",e.jsx("br",{})," We enjoy collaborating on ",e.jsx("br",{})," comprehensive projects, going to hackathons and ",e.jsx("br",{})," we have a true passion for video filmmaking/editing."]}),e.jsx(V,{})]})]}),e.jsx($,{}),e.jsx("div",{className:"hero-scroll",children:e.jsx("a",{href:"#about",children:e.jsx("div",{className:"scroll-container",children:e.jsx(W.div,{animate:{y:[0,24,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"},className:"scroll-ball"})})})})]}),J=()=>{const[i,t]=l.useState(!1);l.useEffect(()=>{E(async n=>{await D(n)}).then(()=>{t(!0)})},[]);const a=n=>{console.log(n)},c=l.useMemo(()=>({background:{},fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"}},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:6,straight:!1},number:{density:{enable:!0},value:80},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0}),[]);return i?e.jsx(M,{id:"tsparticles",particlesLoaded:a,options:c}):e.jsx(e.Fragment,{})},K="/assets/profile-wG5kvdVH.jpg",Q=()=>e.jsxs("div",{className:"about-container",children:[e.jsx("a",{class:"btn-shine",children:"About Us"}),e.jsxs("div",{className:"about-wrapper",children:[e.jsx("div",{className:"alex",children:e.jsx("section",{className:"education",id:"education",children:e.jsxs("div",{className:"timeline-items",children:[e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-dot"}),e.jsx("div",{className:"timeline-date",children:"2020 - 2024"}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("h3",{children:"Highschool"}),e.jsx("p",{children:"Ovidius Theoretical Highschool Constanta"})]})]}),e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-dot"}),e.jsx("div",{className:"timeline-date",children:"2024 - present "}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("h3",{children:"Politehnica University of Bucharest"}),e.jsxs("p",{children:["Faculty of Automatic Control and Computer Science",e.jsx("br",{})," ",e.jsx("br",{})," Automatic control and applied informatics"]})]})]})]})})}),e.jsxs("div",{className:"card",children:[e.jsx("img",{src:K,alt:""}),e.jsxs("div",{className:"card__content",children:[e.jsx("p",{className:"card__title",children:"Who we are ?"}),e.jsx("p",{className:"card__description",children:"I&D Crew, comprised of Ionescu Andrei and Dinu Alexandru, is a talented full-stack developer team based in Constanța, Romania. We are students at the University of Politehnica Bucharest (UPB) and have a proven track record of success, having won numerous hackathons and completed significant projects. Together, we specialize in creating comprehensive and efficient web solutions, ensuring a seamless integration of front-end design and back-end functionality."})]})]}),e.jsx("div",{className:"andrei",children:e.jsx("section",{className:"education",id:"education",children:e.jsxs("div",{className:"timeline-items",children:[e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-dot"}),e.jsx("div",{className:"timeline-date",children:"2020 - 2024"}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("h3",{children:"Highschool"}),e.jsx("p",{children:"Ovidius Theoretical Highschool Constanta"})]})]}),e.jsxs("div",{className:"timeline-item",children:[e.jsx("div",{className:"timeline-dot"}),e.jsx("div",{className:"timeline-date",children:"2024 - present"}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("h3",{children:"Politehnica University of Bucharest"}),e.jsxs("p",{children:["Faculty of Engineering in Foreign Languages",e.jsx("br",{}),e.jsx("br",{}),"Computers and information technology"]})]})]})]})})})]})]}),Z="/assets/3672298-CIH8Uzfy.jpg",ee=()=>{const[i,t]=l.useState(""),[a,c]=l.useState(""),[n,r]=l.useState(""),[d,m]=l.useState(!1),g=h=>{h.preventDefault(),console.log("Name:",i),console.log("Email:",a),console.log("Message:",n)},b=()=>{m(!d)};return e.jsx("div",{children:e.jsxs("div",{className:`contact-services-expanded ${d?"expanded":""}`,children:[e.jsx("button",{onClick:b,children:"Contact"}),e.jsx("div",{className:"contact-content",children:e.jsxs("form",{onSubmit:g,className:"contact-services",children:[e.jsx("h1",{style:{color:"black"},children:"Contact Us"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",value:i,onChange:h=>t(h.target.value),required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",value:a,onChange:h=>c(h.target.value),required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",children:"Message:"}),e.jsx("textarea",{id:"message",value:n,onChange:h=>r(h.target.value),required:!0})]}),e.jsx("button",{type:"submit",children:"Send"})]})})]})})};function x({Title:i,Description:t,Image:a,Link:c}){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"card",children:[e.jsx("img",{src:a,style:{maxWidth:"50%"},alt:"Avatar"}),e.jsxs("div",{className:"container",children:[e.jsx("h4",{children:e.jsx("b",{children:i})}),e.jsx("p",{children:t}),e.jsx("a",{href:c,children:"View Project"})]})]})})}const se="/assets/Taxi-Bs827cjR.webp",u="/assets/logo512JFS-B7JUKqNf.png";function ie(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{style:{fontSize:"334px"},className:"btn-shine",children:"PROIECTE"}),e.jsxs("div",{className:"flex",children:[e.jsx(x,{Title:"Taxi Management",Description:"A web application for managing a taxi company.",Link:"www.google.com",Image:se}),e.jsx(x,{Title:"JSF Project",Description:"An online job store for students.",Link:"www.google.com",Image:u}),e.jsx(x,{Title:"Plug Hunt",Description:"An EV charging station platform for renting and finding Charging stations.",Link:"www.google.com",Image:u})]})]})}function ne(){const i={width:"100vw",minHeight:"100vh"};return e.jsxs("div",{className:"app",children:[e.jsxs("div",{className:"bg-image",children:[e.jsx("img",{src:Z,alt:"Promotional",id:"promoImage"}),e.jsx("div",{className:"image-overlay"})]}),e.jsxs("div",{style:i,className:"main bg",children:[e.jsx(H,{}),e.jsx(G,{})]}),e.jsx("div",{style:i,className:"main bg1",id:"about",children:e.jsx(Q,{})}),e.jsx("div",{style:i,className:"main bg2",id:"services",children:e.jsx(R,{})}),e.jsx("div",{style:i,className:"main bg3",id:"contact",children:e.jsx(ee,{})}),e.jsx("div",{style:i,className:"main bg3",id:"portofolio",children:e.jsx(ie,{})}),e.jsx(J,{}),e.jsx(z,{})]})}y.createRoot(document.getElementById("root")).render(e.jsx(N.StrictMode,{children:e.jsx(ne,{})}));
