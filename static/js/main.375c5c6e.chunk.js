(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/logo.1f9a96a1.svg"},29:function(e,a,t){e.exports=t.p+"static/media/landing.c86272eb.svg"},30:function(e,a,t){e.exports=t.p+"static/media/study.3c22fb01.svg"},31:function(e,a,t){e.exports=t.p+"static/media/give-classes.9ed76be5.svg"},32:function(e,a,t){e.exports=t.p+"static/media/purple-heart.e042bb23.svg"},35:function(e,a,t){e.exports=t.p+"static/media/back.1fbb1f8b.svg"},36:function(e,a,t){e.exports=t.p+"static/media/whatsapp.c2ffa8a6.svg"},37:function(e,a,t){e.exports=t.p+"static/media/warning.744fb7ba.svg"},39:function(e,a,t){e.exports=t(75)},61:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(28),c=t.n(r),i=t(7),o=t(1),s=t(14),m=t(13),u=t.n(m),d=t(29),b=t.n(d),p=t(30),E=t.n(p),v=t(31),f=t.n(v),g=t(32),h=t.n(g),y=t(33),N=t.n(y).a.create({baseURL:"http://localhost:3333"});t(61);var x=function(){var e=Object(l.useState)(0),a=Object(s.a)(e,2),t=a[0],r=a[1];return Object(l.useEffect)((function(){N.get("connections").then((function(e){var a=e.data.total.total;r(a)}))}),[]),n.a.createElement("div",{id:"page-landing"},n.a.createElement("div",{id:"page-landing-content",className:"container"},n.a.createElement("div",{className:"logo-container"},n.a.createElement("img",{src:u.a,alt:"Proffy"}),n.a.createElement("h2",null,"Sua platadorma de estudos online.")),n.a.createElement("img",{src:b.a,alt:"Plataforma de estudos",className:"hero-image"}),n.a.createElement("div",{className:"buttons-container"},n.a.createElement(i.b,{to:"/study",className:"study"},n.a.createElement("img",{src:E.a,alt:"Estudar"}),"Estudar"),n.a.createElement(i.b,{to:"/give-classes",className:"give-classes"},n.a.createElement("img",{src:f.a,alt:"Dar aulas"}),"Dar aulas")),n.a.createElement("span",{className:"total-conections"},"Total de ",t," conex\xf5es j\xe1 realizadas ",n.a.createElement("img",{src:h.a,alt:"Cora\xe7\xe3o roxo"}))))},A=t(35),S=t.n(A),j=(t(67),function(e){return n.a.createElement("header",{className:"page-header"},n.a.createElement("div",{className:"top-bar-container"},n.a.createElement(i.b,{to:"/"},n.a.createElement("img",{src:S.a,alt:"Voltar"})),n.a.createElement("img",{src:u.a,alt:"Proffy"})),n.a.createElement("div",{className:"header-content"},n.a.createElement("strong",null,e.title),e.description&&n.a.createElement("p",null,e.description),e.children))}),k=t(36),O=t.n(k);t(68);var M=function(){return n.a.createElement("article",{className:"teacher-item"},n.a.createElement("header",null,n.a.createElement("img",{src:"https://media-exp1.licdn.com/dms/image/C4E03AQFAHI4iAGXZdA/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=MUSCYSslRYs3Rb6H6HgLjdD4beIOKN3kdMgGoMl0U0A",alt:"Ana Luiza Meloni"}),n.a.createElement("div",null,n.a.createElement("strong",null,"Ana Luiza Meloni Dias"),n.a.createElement("span",null,"An\xe1lise de Neg\xf3cios"))),n.a.createElement("p",null,"Entusiasta das melhores ferramentas para an\xe1lise de BI.",n.a.createElement("br",null),n.a.createElement("br",null),"Apaixonado por transformar dados em informa\xe7\xe3o e por mudar a vida das emresas atrav\xe9s da implanta\xe7\xe3o de modelos de gest\xe3o integrada. Mais de 10 anos de experi\xeancia em pequenas, m\xe9dias e grandes empresas. Vamos mudar a forma como os seus gestores olham para o mercado e, consequentemente, seus clientes v\xe3o mudar a forma como olham para sua empresa."),n.a.createElement("footer",null,n.a.createElement("p",null,"Pre\xe7o/hora",n.a.createElement("strong",null,"R$ 120,00")),n.a.createElement("button",{type:"button"},n.a.createElement("img",{src:O.a,alt:"WhatsApp"}),"Entrar em contato")))},w=t(9),F=(t(69),function(e){var a=e.label,t=e.name,l=Object(w.a)(e,["label","name"]);return n.a.createElement("div",{className:"input-block"},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("input",Object.assign({type:"text",id:t},l)))}),Q=(t(70),function(e){var a=e.label,t=e.name,l=e.options,r=Object(w.a)(e,["label","name","options"]);return n.a.createElement("div",{className:"select-block"},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("select",Object.assign({defaultValue:"",id:t},r),n.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Selecione uma op\xe7\xe3o"),l.map((function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))))});t(71);var C=function(){return n.a.createElement("div",{id:"page-teacher-list",className:"container"},n.a.createElement(j,{title:"Estes s\xe3o os proffys dispon\xedveis."},n.a.createElement("form",{id:"search-teachers"},n.a.createElement(Q,{name:"subject",label:"Mat\xe9ria",options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ci\xeancias",label:"Ci\xeancias"},{value:"Educa\xe7\xe3o F\xedsica",label:"Educa\xe7\xe3o F\xedsica"},{value:"F\xedsica",label:"F\xedsica"},{value:"Geografia",label:"Geografia"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"Portugu\xeas",label:"Portugu\xeas"},{value:"Qu\xedmica",label:"Qu\xedmica"}]}),n.a.createElement(Q,{name:"week_day",label:"Dia da Semana",options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),n.a.createElement(F,{type:"time",name:"time",label:"Hor\xe1rio"}))),n.a.createElement("main",null,n.a.createElement(M,null)))},D=t(38),H=(t(72),function(e){var a=e.label,t=e.name,l=Object(w.a)(e,["label","name"]);return n.a.createElement("div",{className:"textarea-block"},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("textarea",Object.assign({id:t},l)))}),P=t(37),B=t.n(P);t(73);var _=function(){var e=Object(l.useState)([{week_day:0,from:"",to:""}]),a=Object(s.a)(e,2),t=a[0],r=a[1];return n.a.createElement("div",{id:"page-teacher-form",className:"container"},n.a.createElement(j,{title:"Quer inc\u0155ivel voc\xea querer dar aulas!",description:"O primeiro passo \xe9 preencher esse formul\xe1rio de inscri\xe7\xe3o."}),n.a.createElement("main",null,n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Seus dados"),n.a.createElement(F,{name:"name",label:"Nome completo"}),n.a.createElement(F,{name:"avatar",label:"Avatar"}),n.a.createElement(F,{name:"whatsapp",label:"WhatsApp"}),n.a.createElement(H,{name:"bio",label:"Biografia"})),n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Sobre a aula"),n.a.createElement(Q,{name:"subject",label:"Mat\xe9ria",options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ci\xeancias",label:"Ci\xeancias"},{value:"Educa\xe7\xe3o F\xedsica",label:"Educa\xe7\xe3o F\xedsica"},{value:"F\xedsica",label:"F\xedsica"},{value:"Geografia",label:"Geografia"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"Portugu\xeas",label:"Portugu\xeas"},{value:"Qu\xedmica",label:"Qu\xedmica"}]}),n.a.createElement(F,{name:"cost",label:"Custo da hora aula"})),n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Hor\xe1rios dispon\xedveis",n.a.createElement("button",{type:"button",onClick:function(){r([].concat(Object(D.a)(t),[{week_day:0,from:"",to:""}]))}},"+ Novo hor\xe1rio")),t.map((function(e){return n.a.createElement("div",{key:e.week_day,className:"schedule-item"},n.a.createElement(Q,{name:"week_day",label:"Dia da Semana",options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),n.a.createElement(F,{name:"from",label:"Das",type:"time"}),n.a.createElement(F,{name:"to",label:"At\xe9",type:"time"}))}))),n.a.createElement("footer",null,n.a.createElement("p",null,n.a.createElement("img",{src:B.a,alt:"Aviso importante"}),"Importante! ",n.a.createElement("br",null),"Preencha todos os dados"),n.a.createElement("button",{type:"button"},"Salvar cadastro"))))};var G=function(){return n.a.createElement(i.a,null,n.a.createElement(o.a,{path:"/",exact:!0,component:x}),n.a.createElement(o.a,{path:"/study",component:C}),n.a.createElement(o.a,{path:"/give-classes",component:_}))};t(74);var I=function(){return n.a.createElement(G,null)};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.375c5c6e.chunk.js.map