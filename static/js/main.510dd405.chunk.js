(this["webpackJsonpreact-metric-card-example"]=this["webpackJsonpreact-metric-card-example"]||[]).push([[0],{199:function(e,t,a){e.exports=a(409)},200:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);a(200);var n=a(0),l=a.n(n),r=a(11),i=a.n(r),c=a(446),o=a(450),s=a(447),m=a(61),E=a(448),u=a(445),d=a(7),p=a(193),g=a(438),C=a(439),h=a(449),f=a(440),x=a(441),v=a(442),S=a(443),N=a(452),I=a(4),T=a.n(I),A=a(181),O=a.n(A),y=a(182),R=a.n(y),b=a(183),k=a.n(b),M=a(185),F=a.n(M);const w="#FFFFFF";var H={black:"#000000",white:w,primary:{contrastText:w,dark:d.a.indigo[900],main:d.a.indigo[500],light:d.a.indigo[100]},secondary:{contrastText:w,dark:d.a.blue[900],main:d.a.blue.A400,light:d.a.blue.A400},success:{contrastText:w,dark:d.a.green[900],main:d.a.green[600],light:d.a.green[400]},info:{contrastText:w,dark:d.a.blue[900],main:d.a.blue[600],light:d.a.blue[400]},warning:{contrastText:w,dark:d.a.orange[900],main:d.a.orange[600],light:d.a.orange[400]},error:{contrastText:w,dark:d.a.red[900],main:d.a.red[600],light:d.a.red[400]},text:{primary:d.a.blueGrey[900],secondary:d.a.blueGrey[600],link:d.a.blue[600]},background:{default:"#F4F6F8",paper:w},icon:{primary:"#006066",secondary:"#00e676"},divider:d.a.grey[200]},G={h1:{color:H.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:H.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:H.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:H.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:H.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:H.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:H.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:H.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:H.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:H.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:H.text.primary,fontSize:"14px"},caption:{color:H.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:H.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},D={MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",backgroundColor:"#FFFFFF"}},MuiIconButton:{root:{color:H.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},MuiPaper:{elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:{root:Object(m.a)(Object(m.a)({},G.body1),{},{borderBottom:"1px solid ".concat(H.divider)})},MuiTableHead:{root:{backgroundColor:d.a.grey[50]}},MuiTypography:{gutterBottom:{marginBottom:8}}};const B=Object(p.a)({palette:H,typography:G,overrides:D,zIndex:{appBar:100,drawer:1200}});function L(e){var t,a,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=L(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function j(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=L(e))&&(n&&(n+=" "),n+=t);return n}const U=Object(E.a)(e=>({content:{alignItems:"center",display:"flex"},cardAction:{display:"block",textAlign:"initial",height:"100%",width:"100%"},title:{fontWeight:800,color:"#ff0000",font:"Courier New"},avatar:{backgroundColor:e.palette.error.main,height:56,width:56},difference:{marginTop:e.spacing(2),display:"flex",alignItems:"center"},differenceIconSuccess:{color:e.palette.success.main},differenceIconError:{color:e.palette.error.main},differenceValueSuccess:{color:e.palette.success.main,marginRight:e.spacing(1)},differenceValueError:{color:e.palette.error.main,marginRight:e.spacing(1)},error:{color:e.palette.error.main}})),z=e=>{const t=U(),a=e.fetching,n=e.errorMessage,r=e.errorTooltip,i=e.value,c=e.spinnerColor,o=e.spinnerSize,s=e.spinnerThickness,m=e.title,u=e.titleColor,d=e.titleFontFamily,p=e.titleFontSize,I=e.valueColor,T=e.valueFontFamily,A=e.valueFontSize,y=e.trend,b=e.icon,M=e.iconBgColor,w=e.iconColor,H=e.iconBorderRadius,G=e.iconHeight,D=e.iconWidth,B=e.cardBgColor,L=e.cardClick,z=e.cardClickFunction,V=Object(E.a)(e=>({root:{backgroundColor:B||e.palette.primary.white,height:"100%",width:"100%"},spinner:{color:c},title:{fontWeight:800,color:u,fontFamily:d,fontSize:p},value:{color:I,font:T,fontSize:A},icon:{backgroundColor:M||e.palette.icon.primary,height:G||56,width:D||56,borderRadius:H||"50%",display:"flex",justifyContent:"center",alignItems:"center",color:w||e.palette.white}}))();return l.a.createElement(C.a,{className:j(V.root)},l.a.createElement(h.a,{className:t.cardAction,onClick:z,disabled:!L},l.a.createElement(f.a,null,l.a.createElement(x.a,{container:!0,justify:"space-between"},l.a.createElement(x.a,{item:!0},l.a.createElement(g.a,{className:V.title,gutterBottom:!0,variant:"body2"},m),l.a.createElement(g.a,{variant:"h3",className:V.value},a||n?"":i)),l.a.createElement(x.a,{item:!0},l.a.createElement(v.a,{className:V.icon},b||l.a.createElement(k.a,null)))),l.a.createElement("div",{className:t.difference},a?l.a.createElement(S.a,{className:V.spinner,size:o,thickness:s}):n?l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{title:r||n},l.a.createElement(F.a,{color:"error"})),l.a.createElement(g.a,{variant:"caption"},n)):y&&((e,t)=>{const a=e.slope,n=void 0===a?0:a,r=e.description,i=void 0===r?"":r,c=e.reverse,o=void 0!==c&&c,s=l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{className:n>=0?o?t.differenceValueError:t.differenceValueSuccess:o?t.differenceValueSuccess:t.differenceValueError,variant:"body2"},e.value||""),l.a.createElement(g.a,{className:t.caption,variant:"caption"},i||""));return l.a.createElement(l.a.Fragment,null,n<0?l.a.createElement(O.a,{className:o?t.differenceIconSuccess:t.differenceIconError}):l.a.createElement(R.a,{className:o?t.differenceIconError:t.differenceIconSuccess}),s)})(y,t)))))};z.propTypes={title:T.a.string,fetching:T.a.bool,errorMessage:T.a.string,errorTooltip:T.a.string,value:T.a.string,spinnerColor:T.a.string,spinnerSize:T.a.number,spinnerThickness:T.a.number,titleColor:T.a.string,titleFontFamily:T.a.string,titleFontSize:T.a.string,valueColor:T.a.string,valueFontFamily:T.a.string,valueFontSize:T.a.string,trend:T.a.object,icon:T.a.object,iconBgColor:T.a.string,iconColor:T.a.string,iconBorderRadius:T.a.string,iconHeight:T.a.string,iconWidth:T.a.string,cardBgColor:T.a.string,cardClick:T.a.bool,cardClickFunction:T.a.func};var V=e=>l.a.createElement(u.a,{theme:B},l.a.createElement(z,e)),P=a(60),K=a.n(P),W=a(192),Y=a.n(W),Z=a(58);const Q="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE TITLE COLOR'\n    titleColor='#00ffff'\n    fetching={false}\n    error={null}\n/>",J="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE TITLE FONT SIZE'\n    titleFontSize='20px'\n    fetching={false}\n    error={null}\n/>",X="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE TITLE FONT FAMILY'\n    titleFontFamily='sansserif'\n    fetching={false}\n    error={null}\n/>",q="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE VALUE COLOR'\n    valueColor='#00ffff'\n    fetching={false}\n    error={null}\n/>",$="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE VALUE FONT SIZE'\n    valueFontSize='30px'\n    fetching={false}\n    error={null}\n/>",_="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='CHANGE VALUE FONT FAMILY'\n    valueFontFamily='sansserif'\n    fetching={false}\n    error={null}\n/>",ee="\nimport FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';\n...\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n    title='ICON CHANGE EXAMPLE'\n    fetching={false}\n    error={null}\n    icon={<FlipCameraAndroidIcon /> }\n/>",te="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n    }}\n    title='ICON COLOR AND BG COLOUR CHANGE'\n    fetching={false}\n    error={null}\n    iconColor='blue'\n    iconBgColor='yellow'\n/>",ae="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n    }}\n    title='ICON HEIGHT AND WIDTH CHANGE'\n    fetching={false}\n    error={null}\n    iconHeight='50px'\n    iconWidth='100px'\n/>",ne="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n    }}\n    title='ICON BORDER RADIUS TO MAKE IS SQUARE'\n    fetching={false}\n    error={null}\n    iconBorderRadius='0%'\n/>",le="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n    }}\n    title='ICON BORDER RADIUS TO MAKE IS SQUARE'\n    fetching={false}\n    error={null}\n    iconBorderRadius='20%'\n/>",re="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n    }}\n    title='ICON BORDER RADIUS TO MAKE IS SQUARE'\n    fetching={false}\n    error={null}\n    iconBorderRadius='90%'\n/>",ie="\n<MetricCard\n    title='CHANGE VALUE COLOR'\n    spinnerColor='#00ffff'\n    fetching={true}\n/>",ce="\n<MetricCard\n    title='CHANGE VALUE FONT SIZE'\n    spinnerSize={55}\n    fetching={true}\n/>",oe="\n<MetricCard\n    title='CHANGE VALUE FONT FAMILY'\n    spinnerThickness={10}\n    fetching={true}\n/>",se="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Increased compared to last week',\n        value: '5.2%'\n    }}\n    title='INCREASING TREND DEMO'\n    fetching={false}\n    error={null}\n/>",me="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: -1,\n        description: 'Decreased compared to last week',\n        value: '3.4%'\n    }}\n    title='DECREASING TREND DEMO'\n    fetching={false}\n    error={null}\n/>",Ee="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Increased compared to last week',\n        value: '5.2%'\n    }}\n    title='INCREASING TREND DEMO'\n    fetching={false}\n    error={null}\n    cardBgColor='blue'\n/>",ue="\n<MetricCard\n    value={'89.04%'}\n    trend={{\n        slope: -1,\n        description: 'Decreased compared to last week',\n        value: '3.4%'\n    }}\n    title='DECREASING TREND DEMO'\n    fetching={false}\n    error={null}\n    cardBgColor='grey'\n/>",de="\n<MetricCard\n    title='CLICK ME TO SEE ANIMATION ON CARD'\n    fetching={false}\n    cardClick={true}\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n/>",pe="\n<MetricCard\n    title='CLICK ME TO SEE FUNCTION CALL'\n    fetching={false}\n    cardClick={true}\n    cardClickFunction={() => {\n      alert('Card was clicked')\n    }}\n    value={'89.04%'}\n    trend={{\n        slope: 1,\n        description: 'Compared to last week',\n        value: '0.5%'\n    }}\n/>";var ge=()=>{const e={slope:1,description:"This is the description",value:56},t={slope:-1,description:"Compared to last smoke test",value:"34 mins"};return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Live demonstrations of react-metric-component"),l.a.createElement("a",{href:"https://www.npmjs.com/package/react-metric-card"},"see NPM library for this react component")," ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/Keetmalin/react-metric-card"},"see GitHub repository for this react component"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"12%",trend:{slope:1,description:"This is the description",value:"56%"},title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!1,error:null,fetchFunction:()=>{},spinnerColor:"inherit",icon:l.a.createElement(Z.a,null)})),l.a.createElement(c.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"233 mins",trend:t,title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!1,error:null,fetchFunction:()=>{},spinnerColor:"inherit",icon:l.a.createElement(K.a,null)})),l.a.createElement(c.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"12%",trend:e,title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!0,error:"null",fetchFunction:()=>{},spinnerColor:"#ff0000"})),l.a.createElement(c.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"12%",trend:e,title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!1,errorMessage:"An Error Occurred when fetching data",fetchFunction:()=>{},spinnerColor:"inherit"}))),l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"12%",trend:{slope:1,description:"This is the description",value:"56%"},title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!1,error:null,fetchFunction:()=>{},spinnerColor:"inherit",icon:l.a.createElement(Z.a,null)})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"233 mins",trend:t,title:"TIME CONSUMPTION BY SMOKE TEST",fetching:!1,error:null,fetchFunction:()=>{},spinnerColor:"inherit",icon:l.a.createElement(K.a,null)}))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Simple Usage with Title, Value and Trend object. (All others settings are default)"),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"SERVICE SUCCESS RATE PERCENTAGE",fetching:!1,error:null})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},"<MetricCard\n  value={'89.04%'}\n  trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n  }}\n  title='SERVICE SUCCESS RATE PERCENTAGE'\n  fetching={false}\n  error={null}\n/>"))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Simple Usage with fetching set to true (All others settings are default)"),l.a.createElement(c.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(V,{title:"SERVICE SUCCESS RATE PERCENTAGE",fetching:!0})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},"<MetricCard\ntitle='SERVICE SUCCESS RATE PERCENTAGE'\nfetching={true}\n/>"))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Simple Usage with Error Message (All others settings are default)"),l.a.createElement(c.a,{item:!0,lg:3,sm:6,xl:3,xs:12},l.a.createElement(V,{title:"SERVICE SUCCESS RATE PERCENTAGE",fetching:!1,errorMessage:"An Error Occured while fetching the metric data"})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},"<MetricCard\n  value={'89.04%'}\n  trend={{\n    slope: 1,\n    description: 'Compared to last week',\n    value: '0.5%'\n  }}\n  title='SERVICE SUCCESS RATE PERCENTAGE'\n  fetching={false}\n  error={null}\n/>"))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Clickable Card Component with on-click function (All others settings are default)"),l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(V,{title:"CLICK ME TO SEE ANIMATION ON CARD",fetching:!1,cardClick:!0,value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"}})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(V,{title:"CLICK ME TO SEE FUNCTION CALL",fetching:!1,cardClick:!0,cardClickFunction:()=>{alert("Card was clicked")},value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"}})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},de)),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},pe)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Title Color | Size | Font Family"),l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE TITLE COLOR",titleColor:"#00ffff",fetching:!1,error:null})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE TITLE FONT SIZE",titleFontSize:"20px",fetching:!1,error:null})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE TITLE FONT FAMILY",titleFontFamily:"sansserif",fetching:!1,error:null})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},Q)),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},J)),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},X)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Value Color | Size | Font Family"),l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE VALUE COLOR",valueColor:"#00ffff",fetching:!1,error:null})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE VALUE FONT SIZE",valueFontSize:"30px",fetching:!1,error:null})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"CHANGE VALUE FONT FAMILY",valueFontFamily:"sansserif",fetching:!1,error:null})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},q)),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},$)),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},_)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Spinner Color | Size | Thickness"),l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{title:"CHANGING SPINNER COLOR",spinnerColor:"#00ffff",fetching:!0})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{title:"CHANGING SPINNER SIZE",spinnerSize:55,fetching:!0})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{title:"CHANGING SPINNER THICKNESS",spinnerThickness:10,fetching:!0})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},ie)),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},ce)),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},oe)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Icon | its Color and Background Color | Height and Width | And Border Radius"),l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON CHANGE EXAMPLE",fetching:!1,error:null,icon:l.a.createElement(Y.a,null)})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON COLOR AND BG COLOUR CHANGE",fetching:!1,error:null,iconColor:"blue",iconBgColor:"yellow"})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON HEIGHT AND WIDTH CHANGE",fetching:!1,error:null,iconHeight:"50px",iconWidth:"100px"})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},ee)),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},te)),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},ae)),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON BORDER RADIUS TO MAKE IS SQUARE",fetching:!1,error:null,iconBorderRadius:"0%"})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON BORDER RADIUS TO MAKE IS LESS SQUARE",fetching:!1,error:null,iconBorderRadius:"20%"})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Compared to last week",value:"0.5%"},title:"ICON BORDER RADIUS TO MAKE IS CIRCLE",fetching:!1,error:null,iconBorderRadius:"90%"})),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},ne)),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},le)),l.a.createElement(c.a,{item:!0,lg:4,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},re)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Trend Object to Show Increase and Decrese conditions"),l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Increased compared to last week",value:"5.2%"},title:"INCREASING TREND DEMO",fetching:!1,error:null})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:-1,description:"Decreased compared to last week",value:"3.4%"},title:"DECREASING TREND DEMO",fetching:!1,error:null})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},se)),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},me)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Background Color of the Metric Card"),l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,description:"Increased compared to last week",value:"5.2%"},title:"INCREASING TREND DEMO",fetching:!1,error:null,cardBgColor:"blue"})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:-1,description:"Decreased compared to last week",value:"3.4%"},title:"DECREASING TREND DEMO",fetching:!1,error:null,cardBgColor:"grey"})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},Ee)),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},ue)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h2",null,"Changing the Color of the Trend Icon and Value Text using Reverse"),l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:1,reverse:!0,description:"Increased compared to last week",value:"5.2%"},title:"Trend Increasing, but color is red",fetching:!1,error:null})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(V,{value:"89.04%",trend:{slope:-1,reverse:!0,description:"Decreased compared to last week",value:"3.4%"},title:"Trend Decreasing, but color is green",fetching:!1,error:null})),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},Ee)),l.a.createElement(c.a,{item:!0,lg:6,sm:6,xl:3,xs:12},l.a.createElement(o.a,{language:"javascript",style:s.a},ue)))),l.a.createElement("br",null)," ",l.a.createElement("hr",null),l.a.createElement("br",null))};i.a.render(l.a.createElement(ge,null),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.510dd405.chunk.js.map