(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(46)},40:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var o=n(3),i=n.n(o),r=n(25),a=n.n(r),s=n(20),c=n(10),u=n(11),p=n(13),v=n(12),l=n(14),d=n(6),f=n(7),h="updatePositions",b="setRightPosition",m="setLeftPosition",O={updatePositions:function(){return{type:h}}},y={setLeftMove:function(e){return{type:"setLeftMove",moveY:e}}},P={setRightMove:function(e){return{type:"setRightMove",moveY:e}}},j=n(18),w=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"getPosition",value:function(){var e,t=this.props,n=t.side,o=t.position;return e={},Object(j.a)(e,n,0),Object(j.a)(e,"bottom",o),e}},{key:"render",value:function(){var e=this.getPosition();return i.a.createElement("div",{className:"stick",style:e})}}]),t}(o.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"getPosition",value:function(){var e=this.props.position;return{left:e.x,bottom:e.y}}},{key:"render",value:function(){var e=this.getPosition();return i.a.createElement("div",{className:"ball",style:e})}}]),t}(o.Component),E={UP:38,DOWN:40,W:87,S:83,P:80,R:82,SPACE:32},k={UP:1,DOWN:-1,LEFT:-1,RIGHT:1,ZERO:0},D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).updatePositions=function(){var e=n.props.shouldUpdatePositions;if(!e&&n.updatePositionsInterval)return clearInterval(n.updatePositionsInterval),void delete n.updatePositionsInterval;e&&!n.updatePositionsInterval&&(n.updatePositionsInterval=setInterval(n.props.updatePositions,1e3/60))},n.handleKeyDown=function(e){switch(e.keyCode){case E.W:return e.preventDefault(),void n.props.setLeftMove(k.UP);case E.S:return e.preventDefault(),void n.props.setLeftMove(k.DOWN);case E.UP:return e.preventDefault(),void n.props.setRightMove(k.UP);case E.DOWN:return e.preventDefault(),void n.props.setRightMove(k.DOWN);default:return}},n.handleKeyUp=function(e){switch(e.keyCode){case E.W:case E.S:return e.preventDefault(),void n.props.setLeftMove(k.ZERO);case E.UP:case E.DOWN:return e.preventDefault(),void n.props.setRightMove(k.ZERO);default:return}},n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),this.updatePositions()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp)}},{key:"componentDidUpdate",value:function(){this.updatePositions()}},{key:"render",value:function(){var e=this.props,t=e.leftPosition,n=e.rightPosition,o=e.ballPosition;return i.a.createElement("div",{className:"playground"},i.a.createElement(w,{side:"left",position:t}),i.a.createElement(w,{side:"right",position:n}),i.a.createElement(g,{position:o}))}}]),t}(o.Component),L=Object(s.b)(function(e){var t=e.leftPlayer,n=e.rightPlayer,o=e.ball;return{leftPosition:t.position,rightPosition:n.position,ballPosition:o.position,shouldUpdatePositions:t.moveY||n.moveY||o.moveX||o.moveY}},function(e){return Object(f.b)(Object(d.a)({},O,y,P),e)})(D),Y=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(L,null))}}]),t}(o.Component),M=n(29),U=n(19),R=n.n(U),I=n(15),N=function(e,t){var n=e+t*(320/60);return n<0?0:n>320?320:n},W=R.a.mark(C),x=R.a.mark(S);function C(){var e,t,n,o,i,r,a,s,c,u;return R.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Object(I.c)();case 2:if(e=p.sent,t=e.gamePaused,n=e.leftPlayer,o=e.rightPlayer,!t){p.next=8;break}return p.abrupt("return");case 8:return i=n.position,r=n.moveY,a=o.position,s=o.moveY,c=N(i,r),u=N(a,s),p.next=16,Object(I.a)([Object(I.b)({type:m,position:c}),Object(I.b)({type:b,position:u})]);case 16:case"end":return p.stop()}},W,this)}function S(){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.d)(h,C);case 2:case"end":return e.stop()}},x,this)}var K,T,A,X={position:{x:390,y:190},moveX:0,moveY:0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BALL_MOVE":var n=t.move,o=n.moveX,i=n.moveY;return Object(d.a)({},e,{moveX:o,moveY:i});case"SET_BALL_POSITION":var r=t.position;return Object(d.a)({},e,{position:r});default:return e}},B={position:160,moveY:0},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setLeftMove":var n=t.moveY;return Object(d.a)({},e,{moveY:n});case m:var o=t.position;return Object(d.a)({},e,{position:o});default:return e}},J={position:160,moveY:0},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setRightMove":var n=t.moveY;return Object(d.a)({},e,{moveY:n});case b:var o=t.position;return Object(d.a)({},e,{position:o});default:return e}},G=Object(f.c)({ball:_,leftPlayer:Z,rightPlayer:F}),H=(K=f.d,T=Object(M.a)(),A=Object(f.e)(G,void 0,K(f.a.apply(void 0,[T]))),T.run(S),A);n(40);a.a.render(i.a.createElement(s.a,{store:H},i.a.createElement(Y,null)),document.getElementById("root"))}},[[30,2,1]]]);
//# sourceMappingURL=main.9d4ddb2e.chunk.js.map