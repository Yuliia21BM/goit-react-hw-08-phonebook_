"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_=self.webpackChunkgoit_react_hw_08_phonebook_||[]).push([[335],{1335:function(e,n,r){r.r(n),r.d(n,{default:function(){return O}});var t=r(5560),i=r(4164),l=r(8348),o=r(4087),c=r(4224),s=r(176),a=r(141),u=r(1413),d=r(9439),x=r(2791),h=r(5984),p=r(5705),f=r(5946),j=r(2701),m=r(4585),v=r(7886),g=r(5341),b=r(184),k={name:"",number:""},y=(0,h.x0)(),C=(0,h.x0)(),w=function(e){var n=e.onClose,r=(0,x.useState)(""),i=(0,d.Z)(r,2),l=i[0],h=i[1],w=(0,x.useState)(""),S=(0,d.Z)(w,2),_=S[0],z=S[1],Z=(0,t.Tn)(),I=(0,d.Z)(Z,1)[0],J=(0,t.Jx)().data;return(0,b.jsx)(s.k,{width:"full",align:"center",justifyContent:"center",children:(0,b.jsxs)(o.xu,{p:2,children:[(0,b.jsx)(o.xu,{textAlign:"center",children:(0,b.jsx)(f.X,{children:"Add new contact"})}),(0,b.jsx)(o.xu,{my:4,textAlign:"left",children:(0,b.jsx)(p.J9,{initialValues:k,onSubmit:function(e,r){var t=r.resetForm;if(null===J||void 0===J?void 0:J.find((function(e){return e.name===l})))return(0,a.P_)(l),void t();I({name:l,number:_}),n(),t()},children:function(e){return(0,b.jsxs)(p.l0,{children:[(0,b.jsx)(p.gN,{name:"name",id:y,children:function(e){var n=e.field,r=e.form;return(0,b.jsxs)(j.NI,{isRequired:!0,isInvalid:r.errors.name&&r.touched.name,children:[(0,b.jsx)(m.l,{children:"Name"}),(0,b.jsx)(v.I,(0,u.Z)((0,u.Z)({},n),{},{value:l,type:"text",placeholder:"John Doe",_placeholder:{opacity:1,color:"teal.700"},pattern:a.sk,onChange:function(e){return h(e.target.value)}})),(0,b.jsx)(g.J1,{children:r.errors.name})]})}}),(0,b.jsx)(p.gN,{name:"number",patern:a.sk,id:C,children:function(e){var n=e.field,r=e.form;return(0,b.jsxs)(j.NI,{isRequired:!0,mt:4,isInvalid:r.errors.name&&r.touched.name,children:[(0,b.jsx)(m.l,{children:"Nunber"}),(0,b.jsx)(v.I,(0,u.Z)((0,u.Z)({},n),{},{value:_,type:"telephone",placeholder:"0960000000",_placeholder:{opacity:1,color:"teal.700"},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:function(e){return z(e.target.value)}})),(0,b.jsx)(g.J1,{children:r.errors.name})]})}}),(0,b.jsx)(c.z,{type:"submit",colorScheme:"yellow",variant:"outline",width:"full",mt:6,children:"Submit"})]})}})})]})})},S=r(5048),_=r(4302),z=r(9229),Z=(0,h.x0)(),I=function(){var e=(0,S.I0)(),n=(0,x.useState)(""),r=(0,d.Z)(n,2),t=r[0],i=r[1],l=(0,a.Nr)(t,500);(0,x.useEffect)((function(){e((0,_.Z)(l))}),[l,e]);return(0,b.jsxs)(o.xu,{display:"flex",flexDirection:"column",children:[(0,b.jsx)(z.x,{fontSize:"xl",mb:"10px",as:"cite",children:"Finde contact by name"}),(0,b.jsx)(v.I,{variant:"flushed",placeholder:"John Doe",_placeholder:{opacity:1,color:"teal.700"},width:"400px",value:t,type:"text",id:Z,onChange:function(e){i(e.currentTarget.value.toLowerCase())}})]})},J=function(e){return e.filter.value},N=r(7425),q=r(7732),D=function(){var e=(0,t.Jx)().data,n=(0,t.Nt)(),r=(0,d.Z)(n,1)[0],i=function(e,n){return""===n?e:e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(e,(0,S.v9)(J));return(0,b.jsx)(o.xu,{p:"10px",pt:"40px",children:(0,b.jsx)(s.k,{gap:"20px",flexDirection:"column",children:null===i||void 0===i?void 0:i.map((function(e){var n=e.id,t=e.name,i=e.number;return(0,b.jsxs)(s.k,{alignItems:"center",justifyContent:"space-between",children:[(0,b.jsx)(q.q,{name:t,colorScheme:"twitter",size:"md"}),(0,b.jsxs)(z.x,{fontSize:"xl",as:"cite",children:[" ",t,":"]}),(0,b.jsxs)(z.x,{fontSize:"xl",children:[" ",i]}),(0,b.jsxs)(s.k,{gap:"20px",children:[(0,b.jsx)(c.z,{colorScheme:"red",variant:"outline",onClick:function(){return r(n)},children:"Delete"}),(0,b.jsx)(c.z,{variant:"outline",colorScheme:"yellow",children:(0,b.jsx)(N.HuK,{})})]})]},n)}))})})},A=r(5802),F=r(1578),L=document.querySelector("#modal-root"),O=function(){var e=(0,t.Jx)(),n=e.error,r=e.isLoading,u=(0,l.q)(),d=u.isOpen,x=u.onOpen,h=u.onClose;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(a.W2,{children:[(0,b.jsxs)(o.xu,{p:"10px",position:"relative",children:[(0,b.jsx)(c.z,{variant:"outline",position:"absolute",top:"20px",right:"95px",colorScheme:"teal",onClick:x,size:"lg",children:(0,b.jsx)(F.xv7,{enableBackground:"teal",size:"1.3em"})}),(0,b.jsx)(s.k,{justifyContent:"center",children:(0,b.jsx)(I,{})}),r&&!n&&(0,b.jsx)("b",{children:"Request in progress..."}),(0,b.jsx)(D,{})]}),(0,i.createPortal)((0,b.jsx)(A.n,{isOpen:d,onClose:h,children:(0,b.jsx)(w,{onClose:h})}),L)]})})}}}]);
//# sourceMappingURL=335.0549b78e.chunk.js.map