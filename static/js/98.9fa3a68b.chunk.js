"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[98],{4776:function(n,t,r){r.d(t,{Df:function(){return u},Pg:function(){return s},gH:function(){return o},tx:function(){return f},zv:function(){return p}});var e=r(5861),a=r(7757),i=r.n(a),c=r(3263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"de00aa4ca9ae6abca13b6e86c745ef32"}}),u=function(){var n=(0,e.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},1098:function(n,t,r){r.r(t),r.d(t,{default:function(){return x}});var e,a,i=r(9439),c=r(2791),u=r(7689),o=r(4776),s=r(1954),p=r(168),f=r(6444),d=f.ZP.ul(e||(e=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),h=f.ZP.li(a||(a=(0,p.Z)(["\n  min-width: 140px;\n  width: 140px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 6px;\n  border: 1px solid rgba(227, 227, 227, 1);\n  padding-bottom: 10px;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: #fff;\n  text-align: center;\n\n  &:nth-child(8n) {\n    margin-right: 0;\n  }\n\n  & img {\n    width: 100%;\n  }\n"]))),v=r(184);function m(n){var t=n.movieCast.map((function(n){var t=n.id,r=n.profile_path,e=n.original_name,a=n.character;return(0,v.jsxs)(h,{children:[(0,v.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):s,alt:e}),(0,v.jsx)("p",{children:(0,v.jsx)("b",{children:e||"..."})}),(0,v.jsx)("p",{children:a||"..."})]},t)}));return(0,v.jsx)(d,{children:t})}function x(){var n=(0,c.useState)(0),t=(0,i.Z)(n,2),r=t[0],e=t[1],a=(0,u.UO)().movieId;if((0,c.useEffect)((function(){(0,o.zv)(a).then(e)}),[a]),r)return 0===r.length?(0,v.jsx)("p",{children:"We don't have any cast for this movie."}):(0,v.jsx)(m,{movieCast:r})}},1954:function(n,t,r){n.exports=r.p+"static/media/noimg.08ba4a3915c0ff049252.png"}}]);
//# sourceMappingURL=98.9fa3a68b.chunk.js.map