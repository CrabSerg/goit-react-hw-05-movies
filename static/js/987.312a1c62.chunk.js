"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[987],{2609:function(n,e,t){t.d(e,{N:function(){return h},Z:function(){return d}});var r=t(1413),i=t(5987),o=t(6151),s=t(1087),c=t(17),u=t(184),a=["children","to"],d=function(n){var e=n.children,t=n.to,c=(0,i.Z)(n,a);return(0,u.jsx)(o.Z,(0,r.Z)((0,r.Z)({component:s.OL,to:t},c),{},{children:e}))},h=function(n){var e=n.children,t=n.to;return(0,u.jsx)(d,{to:t,startIcon:(0,u.jsx)(c.Z,{sx:{transform:"rotate(180deg)"}}),children:e})}},1127:function(n,e,t){t.d(e,{Ng:function(){return i.N},nw:function(){return u}});var r,i=t(2609),o=t(168),s=t(225),c=t(6151),u=(0,s.Z)(c.Z)(r||(r=(0,o.Z)(["\n  display: block;\n  margin: 0 auto;\n  margin-top: ",";\n"])),(function(n){return n.theme.spacing(3)}))},4294:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(3433),i=t(1127),o=t(1413),s=t(4554),c=t(3452),u=t(184);function a(n){return(0,u.jsx)(s.Z,(0,o.Z)((0,o.Z)({},n),{},{children:(0,u.jsx)(c.Z,{size:10,color:"#1976d2",cssOverride:{display:"flex",justifyContent:"center",margin:"10px 0"}})}))}var d=t(1933),h=t(1392),l=t.n(h),f=t(2007),g=t.n(f);g().oneOfType([g().string,g().array]).isRequired,g().func.isRequired,g().elementType.isRequired,g().bool;function m(n){var e=n.queryKey,t=n.queryFn,o=n.component,s=n.enabled,c=function(n,e,t){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=(0,d.useInfiniteQuery)({queryKey:n,queryFn:function(n){var t=n.pageParam;return e(void 0===t?1:t)},enabled:r,getNextPageParam:function(n,e){if(e.length<n.total_pages)return e.length+1},select:t});return i}(e,t,(function(n){return l()(n.pages.reduce((function(n,e){return[].concat((0,r.Z)(n),(0,r.Z)(e.results))}),[]),"id")}),void 0===s||s),h=c.isFetching,f=c.isError,g=c.error,m=c.data,x=c.hasNextPage,p=c.fetchNextPage;return f?(0,u.jsx)("h2",{children:g.message}):(0,u.jsxs)(u.Fragment,{children:[m&&(0===m.length?(0,u.jsx)("h2",{children:"Movies not found"}):(0,u.jsx)(o,{list:m})),h&&(0,u.jsx)(a,{mt:3}),!h&&x&&(0,u.jsx)(i.nw,{onClick:p,children:"Load more"})]})}},7443:function(n,e,t){t.d(e,{Z:function(){return f}});var r=t(1889),i=t(7621),o=t(6647),s=t(2169),c=t(1087),u=t(7689),a=t(77),d=t(2007),h=t.n(d),l=(h().arrayOf(h().shape({id:h().number.isRequired,poster_path:h().string,title:h().string.isRequired}).isRequired).isRequired,t(184));function f(n){var e=n.list,t=(0,u.TH)(),d="/"===t.pathname?"movies/":"";return(0,l.jsx)(r.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:15},children:e.map((function(n){var e=n.id,u=n.poster_path,h=n.title,f=u?"".concat(a.Z.urls.theMovies.image.poster).concat(u):"";return(0,l.jsx)(r.ZP,{item:!0,xs:2,sm:2,md:3,children:(0,l.jsx)(i.Z,{sx:{maxWidth:250,height:"100%"},children:(0,l.jsx)(o.Z,{component:c.rU,to:"".concat(d).concat(e),state:{from:t},sx:{height:"100%"},children:(0,l.jsx)(s.Z,{component:"img",height:"250",image:f,alt:h,sx:{height:"100%",objectFit:"cover"}})})})},e)}))})}},9987:function(n,e,t){t.r(e),t.d(e,{default:function(){return c}});var r=t(3184),i=t(7443),o=t(4294),s=t(184);function c(){return(0,s.jsx)(o.Z,{queryKey:"thrending-by-day",queryFn:r.Z.getThrendingByDay,component:i.Z})}}}]);
//# sourceMappingURL=987.312a1c62.chunk.js.map