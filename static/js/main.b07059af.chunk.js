(this["webpackJsonpcoffee-crush"]=this["webpackJsonpcoffee-crush"]||[]).push([[0],{10:function(e,t,n){e.exports={subtleHeading:"PreparationCard_subtleHeading__3I8px",list:"PreparationCard_list__3gMvm",listItem:"PreparationCard_listItem__2fSSe"}},11:function(e,t,n){e.exports={btnContainer:"RadioButton_btnContainer__3Cm0B",hiddenInput:"RadioButton_hiddenInput__277Mw",roundToggleButton:"RadioButton_roundToggleButton__3P-ux",btnLabel:"RadioButton_btnLabel__kbciV"}},110:function(e,t,n){},12:function(e,t,n){e.exports={navigation:"Navigation_navigation__3JMeS",title:"Navigation_title__1I0yt",navButton:"Navigation_navButton__244cM"}},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bell.e775700b.mp3"},154:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/start.c5edceb4.mp3"},155:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(43),s=n.n(a),c=(n(110),n(5)),o=n(22),u=n(23),l=n.n(u),d=n(0),f=function(e){var t=e.children;return Object(d.jsx)("div",{className:l.a.flexCardContainer,children:t})},j=function(e){var t=e.children,n=e.className;return Object(d.jsx)("li",{className:"".concat(l.a.flexCardListItem," ").concat(n),children:Object(d.jsx)("div",{className:l.a.flexCard,children:t})})},p=n(11),m=n.n(p),b=n(33);function h(e){var t=e.bean,n=e.water,i=e.ratio;return{beanWeight:t||n/i,waterVolume:n||t*i}}function O(e){return Math.round(e).toString()}var x=n(4),_=n.n(x),w=function(e){var t=e.methodDetails,n=e.beanWeight,r=e.water,a=e.setBeanWeight,s=e.setWater,c=Object(i.useRef)(t),o=Object(i.useRef)(null),u=b.a.utils.selector(o),l=t.ratio,f=t.grindSize,p=Object(i.useCallback)((function(e){var t=Number(e.target.value);if("ground_coffee"===e.target.id){var n=h({bean:t,ratio:l});a(t),s(n.waterVolume)}else{var i=h({water:t,ratio:l});a(i.beanWeight),s(t)}}),[l,a,s]);return Object(i.useLayoutEffect)((function(){t!==c.current&&b.a.timeline().to(u(".toTilt"),{rotation:25,duration:.3,ease:"end"}).to(u(".toTilt"),{rotation:0,duration:1,ease:"back"}),c.current=t}),[t,c,u]),Object(d.jsx)(j,{children:Object(d.jsxs)("div",{id:"dose-section",children:[Object(d.jsx)("h2",{className:"heading",children:"Decide on dose"}),Object(d.jsxs)("div",{ref:o,className:"spaced-container",children:[Object(d.jsxs)("div",{className:_.a.formWrapper,children:[Object(d.jsx)("div",{className:" ".concat(_.a.formInCircle," toTilt"),children:f}),Object(d.jsx)("label",{className:_.a.formLabel,children:"Grind Size"})]}),Object(d.jsxs)("div",{className:_.a.formWrapper,children:[Object(d.jsxs)("div",{className:" ".concat(_.a.formInCircle," toTilt"),children:[Object(d.jsx)("input",{className:_.a.numberInput,type:"number",name:"ground_coffee",id:"ground_coffee",value:O(n),onChange:p})," ","g"]}),Object(d.jsx)("label",{className:_.a.formLabel,children:"Ground Coffee"})]}),Object(d.jsxs)("div",{className:_.a.formWrapper,children:[Object(d.jsxs)("div",{className:" ".concat(_.a.formInCircle," toTilt"),children:[Object(d.jsx)("input",{className:_.a.numberInput,type:"number",name:"water",id:"water",value:O(r),onChange:p})," ","ml"]}),Object(d.jsx)("label",{className:_.a.formLabel,children:"Water"})]})]})]})})},g=n(10),v=n.n(g),N=function(e){var t=e.methodDetails,n=e.coffeeNeeded,i=e.waterNeeded;return Object(d.jsx)(j,{children:Object(d.jsxs)("div",{id:"ready_page",children:[Object(d.jsx)("h2",{className:"heading",children:"Prepare"}),Object(d.jsx)("h4",{className:v.a.subtleHeading,children:"You will need ..."}),Object(d.jsxs)("ul",{className:v.a.list,children:[Object(d.jsxs)("li",{className:v.a.listItem,children:[t.grindSize," ground coffee:"," ",O(n)," g"]}),Object(d.jsxs)("li",{className:v.a.listItem,children:[t.waterTemperature," Water:"," ",O(i)," ml"]}),t.tools.map((function(e,t){return Object(d.jsx)("li",{className:v.a.listItem,children:e},t)}))]})]})})},y=function(e){var t=e.method,n=e.setMethod,i=e.chosenMethodDetails,r=e.beanWeight,a=e.setBeanWeight,s=e.water,c=e.setWater,u=function(e){n(e.name),a(e.defaultCoffeeInGram),c(e.defaultWaterInMl)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(f,{children:[Object(d.jsxs)(j,{children:[Object(d.jsx)("h2",{className:"heading",children:"Choose a brew method"}),Object(d.jsx)("div",{className:"spaced-container",children:o.map((function(e){return function(e,t,n){return Object(d.jsxs)("div",{className:m.a.btnContainer,children:[Object(d.jsx)("input",{className:m.a.hiddenInput,id:e.name,type:"radio",onChange:function(){return n(e)},checked:e.name===t}),Object(d.jsx)("div",{className:m.a.roundToggleButton,children:Object(d.jsx)("label",{className:m.a.btnLabel,htmlFor:e.name,children:e.name})})]},e.name)}(e,t,u)}))})]}),Object(d.jsx)(w,{methodDetails:i,beanWeight:r,water:s,setBeanWeight:a,setWater:c}),Object(d.jsx)(N,{methodDetails:i,coffeeNeeded:r,waterNeeded:s})]})})},S=n(31),C=n(7),W=n.n(C),I=n(12),D=n.n(I),T=function(e){var t=e.methodDetails,n=e.onClose;return Object(d.jsxs)("div",{className:D.a.navigation,children:[Object(d.jsx)("button",{className:D.a.navButton,onClick:n,children:"Close"}),Object(d.jsx)("h3",{className:D.a.title,children:t.name}),Object(d.jsx)("a",{className:D.a.navButton,href:t.learn,target:"_blank",rel:"noreferrer",children:"Learn"})]})},P=n(44),R=n.n(P),A=function(e){var t=e.time,n=("0"+Math.floor(t/60%60)).toString().slice(-2),i=("0"+Math.floor(t%60)).toString().slice(-2);return Object(d.jsx)("div",{id:"stopwatch",children:Object(d.jsxs)("div",{className:R.a.clock,children:[Object(d.jsxs)("span",{children:[n,":"]}),Object(d.jsx)("span",{children:i})]})})},L=n(13),M=n(6),k=n.n(M),B=function(e){var t=e.pieData,n=e.pieArc;return(0,e.pie)(t).map((function(e){var t,i=e.data.type;return t="pour"===i?"steelblue":"wait"===i?"#3a3a3c":"swirl"===i||"stir"===i?"darkgoldenrod":"darkcyan",Object(d.jsx)("g",{className:k.a.pieChart,children:Object(d.jsx)("path",{fill:t,d:n(e)})},e.index)}))},V=function(e){var t=e.pieData,n=e.pieArc,i=e.pie,r=e.time;return i(t).map((function(e){var t;return t=e.index===r?"goldenrod":e.index<r?"darkgoldenrod":"none",Object(d.jsx)("g",{className:k.a.pieNeedle,children:Object(d.jsx)("path",{fill:t,d:n(e)})},e.index)}))},G=n(158),F=function(e){var t=e.data,n=e.currentStep,r=e.isRunning,a=e.untilNextStep,s=Object(i.useMemo)((function(){var e=t[n-1];return r?"pour"===e.type?"Pour until ".concat(O(e.fractionOfWater),"ml"):"end"===e.type?"Push & Done":"".concat(e.type," ").concat(a,"sec"):"Push & Start"}),[t,n,a,r]);return Object(d.jsx)(G.a,{className:k.a.countDownTimer,textAnchor:"middle",verticalAnchor:"middle",width:30,children:s})},H=window.innerWidth<window.innerHeight?.6*window.innerWidth:.6*window.innerHeight,z=.5*H,E=.9*z,Y=.75*z,J=Object(L.a)().innerRadius(Y).outerRadius(E),K=Object(L.a)().outerRadius(Y).innerRadius(Y-10),Q=function(e){return e.duration},U=function(e){return e.step},X=function(){return Object(d.jsx)("circle",{className:k.a.button,cx:"0",cy:"0",r:Y-10-3})},Z=function(e){for(var t=e.time,n=e.data,r=e.isRunning,a=e.currentStep,s=e.untilNextStep,c=Object(i.useMemo)((function(){return n.reduce((function(e,t){return e+t.duration}),0)}),[n]),o=[],u=0;u<=c;u++)o.push({step:1});var l=Object(i.useMemo)((function(){return Object(L.b)().sort(null).value(U)}),[]),f=Object(i.useMemo)((function(){return Object(L.b)().sort(null).value(Q)}),[]);return Object(d.jsx)("svg",{width:H,height:H,children:Object(d.jsxs)("g",{transform:"translate(".concat(z,",").concat(z,")"),children:[Object(d.jsx)(V,{time:t,pieData:o,pie:l,pieArc:K}),Object(d.jsx)(B,{pieData:n,pie:f,pieArc:J}),Object(d.jsx)(X,{}),Object(d.jsx)(F,{data:n,currentStep:a,untilNextStep:s,isRunning:r})]})})},q=n(153),$=n(154),ee=function(e){var t=e.time,n=e.steps,r=e.currentStep,a=e.stepsLeft,s=e.untilNextStep,c=e.isRunning,o=e.setIsRunning,u=Object(i.useRef)(new Audio);return u.current.autoplay=!0,Object(i.useEffect)((function(){a>0&&1===s&&(u.current.src=q.default)}),[a,u,s]),Object(d.jsx)("div",{id:"donutProgressChart",onClick:function(){o(!c),u.current.src=$.default},children:Object(d.jsx)(Z,{time:t,data:n,isRunning:c,currentStep:r,untilNextStep:s})})},te=n(2),ne=n.n(te),ie=function(e){var t=e.steps,n=e.currentStep,i=e.isRunning;return Object(d.jsxs)("div",{className:ne.a.scrollable,children:[Object(d.jsx)("h4",{className:ne.a.heading,children:"Steps"}),Object(d.jsx)("ul",{className:ne.a.list,children:i?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("li",{className:ne.a.listItem,children:[Object(d.jsx)("span",{className:ne.a.timeGuide,children:"Do"}),Object(d.jsx)("span",{className:ne.a.activeText,children:t[n-1].instruction})]}),t[n]&&Object(d.jsxs)("li",{className:ne.a.listItem,children:[Object(d.jsx)("span",{className:ne.a.timeGuide,children:"Next Up"}),Object(d.jsx)("span",{className:ne.a.instruction,children:t[n].instruction})]})]}):t.map((function(e,t){return Object(d.jsxs)("li",{className:ne.a.listItem,children:[Object(d.jsxs)("span",{className:ne.a.timeGuide,children:[e.duration," second",e.duration>1?"s":""]}),Object(d.jsx)("span",{className:"".concat(ne.a.instruction," ").concat(t===n-1&&ne.a.activeText,"\n                  }"),children:e.instruction})]},t)}))})]})},re=function(e){var t=e.fraction,n=e.total,i=e.unit;return Object(d.jsx)("div",{className:W.a.largeDigit,children:"".concat(O(t),"/").concat(O(n)).concat(i)})},ae=function(e){var t=e.methodDetails,n=e.water,r=e.isReady,a=e.setIsReady,s=Object(i.useState)(!1),o=Object(c.a)(s,2),u=o[0],l=o[1],f=Object(i.useState)(0),j=Object(c.a)(f,2),p=j[0],m=j[1],b=Object(i.useState)(1),h=Object(c.a)(b,2),x=h[0],_=h[1],w=Object(i.useState)(t.steps[0].duration),g=Object(c.a)(w,2),v=g[0],N=g[1],y=Object(i.useState)(0),C=Object(c.a)(y,2),I=C[0],D=C[1],P=t.steps.map((function(e){return Object(S.a)(Object(S.a)({},e),{},{fractionOfWater:e.fractionOfWater*n,instruction:e.instruction.replace(/\{(\d\.?\d{0,})\}/g,(function(e,t){return O(+t*n)}))})})),R=P[x-1].fractionOfWater,L=P.length-x;return Object(i.useEffect)((function(){if(u){var e;return e=window.setInterval((function(){m((function(e){return e+1})),v>0&&N(v-1),L>0&&1===v&&(_((function(e){return e+1})),N(P[x].duration),R&&D(R))}),1e3),function(){return clearInterval(e)}}}),[u,v,x,P,L,R]),Object(d.jsxs)("div",{className:"".concat(W.a.slider," ").concat(!r&&W.a.close),children:[Object(d.jsx)(T,{methodDetails:t,onClose:function(){a(!1),l(!1),m(0),_(1),N(t.steps[0].duration),D(0)}}),Object(d.jsxs)("div",{className:W.a.flexDirectionSwichContainer,children:[Object(d.jsxs)("div",{className:W.a.upAndLeft,children:[Object(d.jsx)(A,{time:p}),Object(d.jsx)(ee,{time:p,steps:P,currentStep:x,stepsLeft:L,untilNextStep:v,isRunning:u,setIsRunning:l})]}),Object(d.jsxs)("div",{className:W.a.bottomAndRight,children:[Object(d.jsx)(re,{fraction:I,total:n,unit:"ml"}),Object(d.jsx)(ie,{isRunning:u,steps:P,currentStep:x})]})]})]})};n(155);var se=function(){var e=Object(i.useState)("The Ultimate V60"),t=Object(c.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(!1),s=Object(c.a)(a,2),u=s[0],l=s[1],f=Object(i.useMemo)((function(){return o.find((function(e){return e.name===n}))}),[n]),j=Object(i.useState)(f.defaultCoffeeInGram),p=Object(c.a)(j,2),m=p[0],b=p[1],h=Object(i.useState)(f.defaultWaterInMl),O=Object(c.a)(h,2),x=O[0],_=O[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"app-title",children:"Coffee Crush"}),Object(d.jsx)(y,{method:n,setMethod:r,chosenMethodDetails:f,beanWeight:m,setBeanWeight:b,water:x,setWater:_}),Object(d.jsx)(ae,{methodDetails:f,water:x,isReady:u,setIsReady:l}),Object(d.jsx)("button",{className:"prime-button",onClick:function(){return l(!0)},children:"I'm ready"})]})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,159)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(se,{})}),document.getElementById("root")),ce()},2:function(e,t,n){e.exports={scrollable:"StepsList_scrollable__2aZ9j",list:"StepsList_list__33TY0",listItem:"StepsList_listItem__3QnQ6",heading:"StepsList_heading__LA-iA",timeGuide:"StepsList_timeGuide__2SrtH",instruction:"StepsList_instruction__3iTqs",activeText:"StepsList_activeText__3Q-4h"}},22:function(e){e.exports=JSON.parse('[{"name":"The Ultimate V60","learn":"https://youtu.be/AI4ynXzkSQo","grindSize":"Medium","defaultCoffeeInGram":30,"defaultWaterInMl":500,"waterTemperature":"100\u2103","ratio":16.66,"tools":["A Hario V60 coffee brewer.","V60 filter paper.","An eletronic scale.","A teaspoon."],"steps":[{"type":"pour","fractionOfWater":0.12,"duration":10,"instruction":"Pour {0.12} ml of water and wait to bloom."},{"type":"swirl","duration":10,"instruction":"Swirl the brewer until the grounds look well mixed."},{"type":"wait","duration":30,"instruction":"Wait 30 seconds."},{"type":"pour","fractionOfWater":0.6,"duration":30,"instruction":"Pour water until {0.6} ml."},{"type":"wait","duration":5,"instruction":"Wait 5 seconds."},{"type":"pour","fractionOfWater":1,"duration":30,"instruction":"Keep pouring water until {1} ml."},{"type":"stir","duration":5,"instruction":"Stir for 5 seconds."},{"type":"wait","duration":20,"instruction":"Wait for the drawdown."},{"type":"end","duration":0,"instruction":"Enjoy your coffee!"}]},{"name":"Tetsu Kasuya V60","learn":"https://youtu.be/wmCW8xSWGZY","grindSize":"Coarse","defaultCoffeeInGram":20,"defaultWaterInMl":300,"waterTemperature":"100\u2103","ratio":15,"tools":["A Hario V60 coffee brewer.","V60 filter paper.","An eletronic scale."],"steps":[{"type":"pour","fractionOfWater":0.2,"duration":10,"instruction":"Pour {0.2} ml of water. (Adjustable: {0.17} ml for more sweetness; {0.23} ml offers more acidity)."},{"type":"wait","duration":35,"instruction":"Wait 35 seconds."},{"type":"pour","fractionOfWater":0.4,"duration":10,"instruction":"Pour water until {0.4} ml."},{"type":"wait","duration":35,"instruction":"Wait 35 seconds."},{"type":"pour","fractionOfWater":0.6,"duration":10,"instruction":"Pour until {0.6} ml."},{"type":"wait","duration":35,"instruction":"Wait 35 seconds."},{"type":"pour","fractionOfWater":0.8,"duration":10,"instruction":"Pour until {0.8} ml."},{"type":"wait","duration":35,"instruction":"Wait 35 seconds."},{"type":"pour","fractionOfWater":1,"duration":10,"instruction":"Finish the pour at {1} ml."},{"type":"wait","duration":25,"instruction":"Wait for the drawdown."},{"type":"end","duration":0,"instruction":"Enjoy your coffee!"}]},{"name":"French Press","learn":"https://youtu.be/st571DYYTR8","grindSize":"Medium","defaultCoffeeInGram":30,"defaultWaterInMl":500,"waterTemperature":"100\u2103","ratio":16.66,"tools":["A french press brewer.","An eletronic scale.","Two table spoons."],"steps":[{"type":"pour","fractionOfWater":1,"duration":10,"instruction":"Pour {1} ml of water."},{"type":"wait","duration":240,"instruction":"Wait 4 minutes."},{"type":"stir","duration":20,"instruction":"Use spoons to stir the crust and discard what remains floating."},{"type":"wait","duration":300,"instruction":"Wait at least 5 minutes."},{"type":"press","duration":10,"instruction":"Put the plunger in, not all the way, but just until it\'s sitting on the surface of coffee."},{"type":"end","duration":0,"instruction":"Enjoy your coffee!"}]},{"name":"Iced filter coffee","learn":"https://youtu.be/PApBycDrPo0","grindSize":"Fine","defaultCoffeeInGram":35,"defaultWaterInMl":500,"waterTemperature":"Ice + 100\u2103","ratio":14.3,"tools":["A Hario V60 coffee brewer.","V60 filter paper.","An eletronic scale.","A teaspoon."],"steps":[{"type":"pour","fractionOfWater":0.4,"duration":10,"instruction":"Start with {0.4} g of ice in the decanter."},{"type":"pour","fractionOfWater":0.52,"duration":10,"instruction":"Pour water until {0.52} ml."},{"type":"swirl","duration":10,"instruction":"Swirl the brewer until the grounds look well mixed."},{"type":"wait","duration":30,"instruction":"Wait 30 seconds and wait to bloom."},{"type":"stir","duration":5,"instruction":"Stir for 5 seconds."},{"type":"pour","fractionOfWater":1,"duration":150,"instruction":"Slowly pour water until {1} ml."},{"type":"wait","duration":20,"instruction":"Wait for the drawdown."},{"type":"swirl","duration":15,"instruction":"Swirl the brewer until ice cubes are fully melted."},{"type":"end","duration":0,"instruction":"Enjoy your coffee!"}]}]')},23:function(e,t,n){e.exports={flexCardContainer:"Card_flexCardContainer__1klXT",flexCardListItem:"Card_flexCardListItem__1HmSY",flexCard:"Card_flexCard__1fjIE","flex-card-content":"Card_flex-card-content__14qdT"}},4:function(e,t,n){e.exports={formWrapper:"DoseCard_formWrapper__3u-vA",formInCircle:"DoseCard_formInCircle__iPwPI",formLabel:"DoseCard_formLabel__1Lxis",numberInput:"DoseCard_numberInput__2cxb9"}},44:function(e,t,n){e.exports={clock:"Stopwatch_clock__3GJKS",onOffButton:"Stopwatch_onOffButton__2WMsy",active:"Stopwatch_active__2Zo2k"}},6:function(e,t,n){e.exports={pieNeedle:"DonutProgress_pieNeedle__GQdWH",pieChart:"DonutProgress_pieChart__2T4pF",button:"DonutProgress_button__zKX9R",countDownTimer:"DonutProgress_countDownTimer__3eee5"}},7:function(e,t,n){e.exports={slider:"InstructionView_slider__11104",close:"InstructionView_close__TVFvd",flexDirectionSwichContainer:"InstructionView_flexDirectionSwichContainer__2Kfu4",bottomAndRight:"InstructionView_bottomAndRight__GxPDP",upAndLeft:"InstructionView_upAndLeft__1sOL_",largeDigit:"InstructionView_largeDigit__jWR_P"}}},[[156,1,2]]]);
//# sourceMappingURL=main.b07059af.chunk.js.map