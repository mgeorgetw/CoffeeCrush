(this["webpackJsonpcoffee-crush"]=this["webpackJsonpcoffee-crush"]||[]).push([[0],{10:function(e,t,n){e.exports={subtleHeading:"PreparationCard_subtleHeading__3I8px",list:"PreparationCard_list__3gMvm",listItem:"PreparationCard_listItem__2fSSe"}},103:function(e,t,n){},11:function(e,t,n){e.exports={btnContainer:"RadioButton_btnContainer__3Cm0B",hiddenInput:"RadioButton_hiddenInput__277Mw",roundToggleButton:"RadioButton_roundToggleButton__3P-ux",btnLabel:"RadioButton_btnLabel__kbciV"}},12:function(e,t,n){e.exports={navigation:"Navigation_navigation__3JMeS",title:"Navigation_title__1I0yt",leftButton:"Navigation_leftButton__3_Tqn",linkButton:"Navigation_linkButton__3YQYF"}},146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bell.e775700b.mp3"},147:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/start.c5edceb4.mp3"},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(42),s=n.n(a),c=(n(103),n(5)),o=n(20),u=n(21),l=n.n(u),d=n(0),f=function(e){var t=e.children;return Object(d.jsx)("div",{className:l.a.flexCardContainer,children:t})},j=function(e){var t=e.children,n=e.className;return Object(d.jsx)("li",{className:"".concat(l.a.flexCardListItem," ").concat(n),children:Object(d.jsx)("div",{className:l.a.flexCard,children:t})})},p=n(11),m=n.n(p);function b(e){var t=e.bean,n=e.water,i=e.ratio;return{beanWeight:t||n/i,waterVolume:n||t*i}}function h(e){return Math.round(e).toString()}var O=n(4),x=n.n(O),_=function(e){var t=e.methodDetails,n=e.beanWeight,i=e.water,r=e.setBeanWeight,a=e.setWater,s=t.ratio,c=t.grindSize,o=function(e){var t=e.target.value;if("ground_coffee"===e.target.id){var n=b({bean:Number(t),ratio:s});r(t),a(n.waterVolume)}else{var i=b({water:Number(t),ratio:s});r(i.beanWeight),a(t)}};return Object(d.jsx)(j,{children:Object(d.jsxs)("div",{id:"dose-section",children:[Object(d.jsx)("h2",{className:"heading",children:"Decide on dose"}),Object(d.jsxs)("div",{className:"spaced-container",children:[Object(d.jsxs)("div",{className:x.a.formWrapper,children:[Object(d.jsx)("div",{className:x.a.formInCircle,children:c}),Object(d.jsx)("label",{className:x.a.formLabel,children:"Grind Size"})]}),Object(d.jsxs)("div",{className:x.a.formWrapper,children:[Object(d.jsxs)("div",{className:x.a.formInCircle,children:[Object(d.jsx)("input",{className:x.a.numberInput,type:"number",name:"ground_coffee",id:"ground_coffee",value:h(n),onChange:o})," ","g"]}),Object(d.jsx)("label",{className:x.a.formLabel,children:"Ground Coffee"})]}),Object(d.jsxs)("div",{className:x.a.formWrapper,children:[Object(d.jsxs)("div",{className:x.a.formInCircle,children:[Object(d.jsx)("input",{className:x.a.numberInput,type:"number",name:"water",id:"water",value:h(i),onChange:o})," ","ml"]}),Object(d.jsx)("label",{className:x.a.formLabel,children:"Water"})]})]})]})})},g=n(10),w=n.n(g),v=function(e){var t=e.methodDetails,n=e.coffeeNeeded,i=e.waterNeeded;return Object(d.jsx)(j,{children:Object(d.jsxs)("div",{id:"ready_page",children:[Object(d.jsx)("h2",{className:"heading",children:"Prepare"}),Object(d.jsx)("h4",{className:w.a.subtleHeading,children:"You will need ..."}),Object(d.jsxs)("ul",{className:w.a.list,children:[Object(d.jsxs)("li",{className:w.a.listItem,children:[t.grindSize," ground coffee:"," ",h(n)," g"]}),Object(d.jsxs)("li",{className:w.a.listItem,children:[t.waterTemperature," Water:"," ",h(i)," ml"]}),t.tools.map((function(e,t){return Object(d.jsx)("li",{className:w.a.listItem,children:e},t)}))]})]})})},N=function(e){var t=e.method,n=e.setMethod,i=e.chosenMethodDetails,r=e.beanWeight,a=e.setBeanWeight,s=e.water,c=e.setWater,u=function(e){n(e.name),a(e.defaultCoffeeInGram),c(e.defaultWaterInMl)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(f,{children:[Object(d.jsxs)(j,{children:[Object(d.jsx)("h2",{className:"heading",children:"Choose a brew method"}),Object(d.jsx)("div",{className:"spaced-container",children:o.map((function(e){return function(e,t,n){return Object(d.jsxs)("div",{className:m.a.btnContainer,children:[Object(d.jsx)("input",{className:m.a.hiddenInput,id:e.name,type:"radio",onChange:function(){return n(e)},checked:e.name===t}),Object(d.jsx)("div",{className:m.a.roundToggleButton,children:Object(d.jsx)("label",{className:m.a.btnLabel,htmlFor:e.name,children:e.name})})]},e.name)}(e,t,u)}))})]}),Object(d.jsx)(_,{methodDetails:i,beanWeight:r,water:s,setBeanWeight:a,setWater:c}),Object(d.jsx)(v,{methodDetails:i,coffeeNeeded:r,waterNeeded:s})]})})},y=n(30),S=n(12),C=n.n(S),W=function(e){var t=e.methodDetails,n=e.onClose;return Object(d.jsxs)("div",{className:C.a.navigation,children:[Object(d.jsx)("h3",{className:C.a.title,children:t.name}),Object(d.jsx)("button",{className:C.a.leftButton,onClick:n,children:"Close"}),Object(d.jsx)("a",{className:C.a.linkButton,href:t.learn,target:"_blank",rel:"noreferrer",children:"Learn"})]})},I=n(13),D=n(6),P=n.n(D),A=function(e){var t=e.pieData,n=e.pieArc;return(0,e.pie)(t).map((function(e){var t,i=e.data.type;return t="pour"===i?"steelblue":"wait"===i?"#3a3a3c":"swirl"===i||"stir"===i?"darkgoldenrod":"darkcyan",Object(d.jsx)("g",{className:P.a.pieChart,children:Object(d.jsx)("path",{fill:t,d:n(e)})},e.index)}))},L=function(e){var t=e.pieData,n=e.pieArc,i=e.pie,r=e.time;return i(t).map((function(e){var t;return t=e.index===r?"goldenrod":e.index<r?"darkgoldenrod":"none",Object(d.jsx)("g",{className:P.a.pieNeedle,children:Object(d.jsx)("path",{fill:t,d:n(e)})},e.index)}))},R=n(151),T=function(e){var t=e.data,n=e.currentStep,r=e.isRunning,a=e.untilNextStep,s=Object(i.useMemo)((function(){var e=t[n-1];return r?"pour"===e.type?"Pour until ".concat(h(e.fractionOfWater),"ml"):"end"===e.type?"Push & Done":"".concat(e.type," ").concat(a,"sec"):"Push & Start"}),[t,n,a,r]);return Object(d.jsx)(R.a,{className:P.a.countDownTimer,textAnchor:"middle",verticalAnchor:"middle",width:30,children:s})},M=window.innerWidth<window.innerHeight?.6*window.innerWidth:.6*window.innerHeight,B=.5*M,k=.9*B,V=.75*B,G=Object(I.a)().innerRadius(V).outerRadius(k),F=Object(I.a)().outerRadius(V).innerRadius(V-10),H=function(e){return e.duration},z=function(e){return e.step},E=function(){return Object(d.jsx)("circle",{className:P.a.button,cx:"0",cy:"0",r:V-10-3})},Y=function(e){for(var t=e.time,n=e.data,r=e.isRunning,a=e.currentStep,s=e.untilNextStep,c=Object(i.useMemo)((function(){return n.reduce((function(e,t){return e+t.duration}),0)}),[n]),o=[],u=0;u<=c;u++)o.push({step:1});var l=Object(i.useMemo)((function(){return Object(I.b)().sort(null).value(z)}),[]),f=Object(i.useMemo)((function(){return Object(I.b)().sort(null).value(H)}),[]);return Object(d.jsx)("svg",{width:M,height:M,children:Object(d.jsxs)("g",{transform:"translate(".concat(B,",").concat(B,")"),children:[Object(d.jsx)(L,{time:t,pieData:o,pie:l,pieArc:F}),Object(d.jsx)(A,{pieData:n,pie:f,pieArc:G}),Object(d.jsx)(E,{}),Object(d.jsx)(T,{data:n,currentStep:a,untilNextStep:s,isRunning:r})]})})},Q=n(146),J=n(147),K=function(e){var t=e.time,n=e.steps,r=e.currentStep,a=e.stepsLeft,s=e.untilNextStep,c=e.isRunning,o=e.setIsRunning,u=Object(i.useRef)(new Audio);return u.current.autoplay=!0,Object(i.useEffect)((function(){a>0&&1===s&&(u.current.src=Q.default)}),[a,u,s]),Object(d.jsx)("div",{id:"donutProgressChart",onClick:function(){o(!c),u.current.src=J.default},children:Object(d.jsx)(Y,{time:t,data:n,isRunning:c,currentStep:r,untilNextStep:s})})},U=n(2),q=n.n(U),X=function(e){var t=e.steps,n=e.currentStep,i=e.isRunning;return Object(d.jsxs)("div",{className:q.a.scrollable,children:[Object(d.jsx)("h4",{className:q.a.heading,children:"Steps"}),Object(d.jsx)("ul",{className:q.a.list,children:i?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("li",{className:q.a.listItem,children:[Object(d.jsx)("span",{className:q.a.timeGuide,children:"Do"}),Object(d.jsx)("span",{className:q.a.activeText,children:t[n-1].instruction})]}),t[n]&&Object(d.jsxs)("li",{className:q.a.listItem,children:[Object(d.jsx)("span",{className:q.a.timeGuide,children:"Next Up"}),Object(d.jsx)("span",{className:q.a.instruction,children:t[n].instruction})]})]}):t.map((function(e,t){return Object(d.jsxs)("li",{className:q.a.listItem,children:[Object(d.jsxs)("span",{className:q.a.timeGuide,children:[e.duration," second",e.duration>1?"s":""]}),Object(d.jsx)("span",{className:"".concat(q.a.instruction," ").concat(t===n-1&&q.a.activeText,"\n                  }"),children:e.instruction})]},t)}))})]})},Z=n(44),$=n.n(Z),ee=function(e){var t=e.time,n=("0"+Math.floor(t/60%60)).toString().slice(-2),i=("0"+Math.floor(t%60)).toString().slice(-2);return Object(d.jsx)("div",{id:"stopwatch",children:Object(d.jsxs)("div",{className:$.a.clock,children:[Object(d.jsxs)("span",{children:[n,":"]}),Object(d.jsx)("span",{children:i})]})})},te=n(7),ne=n.n(te),ie=function(e){var t=e.methodDetails,n=e.water,r=e.isReady,a=e.setIsReady,s=Object(i.useState)(0),o=Object(c.a)(s,2),u=o[0],l=o[1],f=Object(i.useState)(1),j=Object(c.a)(f,2),p=j[0],m=j[1],b=Object(i.useState)(t.steps[0].duration),O=Object(c.a)(b,2),x=O[0],_=O[1],g=Object(i.useState)(!1),w=Object(c.a)(g,2),v=w[0],N=w[1],S=Object(i.useState)(0),C=Object(c.a)(S,2),I=C[0],D=C[1],P=t.steps.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{fractionOfWater:e.fractionOfWater*n,instruction:e.instruction.replace(/\{(\d\.?\d{0,})\}/g,(function(e,t){return h(+t*n)}))})})),A=P.length-p,L=P[p-1].fractionOfWater,R=function(e){var t=e.fraction,n=e.total,i=e.unit;return Object(d.jsx)("div",{className:ne.a.largeDigit,children:"".concat(h(t),"/").concat(h(n)).concat(i)})};return Object(i.useEffect)((function(){if(v){var e;return e=window.setInterval((function(){l((function(e){return e+1})),x>0&&_(x-1),A>0&&1===x&&(m((function(e){return e+1})),_(P[p].duration),L&&D(L))}),1e3),function(){return clearInterval(e)}}}),[v,x,p,P,A,L]),Object(d.jsxs)("div",{className:"".concat(ne.a.slider," ").concat(!r&&ne.a.close),children:[Object(d.jsx)(W,{methodDetails:t,onClose:function(){a(!1),N(!1),l(0),m(1),_(t.steps[0].duration),D(0)}}),Object(d.jsxs)("div",{className:ne.a.flexDirectionSwichContainer,children:[Object(d.jsxs)("div",{className:ne.a.upAndLeft,children:[Object(d.jsx)(ee,{time:u}),Object(d.jsx)(K,{time:u,steps:P,currentStep:p,stepsLeft:A,untilNextStep:x,isRunning:v,setIsRunning:N})]}),Object(d.jsxs)("div",{className:ne.a.bottomAndRight,children:[Object(d.jsx)(R,{fraction:I,total:n,unit:"ml"}),Object(d.jsx)(X,{isRunning:v,steps:P,currentStep:p})]})]})]})};n(148);var re=function(){var e=Object(i.useState)("The Ultimate V60"),t=Object(c.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(!1),s=Object(c.a)(a,2),u=s[0],l=s[1],f=Object(i.useMemo)((function(){return o.find((function(e){return e.name===n}))}),[n]),j=Object(i.useState)(f.defaultCoffeeInGram),p=Object(c.a)(j,2),m=p[0],b=p[1],h=Object(i.useState)(f.defaultWaterInMl),O=Object(c.a)(h,2),x=O[0],_=O[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"app-title",children:"Coffee Crush"}),Object(d.jsx)(N,{method:n,setMethod:r,chosenMethodDetails:f,beanWeight:m,setBeanWeight:b,water:x,setWater:_}),Object(d.jsx)(ie,{methodDetails:f,water:x,isReady:u,setIsReady:l}),Object(d.jsx)("button",{className:"prime-button",onClick:function(){return l(!0)},children:"I'm ready"})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(re,{})}),document.getElementById("root")),ae()},2:function(e,t,n){e.exports={scrollable:"StepsList_scrollable__2aZ9j",list:"StepsList_list__33TY0",listItem:"StepsList_listItem__3QnQ6",heading:"StepsList_heading__LA-iA",timeGuide:"StepsList_timeGuide__2SrtH",instruction:"StepsList_instruction__3iTqs",activeText:"StepsList_activeText__3Q-4h"}},20:function(e){e.exports=JSON.parse('[{"name":"The Ultimate V60","learn":"https://youtu.be/AI4ynXzkSQo","grindSize":"Medium","defaultCoffeeInGram":30,"defaultWaterInMl":500,"waterTemperature":"100\u2103","ratio":16.66,"tools":["A Hario V60 coffee brewer.","V60 filter paper.","An eletronic scale.","A teaspoon."],"steps":[{"type":"pour","fractionOfWater":0.12,"duration":10,"instruction":"Pour {0.12} ml of water and wait to bloom."},{"type":"swirl","duration":10,"instruction":"Swirl the brewer until the grounds look well mixed."},{"type":"wait","duration":30,"instruction":"Wait 30 seconds."},{"type":"pour","fractionOfWater":0.6,"duration":30,"instruction":"Pour water until {0.6} ml."},{"type":"wait","duration":5,"instruction":"Wait 5 seconds."},{"type":"pour","fractionOfWater":1,"duration":30,"instruction":"Keep pouring water until {1} ml."},{"type":"stir","duration":5,"instruction":"Stir for 5 seconds."},{"type":"wait","duration":20,"instruction":"Wait for the drawdown."},{"type":"end","duration":0,"instruction":"Enjoy your coffee!"}]},{"name":"Tetsu Kasuya V60","learn":"https://youtu.be/wmCW8xSWGZY","grindSize":"Coarse","defaultCoffeeInGram":20,"defaultWaterInMl":300,"waterTemperature":"100\u2103","ratio":15,"tools":["A Hario V60 coffee brewer.","V60 filter paper.","An eletronic scale."],"steps":[{"type":"pour","fractionOfWater":0.2,"duration":10,"instruction":"Pour {0.2} ml of water. (Adjustable: {0.17} ml for more sweetness; {0.23} ml offers more acidity)."},{"type":"wait","duration":35,"instruction":"Wait 35 seconds."},{"type":"pour","fractionOfWater":0.4,"duration":10,"instruction":"Pour water until {0.4} ml."},{"type":"wait","duration":35,"instruction":"Wait 35 seconds."},{"type":"pour","fractionOfWater":0.6,"duration":10,"instruction":"Pour until {0.6} ml."},{"type":"wait","duration":35,"instruction":"Wait 35 seconds."},{"type":"pour","fractionOfWater":0.8,"duration":10,"instruction":"Pour until {0.8} ml."},{"type":"wait","duration":35,"instruction":"Wait 35 seconds."},{"type":"pour","fractionOfWater":1,"duration":10,"instruction":"Finish the pour at {1} ml."},{"type":"wait","duration":25,"instruction":"Wait for the drawdown."},{"type":"end","duration":0,"instruction":"Enjoy your coffee!"}]},{"name":"French Press","learn":"https://youtu.be/st571DYYTR8","grindSize":"Medium","defaultCoffeeInGram":30,"defaultWaterInMl":500,"waterTemperature":"100\u2103","ratio":16.66,"tools":["A french press brewer.","An eletronic scale.","Two table spoons."],"steps":[{"type":"pour","fractionOfWater":1,"duration":10,"instruction":"Pour {1} ml of water."},{"type":"wait","duration":240,"instruction":"Wait 4 minutes."},{"type":"stir","duration":20,"instruction":"Use spoons to stir the crust and discard what remains floating."},{"type":"wait","duration":300,"instruction":"Wait at least 5 minutes."},{"type":"press","duration":10,"instruction":"Put the plunger in, not all the way, but just until it\'s sitting on the surface of coffee."},{"type":"end","duration":0,"instruction":"Enjoy your coffee!"}]},{"name":"Iced filter coffee","learn":"https://youtu.be/PApBycDrPo0","grindSize":"Fine","defaultCoffeeInGram":35,"defaultWaterInMl":500,"waterTemperature":"Ice + 100\u2103","ratio":14.3,"tools":["A Hario V60 coffee brewer.","V60 filter paper.","An eletronic scale.","A teaspoon."],"steps":[{"type":"pour","fractionOfWater":0.4,"duration":10,"instruction":"Start with {0.4} g of ice in the decanter."},{"type":"pour","fractionOfWater":0.52,"duration":10,"instruction":"Pour water until {0.52} ml."},{"type":"swirl","duration":10,"instruction":"Swirl the brewer until the grounds look well mixed."},{"type":"wait","duration":30,"instruction":"Wait 30 seconds and wait to bloom."},{"type":"stir","duration":5,"instruction":"Stir for 5 seconds."},{"type":"pour","fractionOfWater":1,"duration":150,"instruction":"Slowly pour water until {1} ml."},{"type":"wait","duration":20,"instruction":"Wait for the drawdown."},{"type":"swirl","duration":15,"instruction":"Swirl the brewer until ice cubes are fully melted."},{"type":"end","duration":0,"instruction":"Enjoy your coffee!"}]}]')},21:function(e,t,n){e.exports={flexCardContainer:"Card_flexCardContainer__1klXT",flexCardListItem:"Card_flexCardListItem__1HmSY",flexCard:"Card_flexCard__1fjIE","flex-card-content":"Card_flex-card-content__14qdT"}},4:function(e,t,n){e.exports={formWrapper:"DoseCard_formWrapper__3u-vA",formInCircle:"DoseCard_formInCircle__iPwPI",formLabel:"DoseCard_formLabel__1Lxis",numberInput:"DoseCard_numberInput__2cxb9"}},44:function(e,t,n){e.exports={clock:"Stopwatch_clock__3GJKS",onOffButton:"Stopwatch_onOffButton__2WMsy",active:"Stopwatch_active__2Zo2k"}},6:function(e,t,n){e.exports={pieNeedle:"DonutProgress_pieNeedle__GQdWH",pieChart:"DonutProgress_pieChart__2T4pF",button:"DonutProgress_button__zKX9R",countDownTimer:"DonutProgress_countDownTimer__3eee5"}},7:function(e,t,n){e.exports={slider:"InstructionView_slider__11104",close:"InstructionView_close__TVFvd",flexDirectionSwichContainer:"InstructionView_flexDirectionSwichContainer__2Kfu4",bottomAndRight:"InstructionView_bottomAndRight__GxPDP",upAndLeft:"InstructionView_upAndLeft__1sOL_",largeDigit:"InstructionView_largeDigit__jWR_P"}}},[[149,1,2]]]);
//# sourceMappingURL=main.f252c75a.chunk.js.map