(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},23:function(e,t,a){e.exports=a(58)},29:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(29),a(6)),i=a(7),s=a(9),m=a(8),u=a(10),d=a(20),p=a.n(d),h=a(11),b=a(30);var v={search:function(e,t){return b("http://localhost/api/food?q=".concat(e)).then(function(e){return e.text()}).then(t)}},E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,this.props.text))}}]),t}(r.a.Component),f=function(e){function t(e){var a;Object(o.a)(this,t);var n=(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).props.match.params.id;return console.log(a.props.match),a.state={menuOptions:[{id:1,text:"prueba11"},{id:2,text:"prueba21"},{id:3,text:"prueba31"}],title:n,responsable:"",descripcion:"",prioridad:"low",persona:{nick:"1",msg:"2",created:{type:"3",default:"4"}}},a.handleInput=a.handleInput.bind(Object(h.a)(Object(h.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleInput",value:function(e){var t=e.target,a=t.value,n=t.name;console.log(a+n),console.log(this.state)}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"componentDidMount",value:function(){var e=this;v.search("consulta",function(t){var a=JSON.parse(t);e.setState({persona:a})})}},{key:"render",value:function(){var e=this.state.menuOptions,t=this.state.persona;return r.a.createElement("div",{className:"col-mt-12"},r.a.createElement("div",{className:"card mt-3"},r.a.createElement("div",{className:"container"},r.a.createElement(E,{text:"ReUtilizacion1"}),r.a.createElement(E,{text:"ReUtilizacion2"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-group mt-3"},r.a.createElement("div",{className:"card text-center border-info"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Titulo de la tarjeta 1"),r.a.createElement("p",{className:"card-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui. "),r.a.createElement("a",{href:"#",className:"btn btn-primary"},"Entrar"))),r.a.createElement("div",{className:"card text-center border-info"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Titulo de la tarjeta 1"),r.a.createElement("ul",null,Object.keys(e).map(function(t,a){return r.a.createElement("li",{key:a},"id=",e[t].id,", text:",e[t].text)})))),r.a.createElement("div",{className:"card text-center border-info"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"Titulo de la tarjeta 1"),Object.keys(t).map(function(e,a){return r.a.createElement("li",{key:a},"msg=",t[e].msg,", nick:",t[e].nick)}))))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("div",{className:"card mt-2"},Object.keys(t).map(function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("button",{className:"btn btn-warning"},t[e]._id,":",t[e].msg))}))),r.a.createElement("h1",null,"Params:",this.state.title),r.a.createElement("form",{className:"card-body",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"title",onChange:this.handleInput,className:"form-control",placeholder:"aqio"}),r.a.createElement("input",{type:"text",name:"responsable",onChange:this.handleInput,className:"form-control",placeholder:"escribe2 aqui"}),r.a.createElement("input",{type:"text",name:"description",onChange:this.handleInput,className:"form-control",placeholder:"escribe3 aqui"}),r.a.createElement("button",{type:"text",name:"entrada3",className:"form-control"},"envia")))))}}]),t}(n.Component);a(31)("The Rolling stones",{maxResults:10,key:"AIzaSyAHoZvRooqSclkRZAvtOwGMg4FhISRDrCc"},function(e,t){if(e)return console.log(e);console.dir(t)});var g=function(e){function t(e){var a;Object(o.a)(this,t);var n=(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).props.cosas.match.params;return console.log(e),console.log(n),a.state={prioridad1:e.valor1,prioridad2:n.id},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-2"},r.a.createElement("h1",null,"soy compo1 valor=",this.state.prioridad1),r.a.createElement("h1",null,"dato URL=",this.state.prioridad2))}}]),t}(n.Component),j=a(60),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"une jsx-html"),r.a.createElement(j.a,{exact:!0,path:"/pagina1/:id",component:f}),r.a.createElement(j.a,{exact:!0,path:"/pagina2/:id",component:function(e){return r.a.createElement(g,{valor1:"2",cosas:e})}}),r.a.createElement("h1",null,this.props.valor),r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(59);l.a.render(r.a.createElement(y.a,null,r.a.createElement(O,{valor:"hola"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.56e890d9.chunk.js.map