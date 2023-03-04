"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_=self.webpackChunkgoit_react_hw_08_phonebook_||[]).push([[437],{7692:function(r,a,e){e.d(a,{a54:function(){return t}});var n=e(9983);function t(r){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"}},{tag:"path",attr:{d:"M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"}}]})(r)}},7425:function(r,a,e){e.d(a,{HuK:function(){return t}});var n=e(9983);function t(r){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"}}]}]})(r)}},1578:function(r,a,e){e.d(a,{xv7:function(){return t}});var n=e(9983);function t(r){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}},{tag:"path",attr:{d:"M16 11h6m-3 -3v6"}}]})(r)}},7732:function(r,a,e){e.d(a,{q:function(){return L}});var n=e(1413),t=e(5987),o=e(9439),i=(0,e(9886).k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"}),l=(0,o.Z)(i,2),c=l[0],s=l[1],d=e(1999),u=e(184),f=["name","getInitials"];function g(r){var a=r.split(" "),e=(0,o.Z)(a,2),n=e[0],t=e[1];return n&&t?"".concat(n.charAt(0)).concat(t.charAt(0)):n.charAt(0)}function v(r){var a=r.name,e=r.getInitials,o=(0,t.Z)(r,f),i=s();return(0,u.jsx)(d.m.div,(0,n.Z)((0,n.Z)({role:"img","aria-label":a},o),{},{__css:i.label,children:a?null==e?void 0:e(a):null}))}v.displayName="AvatarName";var h=function(r){return(0,u.jsxs)(d.m.svg,(0,n.Z)((0,n.Z)({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},r),{},{children:[(0,u.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,u.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}))},m=e(5064),b=e(2791);function p(r){var a=r.src,e=r.srcSet,n=r.onError,t=r.onLoad,o=r.getInitials,i=r.name,l=r.borderRadius,c=r.loading,s=r.iconLabel,f=r.icon,g=void 0===f?(0,u.jsx)(h,{}):f,p=r.ignoreFallback,k=r.referrerPolicy,x=(0,m.d)({src:a,onError:n,ignoreFallback:p});return!a||!("loaded"===x)?i?(0,u.jsx)(v,{className:"chakra-avatar__initials",getInitials:o,name:i}):(0,b.cloneElement)(g,{role:"img","aria-label":s}):(0,u.jsx)(d.m.img,{src:a,srcSet:e,alt:i,onLoad:t,referrerPolicy:k,className:"chakra-avatar__img",loading:c,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:l}})}p.displayName="AvatarImage";var k=e(7872),x=e(9219),_=e(2996),Z=e(6992),y=["src","srcSet","name","showBorder","borderRadius","onError","onLoad","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],j={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},L=(0,k.G)((function(r,a){var e=(0,x.jC)("Avatar",r),i=(0,b.useState)(!1),l=(0,o.Z)(i,2),s=l[0],f=l[1],v=(0,_.Lr)(r),m=v.src,k=v.srcSet,L=v.name,C=v.showBorder,N=v.borderRadius,S=void 0===N?"full":N,E=v.onError,w=v.onLoad,A=v.getInitials,M=void 0===A?g:A,F=v.icon,I=void 0===F?(0,u.jsx)(h,{}):F,z=v.iconLabel,O=void 0===z?" avatar":z,P=v.loading,R=v.children,B=v.borderColor,H=v.ignoreFallback,G=(0,t.Z)(v,y),W=(0,n.Z)((0,n.Z)({borderRadius:S,borderWidth:C?"2px":void 0},j),e.container);return B&&(W.borderColor=B),(0,u.jsx)(d.m.span,(0,n.Z)((0,n.Z)({ref:a},G),{},{className:(0,Z.cx)("chakra-avatar",r.className),"data-loaded":(0,Z.PB)(s),__css:W,children:(0,u.jsxs)(c,{value:e,children:[(0,u.jsx)(p,{src:m,srcSet:k,loading:P,onLoad:(0,Z.v0)(w,(function(){f(!0)})),onError:E,getInitials:M,name:L,borderRadius:S,icon:I,iconLabel:O,ignoreFallback:H}),R]})}))}));L.displayName="Avatar"},5341:function(r,a,e){e.d(a,{J1:function(){return p}});var n=e(1413),t=e(9439),o=e(2701),i=e(4363),l=e(9886),c=e(7872),s=e(9219),d=e(2996),u=e(1999),f=e(6992),g=e(184),v=(0,l.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),h=(0,t.Z)(v,2),m=h[0],b=h[1],p=(0,c.G)((function(r,a){var e=(0,s.jC)("FormError",r),t=(0,d.Lr)(r),i=(0,o.NJ)();return(null==i?void 0:i.isInvalid)?(0,g.jsx)(m,{value:e,children:(0,g.jsx)(u.m.div,(0,n.Z)((0,n.Z)({},null==i?void 0:i.getErrorMessageProps(t,a)),{},{className:(0,f.cx)("chakra-form__error-message",r.className),__css:(0,n.Z)({display:"flex",alignItems:"center"},e.text)}))}):null}));p.displayName="FormErrorMessage",(0,c.G)((function(r,a){var e=b(),t=(0,o.NJ)();if(!(null==t?void 0:t.isInvalid))return null;var l=(0,f.cx)("chakra-form__error-icon",r.className);return(0,g.jsx)(i.J,(0,n.Z)((0,n.Z)({ref:a,"aria-hidden":!0},r),{},{__css:e.icon,className:l,children:(0,g.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))})).displayName="FormErrorIcon"},8082:function(r,a,e){e.d(a,{E:function(){return g}});var n=e(1413),t=e(5987),o=e(7762),i=e(7872),l=e(184),c=["htmlWidth","htmlHeight","alt"],s=(0,i.G)((function(r,a){var e=r.htmlWidth,o=r.htmlHeight,i=r.alt,s=(0,t.Z)(r,c);return(0,l.jsx)("img",(0,n.Z)({width:e,height:o,ref:a,alt:i},s))}));s.displayName="NativeImage";var d=e(5064),u=e(1999),f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var g=(0,i.G)((function(r,a){var e=r.fallbackSrc,i=r.fallback,c=r.src,g=r.srcSet,v=r.align,h=r.fit,m=r.loading,b=r.ignoreFallback,p=r.crossOrigin,k=r.fallbackStrategy,x=void 0===k?"beforeLoadOrError":k,_=r.referrerPolicy,Z=(0,t.Z)(r,f),y=null!=m||b||!(void 0!==e||void 0!==i),j=(0,d.d)((0,n.Z)((0,n.Z)({},r),{},{ignoreFallback:y})),L=(0,d.z)(j,x),C=(0,n.Z)({ref:a,objectFit:h,objectPosition:v},y?Z:function(r){var a,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},r),t=(0,o.Z)(e);try{for(t.s();!(a=t.n()).done;){var i=a.value;i in n&&delete n[i]}}catch(l){t.e(l)}finally{t.f()}return n}(Z,["onError","onLoad"]));return L?i||(0,l.jsx)(u.m.img,(0,n.Z)({as:s,className:"chakra-image__placeholder",src:e},C)):(0,l.jsx)(u.m.img,(0,n.Z)({as:s,src:c,srcSet:g,crossOrigin:p,loading:m,referrerPolicy:_,className:"chakra-image"},C))}));g.displayName="Image"},5064:function(r,a,e){e.d(a,{d:function(){return i},z:function(){return l}});var n=e(9439),t=e(9205),o=e(2791);function i(r){var a=r.loading,e=r.src,i=r.srcSet,l=r.onLoad,c=r.onError,s=r.crossOrigin,d=r.sizes,u=r.ignoreFallback,f=(0,o.useState)("pending"),g=(0,n.Z)(f,2),v=g[0],h=g[1];(0,o.useEffect)((function(){h(e?"loading":"pending")}),[e]);var m=(0,o.useRef)(),b=(0,o.useCallback)((function(){if(e){p();var r=new Image;r.src=e,s&&(r.crossOrigin=s),i&&(r.srcset=i),d&&(r.sizes=d),a&&(r.loading=a),r.onload=function(r){p(),h("loaded"),null==l||l(r)},r.onerror=function(r){p(),h("failed"),null==c||c(r)},m.current=r}}),[e,s,i,d,l,c,a]),p=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,t.G)((function(){if(!u)return"loading"===v&&b(),function(){p()}}),[v,b,u]),u?"loaded":v}var l=function(r,a){return"loaded"!==r&&"beforeLoadOrError"===a||"failed"===r&&"onError"===a}},5984:function(r,a,e){e.d(a,{x0:function(){return n}});var n=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(r)).reduce((function(r,a){return r+=(a&=63)<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=437.6b0b8f67.chunk.js.map