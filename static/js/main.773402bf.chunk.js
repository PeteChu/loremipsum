(window.webpackJsonploremipsum=window.webpackJsonploremipsum||[]).push([[0],{13:function(e,t,a){e.exports=a(33)},18:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(18),a(2)),u=a(3),l=a(6),m=a(4),s=a(1),p=a(5),d=a(12),h=a(11),b=(a(31),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).copyToClipboard=a.copyToClipboard.bind(Object(s.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"loremIpsum",value:function(e){var t=new h.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}},"plain","\n");return Object(d.a)(Array(e).keys()).map((function(e){return"\t"+t.generateParagraphs(1)+"\n\n"}))}},{key:"copyToClipboard",value:function(){var e=document.getElementById("lorem").textContent,t=document.createElement("textarea");t.setAttribute("type","hidden"),t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy")}},{key:"render",value:function(){return r.a.createElement("div",{className:"lorem scroll",id:"lorem",ref:this.textArea},r.a.createElement("input",{type:"button",value:"copy",onClick:this.copyToClipboard,id:"copyToClipboard"}),this.loremIpsum(this.props.numberOfParagraph))}}]),t}(n.Component)),f=(a(32),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={numberOfParagraph:0},a.inputHandle=a.inputHandle.bind(Object(s.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"inputHandle",value:function(e){var t=new RegExp("[0-9]"),a=e.target.value.match(t);this.setState({numberOfParagraph:e.target.value>-1&&a?parseInt(e.target.value):0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"Lorem Ipsum"),r.a.createElement("input",{className:"loremInput",type:"number",onChange:this.inputHandle,value:this.state.numberOfParagraph}),r.a.createElement(b,{numberOfParagraph:this.state.numberOfParagraph}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.773402bf.chunk.js.map