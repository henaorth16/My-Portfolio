import{j as e}from"./index-b470539a.js";import{I as a}from"./Img-f06b7358.js";const l="/assets/geez-8b693c69.png",i="/assets/tour-eb1b3cc2.png",n="/assets/complain-8a04554e.png",c=[{imageUrl:l,title:"Ge'ez number converter",description:"most developer uses vanilla javaScript to show their programming skill because, not using library or any framework is like a challenge for them!",gitRepoLink:"https://github.com/henaorth16/Ge-ez-Number-Converter",liveLink:"https://geezconverter.netlify.app",skills:["Html","CSS","javaScript"],date:"sep-2023",mainColor:"3"},{imageUrl:n,title:"Complaint Management",description:"This full-stack project highlights my Next.js expertise. Feel free to explore the detailed repo—contributions are always welcome!",gitRepoLink:"https://github.com/henaorth16/nextjs-complaint-system/",liveLink:"https://nextjs-complaint-system-lf78kybrl-henoks-projects-67003898.vercel.app/",skills:["NextJs","Prisma","TypeScript","shadcn"],date:"jun-2024",mainColor:"49"},{imageUrl:i,title:"Tour and Travel Frontend",description:"my first work for the clients",gitRepoLink:"https://github.com/henaorth16/delight",liveLink:"https://delighttourandtravel.com/",skills:["React","Tailwind","javaScript"],date:"jul-2023",mainColor:"165"}];function p(){return e.jsx(e.Fragment,{children:e.jsxs("div",{id:"portfolio",className:"h-[100vh] pb-24 overflow-y-auto wrapper",children:[e.jsx("h1",{className:"text-primary-500 text-3xl text-center font-extrabold mt-20",children:"Projects"}),e.jsx("hr",{className:"w-full my-4 text-secondary-500"}),e.jsx("div",{className:"grid content-center md:grid-cols-2 items-center w-[fit-content] mx-auto md:px-8 md:gap-8 lg:gap-x-24 mt-12",children:c.map((t,s)=>e.jsxs("div",{className:"md:opacity-[.88] h-full hover:opacity-100 mb-6 max-w-sm w-auto mx-auto rounded-md overflow-hidden",style:{backgroundColor:`hsl(${t.mainColor}, 80%, 30%)`},children:[e.jsxs("div",{className:"relative min-h-[13rem] w-full group overflow-hidden",children:[e.jsx(a,{className:"absolute z-0 h-full w-full object-cover",src:t.imageUrl,alt:t.title}),e.jsx("div",{className:"absolute z-4 px-2 opacity-90 rounded-sm text-secondary-200 bottom-0 left-0",style:{backgroundColor:`hsl(${t.mainColor}, 80%, 16%)`},children:t.date}),e.jsxs("div",{className:"absolute w-full z-10 md:bg-secondary-900 md:top-full gap-4 md:transition-[top] md:duration-[700ms] group-hover:top-0 h-full flex justify-center items-center",children:[t.liveLink===""?e.jsx("p",{className:"text-sm bg-secondary-800 opacity-90 text-secondary-400 py-2 px-4",children:"not deployed yet "}):e.jsx("a",{href:t.liveLink,target:"_blank",className:"inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-200 bg-secondary-800 rounded-md hover:bg-secondary-700 focus:border",children:"Live Demo"}),e.jsx("a",{href:t.gitRepoLink,target:"_blank",className:"inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-200 bg-secondary-800 rounded-md hover:bg-secondary-700 focus:border",children:"See on Github"})]})]}),e.jsxs("div",{className:"px-6 py-4",children:[e.jsx("h1",{className:"font-bold text-2xl text-secondary-100 mb-2",children:t.title}),e.jsx("p",{className:"text-secondary-200 ",children:t.description})]}),e.jsx("div",{className:"px-6 pt-4 pb-2 text-sm flex",children:t.skills.map((o,r)=>e.jsx("span",{className:"inline-block bg-secondary-100 opacity-60 rounded-full px-3 py-1 text-xs font-semibold text-secondary-800 mr-2 mb-2",children:`#${o}`},r))})]},s+1))})]})})}export{p as default};
