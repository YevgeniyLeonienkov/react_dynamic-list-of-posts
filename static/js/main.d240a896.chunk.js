(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),c=n.n(s),l=n(1),o=n.n(l),i=n(2),u=n(5),m=n(6),d=n(9),p=n(7),f=n(10),h=n(8),E=(n(19),function(e){var t=e.user;return r.a.createElement("div",null,r.a.createElement("ul",{className:"user"},r.a.createElement("li",null,"Author:"),r.a.createElement("li",null,t.name),r.a.createElement("li",null,t.email),r.a.createElement("li",null,t.address.city),r.a.createElement("li",null,t.address.street),r.a.createElement("li",null,t.address.suite)))}),b=function(e){var t=e.commentItem;return r.a.createElement("div",{className:"comment"},r.a.createElement("p",{className:"comment__body"},t.body),r.a.createElement("ul",{className:"user"},r.a.createElement("li",null,t.name),r.a.createElement("li",null,t.email)))},v=function(e){return e.allComments.map(function(e){return r.a.createElement(b,{commentItem:e,key:e.id})})},y=function(e){var t=e.post;return r.a.createElement("div",null,r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__title"},t.title),r.a.createElement("p",{className:"post__body"},t.body),r.a.createElement(E,{user:t.user})),r.a.createElement(v,{allComments:t.comment}))},j=function(e){var t=e.allPosts,n=e.handleSearch;return r.a.createElement("ul",{className:"postlist"},r.a.createElement("form",{className:"search"},r.a.createElement("input",{type:"search",placeholder:"Input text for searching",className:"search__input",autoComplete:"off",onChange:n})),t.map(function(e){return r.a.createElement("li",{className:"postlist__post",key:e.id},r.a.createElement(y,{post:e}))}))},N=n(11),g=function(){var e=Object(i.a)(o.a.mark(function e(t){var n,a,r,s,c,l,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/posts"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.next=8,fetch("".concat(t,"/users"));case 8:return r=e.sent,e.next=11,r.json();case 11:return s=e.sent,e.next=14,fetch("".concat(t,"/comments"));case 14:return c=e.sent,e.next=17,c.json();case 17:return l=e.sent,i=a.map(function(e){return Object(N.a)({},e,{user:s.find(function(t){return t.id===e.userId}),comment:l.filter(function(t){return t.postId===e.id})})}),e.abrupt("return",i);case 20:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=[],w=function(e,t){return Object(h.a)(e).filter(function(e){return e.title.includes(t)||e.body.includes(t)})},x=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],isLoaded:!1,isLoading:!1},n.handleClick=function(){n.setState({isLoading:!0}),setTimeout(function(){n.setState({posts:k,isLoaded:!0,isLoading:!1})},0)},n.handleSearch=function(e){n.setState({posts:w(k,e.target.value)})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://jsonplaceholder.typicode.com");case 2:k=e.sent;case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("main",{className:"main"},this.state.isLoaded?r.a.createElement(j,{allPosts:this.state.posts,handleSearch:this.handleSearch}):r.a.createElement("button",{type:"button",className:"loadData",onClick:this.handleClick,disabled:this.state.isLoading},this.state.isLoading?"Loading...":"Load"))}}]),t}(r.a.Component);c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d240a896.chunk.js.map