(function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/cooper_42/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1792:function(e,t,n){e.exports=n.p+"img/jackiejersey.9065c61c.jpg"},3420:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"42",src:n("1792"),width:"200px"}}),r("router-view"),r("div",{staticClass:"content-card"},[r("HelloWorld",{attrs:{msg:"A tribute to Jackie Robinson #42"}})],1)],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v(" Hi, this a project for my school for quarintine. ")]),n("div",{staticClass:"gameBoard"},e._l(e.questions,(function(e){return n("question-entry",{key:e.index,attrs:{entry:e}})})),1)])},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"questionDetail",class:{"answer-correct":e.answerCorrect,"answer-incorrect":!e.answerCorrect&&e.isQuestionAnswered}},[n("h3",[e._v(e._s(e.entry.question)+" correct: "+e._s(e.selectedAnswer))]),n("form",{on:{submit:function(t){return t.preventDefault(),e.submitAnswer()}}},[e._l(e.entry.choices,(function(t,r){return n("div",{key:r,staticClass:"row"},[n("label",[e._v(e._s(t))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAnswer,expression:"selectedAnswer"}],attrs:{type:"radio",name:"entry.label"},domProps:{value:r,checked:e._q(e.selectedAnswer,r)},on:{change:function(t){e.selectedAnswer=r}}})])})),n("button",{attrs:{type:"submit"}},[e._v("Submit Answer")])],2)])},u=[],l={name:"QuestionEntry",props:{entry:{type:Object,required:!0}},data:function(){return{selectedAnswer:null,answerCorrect:!1,isQuestionAnswered:!1}},methods:{submitAnswer:function(){this.isQuestionAnswered=!0,this.entry.answer===this.selectedAnswer?this.answerCorrect=!0:this.answerCorrect=!1}}},p=l,d=(n("a054"),n("2877")),f=Object(d["a"])(p,c,u,!1,null,"9403ecde",null),m=f.exports,h=[{label:"age",question:"How old am I?",choices:["9","39","38","3"],answer:0},{label:"number",question:"What is Jackie's number?",choices:["44","24","3","42"],answer:3},{label:"mlbTeam",question:"For which Major League Baseball team(s) did Jackie play?",choices:["New York Giants","Brooklyn Dodgers","New York Yankees","New York Mets"],answer:1},{label:"negroLeagueTeam",question:"For which negro league team(s) did Jackie play?",choices:["Homestead Grays","Chicago American Giants","Kansas City Monarchs","Pittsburgh Crawfords"],answer:2}],w={name:"HelloWorld",components:{"question-entry":m},props:{msg:String},data:function(){return{questions:h}}},b=w,v=(n("c5da"),Object(d["a"])(b,a,i,!1,null,"14c7a733",null)),y=v.exports,g={name:"App",components:{HelloWorld:y}},_=g,j=(n("034f"),Object(d["a"])(_,o,s,!1,null,null,null)),A=j.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[e._v(e._s(e.text))])},q=[],x={name:"question-detail",props:{text:String}},O=x,C=(n("dafe"),Object(d["a"])(O,k,q,!1,null,"4f8fc3ee",null)),P=C.exports,S=n("8c4f"),M=[{path:"/",component:y},{path:"/question/:id",name:"questionDetail",component:P}],H=new S["a"]({mode:"history",routes:M});r["a"].config.productionTip=!1,r["a"].use(S["a"]),new r["a"]({el:"#app",router:H,components:{App:A},render:function(e){return e(A)}}).$mount("#app")},"85ec":function(e,t,n){},9075:function(e,t,n){},a054:function(e,t,n){"use strict";var r=n("cdb8"),o=n.n(r);o.a},c5da:function(e,t,n){"use strict";var r=n("9075"),o=n.n(r);o.a},cdb8:function(e,t,n){},dafe:function(e,t,n){"use strict";var r=n("3420"),o=n.n(r);o.a}});
//# sourceMappingURL=app.0e568329.js.map