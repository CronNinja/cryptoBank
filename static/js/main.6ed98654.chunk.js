(this.webpackJsonpcryptobank=this.webpackJsonpcryptobank||[]).push([[0],{42:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(10),o=n.n(i),r=(n(42),n(9)),s=n(36),l=n(1),j=function(t){var e=t.onChange,n=t.isDeposit,c=t.validTransaction,a=t.currency;return Object(l.jsxs)("span",{id:"transactions."+a,children:[Object(l.jsxs)("label",{children:[["Deposit","Withdraw"][Number(!n)],":",Object(l.jsx)("input",{id:"number-input",type:"number",step:"any",onChange:e,style:{width:"5rem"},min:"0"})]}),Object(l.jsx)("input",{type:"submit",value:"Submit",id:"submit-input",disabled:!c})]},"transactions."+a)},b=n(12),u=n(18),d=n.n(u),h=n(28),m=n(29),O=n(30),p=n(37),x=n(35),f=n(31),y=n.n(f),v=function(t){Object(p.a)(n,t);var e=Object(x.a)(n);function n(){var t;return Object(m.a)(this,n),(t=e.call(this)).state={data:[]},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(d.a.mark((function t(){var e=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y.a.get("https://coincodex.com/api/coincodex/get_coin/".concat(this.props.symbol)).then((function(t){e.setState({data:t.data})}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:parseFloat(this.state.data.last_price_usd).toFixed(4)*this.props.total})}}]),n}(c.Component),g=n(11),C=n(19),S=function(t){var e=t.symbol,n=t.letExchange,a=t.total,i=Object(c.useState)(a>0),o=Object(r.a)(i,2),s=o[0],j=o[1],b=Object(c.useState)(""),u=Object(r.a)(b,2),d=(u[0],u[1]),h=Object(c.useState)(n),m=Object(r.a)(h,2),O=(m[0],m[1],function(){return j(!1)});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(C.a,{variant:"primary",onClick:function(){return j(!0)},disabled:a<=0,children:a>0?"Exchange":"Fund Account"}),Object(l.jsxs)(g.a,{show:s,onHide:O,animation:!1,children:[Object(l.jsx)(g.a.Header,{closeButton:!0,children:Object(l.jsxs)(g.a.Title,{children:["Exchange: ",e]})}),Object(l.jsx)(g.a.Body,{children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault()},form:"form.exchange."+e,children:[Object(l.jsx)("label",{children:"Action:"}),Object(l.jsxs)("select",{onChange:function(t){return function(t){var e=t.target.value;e&&d(e)}(t)},name:"exchangeWith",id:"exchange-select",children:[Object(l.jsx)("option",{id:"no-selection",value:""}),["USD","BTC","ETH","XRP"].map((function(t){return t!==e?Object(l.jsx)("option",{id:"exchange-option-"+t,value:t,children:t.toUpperCase()},"exchange-option-"+t):null}))]})]})}),Object(l.jsx)(g.a.Footer,{children:Object(l.jsx)(C.a,{variant:"primary",onClick:O,children:"Close"})})]})]})},w=function(){return new Date(Date.now())},D=function(t){var e=t.symbol,n=t.totals,a=t.setTotals,i=Object(c.useState)(0),o=Object(r.a)(i,2),u=o[0],d=o[1],h=Object(c.useState)(0),m=Object(r.a)(h,2),O=m[0],p=m[1],x=Object(c.useState)(!0),f=Object(r.a)(x,2),y=f[0],g=f[1],C=Object(c.useState)(""),D=Object(r.a)(C,2),T=D[0],k=D[1],B=Object(c.useState)(!1),F=Object(r.a)(B,2),A=F[0],E=F[1],W="".concat(e," Balance: ").concat(O," ");return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(b.a,{children:Object(l.jsxs)(b.a.Body,{children:[Object(l.jsxs)("form",{onSubmit:function(t){var c=y?O+u:O-u;p(c),a([].concat(Object(s.a)(n),[{symbol:e,total:c,timestamp:w(),action:T+" "+e+": "+u}])),E(!1),t.preventDefault()},children:[Object(l.jsx)(b.a.Title,{id:"total",children:W}),Object(l.jsx)(b.a.Subtitle,{children:Object(l.jsxs)("label",{children:["USD Value: $",Object(l.jsx)(v,{symbol:e,total:O})]})}),Object(l.jsxs)(b.a.Text,{children:[Object(l.jsx)("label",{children:"Action:"}),Object(l.jsxs)("select",{onChange:function(t){return function(t){var e=t.target.value;k(e),"Deposit"===e?g(!0):"Withdraw"===e&&g(!1)}(t)},name:"mode",id:"mode-select",children:[Object(l.jsx)("option",{id:"no-selection",value:""}),Object(l.jsx)("option",{id:"deposit-selection",value:"Deposit",children:"Deposit"}),Object(l.jsx)("option",{id:"withdraw-selection",value:"Withdraw",children:"Withdraw"}),Object(l.jsx)("option",{id:"exchange-selection",value:"Exchange",children:"Exchange"})]}),("Deposit"===T||"Withdraw"===T)&&Object(l.jsx)(j,{onChange:function(t){var e=t.target.value;return d(Number(e)),e<=0||"Withdraw"===T&&e>O?void E(!1):void E(!0)},isDeposit:y,validTransaction:A,currency:e})]})]}),"Exchange"===T&&Object(l.jsx)(S,{symbol:e,total:O})]})})})},T=(n(66),n(33)),k=n(16),B=n(34),F=n(32),A=function(t){var e=t.totals;return Object(l.jsxs)(F.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Currency"}),Object(l.jsx)("th",{children:"Action"}),Object(l.jsx)("th",{children:"Timestamp"})]})}),Object(l.jsx)("tbody",{children:e.map((function(t){return function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.symbol}),Object(l.jsx)("td",{children:t.action}),Object(l.jsx)("td",{children:t.timestamp.toString()})]},"row-"+t.symbol+"-"+t.timestamp.getTime())}(t)}))})]})},E=w(),W=[{symbol:"USD",total:0,timestamp:E,action:"Account Created"},{symbol:"BTC",total:0,timestamp:E,action:"Account Created"},{symbol:"ETH",total:0,timestamp:E,action:"Account Created"},{symbol:"XRP",total:0,timestamp:E,action:"Account Created"},{symbol:"BNB",total:0,timestamp:E,action:"Account Created"}],H=function(){var t=Object(c.useState)(W),e=Object(r.a)(t,2),n=e[0],a=e[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(T.a,{fluid:!0,children:Object(l.jsxs)(k.a,{children:[Object(l.jsx)("h1",{children:"Crypto Bank"}),Object(l.jsx)("p",{children:"Welcome back, please enjoy that the features we have to offer to managing your profolio!"})]})}),Object(l.jsx)(k.a,{children:Object(l.jsx)(B.a,{children:(n.sort((function(t,e){return e.timestamp-t.timestamp})),n.filter((function(t,e,n){return n.findIndex((function(e){return e.symbol===t.symbol&&+e.timestamp>=+t.timestamp}))===e})).sort((function(t,e){return t.symbol.localeCompare(e.symbol)})).map((function(t){return Object(l.jsx)(D,{symbol:t.symbol,totals:n,setTotals:a,id:"Currency-"+t.symbol},"Currency-"+t.symbol)})))})}),Object(l.jsx)(k.a,{style:{paddingTop:"25px"},children:Object(l.jsx)(A,{totals:n})})]})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(H,{})}),document.getElementById("root")),P()}},[[67,1,2]]]);
//# sourceMappingURL=main.6ed98654.chunk.js.map