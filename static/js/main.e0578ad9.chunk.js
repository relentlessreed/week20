(this.webpackJsonpweek20=this.webpackJsonpweek20||[]).push([[0],{34:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);var s=r(1),a=r(16),c=r.n(a),o=r(7),i=r(2),n=r.p+"static/media/headshotsmall.6c412708.jpg",l=r(0);function d(){return Object(l.jsxs)("div",{className:"aboutMeContainer",children:[Object(l.jsx)("img",{src:n,alt:"HeadShot"}),Object(l.jsx)("div",{id:"aboutCard",children:Object(l.jsx)("p",{id:"aboutText",children:"I am a 2021 Kansas University full-stack software developer graduate, with experience in front and backend. I have a passion for building applications to help better the world, and a strong drive to always be learning about tech! When I am not coding, I am either cooking/skateboarding/playing music/ or travelling."})})]})}var j=r(13),h=r.n(j),p=r(17),b=r(10),u=function(){var e=Object(s.useState)("Submit"),t=Object(b.a)(e,2),r=t[0],a=t[1],c=function(){var e=Object(p.a)(h.a.mark((function e(t){var r,s,c,o,i,n,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a("Sending..."),r=t.target.elements,s=r.name,c=r.email,o=r.message,i={name:s.value,email:c.value,message:o.value},e.next=6,fetch("http://localhost:5000/contact",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(i)});case 6:return n=e.sent,a("Submit"),e.next=10,n.json();case 10:l=e.sent,alert(l.status);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("form",{id:"contactForm",onSubmit:c,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",id:"name",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(l.jsx)("input",{type:"email",id:"email",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{id:"message",required:!0})]}),Object(l.jsx)("button",{type:"submit",children:r})]})};function m(){return Object(l.jsxs)("div",{class:"contactMeCard",children:[Object(l.jsx)("div",{id:"contactCardText",children:"Please feel free to contact me if you have any inquiries or suggestions."}),Object(l.jsx)(u,{})]})}var g=r.p+"static/media/passgenscreenshot.a6d9b028.jpg",x=r.p+"static/media/notetaker.680cfebd.png",f=r.p+"static/media/budget-tracker-demo.af390794.png",O=r.p+"static/media/fitnesstrackerscreenshot.d6238d89.png",k=r.p+"static/media/trolleyturmoilscreenshot.89865dfb.png",v=r.p+"static/media/whatcanicookscreenshot.a4a170cd.png";function w(e){return Object(l.jsx)("div",{class:"row",children:Object(l.jsx)("div",{class:"col-sm-6",children:Object(l.jsxs)("div",{class:"card",style:{width:"18rem"},children:[Object(l.jsx)("img",{src:e.project.img,alt:e.project.alt}),Object(l.jsxs)("div",{class:"card-body",children:[Object(l.jsx)("h2",{className:"projectNameText",children:e.project.projName}),Object(l.jsx)("p",{children:e.project.projDesc}),Object(l.jsx)("a",{href:e.project.deployedUrl,target:"_blank",rel:"noreferrer",children:"Deployed Link_"}),Object(l.jsx)("a",{href:e.project.githubUrl,target:"_blank",rel:"noreferrer",children:"_Github Repo"})]})]})})})}function y(){var e=[{img:g,alt:"passGenScreenshot",projName:"Password Generator",projDesc:"Create your own unique password! You decide the character types included as well as length.",deployedUrl:"https://relentlessreed.github.io/week3/",githubUrl:"https://github.com/relentlessreed/week3"},{img:x,alt:"noteTakerScreenshot",projName:"Note Taker",projDesc:"Keep track of your notes, utilizing your browsers local storage!",deployedUrl:"https://ejr-note-taker.herokuapp.com/notes",githubUrl:"https://github.com/relentlessreed/week11"},{img:f,alt:"budgetTrackerScreenshot",projName:"Budget Tracker",projDesc:"Behold, the power of PWA's! Keep track of your budget with or without an internet connection! ",deployedUrl:"https://budget-tracker-pwa-ejr.herokuapp.com/",githubUrl:"https://github.com/relentlessreed/week19"},{img:O,alt:"fitnessTrackerScreenshot",projName:"Fitness Tracker",projDesc:"Maintain your fitness records by using mongoDB!",deployedUrl:"https://workout-tracker-week18.herokuapp.com/",githubUrl:"https://github.com/relentlessreed/week18"},{img:k,alt:"trolleyTurmoilScreenshot",projName:"Trolley Turmoil",projDesc:"Gauge your own morality, make difficult Trolley dillemas for others!",deployedUrl:"https://ku-cbc-project-2-beardbros.herokuapp.com/",githubUrl:"https://github.com/jtstockard/KU-CBC-Project-2-Trolley-Turmoil"},{img:v,alt:"whatCanICookScreenshot",projName:"What Can I Cook?",projDesc:"Find a diet-specific recipe that won't kill you, with the power of API's!",deployedUrl:"https://relentlessreed.github.io/project1",githubUrl:"https://github.com/relentlessreed/project1"}];return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{id:"projectsPageText",children:"Here are six different applications I have built, alone and in a group setting with other developers in the Kansas University Full-Stack Web Development Program. Please feel free to veiw the depolyed applications as well as the repository links."}),Object(l.jsx)("div",{id:"projectPageBox",children:Object(l.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:e.map((function(e){return Object(l.jsx)(w,{project:e})}))})})]})}function S(){return Object(l.jsx)("div",{class:"resumePageBody",children:Object(l.jsxs)("div",{id:"resumePageText",children:[Object(l.jsx)("h2",{children:"List of Proficencies:"}),Object(l.jsx)("p",{children:"HTML5, CSS, JQuery, JavaScript, React, Handlebars.js, Node.js, Mongo.db, MySql, Sequelize, Express.js, JawsDB, Bcrypt, Dotenv, Bootstrap, Figma, Tailwind.css, Git, Github, Gitlab, Heroku, JSON, API's, Cookies, FontAwesome, DayJS, NoSql, RegEx, IndexedDB, Chrome Lighthouse Optimization, PWA's, MongoDB, Mongoose, MongoAtlas, MERN Stack, MVC, GraphQL, Apollo, JSON Web Tokens."}),Object(l.jsx)("a",{href:"https://drive.google.com/file/d/1rkI5SJqf7dZ4kHVvZjpA8B05CBgIEd06/view?usp=sharing",target:"_blank",rel:"noreferrer",children:"Downloadable Copy of my Resume"})]})})}function T(){return Object(l.jsxs)("div",{class:"navBar",children:[Object(l.jsx)(o.b,{to:"/",children:"About Me"}),Object(l.jsx)(o.b,{to:"/portfolio",children:"Portfolio"}),Object(l.jsx)(o.b,{to:"/contact",children:"Contact"}),Object(l.jsx)(o.b,{to:"/resume",children:"Resume"})]})}var C=function(e){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{children:"Edward Reed Full-Stack Web Developer"}),e.children]})};var N=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("a",{href:"https://github.com/relentlessreed",target:"_blank",rel:"noreferrer",children:["Github",Object(l.jsx)("i",{class:"fab fa-github"})]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("a",{href:"https://www.linkedin.com/in/reed-edward",target:"_blank",rel:"noreferrer",children:["Linked",Object(l.jsx)("i",{class:"fab fa-linkedin"})]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("a",{href:"https://twitter.com/TheWhiteEdReed",target:"_blank",rel:"noreferrer",children:["Twitter",Object(l.jsx)("i",{class:"fab fa-twitter"})]})}),Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Made with \u2764 \xa9 2021"})})]})},D=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(C,{children:Object(l.jsx)(T,{})}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/contact",component:m}),Object(l.jsx)(i.a,{exact:!0,path:"/resume",component:S}),Object(l.jsx)(i.a,{exact:!0,path:"/portfolio",component:y}),Object(l.jsx)(i.a,{exact:!0,path:"/",component:d}),Object(l.jsx)(i.a,{path:"*",component:d})]}),Object(l.jsx)(N,{})]})};r(33),r(34);c.a.render(Object(l.jsx)(D,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e0578ad9.chunk.js.map