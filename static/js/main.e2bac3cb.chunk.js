(this["webpackJsonpeog-react-visualization-base"]=this["webpackJsonpeog-react-visualization-base"]||[]).push([[0],{269:function(e,t,a){e.exports=a(519)},519:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(33),o=a.n(c),l=a(52),i=a(228),u=a(255),s=a(96),m=a(60),p=a.n(m),d=a(170),f="EVENT/API_ERROR_RECEIVED",b=a(118),g=p.a.mark(h),E=p.a.mark(O);function h(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.a)(b.b.error,"Error Received: ".concat(e.error));case 2:case"end":return t.stop()}}),g)}function O(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)(f,h);case 2:case"end":return e.stop()}}),E)}var v=[O],j=Object(s.a)(v),y=a(119),w={temperatureinCelsius:null,temperatureinFahrenheit:null,description:"",locationName:""},T=Object(y.a)({},"EVENT/WEATHER_DATA_RECEIVED",(function(e,t){var a,r=t.getWeatherForLocation,n=r.description,c=r.locationName,o=r.temperatureinCelsius;return{temperatureinCelsius:o,temperatureinFahrenheit:(a=o,9*a/5+32),description:n,locationName:c}})),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=T[t.type];return"undefined"===typeof a?e:a(e,t)},M={selectedMetric:"oilTemp"},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_METRIC":return{selectedMetric:t.payload};default:return e}};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P={before:null,after:null},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_HEARTBEAT":return k({},e,{before:t.payload,after:t.payload-18e5});default:return e}},A={tubingPressure:[],casingPressure:[],oilTemp:[],flareTemp:[],waterTemp:[],injValveOpen:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MEASUREMENTS":var a=t.payload;return a;default:return e}},S=a(35),q=a(253),L=a(559),B=a(560),F=(a(280),a(520)),V=a(550),_=a(551),I=a(231),W=a(25),G=a(27),z=a(566),$=a(549),H=a(568),J=a(16),K=Object(J.a)((function(e){return{root:{background:e.palette.secondary.main},label:{color:e.palette.primary.main}}}))(H.a),Q=Object(G.b)({url:"https://react.eogresources.com/graphql"}),U=function(e){var t=e.weather;return{temperatureinFahrenheit:t.temperatureinFahrenheit,description:t.description,locationName:t.locationName}},X=function(){return n.a.createElement(G.a,{value:Q},n.a.createElement(Y,null))},Y=function(){var e=Object(z.a)(),t={latitude:e.latitude||29.7604,longitude:e.longitude||-95.3698},a=Object(S.b)(),c=Object(S.c)(U),o=c.temperatureinFahrenheit,l=c.description,i=c.locationName,u=Object(G.e)({query:"\nquery($latLong: WeatherQuery!) {\n  getWeatherForLocation(latLong: $latLong) {\n    description\n    locationName\n    temperatureinCelsius\n  }\n}\n",variables:{latLong:t}}),s=Object(W.a)(u,1)[0],m=s.fetching,p=s.data,d=s.error;return Object(r.useEffect)((function(){if(d)a({type:f,error:d.message});else if(p){var e=p.getWeatherForLocation;a({type:"EVENT/WEATHER_DATA_RECEIVED",getWeatherForLocation:e})}}),[a,p,d]),m?n.a.createElement($.a,null):n.a.createElement(K,{label:"Weather in ".concat(i,": ").concat(l," and ").concat(o,"\xb0")})},Z=Object(I.a)({grow:{flexGrow:1}}),ee=function(){var e=Z();return n.a.createElement(V.a,{position:"static"},n.a.createElement(_.a,null,n.a.createElement(F.a,{variant:"h6",color:"inherit",className:e.grow},"pkoru's"," EOG React Visualization Assessment"),n.a.createElement(X,null)))},te=Object(I.a)({wrapper:{height:"100vh"}}),ae=function(e){var t=e.children,a=te();return r.createElement("div",{className:a.wrapper},t)},re=a(258),ne=a(232),ce=a(561),oe=a(256),le=a(34),ie=a(252),ue=a(69),se=a(131),me=a(127),pe=a(128),de=a(235),fe=a(552),be=a(553),ge=new ne.SubscriptionClient("ws://react.eogresources.com/graphql",{reconnect:!0}),Ee=Object(G.b)({url:"https://react.eogresources.com/graphql",exchanges:[].concat(Object(s.a)(G.c),[Object(G.d)({forwardSubscription:function(e){return ge.request(e)}})])}),he=(new Date).valueOf(),Oe=Object(I.a)({chartBox:{padding:"5px 0"},box:{width:"400px",margin:"5px",marginLeft:"40%"},card:{display:"flex",justifyContent:"center",alignItems:"center",height:"64px",padding:"0",width:"85%"},cardContent:{padding:0,"&:last-child":{paddingBottom:0}},cardTitle:{fontSize:"24px"}}),ve=function(){return n.a.createElement(G.a,{value:Ee},n.a.createElement(je,null))},je=function(){var e=Oe(),t=Object(S.b)(),a=Object(S.c)((function(e){return e.selectedMetrics.selectedMetric})),c=Object(G.e)({query:"\nquery($input: MeasurementQuery) {\n  getMeasurements(input: $input) {\n    metric,\n    at,\n    value,\n    unit\n  }\n}\n",variables:{input:{metricName:a,before:he-18e5,after:he}}}),o=Object(W.a)(c,1)[0],l=Object(G.f)({query:"\nsubscription {\n    newMeasurement{\n        metric\n        value\n        unit\n        at\n    }\n}\n"},(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return[t.newMeasurement].concat(Object(s.a)(e))})),i=Object(W.a)(l,1)[0],u=i.data&&i.data.filter((function(e){return e.metric===a})),m=o.data,p=o.error;Object(r.useEffect)((function(){if(!p&&m){var e=m.getMeasurements;t({type:"GET_MEASUREMENTS",payload:e})}}));var d=i.data&&i.data.filter((function(e){return e.metric===a})),f=d&&d.slice(0,1).map((function(e){return e.value}));if(!m)return n.a.createElement($.a,null);var b={tubingPressure:"green",casingPressure:"blue",oilTemp:"purple",flareTemp:"red",waterTemp:"teal",injValveOpen:"black"},g=function(e){switch(e){case"tubingPressure":case"casingPressure":return"PSI";case"oilTemp":case"flareTemp":case"waterTemp":return"F";case"injValveOpen":return"%";default:return}}(a);return n.a.createElement(n.a.Fragment,null,n.a.createElement(ce.a,{className:e.box},n.a.createElement(fe.a,{className:e.card},n.a.createElement(be.a,{className:e.cardContent},n.a.createElement(F.a,{className:e.cardTitle},n.a.createElement("span",{style:{fontWeigt:"bold",color:b[a]}},a," : "),n.a.createElement("span",{style:{color:b[a]}},f))))),n.a.createElement(ce.a,{className:e.chartBox},u&&u.length?n.a.createElement(oe.a,{width:"100%",minWidth:300,aspect:16/9},n.a.createElement(de.a,{height:600,data:u,margin:{top:5,right:5,left:5,bottom:5}},n.a.createElement(ie.a,{strokeDasharray:"3 3"}),n.a.createElement(me.a,{dataKey:"at",tickFormatter:function(e){return new Date(parseInt(e)).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}).replace(/:|d+ /,"")},type:"number",tickCount:"11",scale:"auto",domain:["dataMin, dataMax"]}),n.a.createElement(pe.a,{domain:["auto","auto"],scale:"auto",tickCount:"15"},n.a.createElement(le.a,{value:g,position:"insideLeft",offset:"-2"})),n.a.createElement(ue.a,null),n.a.createElement(se.a,{type:"monotone",dataKey:"value",stroke:b[a],activeDot:{r:6},dot:!1}))):null))},ye=a(567),we=a(565),Te=a(557),xe=a(558),Me=a(564),Ne=a(132),Ce=Object(I.a)({box:{width:"166px",margin:"5px"},card:{display:"flex",justifyContent:"center",alignItems:"center",height:"64px",padding:"0",width:"85%"},cardContent:{padding:0,"&:last-child":{paddingBottom:0}},cardTitle:{fontSize:"24px"},formLabel:{paddingBottom:"20px"},formControl:{width:"100%",marginBottom:"40px"},formGroup:{flexDirection:"row",justifyContent:"center"},tubingPressure:{color:"green"},casingPressure:{color:"blue"},oilTemp:{color:"purple"},flareTemp:{color:"red"},waterTemp:{color:"teal"},injValveOpen:{color:"black"}}),ke=Object(J.a)({root:{color:Ne.a[500],"&$checked":{color:Ne.a[900]}},checked:{}})((function(e){return n.a.createElement(Me.a,Object.assign({color:"default"},e))})),Pe=Object(G.b)({url:"https://react.eogresources.com/graphql"}),Re=function(){return n.a.createElement(G.a,{value:Pe},n.a.createElement(Ae,null))},Ae=function(){var e=Object(G.e)({query:"\nquery {\n  getMetrics                                                                                                              \n}\n"}),t=Object(W.a)(e,1)[0],a=t.data,c=t.error,o=Ce(),l=Object(S.b)(),i=Object(S.c)((function(e){return e.selectedMetrics.selectedMetric}));return Object(r.useEffect)((function(){if(c)console.log(c.message);else if(a){var e=[];a.getMetrics.map((function(t,a){return e.push({value:t,label:t})}));var t=a.getMetrics;Object.keys(t).map((function(e,a){return console.log("Object.keys---\x3e",t[e])})),console.log("useEffect1--\x3e",a.getMetrics),console.log("arr test",e),a&&a.getMetrics.map((function(e,t){return console.log("checking Checkbo Metric Value--\x3e",e)}))}})),n.a.createElement(we.a,{component:"fieldset",className:o.formControl},n.a.createElement(ye.a,{component:"legend",className:o.formLabel},"Select metric:"),n.a.createElement(Te.a,{className:o.formGroup},a?a.getMetrics.map((function(e,t){var a=e===i;return n.a.createElement(ce.a,{className:o.box,key:"metric".concat(t)},n.a.createElement(xe.a,{control:n.a.createElement(ke,{checked:a,onChange:function(){return l({type:"SELECT_METRIC",payload:e})},value:e}),label:e}))})):"NO DATA"))},De=Object(I.a)({paper:{margin:"3%",padding:"20px"}}),Se=Object(G.b)({url:"https://react.eogresources.com/graphql"}),qe=function(){return n.a.createElement(G.a,{value:Se},n.a.createElement(Le,null))},Le=function(){var e=De(),t=Object(S.b)(),a=Object(G.e)({query:"\nquery {\n  heartBeat                                                                                                              \n}\n"}),c=Object(W.a)(a,1)[0],o=c.data,l=c.error;return Object(r.useEffect)((function(){l?console.log(l.message):o&&t({type:"GET_HEARTBEAT",payload:o.heartBeat})})),n.a.createElement(re.a,{className:e.paper},n.a.createElement(Re,null),n.a.createElement(ve,null))},Be=function(){var e=Object(l.combineReducers)({weather:x,selectedMetrics:N,heartBeat:R,measurements:D}),t=Object(i.composeWithDevTools)({}),a=Object(u.a)(),r=Object(l.applyMiddleware)(a),n=Object(l.createStore)(e,t(r));return j.forEach(a.run),n}(),Fe=Object(q.a)({palette:{primary:{main:"rgb(39,49,66)"},secondary:{main:"rgb(197,208,222)"},background:{default:"rgb(226,231,238)"}}}),Ve=function(){return n.a.createElement(L.a,{theme:Fe},n.a.createElement(B.a,null),n.a.createElement(S.a,{store:Be},n.a.createElement(ae,null,n.a.createElement(ee,null),n.a.createElement(qe,null),n.a.createElement(b.a,null))))};o.a.render(n.a.createElement(Ve,null),document.getElementById("root"))}},[[269,1,2]]]);
//# sourceMappingURL=main.e2bac3cb.chunk.js.map