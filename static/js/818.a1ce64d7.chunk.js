"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_=self.webpackChunkgoit_react_hw_08_phonebook_||[]).push([[818],{7425:function(r,a,n){n.d(a,{HuK:function(){return o}});var e=n(9983);function o(r){return(0,e.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"}}]}]})(r)}},1578:function(r,a,n){n.d(a,{xv7:function(){return o}});var e=n(9983);function o(r){return(0,e.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}},{tag:"path",attr:{d:"M16 11h6m-3 -3v6"}}]})(r)}},7732:function(r,a,n){n.d(a,{q:function(){return j}});var e=n(1413),o=n(5987),t=n(9439),i=(0,n(9886).k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"}),l=(0,t.Z)(i,2),c=l[0],s=l[1],d=n(1999),u=n(184),v=["name","getInitials"];function f(r){var a=r.split(" "),n=(0,t.Z)(a,2),e=n[0],o=n[1];return e&&o?"".concat(e.charAt(0)).concat(o.charAt(0)):e.charAt(0)}function g(r){var a=r.name,n=r.getInitials,t=(0,o.Z)(r,v),i=s();return(0,u.jsx)(d.m.div,(0,e.Z)((0,e.Z)({role:"img","aria-label":a},t),{},{__css:i.label,children:a?null==n?void 0:n(a):null}))}g.displayName="AvatarName";var h=function(r){return(0,u.jsxs)(d.m.svg,(0,e.Z)((0,e.Z)({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},r),{},{children:[(0,u.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,u.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}))},m=n(5064),p=n(2791);function x(r){var a=r.src,n=r.srcSet,e=r.onError,o=r.onLoad,t=r.getInitials,i=r.name,l=r.borderRadius,c=r.loading,s=r.iconLabel,v=r.icon,f=void 0===v?(0,u.jsx)(h,{}):v,x=r.ignoreFallback,_=r.referrerPolicy,b=(0,m.d)({src:a,onError:e,ignoreFallback:x});return!a||!("loaded"===b)?i?(0,u.jsx)(g,{className:"chakra-avatar__initials",getInitials:t,name:i}):(0,p.cloneElement)(f,{role:"img","aria-label":s}):(0,u.jsx)(d.m.img,{src:a,srcSet:n,alt:i,onLoad:o,referrerPolicy:_,className:"chakra-avatar__img",loading:c,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:l}})}x.displayName="AvatarImage";var _=n(7872),b=n(9219),k=n(2996),C=n(6992),Z=["src","srcSet","name","showBorder","borderRadius","onError","onLoad","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],L={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},j=(0,_.G)((function(r,a){var n=(0,b.jC)("Avatar",r),i=(0,p.useState)(!1),l=(0,t.Z)(i,2),s=l[0],v=l[1],g=(0,k.Lr)(r),m=g.src,_=g.srcSet,j=g.name,N=g.showBorder,y=g.borderRadius,E=void 0===y?"full":y,w=g.onError,A=g.onLoad,S=g.getInitials,I=void 0===S?f:S,M=g.icon,F=void 0===M?(0,u.jsx)(h,{}):M,z=g.iconLabel,R=void 0===z?" avatar":z,B=g.loading,H=g.children,G=g.borderColor,J=g.ignoreFallback,P=(0,o.Z)(g,Z),O=(0,e.Z)((0,e.Z)({borderRadius:E,borderWidth:N?"2px":void 0},L),n.container);return G&&(O.borderColor=G),(0,u.jsx)(d.m.span,(0,e.Z)((0,e.Z)({ref:a},P),{},{className:(0,C.cx)("chakra-avatar",r.className),"data-loaded":(0,C.PB)(s),__css:O,children:(0,u.jsxs)(c,{value:n,children:[(0,u.jsx)(x,{src:m,srcSet:_,loading:B,onLoad:(0,C.v0)(A,(function(){v(!0)})),onError:w,getInitials:I,name:j,borderRadius:E,icon:F,iconLabel:R,ignoreFallback:J}),H]})}))}));j.displayName="Avatar"},5341:function(r,a,n){n.d(a,{J1:function(){return x}});var e=n(1413),o=n(9439),t=n(2701),i=n(4363),l=n(9886),c=n(7872),s=n(9219),d=n(2996),u=n(1999),v=n(6992),f=n(184),g=(0,l.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),h=(0,o.Z)(g,2),m=h[0],p=h[1],x=(0,c.G)((function(r,a){var n=(0,s.jC)("FormError",r),o=(0,d.Lr)(r),i=(0,t.NJ)();return(null==i?void 0:i.isInvalid)?(0,f.jsx)(m,{value:n,children:(0,f.jsx)(u.m.div,(0,e.Z)((0,e.Z)({},null==i?void 0:i.getErrorMessageProps(o,a)),{},{className:(0,v.cx)("chakra-form__error-message",r.className),__css:(0,e.Z)({display:"flex",alignItems:"center"},n.text)}))}):null}));x.displayName="FormErrorMessage",(0,c.G)((function(r,a){var n=p(),o=(0,t.NJ)();if(!(null==o?void 0:o.isInvalid))return null;var l=(0,v.cx)("chakra-form__error-icon",r.className);return(0,f.jsx)(i.J,(0,e.Z)((0,e.Z)({ref:a,"aria-hidden":!0},r),{},{__css:n.icon,className:l,children:(0,f.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))})).displayName="FormErrorIcon"},5064:function(r,a,n){n.d(a,{d:function(){return i},z:function(){return l}});var e=n(9439),o=n(9205),t=n(2791);function i(r){var a=r.loading,n=r.src,i=r.srcSet,l=r.onLoad,c=r.onError,s=r.crossOrigin,d=r.sizes,u=r.ignoreFallback,v=(0,t.useState)("pending"),f=(0,e.Z)(v,2),g=f[0],h=f[1];(0,t.useEffect)((function(){h(n?"loading":"pending")}),[n]);var m=(0,t.useRef)(),p=(0,t.useCallback)((function(){if(n){x();var r=new Image;r.src=n,s&&(r.crossOrigin=s),i&&(r.srcset=i),d&&(r.sizes=d),a&&(r.loading=a),r.onload=function(r){x(),h("loaded"),null==l||l(r)},r.onerror=function(r){x(),h("failed"),null==c||c(r)},m.current=r}}),[n,s,i,d,l,c,a]),x=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.G)((function(){if(!u)return"loading"===g&&p(),function(){x()}}),[g,p,u]),u?"loaded":g}var l=function(r,a){return"loaded"!==r&&"beforeLoadOrError"===a||"failed"===r&&"onError"===a}},5984:function(r,a,n){n.d(a,{x0:function(){return e}});var e=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(r)).reduce((function(r,a){return r+=(a&=63)<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=818.a1ce64d7.chunk.js.map