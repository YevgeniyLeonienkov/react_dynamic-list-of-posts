(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),c=n.n(s),o=n(1),l=n.n(o),u=n(11),i=n(8),m=n(2),d=n(5),p=n(6),f=n(10),h=n(7),E=n(12),v=(n(20),function(e){var t=e.user;return r.a.createElement("div",null,r.a.createElement("ul",{className:"user"},r.a.createElement("li",null,"Author:"),r.a.createElement("li",null,t.name),r.a.createElement("li",null,t.email),r.a.createElement("li",null,t.address.city),r.a.createElement("li",null,t.address.street),r.a.createElement("li",null,t.address.suite)))}),b=function(e){var t=e.commentItem;return r.a.createElement("div",{className:"comment"},r.a.createElement("p",{className:"comment__body"},t.body),r.a.createElement("ul",{className:"user"},r.a.createElement("li",null,t.name),r.a.createElement("li",null,t.email)))},w=function(e){return e.allComments.map(function(e){return r.a.createElement(b,{commentItem:e,key:e.id})})},y=function(e){var t=e.post;return r.a.createElement("div",null,r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__title"},t.title),r.a.createElement("p",{className:"post__body"},t.body),r.a.createElement(v,{user:t.user})),r.a.createElement(w,{allComments:t.comment}))},j=function(e){var t=e.allPosts,n=e.handleSearch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"search",placeholder:"Input name for searching",className:"search__input",autoComplete:"off",onChange:n})),r.a.createElement("ul",{className:"postlist"},t.map(function(e){return r.a.createElement("li",{className:"postlist__post",key:e.id},r.a.createElement(y,{post:e}))})))},N="https://jsonplaceholder.typicode.com",g=function(){var e=Object(m.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/posts"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/users"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/comments"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=n(9),k=function(e,t){return Object(O.a)(e).filter(function(e){return e.title.includes(t)||e.body.includes(t)})},_=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],shownPosts:[],isLoaded:!1,isLoading:!1},n.handleLoadData=Object(m.a)(l.a.mark(function e(){var t,a,r,s,c,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,Promise.all([g(),x(),L()]);case 3:t=e.sent,a=Object(i.a)(t,3),r=a[0],s=a[1],c=a[2],o=r.map(function(e){return Object(u.a)({},e,{user:s.find(function(t){return t.id===e.userId}),comment:c.filter(function(t){return t.postId===e.id})})}),n.setState({posts:o,shownPosts:o,isLoaded:!0,isLoading:!1});case 10:case"end":return e.stop()}},e)})),n.handleSearch=function(e){var t=e.target.value;n.setState(function(e){return{shownPosts:k(e.posts,t)}})},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"main"},this.state.isLoaded?r.a.createElement(j,{allPosts:this.state.shownPosts,handleSearch:this.handleSearch}):r.a.createElement("button",{type:"button",className:"loadData",onClick:this.handleLoadData,disabled:this.state.isLoading},this.state.isLoading?"Loading...":"Load"))}}]),t}(r.a.Component);c.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.26a1144a.chunk.js.map