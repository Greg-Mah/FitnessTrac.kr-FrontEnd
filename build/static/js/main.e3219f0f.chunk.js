(this["webpackJsonpFitnessTrac.kr-FrontEnd"]=this["webpackJsonpFitnessTrac.kr-FrontEnd"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),i=n(17),a=n.n(i),o=n(10),s=n(3),u=n(0),j=function(){var e=Object(s.f)()[0];return Object(u.jsxs)("h1",{children:["404 Error: Page for ",e," does not exist."]})},l=function(e){var t=e.activity;return Object(u.jsxs)("div",{className:"Activity",children:[Object(u.jsx)("h4",{children:t.name}),Object(u.jsx)("h5",{children:t.description}),Object(u.jsx)("h5",{children:t.duration?"Duration:"+t.duration:null}),Object(u.jsx)("h5",{children:t.count?"Count:"+t.count:null})]})},b=n(5),d=n.n(b),O=n(20),h=n(9),x=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL_STRING,f=void 0===x?"https://fitnesstrac-kr.herokuapp.com/api/":x,p=function(){var e=Object(h.a)(d.a.mark((function e(t){var n,c,r,i,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,c=t.method,r=t.token,i=t.body,e.prev=1,e.next=4,fetch(f+n,{method:c?c.toUpperCase():"GET",headers:Object(O.a)({"Content-Type":"application/json"},r&&{Authorization:"Bearer "+r}),body:JSON.stringify(i)});case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),v=p,m=function(e){var t=e.token,n=Object(r.useState)(""),i=Object(c.a)(n,2),a=i[0],o=i[1],s=Object(r.useState)(""),j=Object(c.a)(s,2),l=j[0],b=j[1],O=Object(r.useState)(""),x=Object(c.a)(O,2),f=x[0],p=x[1];return Object(u.jsxs)("form",{onSubmit:function(){var e=Object(h.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,v({url:"activities/",method:"POST",token:t,body:{name:a,description:l}});case 3:e.sent.id&&p("activity created");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Name",value:a,onChange:function(e){o(e.target.value)}}),Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Description",value:l,onChange:function(e){b(e.target.value)}}),Object(u.jsx)("button",{type:"submit",disabled:!a||!l,children:"Add"}),Object(u.jsx)("p",{children:f})]})},g=function(e){var t=e.token,n=Object(r.useState)([]),i=Object(c.a)(n,2),a=i[0],o=i[1],s=Object(r.useState)(!1),j=Object(c.a)(s,2),b=j[0],d=j[1];return Object(r.useEffect)((function(){v({url:"activities/",method:"GET"}).then((function(e){o(e)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){d(!b)},children:"Create activity"}),b?Object(u.jsx)(m,{token:t}):null]}):null,a.map((function(e){return Object(u.jsx)(l,{activity:e},e.id)}))]})},k=function(e){var t=e.user;return Object(u.jsxs)("h1",{children:["Welcome ",t?t.name:"to FitnessTrak.kr"]})},S=function(e){var t=e.token,n=e.routine,i=e.setShowForm,a=e.activity,o=Object(r.useState)(1),s=Object(c.a)(o,2),j=s[0],b=s[1],O=Object(r.useState)(1),x=Object(c.a)(O,2),f=x[0],p=x[1],m=Object(r.useState)(0),g=Object(c.a)(m,2),k=g[0],S=g[1],y=Object(r.useState)([]),C=Object(c.a)(y,2),E=C[0],w=C[1];return Object(r.useEffect)((function(){v({url:"activities/",method:"GET"}).then((function(e){w(e)})),a&&(b(a.count),p(a.duration))}),[]),Object(u.jsxs)("form",{onSubmit:function(){var e=Object(h.a)(d.a.mark((function e(c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,v({url:"routines/".concat(n.id,"/activities/"),method:"POST",token:t,body:{activityId:E[k].id,count:j,duration:f}});case 3:e.sent.id&&i(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(u.jsx)("div",{className:"scrollbox",children:E.map((function(e,t){return e.idx=t,e})).filter((function(e){for(var t=0;t<n.activities.length;){if(e.id===n.activities[t])return!1;t++}return!0})).map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{activity:e}),Object(u.jsx)("button",{type:"button",onClick:function(){S(e.idx)},children:"Select"})]},e.id)}))}),Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Count",value:j,onChange:function(e){b(e.target.value)}}),Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Duration",value:f,onChange:function(e){p(e.target.value)}}),Object(u.jsx)("button",{type:"submit",disabled:!j||!f,children:"Add"})]})},y=function(e){var t=e.token,n=e.routine,i=e.setShowForm,a=Object(r.useState)(""),o=Object(c.a)(a,2),s=o[0],j=o[1],l=Object(r.useState)(""),b=Object(c.a)(l,2),O=b[0],x=b[1],f=Object(r.useState)(!1),p=Object(c.a)(f,2),m=p[0],g=p[1],k=Object(r.useState)(""),S=Object(c.a)(k,2),y=S[0],C=S[1];return Object(r.useEffect)((function(){n&&(j(n.name),x(n.goal),g(n.isPublic))}),[]),Object(r.useEffect)((function(){C("Enter name and goal to create a routine.")}),[s,O]),Object(u.jsxs)("form",{onSubmit:function(){var e=Object(h.a)(d.a.mark((function e(c){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),console.log(n),e.next=4,v({url:"routines/".concat(n?n.id+"/":""),method:"".concat(n?"PATCH":"POST"),token:t,body:{name:s,goal:O,isPublic:m}});case 4:(r=e.sent).id?i(!1):C(r.error);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Name",value:s,onChange:function(e){j(e.target.value)}}),Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Goal",value:O,onChange:function(e){x(e.target.value)}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",checked:m,value:m,onChange:function(){g(!m)}}),Object(u.jsx)("label",{htmlFor:"Public",children:"Public"})]}),Object(u.jsx)("p",{children:y}),Object(u.jsx)("button",{type:"submit",disabled:!s||!O,children:n?"Edit":"Create"})]})},C=function(e){var t=e.token,n=e.activity,i=Object(r.useState)(1),a=Object(c.a)(i,2),o=a[0],s=a[1],j=Object(r.useState)(1),l=Object(c.a)(j,2),b=l[0],O=l[1],x=Object(r.useState)(""),f=Object(c.a)(x,2),p=f[0],m=f[1];return Object(r.useEffect)((function(){n&&(s(n.count),O(n.duration))}),[]),Object(u.jsxs)("form",{onSubmit:function(){var e=Object(h.a)(d.a.mark((function e(c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,v({url:"routine_activities/".concat(n.routineActivityId),method:"PATCH",token:t,body:{count:o,duration:b}});case 3:e.sent.id&&m("Activity updated.");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Count",value:o,onChange:function(e){s(e.target.value)}}),Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Duration",value:b,onChange:function(e){O(e.target.value)}}),Object(u.jsx)("button",{type:"submit",disabled:!o||!b,children:"Submit Edit"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),v({url:"routine_activities/".concat(n.routineActivityId),method:"DELETE",token:t}).then((function(e){e.success&&m("Activity deleted.")}))},children:"Delete"}),Object(u.jsx)("p",{children:p})]})},E=function(e){var t=e.routine,n=e.token,i=e.user,a=Object(r.useState)(!1),o=Object(c.a)(a,2),s=o[0],j=o[1],b=Object(r.useState)(!1),d=Object(c.a)(b,2),O=d[0],h=d[1],x=Object(r.useState)(!1),f=Object(c.a)(x,2),p=f[0],m=f[1];return Object(r.useEffect)((function(){console.log(t),console.log(i)}),[s]),Object(u.jsxs)("div",{className:"Routine",children:[Object(u.jsx)("h2",{children:t.name}),Object(u.jsxs)("h3",{children:["By:",t.creatorName]}),Object(u.jsxs)("h3",{children:["Goal:",t.goal]}),Object(u.jsx)("h3",{children:"Activities:"}),t.activities.map((function(e){return Object(u.jsxs)(u.Fragment,{children:[i.id===t.creatorId?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){m(!p)},children:"Edit this activity"}),p?Object(u.jsx)(C,{token:n,activity:e},e.routineActivityId):null]}):null,Object(u.jsx)(l,{activity:e,token:n},e.id)]})})),i.id===t.creatorId?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){j(!s)},children:"Edit this routine"}),Object(u.jsx)("button",{onClick:function(){v({url:"routines/".concat(t.id,"/"),method:"DELETE",token:n}).then((function(){}))},children:"Delete this routine"}),Object(u.jsx)("button",{onClick:function(){h(!O)},children:"Add activities"}),s?Object(u.jsx)(y,{token:n,routine:t,setShowForm:j}):null,O?Object(u.jsx)(S,{token:n,routine:t,setShowForm:h}):null]}):null]})},w=function(e){var t=e.token,n=e.user,i=Object(r.useState)([]),a=Object(c.a)(i,2),o=a[0],s=a[1],j=Object(r.useState)(!1),l=Object(c.a)(j,2),b=l[0],d=l[1];return Object(r.useEffect)((function(){v({url:"users/".concat(n.name,"/routines"),method:"GET",token:t}).then((function(e){console.log(e),s(e)}))}),[b]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){d(!b)},children:"Create a new routine"}),b?Object(u.jsx)(y,{token:t,user:n,setShowForm:d}):null,o.map((function(e){return Object(u.jsx)(E,{routine:e,token:t,user:n},e.id)}))]})},T=function(e){var t=e.token;return Object(u.jsxs)("h2",{className:"NavBar",children:[Object(u.jsx)(o.b,{to:"/",children:"Home"}),"|",Object(u.jsx)(o.b,{to:"/routines/",children:"Routines"}),"|",t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.b,{to:"/myroutines/",children:"My Routines"}),"|"]}):null,Object(u.jsx)(o.b,{to:"/activities/",children:"Activities"})]})},F=function(e){var t=e.token,n=e.user,i=Object(r.useState)([]),a=Object(c.a)(i,2),o=a[0],s=a[1],j=Object(r.useState)([]),l=Object(c.a)(j,2),b=l[0],d=l[1];return Object(r.useEffect)((function(){v({url:"routines/",method:"GET"}).then((function(e){s(e)}))}),[b]),Object(u.jsx)(u.Fragment,{children:o.map((function(e){return Object(u.jsx)(E,{routine:e,token:t,user:n,setUpdater:d},e.id)}))})},P=(n(32),function(e){var t=e.setToken,n=e.setUser,i=Object(r.useState)(!1),a=Object(c.a)(i,2),o=a[0],s=a[1],j=Object(r.useState)(""),l=Object(c.a)(j,2),b=l[0],O=l[1],x=Object(r.useState)(""),f=Object(c.a)(x,2),p=f[0],m=f[1],g=Object(r.useState)(""),k=Object(c.a)(g,2),S=k[0],y=k[1],C=Object(r.useState)(""),E=Object(c.a)(C,2),w=E[0],T=E[1],F=Object(r.useState)(!0),P=Object(c.a)(F,2),A=P[0],D=P[1],I=Object(r.useState)(!0),_=Object(c.a)(I,2),R=_[0],N=_[1];return Object(r.useEffect)((function(){if(S&&o)if(S!==p){for(var e="Password match o=matching character, x=wrong character, _=missing character, *=extra character:",t=0;t<p.length||t<S.length;t++)t<p.length?t<S.length?p.charAt(t)===S.charAt(t)?e+="o":e+="x":e+="_":e+="*";T(e)}else T("Passwords match!");else T("Enter username and password to "+(o?"register":"login")+".")}),[p,S,o]),Object(u.jsxs)("form",{onSubmit:function(){var e=Object(h.a)(d.a.mark((function e(c){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,v({url:"users/".concat(o?"register":"login"),method:"POST",body:{username:b,password:p}});case 3:r=e.sent,console.log(r),r.token?(t(r.token),T("You are logged in."),n({id:r.user.id,name:r.user.username}),R&&(localStorage.setItem("token",r.token),localStorage.setItem("username",r.user.username),localStorage.setItem("id",r.user.id))):T(r.error);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",checked:o,value:o,onChange:function(){s(!o)}}),Object(u.jsx)("label",{htmlFor:"Register",children:"Register"})]}),Object(u.jsx)("input",{required:!0,type:"text",placeholder:"Username",value:b,onChange:function(e){O(e.target.value)}}),Object(u.jsx)("input",{required:!0,type:A?"password":"text",placeholder:"Password",value:p,onChange:function(e){m(e.target.value)}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",checked:A,value:A,onChange:function(){D(!A)}}),Object(u.jsx)("label",{htmlFor:"Hide Password",children:"Hide Password"})]}),Object(u.jsx)("input",{required:!0,type:"password",disabled:!o,placeholder:"Confirm Password",value:S,onChange:function(e){y(e.target.value)}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",checked:R,value:R,onChange:function(){N(!R)}}),Object(u.jsx)("label",{htmlFor:"Remember Me",children:"Remember Me"})]}),Object(u.jsx)("p",{children:w}),Object(u.jsx)("button",{type:"submit",disabled:!b||!p||o&&p!==S,children:o?"Register":"Login"})]})}),A=function(e){var t=e.setToken,n=e.user,c=e.setUser;return n?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h2",{children:["Logged in as ",n.name]}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),t(""),c(""),localStorage.removeItem("user"),localStorage.removeItem("token")},children:"Logout"})]}):Object(u.jsx)(P,{setToken:t,setUser:c})},D=function(){var e=Object(r.useState)(localStorage.getItem("token")||""),t=Object(c.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)({id:Number(localStorage.getItem("id")),name:localStorage.getItem("username")}||null),l=Object(c.a)(a,2),b=l[0],d=l[1];return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(T,{token:n}),Object(u.jsx)(A,{setToken:i,setUser:d,user:b}),Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",children:Object(u.jsx)(k,{user:b})}),Object(u.jsx)(s.a,{exact:!0,path:"/routines/",children:Object(u.jsx)(F,{token:n,user:b})}),Object(u.jsx)(s.a,{exact:!0,path:"/myroutines/",children:Object(u.jsx)(w,{token:n,user:b})}),Object(u.jsx)(s.a,{exact:!0,path:"/activities/",children:Object(u.jsx)(g,{token:n})}),Object(u.jsx)(s.a,{path:"/*",children:Object(u.jsx)(j,{})})]})]})};a.a.render(Object(u.jsx)(D,{}),document.getElementById("app"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e3219f0f.chunk.js.map