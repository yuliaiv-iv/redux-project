(this["webpackJsonpredux-project"]=this["webpackJsonpredux-project"]||[]).push([[0],{10:function(e,t,n){e.exports={header:"Header_header__3mObx"}},11:function(e,t,n){e.exports={profile:"UserProfile_profile__1BiAu"}},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(3),o=n.n(r),i=n(2),u=(n(22),n(4)),s=n.n(u),j=n(6),a=Object(j.b)({name:"counter",initialState:{counter:0,showCounter:!0},reducers:{increment:function(e){e.counter++},decrement:function(e){e.counter--},increase:function(e,t){e.counter=e.counter+t.payload},toggleCounter:function(e){e.showCounter=!e.showCounter}}}),l=Object(j.b)({name:"auth",initialState:{isAuth:!1},reducers:{login:function(e){e.isAuth=!0},logout:function(e){e.isAuth=!1}}}),b=Object(j.a)({reducer:{counter:a.reducer,auth:l.reducer}}),h=a.actions,d=l.actions,O=b,x=n(1),f=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.counter.showCounter})),n=Object(i.c)((function(e){return e.counter.counter}));return Object(x.jsxs)("main",{className:s.a.counter,children:[Object(x.jsx)("h1",{children:"Redux Counter"}),t&&Object(x.jsx)("div",{className:s.a.value,children:n}),Object(x.jsxs)("div",{className:s.a.buttons,children:[Object(x.jsx)("button",{onClick:function(){e(h.increment())},children:"Increment"}),Object(x.jsx)("button",{onClick:function(){e(h.decrement())},children:"Decrement"}),Object(x.jsx)("button",{onClick:function(){e(h.increase(5))},children:"Increase by 5"}),Object(x.jsx)("button",{onClick:function(){e(h.toggleCounter())},children:"Toggle Counter"})]})]})},m=n(10),p=n.n(m),_=function(){var e=Object(i.c)((function(e){return e.auth.isAuth})),t=Object(i.b)();return Object(x.jsxs)("header",{className:p.a.header,children:[Object(x.jsx)("h1",{children:"Redux Auth and Counter"}),e&&Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/",children:"My Orders"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/",children:"Account settings"})}),Object(x.jsx)("li",{children:Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),t(d.logout())},children:"Logout"})})]})})]})},v=n(5),C=n.n(v),g=function(){var e=Object(i.b)();return Object(x.jsx)("main",{className:C.a.auth,children:Object(x.jsx)("section",{children:Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(d.login())},children:[Object(x.jsxs)("div",{className:C.a.control,children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{type:"email",id:"email"})]}),Object(x.jsxs)("div",{className:C.a.control,children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",id:"password"})]}),Object(x.jsx)("button",{children:"Login"})]})})})},w=n(11),A=n.n(w),k=function(){return Object(x.jsx)("main",{className:A.a.profile,children:Object(x.jsx)("h2",{children:"User Profile"})})};var N=function(){var e=Object(i.c)((function(e){return e.auth.isAuth}));return Object(x.jsxs)(c.Fragment,{children:[Object(x.jsx)(_,{}),!e&&Object(x.jsx)(g,{}),e&&Object(x.jsx)(k,{}),Object(x.jsx)(f,{})]})};o.a.render(Object(x.jsx)(i.a,{store:O,children:Object(x.jsx)(N,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={counter:"Counter_counter__1U4hj",value:"Counter_value__2JpT-",buttons:"Counter_buttons__3lvtJ"}},5:function(e,t,n){e.exports={auth:"Auth_auth__3QLaR",control:"Auth_control__3bkp4"}}},[[24,1,2]]]);
//# sourceMappingURL=main.b2b65861.chunk.js.map