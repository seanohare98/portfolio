(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(7),o=t.n(r),s=(t(13),t(1)),c=t(2),l=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},e.name),i.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank"},i.a.createElement("i",{className:e.className})))})))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("h2",null,"About Me"),i.a.createElement("p",null,e.aboutme),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"columns contact-details"},i.a.createElement("h2",null,"Contact Details"),i.a.createElement("p",{className:"address"},i.a.createElement("span",null,e.name),i.a.createElement("br",null),i.a.createElement("span",null,e.address),i.a.createElement("br",null),i.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),p=(n.Component,function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns collapsed"},i.a.createElement("h1",null,"My recent projects"),i.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return i.a.createElement("div",{className:"columns portfolio-item"},i.a.createElement("a",{href:e.url,target:"_blank"},i.a.createElement("div",{className:"item-wrap"},i.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"portfolio-item-meta"},i.a.createElement("h5",null,e.name),i.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component)),g=(n.Component,n.Component,n.Component,{imagebaseurl:"https://seanohare98.github.io/",name:"Sean O'Hare",role:"",linkedinId:"sean-ohare",roleDescription:"Computer Science student @ The Chinese University of Hong Kong.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/sean-ohare/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/seanohare98",className:"fa fa-github"},{name:"resume",url:"https://drive.google.com/file/d/1Vcsf3a_iSpFv0WCZqLMdSRCcWBM8In7R/view?usp=sharing",className:"fa fa-file"}],aboutme:"I'm Sean & I like to code",website:"seanohare98@gmail.com",education:[{UniversityName:"The Chinese University of Hong Kong",specialization:"Bachelor of Science in Computer Science",MonthOfPassing:"May",YearOfPassing:"2021",Achievements:"Honors at Entrance, University Admission Scholarship, Faculty of Engineering Admission Scholarship, Track and Field Student-Athlete"},{UniversityName:"Michigan State University",specialization:"Bachelor of Science in Computer Science",YearOfPassing:"Transferred",Achievements:"Charles Drew Science Scholar, Design for America: MSU, Track and Field Student-Athlete"}],work:[{CompanyName:"Invest Bots Limited",specialization:"Software Engineering Intern",YearOfLeaving:"May 2019 - Present",Achievements1:"- Manage the company's primary stock data API and associated codebase/OpenAPI documentation",Achievements2:"- Reduced several endpoint-response times by up to 3x through implementation of Redis caching and improved SQL queries/server-side logic",Achievements3:"- Implemented a CI/CD pipeline for 4 company GitLab repos using a docker-in-docker approach, with automated testing (Jest, SuperTest), staging, and deployment to Kubernetes",Achievements4:"- Built React components for displaying data-tables and graphs for use by clients and internal BAs"},{CompanyName:"MSU Information Technology",specialization:"Information Technology Intern",YearOfLeaving:"May 2018 - August 2018",Achievements1:"- Built and deployed a website (www.msumigration.info) to assist with the oversight of a campus-wide migration project by posting weekly schedule and progress notifications",Achievements2:"- Wrote several PowerShell scripts to handle Active Directory user management functions",Achievements3:"- Managed weekly Excel spreadsheets containing migration wave plans and positions for 25 other employees",Achievements4:"- Provided technical support and documentation on an ad-hoc basis"},{CompanyName:"Time Out Shanghai",specialization:"Editorial Intern",YearOfLeaving:"June 2017 - August 2017",Achievements1:"- Edited dozens of pages on the Time Out Shanghai website, using HTML/CSS through a proprietary CMS, to be in accordance with the brand's style guide",Achievements2:"- Wrote and published 5 blog posts on upcoming events",Achievements3:"- Produced digital content using Adobe Photoshop and Final Cut Pro",Achievements4:"- Gathered information for news stories and organized events"}],portfolio:[{name:"DormLink",description:"Roommate-matching social networking app",url:"https://github.com/seanohare98/dormlink",imgurl:"images/portfolio/dormlink.png"},{name:"AR Beer Pong",description:"Have fun while social distancing",url:"https://github.com/seanohare98/ar-beer-pong",imgurl:"images/portfolio/bp.png"},{name:"Track and Field Ranking System",description:"View marks for HK track and field athletes",url:"http://www.hktrackandfield.org",imgurl:"images/portfolio/hktf.jpg"}]}),f=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{resumeData:g}),i.a.createElement(h,{resumeData:g}),i.a.createElement(p,{resumeData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.a3e46023.chunk.js.map