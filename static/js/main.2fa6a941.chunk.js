(this["webpackJsonpTusheet-Website"]=this["webpackJsonpTusheet-Website"]||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),c=n(17),r=n.n(c),l=(n(23),n(13)),o=n.n(l),d=n(2),m=n(3),h=n(5),u=n(4),j=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;function t(e){document.getElementsByClassName("current")[0].className="",e.target.className="current"}return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)("header",{id:"home",children:[Object(a.jsxs)("nav",{id:"nav-wrap",children:[Object(a.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show menu",children:"Show menu"}),Object(a.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide menu",children:"Hide menu"}),Object(a.jsxs)("ul",{id:"nav",className:"nav",children:[Object(a.jsx)("li",{onClick:t,children:Object(a.jsx)("a",{className:"current",href:"#home",children:"Home"})}),Object(a.jsx)("li",{onClick:t,children:Object(a.jsx)("a",{href:"#about",children:"About Me"})}),Object(a.jsx)("li",{onClick:t,children:Object(a.jsx)("a",{href:"#skills",children:"Skills"})}),Object(a.jsx)("li",{onClick:t,children:Object(a.jsx)("a",{href:"#work",children:"Work Experience"})}),Object(a.jsx)("li",{onClick:t,children:Object(a.jsx)("a",{href:"#timeline",children:"Timeline"})}),Object(a.jsx)("li",{onClick:t,children:Object(a.jsx)("a",{href:"#projects",children:"Projects"})}),Object(a.jsx)("li",{onClick:t,children:Object(a.jsx)("a",{href:"#contact",children:"Contact Me"})}),Object(a.jsx)("li",{onClick:t,children:Object(a.jsxs)("a",{href:"/Tusheet-Website/public/Downloads/tusheet_resume.pdf",download:"tusheet_resume.pdf",children:["Download Resume ",Object(a.jsx)("i",{className:"fas fa-download"})]})})]})]}),Object(a.jsx)("div",{className:"row banner",children:Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(a.jsx)("h3",{style:{color:"white",fontFamily:"sans-serif"},children:e.role}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{className:"social",children:e.socials&&e.socials.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,target:"_blank",children:Object(a.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(a.jsx)("p",{className:"scrolldown",children:Object(a.jsx)("a",{href:"#about",children:Object(a.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),n}(s.Component),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)("section",{id:"about",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"three columns",children:Object(a.jsx)("img",{className:"profile-pic",src:"/Tusheet-Website/"+e.profile_pic,alt:"TusheetImage"})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("h2",{children:"About Me"}),Object(a.jsx)("p",{children:e.aboutMe})]})]})})}}]),n}(s.Component);var g=function(){return i.a.useEffect((function(){document.querySelectorAll(".card").forEach((function(e){e.addEventListener("click",(function(){return window.location.href=e.dataset.redirect}))}))}),[]),Object(a.jsxs)("section",{id:"contact",children:[Object(a.jsx)("div",{className:"row section-head",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Contact Me"})})}),Object(a.jsxs)("div",{className:"contact-info",children:[Object(a.jsxs)("div",{className:"card","data-redirect":"mailto:tgoli3@gatech.edu",children:[Object(a.jsx)("i",{className:"card-icon far fa-envelope"}),Object(a.jsx)("p",{children:"tgoli3@gatech.edu"})]}),Object(a.jsxs)("div",{className:"card","data-redirect":"tel:470-350-4410",children:[Object(a.jsx)("i",{className:"card-icon fas fa-phone"}),Object(a.jsx)("p",{href:"tel:470-350-4410",children:"+1 470-350-4410"})]}),Object(a.jsxs)("div",{className:"card","data-redirect":"https://www.linkedin.com/in/tusheet",children:[Object(a.jsx)("i",{className:"card-icon fab fa-linkedin"}),Object(a.jsx)("p",{href:"https://www.linkedin.com/in/tusheet",children:"linkedin.com/in/tusheet"})]})]})]})},b=n(8),x=n.n(b),O=n(9),f=n.n(O);n(15),n(16);var v=function(e){var t=e.resumeData;return i.a.useEffect((function(){if(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)>920)x()(".slide--parent"),new f.a(".slide--parent",{imagesLoaded:!0,wrapAround:!0,adaptiveHeight:!0})}),[]),Object(a.jsx)("section",{id:"projects",className:"main-content",children:Object(a.jsxs)("div",{className:"row skill",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Projects"})})}),Object(a.jsx)("div",{className:"nine columns main-col projects-bg",children:Object(a.jsx)("div",{className:"slide--parent",children:t.projects&&t.projects.map((function(e){return Object(a.jsx)("div",{className:"parent--el",children:Object(a.jsxs)("div",{className:"two--col",children:[Object(a.jsx)("div",{className:"is-item has--img",children:Object(a.jsx)("figure",{className:"the-img",children:Object(a.jsx)("img",{src:"/Tusheet-Website/"+e.image,alt:""})})}),Object(a.jsx)("div",{className:"is-item has--content",children:Object(a.jsxs)("div",{className:"is-item--inner",children:[Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:e.employer})}),Object(a.jsx)("small",{children:e.position}),Object(a.jsx)("p",{children:e.description})]})})]})})}))})}),Object(a.jsx)("div",{className:"nine columns projects-sm",children:t.projects&&t.projects.map((function(e){return Object(a.jsxs)("div",{className:"timeline-card",children:[Object(a.jsx)("img",{src:"/Tusheet-Website/"+e.image,alt:""}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:Object(a.jsx)("b",{children:e.employer})}),Object(a.jsx)("small",{children:e.position}),Object(a.jsx)("p",{children:e.description})]})]})}))})]})})},w=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)("section",{id:"skills",className:"main-content",children:Object(a.jsxs)("div",{className:"row skill",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Skills"})})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("p",{}),Object(a.jsx)("div",{className:"bars",children:Object(a.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:"bar-expand",style:{width:e.skillLevel}}),Object(a.jsx)("em",{children:Object(a.jsx)("span",{children:e.skillname})})]})}))})})]})]})})}}]),n}(s.Component),k=(n(35),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)("section",{id:"timeline",className:"main-content",children:Object(a.jsxs)("div",{className:"row skill",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Timeline"})})}),Object(a.jsx)("div",{className:"timeline-container",children:e.timelineData.map((function(e,t){return function(e){return Object(a.jsx)("div",{className:"timeline-item",children:Object(a.jsxs)("div",{className:"timeline-item-content",children:[Object(a.jsx)("span",{className:"tag",style:{background:e.category.color},children:e.category.tag}),Object(a.jsx)("time",{children:e.date}),Object(a.jsxs)("div",{className:"timeline-card",children:[Object(a.jsx)("img",{src:"/Tusheet-Website/"+e.image_url,alt:""}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:Object(a.jsx)("b",{children:e.title})}),Object(a.jsx)("p",{children:e.text})]})]}),e.link&&Object(a.jsx)("a",{href:e.link.url,target:"_blank",rel:"noopener noreferrer",children:e.link.text}),Object(a.jsx)("span",{className:"circle"})]})})}(e)}))})]})})}}]),n}(s.Component));var y=function(e){var t=e.resumeData;return i.a.useEffect((function(){if(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)>920)x()(".slide--parent"),new f.a(".slide--parent",{imagesLoaded:!0,wrapAround:!0,adaptiveHeight:!0})}),[]),Object(a.jsx)("section",{id:"work",className:"main-content",children:Object(a.jsxs)("div",{className:"row skill",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Work Experience"})})}),Object(a.jsx)("div",{className:"nine columns main-col work-bg",children:Object(a.jsx)("div",{className:"slide--parent",children:t.work&&t.work.map((function(e){return Object(a.jsx)("div",{className:"parent--el",children:Object(a.jsxs)("div",{className:"two--col",children:[Object(a.jsx)("div",{className:"is-item has--img",children:Object(a.jsx)("figure",{className:"the-img",children:Object(a.jsx)("img",{src:"/Tusheet-Website/"+e.image,alt:""})})}),Object(a.jsx)("div",{className:"is-item has--content",children:Object(a.jsxs)("div",{className:"is-item--inner",children:[Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:e.employer})}),Object(a.jsx)("small",{children:e.position}),Object(a.jsx)("p",{children:e.description})]})})]})})}))})}),Object(a.jsx)("div",{className:"nine columns work-sm",children:t.work&&t.work.map((function(e){return Object(a.jsxs)("div",{className:"timeline-card",children:[Object(a.jsx)("img",{src:"/Tusheet-Website/"+e.image,alt:""}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:Object(a.jsx)("b",{children:e.employer})}),Object(a.jsx)("small",{children:e.position}),Object(a.jsx)("p",{children:e.description})]})]})}))})]})})},A=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"twelve columns",children:Object(a.jsx)("ul",{className:"social-links",children:e.socials&&e.socials.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,target:"_blank",children:Object(a.jsx)("i",{className:e.className})})})}))})}),Object(a.jsx)("div",{id:"go-top",children:Object(a.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(a.jsx)("i",{className:"fas fa-home"})})})]})})}}]),n}(s.Component),N={imageUrl:"",name:"Tusheet Goli",role:"Senior at Georgia Tech, BSCS/MSCS",profile_pic:"public_images/TusheetImage.jpg",linkedIn_ID:"https://www.linkedin.com/in/tusheet",email:"tgoli3@gatech.edu",tel_number:"+1 470-350-4410",aboutMe:"Enthusiastic student of computer science with a passion to explore the application of the sciences and the power of technology. I am passionate about application of Artificial Intelligence, Machine Learning & Information Networks in industry. My experience at agile growth oriented environments has provided me the opportunity to put my coding knowledge to enhance user experiences and contribute towards client critical projects. I am eager to pursue opportunities that stretch my interests in full stack development and Machine Learning applications in industry.",socials:[{name:"linkedin",url:"https://www.linkedin.com/in/tusheet",className:"fab fa-linkedin"},{name:"github",url:"http://www.github.com/Tusheet10Goli",className:"fab fa-github"},{name:"email",url:"mailto:tgoli3@gatech.edu",className:"fas fa-envelope"}],address:"Atlanta, GA",website:"https://tusheet10goli.github.io/Tusheet-Website/",education:[{University:"Georgia Institute of Technology",Degree:"Bachelors of Science and Masters of Science",Major:"Computer Science",Threads:"Intelligence, Machine Learning, and Information Info-Networks",GradMonth:"December",GradYear:"2022",GPA:"4.0","Major GPA":"4.0"}],skillsDescription:"",skills:[{skillname:"Python",skillLevel:"95%"},{skillname:"Java",skillLevel:"95%"},{skillname:"JavaScript",skillLevel:"75%"},{skillname:"PHP",skillLevel:"80%"},{skillname:"C++",skillLevel:"85%"},{skillname:"C",skillLevel:"75%"},{skillname:"Assembly Language",skillLevel:"69%"},{skillname:"HTML5",skillLevel:"85%"},{skillname:"CSS",skillLevel:"80%"},{skillname:"SQL (MySQL, MariaDB)",skillLevel:"95%"}],work:[{employer:"YugabyteDB",position:"Platform and Cloud Intern",description:"Co-founding member of SameTunes LLC, a startup from Georgia Tech\u2019s Create-X program. An online\nportal for music compatibility driven through robust algorithm based interests match, SameTunes gained\nover 15k users at launch.\n Analyzed user stats using Spotify's API.\nFull Stack Development on critical components of the website.\nCoordinated a team of four developers to create back-end schema and related database structures.\nFront-end: Bootstrap & CSS, Backend: server-side scripting using php, and database management: MYSQL",url:"https://www.yugabyte.com/",image:"public_images/yugabyte_logo_2.png"},{employer:"SameTunes LLC",position:"Co-Founder | Head of Algorithm Design",description:"Co-founding member of SameTunes LLC, a startup from Georgia Tech\u2019s Create-X program. An online\nportal for music compatibility driven through robust algorithm based interests match, SameTunes gained\nover 15k users at launch.\nAnalyzed user stats using Spotify's API.\nFull Stack Development on critical components of the website.\nCoordinated a team of four developers to create back-end schema and related database structures.\nFront-end: Bootstrap & CSS, Back-end: server-side scripting using php, and database management: MYSQL",url:"http://www.sametunes.com",image:"public_images/sametunes_logo.png"},{employer:"Hisense USA",position:"Software Engineer Intern",description:"Worked in the Research and Development Center with Hisense USA to create system and consumer applications.\nWorked on ACR (Automatic Content Recognition) for Hisense TVs which is a Picture and Audio Quality AI technology that recognizes TV content\nand launches appropriate customized settings for video and audio to enhance the overall user experience.\nDeveloped an Android TV usage recording application that records the usage statistics, usage patterns, and tendencies of the user to suggest the\nprovide user interested content.\nRedesigned the Hisense Product Registration to support one-click device registration.",url:"https://www.hisense-usa.com/",image:"public_images/hisense_logo.png"},{employer:"Automated Algorithm Design",position:"Undergraduate Research Assistant",description:"Automated Algorithm Design is a Google sponsored research that NPL and CV application in Genetic Machine Learning Algorithms.Implement NLP applications to analyze meaning and sentiment in text data using Genetic Machine Learning.\nAnalyzed NHS Chest X-Ray data to accurately predict the onset of diseases and increased evaluation accuracy\nby 27% by creating mating and mutation functions for CIFAR-10 X-Ray CV dataset.",url:"https://www.vip.gatech.edu/teams/automated-algorithm-design",image:"public_images/ml_image.png"}],projects:[{employer:"YugabyteDB",position:"Platform and Cloud Intern",description:"Co-founding member of SameTunes LLC, a startup from Georgia Tech\u2019s Create-X program. An online\nportal for music compatibility driven through robust algorithm based interests match, SameTunes gained\nover 15k users at launch.\n Analyzed user stats using Spotify's API.\nFull Stack Development on critical components of the website.\nCoordinated a team of four developers to create back-end schema and related database structures.\nFront-end: Bootstrap & CSS, Backend: server-side scripting using php, and database management: MYSQL",url:"https://www.yugabyte.com/",image:"public_images/yugabyte_logo.png"},{employer:"SameTunes LLC",position:"Co-Founder | Head of Algorithm Design",description:"Co-founding member of SameTunes LLC, a startup from Georgia Tech\u2019s Create-X program. An online\nportal for music compatibility driven through robust algorithm based interests match, SameTunes gained\nover 15k users at launch.\nAnalyzed user stats using Spotify's API.\nFull Stack Development on critical components of the website.\nCoordinated a team of four developers to create back-end schema and related database structures.\nFront-end: Bootstrap & CSS, Back-end: server-side scripting using php, and database management: MYSQL",url:"http://www.sametunes.com",image:"public_images/sametunes_logo.png"},{employer:"Hisense USA",position:"Software Engineer Intern",description:"Worked in the Research and Development Center with Hisense USA to create system and consumer applications.\nWorked on ACR (Automatic Content Recognition) for Hisense TVs which is a Picture and Audio Quality AI technology that recognizes TV content\nand launches appropriate customized settings for video and audio to enhance the overall user experience.\nDeveloped an Android TV usage recording application that records the usage statistics, usage patterns, and tendencies of the user to suggest the\nprovide user interested content.\nRedesigned the Hisense Product Registration to support one-click device registration.",url:"https://www.hisense-usa.com/",image:"public_images/hisense_logo.png"},{employer:"Automated Algorithm Design",position:"Undergraduate Research Assistant",description:"Automated Algorithm Design is a Google sponsored research that NPL and CV application in Genetic Machine Learning Algorithms.Implement NLP applications to analyze meaning and sentiment in text data using Genetic Machine Learning.\nAnalyzed NHS Chest X-Ray data to accurately predict the onset of diseases and increased evaluation accuracy\nby 27% by creating mating and mutation functions for CIFAR-10 X-Ray CV dataset.",url:"https://www.vip.gatech.edu/teams/automated-algorithm-design",image:"public_images/ml_image.png"}],timelineData:[{title:"TA: Advanced Algorithm Design",text:"Concepts: Java, Advanced Algorithms, Dynamic Programming, Project Organization and Creating, Student Management",date:"Aug 2021 - Present",category:{tag:"Teaching Assistant",color:"#ef8110"},link:{url:"https://gt-cs-3510.github.io/syllabus.html",text:"CS 3510 - Advanced Algorithm Design"},image_url:"public_images/java.png"},{title:"YugabyteDB",text:"Concepts: Java, Python, Linux, Ansible, JS, SQL, Scala, Feature Design and Management",date:"May 2021 - Aug 2021",category:{tag:"Internship",color:"#018f69"},link:{url:"https://www.yugabyte.com/",text:"YugabyteDB"},image_url:"public_images/yugabyte_logo.png"},{title:"TA: Data Structures and Algorithms",text:"Concepts: Java, Data Structures, Algorithms, Project Organization and Creating, Student Management",date:"Aug 2020 - May 2021",category:{tag:"Teaching Assistant",color:"#ef8110"},link:{url:"https://catalog.gatech.edu/courses-undergrad/cs/",text:"CS 1332 - Data Structures and Algorithms"},image_url:"public_images/java.png"},{title:"SameTunes LLC",text:"Concepts: PHP, Bootstrap, React, SQL, Algorithm Design, API Design, Agile Development, Web Development",date:"May 2020 - Aug 2020",category:{tag:"Internship",color:"#018f69"},link:{url:"https://www.sametunes.com",text:"SameTunes: Social Music"},image_url:"public_images/sametunes_logo.png"},{title:"Hisense USA",text:"Concepts: Android Development, Java, System Services, Research & Development",date:"May 2019 - Aug 2019",category:{tag:"Internship",color:"#018f69"},link:{url:"https://www.hisense-usa.com/",text:"Hisense USA"},image_url:"public_images/hisense_logo_2.jpg"},{title:"Automated Algorithm Design Research Project",text:"Concepts: Machine Learning, Genetic Algorithms, NLP, CV, Research Principles",date:"Aug 2019 - Dec 2020",category:{tag:"Research",color:"#1ecbe1"},link:{url:"https://www.vip.gatech.edu/teams/automated-algorithm-design",text:"Automated Algorithm Design Research"},image_url:"public_images/AAD_VIP.png"},{title:"TA: Object Oriented Programming",text:"Concepts: Java, Object Oriented Programming, Project Organization and Creating, Student Management",date:"Aug 2019 - Aug 2020",category:{tag:"Teaching Assistant",color:"#ef8110"},link:{url:"https://www.cc.gatech.edu/~stasko/1331/",text:"CS 1331 - Object Oriented Programming"},image_url:"public_images/java.png"}]};n(36),n(37),n(38),n(39);var C=function(){return i.a.useEffect((function(){new o.a("#nav-wrap",{activeClass:"current",ease:"inQuad"})}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{resumeData:N}),Object(a.jsx)(p,{resumeData:N}),Object(a.jsx)(w,{resumeData:N}),Object(a.jsx)(y,{resumeData:N}),Object(a.jsx)(k,{resumeData:N}),Object(a.jsx)(v,{resumeData:N}),Object(a.jsx)(g,{}),Object(a.jsx)(A,{resumeData:N})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),S()}},[[40,1,2]]]);
//# sourceMappingURL=main.2fa6a941.chunk.js.map