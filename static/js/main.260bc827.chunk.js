(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],[,,,,,function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/logo.93085597.png"},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){var n={"./1.png":20,"./2.png":21,"./3.png":22,"./4.png":23,"./5.png":24,"./6.png":25,"./logo.png":5};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=19},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/1.7dbebaa2.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/2.fcf12a70.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/3.1221f378.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/4.6f6f6b61.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/5.ff943c51.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/6.b2918fcc.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a(6),c=a.n(s),o=a(4),i=a.n(o),d=a(7),u=a(2),l=a(8),f=a(9),v=a(11),m=a(10);a(18);function O(e){var t=e.index,r=e.value,s=e.isRotated,c=e.onClick;return Object(n.jsxs)("div",{onClick:function(){c(t)},className:"card ".concat(s?"rotated":""),children:[Object(n.jsx)("div",{className:"card__side card__side--front",children:Object(n.jsx)("img",{src:a(5).default,alt:"Logo"})}),Object(n.jsx)("div",{className:"card__side card__side--back",children:Object(n.jsx)("img",{src:a(19)("./".concat(r,".png")).default,alt:"Image "+r})})]})}a(26),a(27);function p(e){var t=e.score,a=e.movesLeft,r=e.handleBtnClick,s="REACT MEMORY GAME";return a||(s="Awwww, you failed \ud83d\ude22\ufe0f"),6===t&&(s="Grejt skses! \ud83d\udc4f\ufe0f\ud83d\udc4f\ufe0f\ud83d\udc4f\ufe0f"),Object(n.jsxs)("div",{className:"scoreboard",children:[Object(n.jsx)("div",{className:"moves",children:Object(n.jsxs)("h3",{children:["Moves",Object(n.jsx)("span",{children:a})]})}),Object(n.jsxs)("div",{className:"message",children:[Object(n.jsx)("h2",{children:s}),"REACT MEMORY GAME"!==s?Object(n.jsx)("button",{onClick:r,className:"btn",children:"TRY AGAIN"}):null]}),Object(n.jsx)("div",{className:"score",children:Object(n.jsxs)("h3",{children:["Score",Object(n.jsx)("span",{children:t})]})})]})}function j(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}var b=function(e){Object(v.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={movesLeft:5,score:0,noOfMovesPlayed:0,randomArray:j([1,1,2,2,3,3,4,4,5,5,6,6]),currentMove:[],cardsOpen:Array(12).fill(!1),timeout:null,gameOver:!1},e.handleBtnClick=function(){e.setState({movesLeft:5,score:0,noOfMovesPlayed:0,randomArray:j([1,1,2,2,3,3,4,4,5,5,6,6]),currentMove:[],cardsOpen:Array(12).fill(!1),timeout:null,gameOver:!1})},e.resetMove=function(){var t=Object(u.a)(e.state.cardsOpen);e.state.currentMove.forEach((function(e){t[e]=!1})),e.setState({cardsOpen:t,currentMove:[],timeout:null})},e.onClickHandle=function(){var t=Object(d.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.cardsOpen[a]&&!e.state.gameOver){t.next=2;break}return t.abrupt("return");case 2:return(n=Object(u.a)(e.state.cardsOpen))[a]=!e.state.cardsOpen[a],t.next=6,e.setState({noOfMovesPlayed:e.state.noOfMovesPlayed+1,cardsOpen:n});case 6:1===e.state.noOfMovesPlayed&&e.state.timeout&&(clearTimeout(e.state.timeout),e.resetMove()),e.setState({currentMove:[].concat(Object(u.a)(e.state.currentMove),[a])}),2===e.state.noOfMovesPlayed&&(e.setState({noOfMovesPlayed:0}),e.state.randomArray[a]===e.state.randomArray[e.state.currentMove[0]]?(e.setState({score:e.state.score+1,currentMove:[]}),e.state.cardsOpen.every((function(e){return e}))&&e.setState({gameOver:!0})):(e.setState({timeout:setTimeout(e.resetMove,2e3),movesLeft:e.state.movesLeft-1}),e.state.movesLeft||e.setState({gameOver:!0})));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderCardList=function(){return e.state.randomArray.map((function(t,a){return Object(n.jsx)(O,{index:a,value:t,isRotated:e.state.cardsOpen[a],state:e.state,onClick:e.onClickHandle},a)}))},e}return Object(f.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(p,{score:this.state.score,movesLeft:this.state.movesLeft,handleBtnClick:this.handleBtnClick}),this.renderCardList()]})}}]),a}(r.Component);c.a.render(Object(n.jsx)(b,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.260bc827.chunk.js.map