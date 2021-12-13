(this["webpackJsonpcoffee-crush"]=this["webpackJsonpcoffee-crush"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"method":"The Ultimate V60","grindSize":"Medium","defaultCoffeeInGram":30,"defaultWaterInMl":500,"waterTemperature":"100\u2103","ratio":16.66,"tools":["A Hario V60 coffee brewer.","An eletronic scale.","V60 filter paper.","A spoon."],"steps":[{"type":"pour","volume":60,"duration":10,"instruction":"Pour {0.12} ml of water and wait to bloom."},{"type":"swirl","duration":10,"instruction":"Swirl the brewer until the grounds look well mixed."},{"type":"wait","duration":30,"instruction":"Wait 30 seconds."},{"type":"pour","volume":240,"duration":30,"instruction":"Pour water until {0.6} ml."},{"type":"wait","duration":5,"instruction":"Wait 5 seconds."},{"type":"pour","volume":200,"duration":30,"instruction":"Keep pouring water until {1} ml."},{"type":"stir","duration":5,"instruction":"Stir for 5 seconds."},{"type":"wait","duration":20,"instruction":"Wait for the drawdown."},{"type":"end","duration":0,"instruction":"Enjoy your coffee!"}]},{"method":"French Press","grindSize":"Medium","defaultCoffeeInGram":30,"defaultWaterInMl":500,"waterTemperature":"100\u2103","ratio":16.66,"tools":["A french press brewer.","An eletronic scale.","Two spoons."],"steps":[{"type":"pour","volume":500,"duration":10,"instruction":"Pour {1} ml of water."},{"type":"wait","duration":240,"instruction":"Wait 4 minutes."},{"type":"stir","duration":15,"instruction":"Use spoons to stir floating crusts and discard what remains floating."},{"type":"wait","duration":300,"instruction":"Wait at least 5 minutes."},{"type":"end","duration":0,"instruction":"Enjoy your coffee!"}]},{"method":"Iced filter coffee","grindSize":"Fine","defaultCoffeeInGram":35,"defaultWaterInMl":500,"waterTemperature":"100\u2103","ratio":14.2,"tools":["A Hario V60 coffee brewer.","An eletronic scale.","Two spoons."],"steps":[{"type":"pour","volume":200,"duration":10,"instruction":"Start with {0.4} g of ice in the decanter."},{"type":"pour","volume":60,"duration":10,"instruction":"Pour water until {0.52} ml."},{"type":"swirl","duration":10,"instruction":"Swirl the brewer until the grounds look well mixed."},{"type":"wait","duration":30,"instruction":"Wait 30 seconds and wait to bloom."},{"type":"stir","duration":5,"instruction":"Stir for 5 seconds."},{"type":"pour","volume":240,"duration":150,"instruction":"Slowly pour water until {1} ml."},{"type":"wait","duration":20,"instruction":"Wait for the drawdown."},{"type":"swirl","duration":15,"instruction":"Swirl the brewer until ice cubes are fully melted."},{"type":"end","duration":0,"instruction":"Enjoy your coffee!"}]}]')},29:function(e,t,n){},31:function(e,t,n){e.exports={onOffButton:"Stopwatch_onOffButton__2WMsy",active:"Stopwatch_active__2Zo2k",clock:"Stopwatch_clock__3GJKS"}},4:function(e,t,n){e.exports={heading:"StepsList_heading__LA-iA",scrollable:"StepsList_scrollable__2aZ9j",timeGuide:"StepsList_timeGuide__2SrtH",instruction:"StepsList_instruction__3iTqs",activeText:"StepsList_activeText__3Q-4h"}},5:function(e,t,n){e.exports={pieNeedle:"DonutProgress_pieNeedle__97Mgb",pieChart:"DonutProgress_pieChart__2_8dM",pieLabel:"DonutProgress_pieLabel__3ikD3",button:"DonutProgress_button__1FIDb",countDownTimer:"DonutProgress_countDownTimer__2pLlE",pieLabelStroke:"DonutProgress_pieLabelStroke__2HMjG",legendLabel:"DonutProgress_legendLabel__3oc2U",legend:"DonutProgress_legend__mbBqN",hideshow:"DonutProgress_hideshow__2jgOT"}},8:function(e,t,n){e.exports={btnContainer:"RadioButton_btnContainer__3Cm0B",hiddenInput:"RadioButton_hiddenInput__277Mw",roundToggleButton:"RadioButton_roundToggleButton__3P-ux",btnLabel:"RadioButton_btnLabel__kbciV"}},90:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bell.e775700b.mp3"},94:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(30),s=n.n(a),c=(n(90),n(3)),o=n(8),u=n.n(o),l=n(0),d=function(e){var t=e.children,n=e.className;return Object(l.jsx)("li",{className:"flex-card-listitem ".concat(n),children:Object(l.jsx)("div",{className:"flex-card",children:t})})},j=function(e){var t=e.methodDetails,n=e.coffeeNeeded,i=e.waterNeeded;return Object(l.jsx)(d,{children:Object(l.jsxs)("div",{id:"ready_page",children:[Object(l.jsx)("h2",{className:"heading",children:"Prepare"}),Object(l.jsx)("h4",{className:"low_key_heading",children:"You will need ..."}),Object(l.jsxs)("ul",{className:"item-lists",children:[Object(l.jsxs)("li",{className:"list-item active-text",children:[t.grindSize," ground coffee: ",Math.round(n)," ","g"]}),Object(l.jsxs)("li",{className:"list-item active-text",children:[t.waterTemperature," Water: ",Math.round(i)," ml"]}),t.tools.map((function(e,t){return Object(l.jsx)("li",{className:"list-item active-text",children:e},t)}))]})]})})};function b(e){var t=e.bean,n=e.water,i=e.ratio;return{calcBean:t||n/i,finalAmount:n||t*i}}var p=function(e){var t=e.ratio,n=e.grindSize,i=e.beanWeight,r=e.water,a=e.setBeanWeight,s=e.setWater;return Object(l.jsx)(d,{children:Object(l.jsxs)("div",{id:"dose-section",children:[Object(l.jsx)("h2",{className:"heading",children:"Decide on dose"}),Object(l.jsxs)("div",{className:"centerSpacedFlexContainer",children:[Object(l.jsxs)("div",{className:"info-btn-group",children:[Object(l.jsx)("div",{className:"btn-with-info",children:Object(l.jsx)("div",{className:"btn-with-info",children:n})}),Object(l.jsx)("label",{className:"info-btn-label",children:"Grind Size"})]}),Object(l.jsxs)("div",{className:"info-btn-group",children:[Object(l.jsxs)("div",{className:"btn-with-info",children:[Object(l.jsx)("input",{className:"number_input",type:"number",name:"ground_coffee",id:"ground_coffee",value:Math.round(i),onChange:function(e){var n=e.target.value,i=b({bean:Number(n),ratio:t});a(n),s(i.finalAmount)}})," ","g"]}),Object(l.jsx)("label",{className:"info-btn-label",children:"Ground Coffee"})]}),Object(l.jsxs)("div",{className:"info-btn-group",children:[Object(l.jsxs)("div",{className:"btn-with-info",children:[Object(l.jsx)("input",{className:"number_input",type:"number",name:"water",id:"water",value:Math.round(r),onChange:function(e){var n=e.target.value,i=b({water:Number(n),ratio:t});a(i.calcBean),s(n)}})," ","ml"]}),Object(l.jsx)("label",{className:"info-btn-label",children:"Water"})]})]})]})})},h=n(13),m=(n(29),function(e){var t=e.method,n=e.setMethod,i=e.setIsReady,r=e.chosenMethodDetails,a=e.beanWeight,s=e.setBeanWeight,c=e.water,o=e.setWater,b=null===r||void 0===r?void 0:r.grindSize;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(d,{children:[Object(l.jsx)("h2",{className:"heading",children:"Choose a brew method"}),Object(l.jsx)("div",{className:"centerSpacedFlexContainer",children:h.map((function(e,i){return function(e,t,n,i,r){return Object(l.jsxs)("div",{className:u.a.btnContainer,children:[Object(l.jsx)("input",{className:u.a.hiddenInput,id:t,type:"radio",onChange:function(){return r(t)},checked:t===i}),Object(l.jsx)("div",{className:u.a.roundToggleButton,children:Object(l.jsx)("label",{className:u.a.btnLabel,htmlFor:t,children:n})})]},e)}(i,e.method,e.method,t,n)}))})]}),Object(l.jsx)(p,{ratio:r.ratio,grindSize:b,beanWeight:a,water:c,setBeanWeight:s,setWater:o}),Object(l.jsx)(j,{methodDetails:r,coffeeNeeded:a,waterNeeded:c}),Object(l.jsx)("button",{className:"prime_button",onClick:function(){return i(!0)},children:"I'm ready"})]})}),f=n(20),x=n(9),O=n(5),g=n.n(O),w=function(e){var t=e.pieData,n=e.pieArc,i=e.colorPie;e.currentStep;return i(t).map((function(e){var t,i=e.data.type;return t="pour"===i?"steelblue":"wait"===i?"#3a3a3c":"swirl"===i||"stir"===i?"darkgoldenrod":"darkcyan",Object(l.jsx)("g",{className:g.a.pieChart,children:Object(l.jsx)("path",{fill:t,d:n(e)})},e.index)}))},v=function(e){var t=e.pieData,n=e.pieArc,i=e.colorPie,r=e.time;return i(t).map((function(e){var t;return t=e.index===r?"goldenrod":"none",Object(l.jsx)("g",{className:g.a.pieNeedle,children:Object(l.jsx)("path",{fill:t,d:n(e)})},e.index)}))},_=function(e){var t=e.data,n=e.currentStep,r=e.isRunning,a=e.untilNextStep,s=e.pieRadius,c=Object(i.useMemo)((function(){var e=t[n-1];return"pour"===e.type?[e.type,"".concat(e.volume,"ml")]:[e.type,"".concat(a,"sec")]}),[t,n,a]);return Object(l.jsxs)("text",{className:"".concat(g.a.countDownTimer),textAnchor:"middle",x:s,y:s,dy:"-0.17em",children:[Object(l.jsx)("tspan",{children:r?c[0]:"Push"}),Object(l.jsx)("tspan",{x:s,dy:"1em",children:r?c[1]:"Start"})]})},N=window.innerWidth<640?.6*window.innerWidth:384,y=N,S=.5*N,C=.9*S,R=.75*S,W=Object(x.a)().innerRadius(R).outerRadius(C),D=Object(x.a)().innerRadius(R).outerRadius(R-10),M=function(e){return e.duration},I=function(e){return e.step},P=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("defs",{children:Object(l.jsxs)("radialGradient",{id:"grad1",cx:"50%",cy:"50%",r:"50%",fx:"60%",fy:"60%",children:[Object(l.jsx)("stop",{offset:"0%",style:{stopColor:"#3a3a3c",stopOpacity:1}}),Object(l.jsx)("stop",{offset:"85%",style:{stopColor:"#3a3a3c",stopOpacity:1}}),Object(l.jsx)("stop",{offset:"100%",style:{stopColor:"#48484a",stopOpacity:1}})]})}),Object(l.jsx)("circle",{className:g.a.button,cx:"0",cy:"0",r:R-13})]})},T=function(e){for(var t=e.time,n=e.data,r=e.isRunning,a=e.currentStep,s=e.untilNextStep,c=Object(i.useMemo)((function(){return n.reduce((function(e,t){return e+t.duration}),0)}),[n]),o=[],u=0;u<=c;u++)o.push({step:1});var d=Object(i.useMemo)((function(){return Object(x.b)().sort(null).value(I)}),[]),j=Object(i.useMemo)((function(){return Object(x.b)().sort(null).value(M)}),[]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("svg",{width:N,height:y,children:[Object(l.jsxs)("g",{transform:"translate(".concat(S,",").concat(y/2,")"),children:[Object(l.jsx)(v,{time:t,pieData:o,colorPie:d,pieArc:D,dataValue:I}),Object(l.jsx)(w,{pieData:n,colorPie:j,pieArc:W,dataValue:M,currentStep:a}),Object(l.jsx)(P,{})]}),Object(l.jsx)(_,{data:n,currentStep:a,untilNextStep:s,pieRadius:S,isRunning:r})]})})},A=function(e){var t=e.time,n=e.steps,i=e.currentStep,r=e.untilNextStep,a=e.isRunning,s=e.setIsRunning;return Object(l.jsx)("div",{id:"donutProgressChart",onClick:function(){return s(!a)},children:Object(l.jsx)(T,{time:t,data:n,isRunning:a,currentStep:i,untilNextStep:r})})},k=n(4),B=n.n(k),L=function(e){var t=e.steps,n=e.currentStep,i=e.isRunning;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:B.a.scrollable,children:[Object(l.jsx)("h4",{className:B.a.heading,children:"Steps"}),Object(l.jsx)("ul",{className:"item-lists",children:i?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("li",{className:"list-item",children:[Object(l.jsx)("span",{className:B.a.timeGuide,children:"Do"}),Object(l.jsx)("span",{className:B.a.activeText,children:t[n-1].instruction})]}),t[n]&&Object(l.jsxs)("li",{className:"list-item",children:[Object(l.jsx)("span",{className:B.a.timeGuide,children:"Next Up"}),Object(l.jsx)("span",{className:B.a.instruction,children:t[n].instruction})]})]}):t.map((function(e,t){return Object(l.jsxs)("li",{className:"list-item",children:[Object(l.jsxs)("span",{className:B.a.timeGuide,children:[e.duration," second",e.duration>1?"s":""]}),Object(l.jsx)("span",{className:"".concat(B.a.instruction," ").concat(t===n-1&&B.a.activeText,"\n                  }"),children:e.instruction})]},t)}))})]})})},F=n(31),G=n.n(F),z=function(e){var t=e.time,n=("0"+Math.floor(t/60%60)).toString().slice(-2),i=("0"+Math.floor(t%60)).toString().slice(-2);return Object(l.jsx)("div",{id:"stopwatch",children:Object(l.jsxs)("div",{className:"digits ".concat(G.a.clock),children:[Object(l.jsxs)("span",{children:[n,":"]}),Object(l.jsx)("span",{children:i})]})})},V=n(93),E=function(e){var t=e.methodDetails,n=e.water,r=e.isReady,a=e.setIsReady,s=Object(i.useState)(0),o=Object(c.a)(s,2),u=o[0],d=o[1],j=Object(i.useState)(1),b=Object(c.a)(j,2),p=b[0],h=b[1],m=Object(i.useState)(t.steps[0].duration),x=Object(c.a)(m,2),O=x[0],g=x[1],w=Object(i.useState)(!1),v=Object(c.a)(w,2),_=v[0],N=v[1];(new Audio).autoplay=!0;var y=t.steps.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{instruction:e.instruction.replace(/\{([^]+)\}/,(function(e,t){return Math.round(+t*n).toString()}))})})),S=y.length-p;return Object(i.useEffect)((function(){var e=0;return _?e=window.setInterval((function(){d((function(e){return e+1})),O>0&&g(O-1),S>0&&1===O&&(!function(){var e=new Audio(V.default);e.autoplay=!0,e.play()}(),h((function(e){return e+1})),g(y[p].duration))}),1e3):clearInterval(e),function(){return clearInterval(e)}}),[_,O,p,y,S]),Object(l.jsxs)("div",{className:"slider ".concat(!r&&"close"),children:[Object(l.jsxs)("div",{className:"topnav",children:[Object(l.jsx)("h3",{className:"nav_heading absolute_center",children:t.method}),Object(l.jsx)("button",{className:"nav-btn",onClick:function(){a(!1),N(!1),d(0),h(1),g(t.steps[0].duration)},children:"Close"})]}),Object(l.jsx)(z,{time:u,isRunning:_,setIsRunning:N}),Object(l.jsx)(A,{time:u,steps:y,currentStep:p,untilNextStep:O,isRunning:_,setIsRunning:N}),Object(l.jsx)(L,{isRunning:_,steps:y,currentStep:p})]})};var U=function(){var e=Object(i.useState)("The Ultimate V60"),t=Object(c.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(!1),s=Object(c.a)(a,2),o=s[0],u=s[1],d=h.find((function(e){return e.method===n})),j=Object(i.useState)(d.defaultCoffeeInGram),b=Object(c.a)(j,2),p=b[0],f=b[1],x=Object(i.useState)(d.defaultWaterInMl),O=Object(c.a)(x,2),g=O[0],w=O[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{className:"app-title",children:"Coffee Crush"})}),Object(l.jsx)(m,{method:n,setMethod:r,isReady:o,setIsReady:u,chosenMethodDetails:d,beanWeight:p,setBeanWeight:f,water:g,setWater:w}),Object(l.jsx)(E,{methodDetails:d,beanWeight:p,water:g,isReady:o,setIsReady:u})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(U,{})}),document.getElementById("root")),H()}},[[94,1,2]]]);
//# sourceMappingURL=main.9693f339.chunk.js.map