(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(27)},18:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(4),s=a.n(i),r=(a(18),a(1)),c=a.n(r),u=a(5),m=a(2),h=a(6),l=a(7),g=a(10),d=a(8),b=a(11),f=(a(22),a(9)),p=[{text:"Remember two things. Number one, I said, we're going to be saying Christmas again. And, number two, I said I was going to give you a Christmas present."},{text:"Let the children come to me (Unless they don't have adequate health insurance coverage). Don't stop them! For the Kingdom of Heaven belongs to those who are like these (non-pre-existing condition) children."},{text:"Remember two things. Number one, I said, we're going to be saying Christmas again. And, number two, I said I was going to give you a Christmas present."},{text:"You go to the hospital. You have a broken arm. You come out, you are a drug addict with this crap."},{text:"We're going to win at space."},{text:"That just shows when you get good ratings, you can say anything."},{text:"To be honest \u2013 I'll be honest, I thought it was a \u2013 I thought it was a very close to complete victory.",attribution:"Jesus to the Devil, probably"},{text:"He may have had a bad past. Who knows, you know? He may have had some, I think, accusations made. Didn't he have a couple things in his past?",attribution:"Jesus about Judas, probably"},{text:"I am the Way, the Truth, and the Life. No one comes to the Father except through your Primary Care Physician's referral."}],v=function(e){return new Promise(function(t){return setTimeout(t,e)})},w=["religion","jesus","church","christianity","islam","judaism","bah\xe1'\xed faith","rastafarianism","samaritanism","mormonism","hinduism","buddhism","jainism","sikhism","unitarian universalism","raelism","wicca","zoroastrianism","eckankar","druidry","yoruba religion","taoism","deism","atheism ","agnosticism ","ignosticism"].join(","),y=function(){return fetch("https://source.unsplash.com/featured/?".concat(w)).then(function(e){return e.url})},I=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(g.a)(this,Object(d.a)(t).call(this,e))).shuffle=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},a.getLocalImages=function(){return JSON.parse(localStorage.getItem("bg-images"))||[]},a.setLocalImage=function(e){localStorage.setItem("bg-images",JSON.stringify([].concat(Object(m.a)(a.getLocalImages()),[e])))},a.fetchImage=function(){y().then(function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.images.includes(t)||(a.setState({images:[].concat(Object(m.a)(a.state.images),[t])}),a.setLocalImage(t)),a.state.images.length===p.length){e.next=5;break}return e.next=4,v(500);case 4:a.fetchImage();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},a.state={images:a.shuffle(a.getLocalImages()),quotes:a.shuffle(p)},a}return Object(b.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.state.images.length!==p.length&&this.fetchImage()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{className:"header"},"Things Jesus Probably Said"),o.a.createElement("div",{className:"main"},o.a.createElement("div",null,this.state.quotes.map(function(t,a){return o.a.createElement("div",{key:a},o.a.createElement(f.Parallax,{className:"parallax",bgImage:e.state.images[a]||"",strength:500},o.a.createElement("div",{className:"quote-container"},o.a.createElement("p",{className:"callout"},'"',t.text,'"',o.a.createElement("br",null),o.a.createElement("span",{className:"attribution"},"\u2013 ",t.attribution||"Jesus, probably")))),o.a.createElement("p",null))}))),o.a.createElement("div",{className:"footer"},"\xa0")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.d8411f2f.chunk.js.map