(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={label:"filter_label__2jeYx",input:"filter_input__9CGQy"}},19:function(t,e,n){t.exports={sectionContainer:"section_sectionContainer__85Z8g",title:"section_title__119_O"}},20:function(t,e,n){t.exports={button:"contactList_button__1vfvV"}},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),i=n(9),o=n.n(i),u=n(4),s=n(10),l=n(11),b=n(14),d=n(12),m=n(5),j=n(7),h=n.n(j),f=n(6),p=n.n(f),O=n(3),x={addContact:Object(O.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:p.a.generate(),name:e,number:n}}})),deleteContact:Object(O.b)("contacts/delete"),changeFilter:Object(O.b)("contacts/changeFilter")},C=n(1),_=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=p.a.generate(),t.numberInputId=p.a.generate(),t.handleChange=function(e){t.setState(Object(m.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("form",{className:h.a.form,onSubmit:this.handleSubmit,children:[Object(C.jsx)("label",{htmlFor:this.nameInputId,children:"Name"}),Object(C.jsx)("input",{className:h.a.input,id:this.nameInputId,value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.             \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(C.jsx)("label",{htmlFor:this.numberInputId,children:"Number"}),Object(C.jsx)("input",{className:h.a.input,id:this.numberInputId,value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",required:!0}),Object(C.jsx)("button",{className:h.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),v=Object(u.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e,n){return t(x.addContact(e,n))}}}))(_),g=n(20),y=n.n(g),I=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},N=Object(u.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:I(n,a)}}),(function(t){return{onDeleteList:function(e){return t(x.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteList;return Object(C.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{children:a}),Object(C.jsx)("span",{children:c}),Object(C.jsx)("button",{className:y.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),F=n(18),S=n.n(F),w=Object(u.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(x.changeFilter(e.target.value))}}}))((function(t){var e=t.filter,n=t.onChange;return Object(C.jsxs)("label",{className:S.a.label,children:["Find contacts by name",Object(C.jsx)("input",{className:S.a.input,type:"text",value:e,onChange:n})]})})),A=n(19),k=n.n(A),L=function(t){var e=t.title,n=t.children;return Object(C.jsxs)("div",{className:k.a.sectionContainer,children:[Object(C.jsx)("h2",{className:k.a.title,children:e}),n]})},D=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)(L,{title:"Phonebook",children:Object(C.jsx)(v,{onSubmit:this.formSubmitHandler})}),Object(C.jsxs)(L,{title:"Contacts",children:[Object(C.jsx)(w,{}),Object(C.jsx)(N,{})]})]})}}]),n}(c.Component),Z=n(13),z=n(2),J=Object(O.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(m.a)(a,x.addContact,(function(t,e){var n=e.payload;return[].concat(Object(Z.a)(t),[n])})),Object(m.a)(a,x.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),H=Object(O.c)("",Object(m.a)({},x.changeFilter,(function(t,e){return e.payload}))),T=Object(z.b)({items:J,filter:H}),q=n(21),B=n.n(q),E=[].concat(Object(Z.a)(Object(O.d)()),[B.a]),M=Object(O.a)({reducer:{contacts:T},middleware:E,devTools:!1});n(40),n(41);o.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(u.a,{store:M,children:Object(C.jsx)(D,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"contactForm_form__3ZLQ5",input:"contactForm_input__1dDwI",span:"contactForm_span__1-LHn",button:"contactForm_button__3J0-A"}}},[[42,1,2]]]);
//# sourceMappingURL=main.2b881df3.chunk.js.map