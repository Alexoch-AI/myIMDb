(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(25),r=n.n(o),c=n(10),s=n(110),l=n(29),d=n(9),p=n(106),u=n(15),b=n.n(u),x=n(24),h=n(27),j=n(111),f="SEARCH_FILM",m="TAKE_FILM",g="SEARCH_LIKED_FILM",O="GET_TRAILER",v="LOADER_FALSE",w="LOADER_TRUE",y="CLEAR_STATE",k=function(e){return function(){var t=Object(x.a)(b.a.mark((function t(n,a){var i,o,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(R()),t.next=3,fetch("https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=".concat(e),{method:"GET",headers:{accept:"application/json","X-API-KEY":"".concat("b5c48ddb-b857-4de6-8f60-8ee1d66a9163")}});case 3:return o=t.sent,t.next=6,o.json();case 6:r=t.sent,n(N(null===r||void 0===r||null===(i=r.films)||void 0===i?void 0:i.slice(0,7))),n(T());case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},N=function(e){return{type:f,payload:e}},S=function(e){return function(){var t=Object(x.a)(b.a.mark((function t(n,a){var i,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(R()),t.next=3,fetch("https://kinopoiskapiunofficial.tech/api/v2.1/films/".concat(e),{method:"GET",headers:{accept:"application/json","X-API-KEY":"".concat("b5c48ddb-b857-4de6-8f60-8ee1d66a9163")}});case 3:return i=t.sent,t.next=6,i.json();case 6:o=t.sent,n(C(o.data)),n(T());case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},C=function(e){return{type:m,payload:e}},I=function(e){return{type:O,payload:e}},L=function(e){return{type:g,payload:e}},T=function(){return{type:v}},R=function(){return{type:w}},E=n(5),B=n(102),A=Object(B.a)((function(e){return{root:Object(E.a)({borderRadius:" 20px 20px 20px 20px",width:"100px",height:"36px",position:"absolute",marginTop:"10vh",lineHeight:"1.60",marginBottom:"10px",backgroundColor:"aqua","&:hover":{backgroundColor:"aqua"}},e.breakpoints.up("md"),{borderRadius:" 0 20px 20px 0",marginTop:"0px",top:"0px",position:"relative",lineHeight:"1.60",backgroundColor:"aqua","&:hover":{backgroundColor:"aqua"}}),rootSearch:Object(E.a)({paddingLeft:"5vw",backgroundColor:"white",borderRadius:"20px 20px 20px 20px",fontSize:"28px",border:"none","&:hover":{outline:"none",color:"black",placeContent:"none",paddingLeft:"5vw"}},e.breakpoints.up("md"),{paddingLeft:"10px",backgroundColor:"white",borderRadius:"20px 0 0 20px",fontSize:"28px",border:"none",outline:"none","&:hover":{outline:"none",color:"black",placeContent:"none",paddingLeft:"10px",border:"none"}}),rootForm:Object(E.a)({display:"flex",alignItems:"center",justifyContent:"center"},e.breakpoints.up("md"),{}),rootBox:{paddingTop:"40px",paddingBottom:"40px"}}})),D=n(2);var F=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],i=t[1],o=Object(c.b)(),r=A(),l=function(){var e=Object(x.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0!==n&&o(k(n)),i("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsx)(s.a,{className:r.rootBox,children:Object(D.jsxs)("form",{onSubmit:l,className:r.rootForm,children:[Object(D.jsx)("input",{className:r.rootSearch,onChange:function(e){i(e.target.value)},placeholder:"Type here smth...",value:n}),Object(D.jsx)(j.a,{className:r.root,onClick:l,children:"Search"})]})})},W=n(103),z=n(104),M=n(105),_=n(87),G=Object(B.a)((function(e){return{root:Object(E.a)({display:"flex",justifyContent:"center",margin:"10px",background:"#111111",opacity:"0.8",borderRadius:"10px",color:"#fff",width:"350px",cursor:"pointer"},e.breakpoints.up("md"),{display:"flex",justifyContent:"center",margin:"10px",background:"#111111",opacity:"0.8",borderRadius:"10px",color:"#fff",width:"450px",cursor:"pointer"}),details:{display:"flex",flexDirection:"column",width:"auto"},content:{flex:"1 0 auto",width:"auto"},cover:{width:"100%",backgroundSize:"containe",opacity:"1",marginTop:"5px",marginBottom:"5px",borderRadius:"8px"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},hiddenText:Object(E.a)({textOverflow:"ellipsis",width:"250px",whiteSpace:"nowrap",overflow:"hidden"},e.breakpoints.up("md"),{textOverflow:"ellipsis",width:"320px",whiteSpace:"nowrap",overflow:"hidden"}),ratingSpan:{backgroundColor:"#FAC539",color:"black",borderRadius:"8px",marginTop:"5px",width:"85px",padding:"0 5px 0 5px"}}}));var H=function(e){var t,n,a=e.obj,i=G(),o=Object(c.b)();return Object(D.jsx)(l.b,{style:{textDecoration:"none"},to:"/film/".concat(a.filmId),children:Object(D.jsxs)(W.a,{onClick:function(){o(S(a.filmId))},className:i.root,children:[Object(D.jsx)(z.a,{className:i.cover,image:null===a||void 0===a?void 0:a.posterUrlPreview}),Object(D.jsx)("div",{className:i.details,children:Object(D.jsx)(M.a,{className:i.content,children:Object(D.jsxs)(_.a,{title:a.nameRu||a.nameEn,variant:"h5",className:i.hiddenText,children:[a.nameRu||a.nameEn,Object(D.jsxs)(_.a,{children:[a.year," ","|"," ",Object.values(a).length?null===a||void 0===a||null===(t=a.countries[0])||void 0===t?void 0:t.country:null," ","|"," ",Object.values(a).length?null===a||void 0===a||null===(n=a.genres[0])||void 0===n?void 0:n.genre:null,Object(D.jsx)("br",{}),(null===a||void 0===a?void 0:a.rating)?Object(D.jsx)(_.a,{component:"span",className:i.ratingSpan,children:null===a||void 0===a?void 0:a.rating}):null]})]})})})]})})};n(81);var K=function(){return Object(D.jsx)(s.a,{className:"loading",children:Object(D.jsxs)("svg",{width:"300px",height:"200px",viewBox:"0 0 187.3 93.7",preserveAspectRatio:"xMidYMid meet",children:[Object(D.jsx)("path",{id:"infinity-outline",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"}),Object(D.jsx)("path",{id:"infinity-bg",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"})]})})};var P=function(){var e=Object(c.c)((function(e){return e.films})),t=Object(c.c)((function(e){return e.loader}));return Object(D.jsx)(p.a,{container:!0,children:Object(D.jsx)(p.a,{item:!0,xs:12,children:Object(D.jsx)(s.a,{display:"flex",flexDirection:"column",alignItems:"center",children:t.loader?Object(D.jsx)(K,{}):e.length?e.map((function(e){return Object(D.jsx)(H,{obj:e},e.filmId)})):null})})})};n(50);var X=function(){return Object(D.jsxs)(p.a,{container:!0,children:[Object(D.jsx)(p.a,{item:!0,xs:12,children:Object(D.jsx)(F,{})}),Object(D.jsx)("br",{}),Object(D.jsx)(p.a,{item:!0,xs:12,children:Object(D.jsx)(P,{})})]})},Y=Object(B.a)((function(e){return{root:Object(E.a)({fontWeight:"900",fontSize:"50px"},e.breakpoints.up("md"),{fontWeight:"900",fontSize:"80px"}),smallroot:Object(E.a)({fontSize:"20px"},e.breakpoints.up("md"),{fontSize:"50px"}),rootBox:Object(E.a)({paddingTop:"10vh",paddingBottom:"20px"},e.breakpoints.up("md"),{paddingTop:"20vh",paddingBottom:"20px"})}}));var q=function(){var e=Y();return Object(D.jsx)(p.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:Object(D.jsxs)(p.a,{item:!0,xs:12,children:[Object(D.jsxs)(s.a,{className:e.rootBox,children:[Object(D.jsx)(_.a,{align:"center",className:e.root,children:"Unlimited movies,"}),Object(D.jsx)(_.a,{align:"center",className:e.root,children:"TV shows, and more."})]}),Object(D.jsx)(s.a,{children:Object(D.jsx)(_.a,{align:"center",className:e.smallroot,children:"Watch anywhere. Cancel anytime."})})]})})},U=n(55),J=Object(B.a)((function(){return{img1:{height:"361px",width:"263px",display:"block",marginLeft:"auto",marginRight:"auto",borderRadius:"5%","&:hover":{opacity:"0.5"}}}}));var Q=function(e){var t=e.obj,n=Object(a.useState)(),i=Object(h.a)(n,2),o=i[0],r=i[1],l=Object(c.b)(),p=Object(d.f)(),u=J();return Object(a.useEffect)((function(){var e=document.querySelector("#Header");r(e)}),[]),Object(D.jsx)(s.a,{style:{padding:"20px 20px 20px 0"},onClick:function(){return l(S(String(t.filmId))),p.push("/film/".concat(String(t.filmId))),void(null===o||void 0===o||o.scrollIntoView())},children:Object(D.jsx)("img",{className:u.img1,src:null===t||void 0===t?void 0:t.posterUrl,alt:"imgAlt"})})},V=n(107),Z=n(56),$=n.n(Z),ee=n(57),te=n.n(ee),ne=Object(B.a)((function(){return{linkToButton:{textDecoration:"none",color:"inherit","&:hover":{textDecoration:"none"},paddingLeft:"20px"},boxCenter:{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"10px"}}}));n(82);var ae=function(){var e=ne();return Object(D.jsx)("footer",{children:Object(D.jsx)(s.a,{height:"50px",width:"100%",className:"footer",children:Object(D.jsxs)(s.a,{className:e.boxCenter,children:[Object(D.jsx)(V.a,{className:e.linkToButton,href:"https://github.com/Alexoch-AI",children:Object(D.jsx)($.a,{})}),Object(D.jsx)(V.a,{className:e.linkToButton,href:"https://t.me/alexdegreen",children:Object(D.jsx)(te.a,{})})]})})})},ie=Object(B.a)((function(e){return{superDiv:Object(E.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("md"),{display:"flex",flexDirection:"row"}),boxN1:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"100px"},boxN2:Object(E.a)({backgroundColor:"black",height:"110vh",width:"100%",textShadow:"black 0 0 6px"},e.breakpoints.up("md"),{backgroundColor:"black",height:"100vh",width:"100%",textShadow:"black 0 0 6px"}),typo1:Object(E.a)({fontWeight:"700",margin:"20% 5% 5% 5%",color:"white",textAlign:"center",fontSize:"40px"},e.breakpoints.up("md"),{fontWeight:"900",color:"white",fontSize:"55px",margin:"130px 0 0px 130px"}),typo2:Object(E.a)({fontWeight:"400",paddingLeft:"5%",textAlign:"center",fontSize:"20px"},e.breakpoints.up("md"),{fontWeight:"400",paddingLeft:"130px",fontSize:"40px"}),mainImgBox:Object(E.a)({padding:"0 0 0 0"},e.breakpoints.up("md"),{position:"relative",width:"1000px",marginTop:"150px"}),typo3:{backgroundColor:"#FAC539",color:"black",borderRadius:"8px",marginTop:"5px",width:"85px"},button1:{height:"50px",width:"150px",border:"3px solid white",backgroundColor:"black",color:"white",borderRadius:"20%",marginTop:"20px"},boxButton1:Object(E.a)({textAlign:"center",padding:" 0 0 20px 0"},e.breakpoints.up("md"),{textAlign:"center",padding:" 0 0 20px 130px"}),img1:Object(E.a)({height:"500px",width:"350px",display:"block",marginLeft:"auto",marginRight:"auto"},e.breakpoints.up("md"),{height:"500px",width:"350px",display:"block",marginLeft:"auto",marginRight:"auto"}),grid1:{backgroundColor:"white",color:"black"},boxN3:Object(E.a)({width:"90%",margin:"5% 10% 5% 5%"},e.breakpoints.up("md"),{width:"800px",margin:"50px 0 20px 130px"}),typo4:{fontSize:"36px",fontWeight:"900",lineHeight:"52px"},boxN4:Object(E.a)({width:"90%",padding:"5% 10% 5% 5%"},e.breakpoints.up("md"),{width:"800px",paddingBottom:"50px",paddingLeft:"130px"}),typo5:Object(E.a)({fontWeight:"800",paddingLeft:"5%"},e.breakpoints.up("md"),{width:"800px",paddingBottom:"50px",paddingLeft:"130px"}),listBox:Object(E.a)({paddingLeft:"5%",alignItems:"center",justifyContent:"center",display:"flex",flexWrap:"wrap"},e.breakpoints.up("md"),{paddingLeft:"130px",display:"flex"}),videoBox:Object(E.a)({paddingLeft:"5%"},e.breakpoints.up("md"),{paddingLeft:"130px"})}}));var oe=function(){var e,t,n=Object(c.c)((function(e){return e.focusedFilm})),i=Object(c.c)((function(e){return e.urlTrailer})),o=Object(c.c)((function(e){return e.likesFilms})),r=Object(c.c)((function(e){return e.loader})),l=Object(a.useState)(!1),d=Object(h.a)(l,2),u=d[0],f=d[1],m=Object(c.b)(),g=ie();return Object(a.useEffect)((function(){if(Object.values(n).length){var e=null===n||void 0===n?void 0:n.filmId;m((t=String(e),function(){var e=Object(x.a)(b.a.mark((function e(n,a){var i,o,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://kinopoiskapiunofficial.tech/api/v2.1/films/".concat(t,"/videos"),{method:"GET",headers:{accept:"application/json","X-API-KEY":"".concat("b5c48ddb-b857-4de6-8f60-8ee1d66a9163")}});case 2:return i=e.sent,e.next=5,i.json();case 5:o=e.sent,r=[],(null===o||void 0===o?void 0:o.trailers.length)?null===o||void 0===o||o.trailers.forEach((function(e){"youtube"===e.site.toLowerCase()&&r.push(e),r.push({url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"})})):r.push({url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}),r&&n(I(null===(c=r[0])||void 0===c?void 0:c.url.replace(/(watch\?v=)/g,"embed/").replace(/(v\/)/g,"embed/")));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())),m(function(e){return function(){var t=Object(x.a)(b.a.mark((function t(n,a){var i,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(R()),t.next=3,fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/".concat(e,"/similars"),{method:"GET",headers:{accept:"application/json","X-API-KEY":"".concat("b5c48ddb-b857-4de6-8f60-8ee1d66a9163")}});case 3:return i=t.sent,t.next=6,i.json();case 6:o=t.sent,n(L(o.items.slice(0,4))),n(T());case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(String(e)))}var t}),[m,n]),Object(D.jsx)(D.Fragment,{children:r.loader?Object(D.jsx)(s.a,{className:g.boxN1,children:Object(D.jsx)(K,{})}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(p.a,{container:!0,style:{color:"white"},children:[Object(D.jsx)(s.a,{className:g.boxN2,children:Object(D.jsx)(p.a,{item:!0,xs:12,children:Object(D.jsxs)(s.a,{className:g.superDiv,children:[Object(D.jsxs)(s.a,{width:"100%",children:[Object(D.jsx)(_.a,{variant:"h2",className:g.typo1,children:(null===n||void 0===n?void 0:n.nameRu)||(null===n||void 0===n?void 0:n.nameEn)}),Object(D.jsxs)(_.a,{variant:"h4",className:g.typo2,children:[null===n||void 0===n?void 0:n.year," ","|"," ",Object.values(n).length?null===n||void 0===n||null===(e=n.countries[0])||void 0===e?void 0:e.country:null," ","|"," ",Object.values(n).length?null===n||void 0===n||null===(t=n.genres[0])||void 0===t?void 0:t.genre:null]}),i?Object(D.jsx)(s.a,{className:g.boxButton1,children:Object(D.jsx)(j.a,{onClick:function(){return f(!u)},className:g.button1,children:"Watch"})}):"",u?Object(D.jsx)(s.a,{className:g.videoBox,children:Object(D.jsx)(U.a,{width:"95%",height:"400px",url:i,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})}):""]}),u?null:Object(D.jsx)(s.a,{className:g.mainImgBox,children:Object(D.jsx)("img",{className:g.img1,src:null===n||void 0===n?void 0:n.posterUrl,alt:"mainImg"})})]})})}),Object(D.jsxs)(p.a,{item:!0,xs:12,className:g.grid1,children:[Object(D.jsx)(s.a,{className:g.boxN3,children:Object(D.jsxs)(_.a,{variant:"h4",className:g.typo4,children:["\u0421\u043c\u043e\u0442\u0440\u0438"," ",(null===n||void 0===n?void 0:n.nameRu)||(null===n||void 0===n?void 0:n.nameEn)," ","\u043d\u0430 Mini\u041a\u0438\u043d\u043e\u043f\u043e\u0438\u0441\u043a\u0435"]})}),Object(D.jsx)(s.a,{className:g.boxN4,children:Object(D.jsx)(_.a,{style:{fontWeight:"500",fontSize:"22px"},children:(null===n||void 0===n?void 0:n.description)||"\u041d\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f :\u0421"})})]}),Object(D.jsxs)(p.a,{item:!0,xs:12,className:g.grid1,children:[Object(D.jsx)(_.a,{variant:"h5",className:g.typo5,children:"\u0422\u0435\u0431\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f"}),Object(D.jsx)(s.a,{className:g.listBox,children:o.length?o.map((function(e){return Object(D.jsx)(Q,{obj:e},e.filmId)})):""})]})]}),Object(D.jsx)(ae,{})]})})},re=n(108),ce=n(109),se=n(112),le=n(58),de=n.n(le),pe=n(18),ue=Object(B.a)((function(e){return{root:{flexGrow:1,position:"absolute",width:"100%"},title:Object(E.a)({flexGrow:1,display:"block",overflow:"visible"},e.breakpoints.up("sm"),{display:"block"}),search:Object(E.a)({display:"flex",position:"relative",right:"0",borderRadius:e.shape.borderRadius,backgroundColor:Object(pe.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(pe.b)(e.palette.common.white,.25)},marginLeft:"25px",width:"100%"},e.breakpoints.up("sm"),{display:"block",width:"auto",marginRight:"25px"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"white"},inputInput:Object(E.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),myBar:Object(E.a)({backgroundColor:"black",padding:"0 0 0 0"},e.breakpoints.up("sm"),{padding:"0 155px 0 80px"})}}));function be(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],i=t[1],o=Object(d.f)(),r=ue(),s=Object(c.b)(),p=function(){var e=Object(x.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0!==n&&(s(k(n)),i(""),o.push("/"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){localStorage.removeItem("reduxState"),s({type:y,payload:{}})};return Object(D.jsx)("div",{className:r.root,id:"Header",children:Object(D.jsx)(re.a,{position:"static",className:r.myBar,children:Object(D.jsxs)(ce.a,{children:[Object(D.jsx)(_.a,{className:r.title,variant:"h5",noWrap:!0,children:Object(D.jsx)(l.b,{style:{textDecoration:"none",color:"white"},to:"/",onClick:function(){return u()},children:"Mini\u041a\u0438\u043d\u043e\u043f\u043e\u0438\u0441\u043a"})}),Object(D.jsxs)("div",{className:r.search,children:[Object(D.jsx)("div",{className:r.searchIcon,children:Object(D.jsx)(de.a,{})}),Object(D.jsx)("form",{onSubmit:p,children:Object(D.jsx)(se.a,{placeholder:"Search\u2026",classes:{root:r.inputRoot,input:r.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){i(e.target.value)},value:n})})]})]})})})}var xe=function(){return Object(D.jsx)(l.a,{children:Object(D.jsxs)(s.a,{className:"App",children:[Object(D.jsx)(be,{}),Object(D.jsxs)(d.c,{children:[Object(D.jsxs)(d.a,{exact:!0,path:"/",children:[Object(D.jsx)(q,{}),Object(D.jsx)(X,{})]}),Object(D.jsx)(d.a,{path:"/film/:id",children:Object(D.jsx)(oe,{})})]})]})})},he=n(32),je=n(59),fe=n(60),me=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},ge=function(){return me||{films:[],focusedFilm:{},likesFilms:[],urlTrailer:"",loader:!1}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload;case y:return t;default:return e}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.payload;default:return e}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;default:return e}},ye=n(37),ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(ye.a)(Object(ye.a)({},e),{},{loader:!0});case v:return Object(ye.a)(Object(ye.a)({},e),{},{loader:!1});default:return e}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.payload;default:return e}},Se=Object(he.combineReducers)({films:Oe,focusedFilm:ve,likesFilms:we,urlTrailer:Ne,loader:ke}),Ce=Object(he.createStore)(Se,ge(),Object(je.composeWithDevTools)(Object(he.applyMiddleware)(fe.a)));Ce.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(Ce.getState()))}));var Ie=Ce;r.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(c.a,{store:Ie,children:Object(D.jsx)(xe,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.7a9919b0.chunk.js.map