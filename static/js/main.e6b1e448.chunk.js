(this["webpackJsonpreact-metric-card-example"]=this["webpackJsonpreact-metric-card-example"]||[]).push([[0],{196:function(e,t,a){e.exports=a(407)},197:function(e,t,a){},210:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);a(197);var n=a(0),l=a.n(n),r=a(12),i=a.n(r),o=a(445),c=a(448),s=a(446),m=a(59),E=a(447),p=a(444),u=a(6),g=a(191),d=a(437),h=a(438),C=a(439),f=a(440),x=a(441),v=a(442),S=a(450),N=a(4),T=a.n(N),I=a(179),A=a.n(I),O=a(180),y=a.n(O),R=a(181),b=a.n(R),M=a(183),F=a.n(M);const k="#FFFFFF";var w={black:"#000000",white:k,primary:{contrastText:k,dark:u.a.indigo[900],main:u.a.indigo[500],light:u.a.indigo[100]},secondary:{contrastText:k,dark:u.a.blue[900],main:u.a.blue.A400,light:u.a.blue.A400},success:{contrastText:k,dark:u.a.green[900],main:u.a.green[600],light:u.a.green[400]},info:{contrastText:k,dark:u.a.blue[900],main:u.a.blue[600],light:u.a.blue[400]},warning:{contrastText:k,dark:u.a.orange[900],main:u.a.orange[600],light:u.a.orange[400]},error:{contrastText:k,dark:u.a.red[900],main:u.a.red[600],light:u.a.red[400]},text:{primary:u.a.blueGrey[900],secondary:u.a.blueGrey[600],link:u.a.blue[600]},background:{default:"#F4F6F8",paper:k},icon:{primary:"#006066",secondary:"#00e676"},divider:u.a.grey[200]},H={h1:{color:w.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:w.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:w.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:w.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:w.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:w.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:w.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:w.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:w.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:w.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:w.text.primary,fontSize:"14px"},caption:{color:w.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:w.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},G={MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",backgroundColor:"#FFFFFF"}},MuiIconButton:{root:{color:w.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},MuiPaper:{elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:{root:Object(m.a)(Object(m.a)({},H.body1),{},{borderBottom:"1px solid ".concat(w.divider)})},MuiTableHead:{root:{backgroundColor:u.a.grey[50]}},MuiTypography:{gutterBottom:{marginBottom:8}}};const B=Object(g.a)({palette:w,typography:H,overrides:G,zIndex:{appBar:100,drawer:1200}});function D(e){var t,a,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=D(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function U(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=D(e))&&(n&&(n+=" "),n+=t);return n}const j=Object(E.a)(e=>({content:{alignItems:"center",display:"flex"},title:{fontWeight:800,color:"#ff0000",font:"Courier New"},avatar:{backgroundColor:e.palette.error.main,height:56,width:56},difference:{marginTop:e.spacing(2),display:"flex",alignItems:"center"},differenceIconSuccess:{color:e.palette.success.main},differenceIconError:{color:e.palette.error.main},differenceValueSuccess:{color:e.palette.success.main,marginRight:e.spacing(1)},differenceValueError:{color:e.palette.error.main,marginRight:e.spacing(1)},error:{color:e.palette.error.main}})),L=e=>{const t=j(),a=e.fetching,n=e.errorMessage,r=e.errorTooltip,i=e.value,o=e.spinnerColor,c=e.spinnerSize,s=e.spinnerThickness,m=e.title,p=e.titleColor,u=e.titleFontFamily,g=e.titleFontSize,N=e.valueColor,T=e.valueFontFamily,I=e.valueFontSize,O=e.trend,R=e.icon,M=e.iconBgColor,k=e.iconColor,w=e.iconBorderRadius,H=e.iconHeight,G=e.iconWidth,B=e.cardBgColor,D=Object(E.a)(e=>({root:{backgroundColor:B||e.palette.primary.white,height:"100%"},spinner:{color:o},title:{fontWeight:800,color:p,fontFamily:u,fontSize:g},value:{color:N,font:T,fontSize:I},icon:{backgroundColor:M||e.palette.icon.primary,height:H||56,width:G||56,borderRadius:w||"50%",display:"flex",justifyContent:"center",alignItems:"center",color:k||e.palette.white}}))();return l.a.createElement(h.a,{className:U(D.root)},l.a.createElement(C.a,null,l.a.createElement(f.a,{container:!0,justify:"space-between"},l.a.createElement(f.a,{item:!0},l.a.createElement(d.a,{className:D.title,gutterBottom:!0,variant:"body2"},m),l.a.createElement(d.a,{variant:"h3",className:D.value},a||n?"":i)),l.a.createElement(f.a,{item:!0},l.a.createElement(x.a,{className:D.icon},R||l.a.createElement(b.a,null)))),l.a.createElement("div",{className:t.difference},a?l.a.createElement(v.a,{className:D.spinner,size:c,thickness:s}):n?l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{title:r||n},l.a.createElement(F.a,{color:"error"})),l.a.createElement(d.a,{variant:"caption"},n)):O&&((e,t)=>{const a=e.slope,n=void 0===a?0:a,r=e.description,i=void 0===r?"":r,o=l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:n>=0?t.differenceValueSuccess:t.differenceValueError,variant:"body2"},e.value||""),l.a.createElement(d.a,{className:t.caption,variant:"caption"},i||""));return l.a.createElement(l.a.Fragment,null,n<0?l.a.createElement(A.a,{className:t.differenceIconError}):l.a.createElement(y.a,{className:t.differenceIconSuccess}),o)})(O,t))))};L.propTypes={title:T.a.string,fetching:T.a.bool,errorMessage:T.a.string,errorTooltip:T.a.string,value:T.a.string,spinnerColor:T.a.string,spinnerSize:T.a.number,spinnerThickness:T.a.number,titleColor:T.a.string,titleFontFamily:T.a.string,titleFontSize:T.a.string,valueColor:T.a.string,valueFontFamily:T.a.string,valueFontSize:T.a.string,trend:T.a.object,icon:T.a.object,iconBgColor:T.a.string,iconColor:T.a.string,iconBorderRadius:T.a.string,iconHeight:T.a.string,iconWidth:T.a.string,cardBgColor:T.a.string};var z=e=>l.a.createElement(p.a,{theme:B},l.a.createElement(L,e)),V=(a(210),a(58)),P=a.n(V),W=a(190),K=a.n(W),Y=a(56);const Z="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE TITLE COLOR'\n    titleColor='#00ffff'\n    fetching={false}\n    error={null}\n/>",Q="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE TITLE FONT SIZE'\n    titleFontSize='20px'\n    fetching={false}\n    error={null}\n/>",J="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE TITLE FONT FAMILY'\n    titleFontFamily='sansserif'\n    fetching={false}\n    error={null}\n/>",X="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE VALUE COLOR'\n    valueColor='#00ffff'\n    fetching={false}\n    error={null}\n/>",q="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE VALUE FONT SIZE'\n    valueFontSize='30px'\n    fetching={false}\n    error={null}\n/>",$="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE VALUE FONT FAMILY'\n    valueFontFamily='sansserif'\n    fetching={false}\n    error={null}\n/>",_="\nimport FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';\n...\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='ICON CHANGE EXAMPLE'\n    fetching={false}\n    error={null}\n    icon={<FlipCameraAndroidIcon /> }\n/>",ee="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n    }}\n    title='ICON COLOR AND BG COLOUR CHANGE'\n    fetching={false}\n    error={null}\n    iconColor='blue'\n    iconBgColor='yellow'\n/>",te="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n    }}\n    title='ICON HEIGHT AND WIDTH CHANGE'\n    fetching={false}\n    error={null}\n    iconHeight='50px'\n    iconWidth='100px'\n/>",ae="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n    }}\n    title='ICON BORDER RADIUS TO MAKE IS SQUARE'\n    fetching={false}\n    error={null}\n    iconBorderRadius='0%'\n/>",ne="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n    }}\n    title='ICON BORDER RADIUS TO MAKE IS SQUARE'\n    fetching={false}\n    error={null}\n    iconBorderRadius='20%'\n/>",le="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n    }}\n    title='ICON BORDER RADIUS TO MAKE IS SQUARE'\n    fetching={false}\n    error={null}\n    iconBorderRadius='90%'\n/>",re="\n<MetricCard\n    title='CHANGE VALUE COLOR'\n    spinnerColor='#00ffff'\n    fetching={true}\n/>",ie="\n<MetricCard\n    title='CHANGE VALUE FONT SIZE'\n    spinnerSize={55}\n    fetching={true}\n/>",oe="\n<MetricCard\n    title='CHANGE VALUE FONT FAMILY'\n    spinnerThickness={10}\n    fetching={true}\n/>",ce="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Increased compared to last week',\n        value: '5.2%'\n    }}\n    title='INCREASING TREND DEMO'\n    fetching={false}\n    error={null}\n/>",se="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: -1,\n        description: 'Decreased compared to last week',\n        value: '3.4%'\n    }}\n    title='DECREASING TREND DEMO'\n    fetching={false}\n    error={null}\n/>",me="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Increased compared to last week',\n        value: '5.2%'\n    }}\n    title='INCREASING TREND DEMO'\n    fetching={false}\n    error={null}\n    cardBgColor='blue'\n/>",Ee="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: -1,\n        description: 'Decreased compared to last week',\n        value: '3.4%'\n    }}\n    title='DECREASING TREND DEMO'\n    fetching={false}\n    error={null}\n    cardBgColor='grey'\n/>";var pe=()=>{const e={slope:1,description:"This is the description",value:56},t={slope:-1,description:"Compared to last smoke test",value:"34 mins"};return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Live demonstrations of react-metric-component"),l.a.createElement("a",{href:"https://www.npmjs.com/package/react-metric-card"},"see NPM library for this react component")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/Keetmalin/react-metric-card"},"see GitHub repository for this react component"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.a,{container:!0,spacing:2},l.a.createElement(o.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"12%",trend:{slope:1,description:"This is the description",value:"56%"},title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!1,error:null,fetchFunction:()=>{},spinnerColor:"inherit",icon:l.a.createElement(Y.a,null)})),l.a.createElement(o.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"233 mins",trend:t,title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!1,error:null,fetchFunction:()=>{},spinnerColor:"inherit",icon:l.a.createElement(P.a,null)})),l.a.createElement(o.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"12%",trend:e,title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!0,error:"null",fetchFunction:()=>{},spinnerColor:"#ff0000"})),l.a.createElement(o.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"12%",trend:e,title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!1,errorMessage:"An Error Occurred when fetching data",fetchFunction:()=>{},spinnerColor:"inherit"}))),l.a.createElement(o.a,{container:!0,spacing:2},l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"12%",trend:{slope:1,description:"This is the description",value:"56%"},title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!1,error:null,fetchFunction:()=>{},spinnerColor:"inherit",icon:l.a.createElement(Y.a,null)})),l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"233 mins",trend:t,title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!1,error:null,fetchFunction:()=>{},spinnerColor:"inherit",icon:l.a.createElement(P.a,null)}))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Simple Usage with Title, Value and Trend object. (All others settings are default)"),l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"SERVICE SUCCESS RATE PERCENTAGE",fetching:!1,error:null})),l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},"<MetricCard\n  value={'89.04%'}\n  trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n  }}\n  title='SERVICE SUCCESS RATE PERCENTAGE'\n  fetching={false}\n  error={null}\n/>"))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Simple Usage with fetching set to true (All others settings are default)"),l.a.createElement(o.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(z,{title:"SERVICE SUCCESS RATE PERCENTAGE",fetching:!0})),l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},"<MetricCard\ntitle='SERVICE SUCCESS RATE PERCENTAGE'\nfetching={true}\n/>"))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Simple Usage with Error Message (All others settings are default)"),l.a.createElement(o.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(z,{title:"SERVICE SUCCESS RATE PERCENTAGE",fetching:!1,errorMessage:"An Erro Occured while fetching the metric data"})),l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},"<MetricCard\n  value={'89.04%'}\n  trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n  }}\n  title='SERVICE SUCCESS RATE PERCENTAGE'\n  fetching={false}\n  error={null}\n/>"))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Title Color | Size | Font Family"),l.a.createElement(o.a,{container:!0,spacing:2},l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE TITLE COLOR",titleColor:"#00ffff",fetching:!1,error:null})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE TITLE FONT SIZE",titleFontSize:"20px",fetching:!1,error:null})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE TITLE FONT FAMILY",titleFontFamily:"sansserif",fetching:!1,error:null})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},Z)),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},Q)),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},J)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Value Color | Size | Font Family"),l.a.createElement(o.a,{container:!0,spacing:2},l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE VALUE COLOR",valueColor:"#00ffff",fetching:!1,error:null})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE VALUE FONT SIZE",valueFontSize:"30px",fetching:!1,error:null})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE VALUE FONT FAMILY",valueFontFamily:"sansserif",fetching:!1,error:null})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},X)),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},q)),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},$)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Spinner Color | Size | Thickness"),l.a.createElement(o.a,{container:!0,spacing:2},l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{title:"CHANGING SPINNER COLOR",spinnerColor:"#00ffff",fetching:!0})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{title:"CHANGING SPINNER SIZE",spinnerSize:55,fetching:!0})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{title:"CHANGING SPINNER THICKNESS",spinnerThickness:10,fetching:!0})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},re)),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},ie)),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},oe)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Icon | its Color and Background Color | Height and Width | And Border Radius"),l.a.createElement(o.a,{container:!0,spacing:2},l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON CHANGE EXAMPLE",fetching:!1,error:null,icon:l.a.createElement(K.a,null)})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON COLOR AND BG COLOUR CHANGE",fetching:!1,error:null,iconColor:"blue",iconBgColor:"yellow"})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON HEIGHT AND WIDTH CHANGE",fetching:!1,error:null,iconHeight:"50px",iconWidth:"100px"})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},_)),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},ee)),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},te)),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON BORDER RADIUS TO MAKE IS SQUARE",fetching:!1,error:null,iconBorderRadius:"0%"})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON BORDER RADIUS TO MAKE IS LESS SQUARE",fetching:!1,error:null,iconBorderRadius:"20%"})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON BORDER RADIUS TO MAKE IS CIRCLE",fetching:!1,error:null,iconBorderRadius:"90%"})),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},ae)),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},ne)),l.a.createElement(o.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},le)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Trend Object to Show Increase and Decrese conditions"),l.a.createElement(o.a,{container:!0,spacing:2},l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Increased compared to last week",value:"5.2%"},title:"INCREASING TREND DEMO",fetching:!1,error:null})),l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:-1,description:"Decreased compared to last week",value:"3.4%"},title:"DECREASING TREND DEMO",fetching:!1,error:null})),l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},ce)),l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},se)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Background Color of the Metric Card"),l.a.createElement(o.a,{container:!0,spacing:2},l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:1,description:"Increased compared to last week",value:"5.2%"},title:"INCREASING TREND DEMO",fetching:!1,error:null,cardBgColor:"blue"})),l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(z,{value:"89.04%",trend:{slope:-1,description:"Decreased compared to last week",value:"3.4%"},title:"DECREASING TREND DEMO",fetching:!1,error:null,cardBgColor:"grey"})),l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},me)),l.a.createElement(o.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(c.a,{language:"javascript",style:s.a},Ee)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("br",null))};i.a.render(l.a.createElement(pe,null),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.e6b1e448.chunk.js.map