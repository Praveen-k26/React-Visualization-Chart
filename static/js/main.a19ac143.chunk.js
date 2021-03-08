(this["webpackJsonpeog-react-visualization-base"]=this["webpackJsonpeog-react-visualization-base"]||[]).push([[0],{243:function(e,t,a){e.exports=a(395)},395:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(31),o=a.n(c),l=a(53),i=a(203),u=a(227),s=a(102),m=a(61),p=a.n(m),d=a(159),f=a(131),E=p.a.mark(b),g=p.a.mark(h);function b(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.a)(f.b.error,"Error Received: ".concat(e.error));case 2:case"end":return t.stop()}}),E)}function h(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)("EVENT/API_ERROR_RECEIVED",b);case 2:case"end":return e.stop()}}),g)}var v=[h],O=Object(s.a)(v),j={temperatureinCelsius:null,temperatureinFahrenheit:null,description:"",locationName:""},y={"EVENT/WEATHER_DATA_RECEIVED":function(e,t){var a,r=t.getWeatherForLocation,n=r.description,c=r.locationName,o=r.temperatureinCelsius;return{temperatureinCelsius:o,temperatureinFahrenheit:(a=o,9*a/5+32),description:n,locationName:c}}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,a=y[t.type];return"undefined"===typeof a?e:a(e,t)},w={selectedMetric:"oilTemp"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_METRIC":return{selectedMetric:t.payload};default:return e}},M=a(158),N={before:null,after:null},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_HEARTBEAT":return Object(M.a)(Object(M.a)({},e),{},{before:t.payload,after:t.payload-18e5});default:return e}},k={tubingPressure:[],casingPressure:[],oilTemp:[],flareTemp:[],waterTemp:[],injValveOpen:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MEASUREMENTS":var a=t.payload;return a;default:return e}},A=a(37),q=a(225),L=a(433),S=a(434),V=(a(253),a(398)),_=a(424),D=a(425),I=a(423),B=a(28),F=a(114),P=a(38),W=a(441),G=a(442),z=a(445),$=a(16),H=Object($.a)((function(e){return{root:{background:e.palette.secondary.main},label:{color:e.palette.primary.main}}}))(z.a),J=Object(F.a)({url:"https://react.eogresources.com/graphql"}),K=function(e){var t=e.weather;return{temperatureinFahrenheit:t.temperatureinFahrenheit,description:t.description,locationName:t.locationName}},Q=function(){return n.a.createElement(P.a,{value:J},n.a.createElement(U,null))},U=function(){var e=Object(W.a)(),t={latitude:e.latitude||29.7604,longitude:e.longitude||-95.3698},a=Object(A.b)(),c=Object(A.c)(K),o=c.temperatureinFahrenheit,l=c.description,i=c.locationName,u=Object(P.b)({query:"\nquery($latLong: WeatherQuery!) {\n  getWeatherForLocation(latLong: $latLong) {\n    description\n    locationName\n    temperatureinCelsius\n  }\n}\n",variables:{latLong:t}}),s=Object(B.a)(u,1)[0],m=s.fetching,p=s.data,d=s.error;return Object(r.useEffect)((function(){if(d)a({type:"EVENT/API_ERROR_RECEIVED",error:d.message});else if(p){var e=p.getWeatherForLocation;a({type:"EVENT/WEATHER_DATA_RECEIVED",getWeatherForLocation:e})}}),[a,p,d]),m?n.a.createElement(G.a,null):n.a.createElement(H,{label:"Weather in ".concat(i,": ").concat(l," and ").concat(o,"\xb0")})},X=Object(I.a)({grow:{flexGrow:1}}),Y=function(){var e=X();return n.a.createElement(_.a,{position:"static"},n.a.createElement(D.a,null,n.a.createElement(V.a,{variant:"h6",color:"inherit",className:e.grow},"pkoru's"," EOG React Visualization Assessment"),n.a.createElement(Q,null)))},Z=Object(I.a)({wrapper:{height:"100vh"}}),ee=function(e){var t=e.children,a=Z();return r.createElement("div",{className:a.wrapper},t)},te=a(230),ae=a(205),re=a(435),ne=a(228),ce=a(36),oe=a(224),le=a(68),ie=a(132),ue=a(126),se=a(127),me=a(208),pe=a(426),de=a(427),fe=new ae.SubscriptionClient("ws://react.eogresources.com/graphql",{reconnect:!0}),Ee=Object(F.a)({url:"https://react.eogresources.com/graphql",exchanges:[].concat(Object(s.a)(F.b),[Object(F.c)({forwardSubscription:function(e){return fe.request(e)}})])}),ge=(new Date).valueOf(),be=Object(I.a)({chartBox:{padding:"5px 0"},box:{width:"400px",margin:"5px",marginLeft:"40%"},card:{display:"flex",justifyContent:"center",alignItems:"center",height:"64px",padding:"0",width:"85%"},cardContent:{padding:0,"&:last-child":{paddingBottom:0}},cardTitle:{fontSize:"24px"}}),he=function(){return n.a.createElement(P.a,{value:Ee},n.a.createElement(ve,null))},ve=function(){var e=be(),t=Object(A.b)(),a=Object(A.c)((function(e){return e.selectedMetrics.selectedMetric})),c=Object(P.b)({query:"\nquery($input: MeasurementQuery) {\n  getMeasurements(input: $input) {\n    metric,\n    at,\n    value,\n    unit\n  }\n}\n",variables:{input:{metricName:a,before:ge-18e5,after:ge}}}),o=Object(B.a)(c,1)[0],l=Object(P.c)({query:"\nsubscription {\n    newMeasurement{\n        metric\n        value\n        unit\n        at\n    }\n}\n"},(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return[t.newMeasurement].concat(Object(s.a)(e))})),i=Object(B.a)(l,1)[0],u=i.data&&i.data.filter((function(e){return e.metric===a})),m=o.data,p=o.error;Object(r.useEffect)((function(){if(!p&&m){var e=m.getMeasurements;t({type:"GET_MEASUREMENTS",payload:e})}}));var d=i.data&&i.data.filter((function(e){return e.metric===a})),f=d&&d.slice(0,1).map((function(e){return e.value}));if(!m)return n.a.createElement(G.a,null);var E={tubingPressure:"green",casingPressure:"blue",oilTemp:"purple",flareTemp:"red",waterTemp:"teal",injValveOpen:"black"},g=function(e){switch(e){case"tubingPressure":case"casingPressure":return"PSI";case"oilTemp":case"flareTemp":case"waterTemp":return"F";case"injValveOpen":return"%";default:return}}(a);return n.a.createElement(n.a.Fragment,null,n.a.createElement(re.a,{className:e.box},n.a.createElement(pe.a,{className:e.card},n.a.createElement(de.a,{className:e.cardContent},n.a.createElement(V.a,{className:e.cardTitle},n.a.createElement("span",{style:{fontWeigt:"bold",color:E[a]}},a," : "),n.a.createElement("span",{style:{color:E[a]}},f))))),n.a.createElement(re.a,{className:e.chartBox},u&&u.length?n.a.createElement(ne.a,{width:"100%",minWidth:300,aspect:16/9},n.a.createElement(me.a,{height:600,data:u,margin:{top:5,right:5,left:5,bottom:5}},n.a.createElement(oe.a,{strokeDasharray:"3 3"}),n.a.createElement(ue.a,{dataKey:"at",tickFormatter:function(e){return new Date(parseInt(e)).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}).replace(/:|d+ /,"")},type:"number",tickCount:"11",scale:"auto",domain:["dataMin, dataMax"]}),n.a.createElement(se.a,{domain:["auto","auto"],scale:"auto",tickCount:"15"},n.a.createElement(ce.a,{value:g,position:"insideLeft",offset:"-2"})),n.a.createElement(le.a,null),n.a.createElement(ie.a,{type:"monotone",dataKey:"value",stroke:E[a],activeDot:{r:6},dot:!1}))):null))},Oe=a(443),je=a(439),ye=a(431),Te=a(432),we=a(437),xe=a(133),Me=Object(I.a)({box:{width:"166px",margin:"5px"},card:{display:"flex",justifyContent:"center",alignItems:"center",height:"64px",padding:"0",width:"85%"},cardContent:{padding:0,"&:last-child":{paddingBottom:0}},cardTitle:{fontSize:"24px"},formLabel:{paddingBottom:"20px"},formControl:{width:"100%",marginBottom:"40px"},formGroup:{flexDirection:"row",justifyContent:"center"},tubingPressure:{color:"green"},casingPressure:{color:"blue"},oilTemp:{color:"purple"},flareTemp:{color:"red"},waterTemp:{color:"teal"},injValveOpen:{color:"black"}}),Ne=Object($.a)({root:{color:xe.a[500],"&$checked":{color:xe.a[900]}},checked:{}})((function(e){return n.a.createElement(we.a,Object.assign({color:"default"},e))})),Ce=Object(F.a)({url:"https://react.eogresources.com/graphql"}),ke=function(){return n.a.createElement(P.a,{value:Ce},n.a.createElement(Re,null))},Re=function(){var e=Object(P.b)({query:"\nquery {\n  getMetrics                                                                                                              \n}\n"}),t=Object(B.a)(e,1)[0],a=t.data,c=t.error,o=Me(),l=Object(A.b)(),i=Object(A.c)((function(e){return e.selectedMetrics.selectedMetric}));return Object(r.useEffect)((function(){if(c)console.log(c.message);else if(a){var e=[];a.getMetrics.map((function(t,a){return e.push({value:t,label:t})}));var t=a.getMetrics;Object.keys(t).map((function(e,a){return console.log("Object.keys---\x3e",t[e])})),console.log("useEffect1--\x3e",a.getMetrics),console.log("arr test",e),a&&a.getMetrics.map((function(e,t){return console.log("checking Checkbo Metric Value--\x3e",e)}))}})),n.a.createElement(je.a,{component:"fieldset",className:o.formControl},n.a.createElement(Oe.a,{component:"legend",className:o.formLabel},"Select metric:"),n.a.createElement(ye.a,{className:o.formGroup},a?a.getMetrics.map((function(e,t){var a=e===i;return n.a.createElement(re.a,{className:o.box,key:"metric".concat(t)},n.a.createElement(Te.a,{control:n.a.createElement(Ne,{checked:a,onChange:function(){return l({type:"SELECT_METRIC",payload:e})},value:e}),label:e}))})):"NO DATA"))},Ae=Object(I.a)({paper:{margin:"3%",padding:"20px"}}),qe=Object(F.a)({url:"https://react.eogresources.com/graphql"}),Le=function(){return n.a.createElement(P.a,{value:qe},n.a.createElement(Se,null))},Se=function(){var e=Ae(),t=Object(A.b)(),a=Object(P.b)({query:"\nquery {\n  heartBeat                                                                                                              \n}\n"}),c=Object(B.a)(a,1)[0],o=c.data,l=c.error;return Object(r.useEffect)((function(){l?console.log(l.message):o&&t({type:"GET_HEARTBEAT",payload:o.heartBeat})})),n.a.createElement(te.a,{className:e.paper},n.a.createElement(ke,null),n.a.createElement(he,null))},Ve=function(){var e=Object(l.combineReducers)({weather:T,selectedMetrics:x,heartBeat:C,measurements:R}),t=Object(i.composeWithDevTools)({}),a=Object(u.a)(),r=Object(l.applyMiddleware)(a),n=Object(l.createStore)(e,t(r));return O.forEach(a.run),n}(),_e=Object(q.a)({palette:{primary:{main:"rgb(39,49,66)"},secondary:{main:"rgb(197,208,222)"},background:{default:"rgb(226,231,238)"}}}),De=function(){return n.a.createElement(L.a,{theme:_e},n.a.createElement(S.a,null),n.a.createElement(A.a,{store:Ve},n.a.createElement(ee,null,n.a.createElement(Y,null),n.a.createElement(Le,null),n.a.createElement(f.a,null))))};o.a.render(n.a.createElement(De,null),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.a19ac143.chunk.js.map