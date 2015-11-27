var Teleporter=function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}([function(e,t,n){e.exports=n(3)},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};Object.defineProperty(t,"__esModule",{value:!0});t.constructorArgument=function(e){var t=void 0,r={animation:{duration:800,easing:"linear"}};if("string"==typeof e)t=i({},r,{selector:e});else if("object"===("undefined"==typeof e?"undefined":n(e))&&"string"==typeof e.selector){var s={selector:e.selector};if("string"==typeof e.sizeClass&&(s.sizeClass=e.sizeClass),"object"===n(e.animation)){var o={};"number"==typeof e.animation.duration&&(o.duration=e.animation.duration),"string"==typeof e.animation.easing&&(o.easing=e.animation.easing),Object.keys(o).length>0&&(s.animation=o)}t=i({},r,s)}return t},t.teleportArgument=function(e){var t=void 0;if("string"==typeof e)t=[{"class":""},{"class":e}];else if("object"===("undefined"==typeof e?"undefined":n(e)))if("string"==typeof e["class"])t=[{"class":""},e];else if(Array.isArray(e)){t=[],1===e.length&&t.push({"class":""});for(var i=0;i<e.length;i++)if("string"==typeof e[i])t.push({"class":e[i]});else{if("object"!==n(e[i])||"string"!=typeof e[i]["class"]){t=void 0;break}t.push(e[i])}}return t}},function(e,t){"use strict";function n(e,t){var n=e.width/t.width,i=e.height/t.height,r=e.left-t.left+(e.width-t.width)/2,s=e.top-t.top+(e.height-t.height)/2;return"\n		translateX("+r+"px)\n		translateY("+s+"px)\n		scaleX("+n+")\n		scaleY("+i+")\n	"}function i(e){var t=e.getBoundingClientRect();return s({},{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height})}function r(e){if(window.getDefaultComputedStyle){var t=window.getComputedStyle(e),n="";return t.backgroundColor&&(n+=t.backgroundColor),{background:n}}return s({},window.getComputedStyle(e))}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};Object.defineProperty(t,"__esModule",{value:!0}),t.transforms=n,t.normalizeRect=i,t.normalizeGetComputedStyle=r},function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=n(2),c=function(){function e(t){r(this,e);var n=(0,a.constructorArgument)(t);return n?(s(this,n),this.element=document.querySelector(this.selector),this.element?(this.innerHTML=this.element.innerHTML,this.setSizeClass(this.sizeClass),void this.element.classList.add("teleporter-idle")):void console.error("Teleporter.js: No element found with the selector '"+this.selector+"'")):void console.error("Teleporter.js: No valid argument passed to the constructor 'Teleporter'")}return o(e,[{key:"setInnerElement",value:function(){this.innerElement=document.createElement("div"),this.innerElement.innerHTML=this.innerHTML,this.element.innerHTML="",this.element.insertBefore(this.innerElement,null),s(this.element.style,{background:"transparent"}),s(this.innerElement.style,{background:this.style.background})}},{key:"resetElement",value:function(){this.teleportation&&this.teleportation.player&&this.teleportation.player.cancel(),this.element.innerHTML=this.innerHTML,s(this.element.style,{width:null,height:null,padding:null,background:null})}},{key:"getRect",value:function(e){var t=void 0;return"string"==typeof e&&e.length>0?(this.element.classList.add(e),t=(0,l.normalizeRect)(this.element),this.element.classList.remove(e)):t=(0,l.normalizeRect)(this.element),t}},{key:"getStyles",value:function(e){var t=void 0;return"string"==typeof e&&e.length>0?(this.element.classList.add(e),t=(0,l.normalizeGetComputedStyle)(this.element),this.element.classList.remove(e)):t=(0,l.normalizeGetComputedStyle)(this.element),t}},{key:"setInnerStyles",value:function(e,t){s(this.innerElement.style,{width:t.width+"px",height:t.height+"px"});var n=this.innerElement.getBoundingClientRect();s(this.innerElement.style,{transform:(0,l.transforms)(e,n)})}},{key:"setSizeClass",value:function(e){this.sizeClass=e,this.resetElement();var t=this.getRect();this.sizeRect=this.getRect(this.sizeClass),this.style=this.getStyles(this.sizeClass),this.setInnerElement(),this.setInnerStyles(t,this.sizeRect)}},{key:"setTeleportationStepsRects",value:function(){var e=this;this.teleportation.steps.forEach(function(t){t.rect=e.getRect(t["class"])})}},{key:"setTeleportationRect",value:function(){var e=void 0,t=void 0;if(!this.sizeRect){var n,r,o=this.teleportation.steps.map(function(e){return e.rect.width}),a=this.teleportation.steps.map(function(e){return e.rect.height});e=(n=Math).max.apply(n,i(o)),t=(r=Math).max.apply(r,i(a))}s(this.innerElement.style,{width:(this.sizeRect.width||e)+"px",height:(this.sizeRect.height||e)+"px"}),this.teleportation.sizeRect=(0,l.normalizeRect)(this.innerElement)}},{key:"animate",value:function(e){var t=this,n=s({},this.animation,this.teleportation.steps[e+1].animation);e==this.teleportation.steps.length-2&&(this.innerElement.style.transform=(0,l.transforms)(this.teleportation.steps[e+1].rect,this.teleportation.sizeRect)),this.teleportation.player=this.innerElement.animate([{transform:(0,l.transforms)(this.teleportation.steps[e].rect,this.teleportation.sizeRect)},{transform:(0,l.transforms)(this.teleportation.steps[e+1].rect,this.teleportation.sizeRect)}],{duration:n.duration,easing:n.easing}),this.teleportation.player.addEventListener("finish",function(){t.teleportation.player.removeEventListener("finish"),e<t.teleportation.steps.length-2?t.animate(e+1):(t.innerElement.style.transform=(0,l.transforms)(t.teleportation.steps[e+1].rect,t.teleportation.sizeRect),t.element.classList.remove("teleporter-active"),t.element.classList.add("teleporter-idle"),t.teleportation.resolve())})}},{key:"teleport",value:function(e){var t=this,n=(0,a.teleportArgument)(e);return n?(this.resetElement(),this.teleportation={steps:n},this.setTeleportationStepsRects(),this.setInnerElement(),this.setTeleportationRect(),this.element.classList.remove("teleporter-idle"),this.element.classList.add("teleporter-active"),this.setInnerStyles(this.teleportation.steps[0].rect,this.teleportation.sizeRect),this.animate(0),new Promise(function(e,n){s(t.teleportation,{resolve:e,reject:n})})):void console.error("Teleporter.js: No valid argument passed to method 'teleport'")}}]),e}();t["default"]=c}]);