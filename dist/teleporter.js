!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t){"use strict";function n(e){var t=e.getBoundingClientRect();return o({},{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height})}function r(e,t){if("string"==typeof t&&t.length>0){e.classList.add(t);var r=n(e);return e.classList.remove(t),r}return n(e)}function i(e,t){var n=e.width/t.width,r=e.height/t.height,i=e.left-t.left+(e.width-t.width)/2,o=e.top-t.top+(e.height-t.height)/2;return"\n		translateX("+i+"px)\n		translateY("+o+"px)\n		scaleX("+n+")\n		scaleY("+r+")\n	"}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0}),t.getRect=r,t.getTransform=i},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function r(e){var t={};return"number"==typeof e.animation.duration&&(t.duration=e.animation.duration),"number"==typeof e.animation.delay&&(t.delay=e.animation.delay),"string"==typeof e.animation.easing&&(t.easing=e.animation.easing),t}function i(e){if("string"!=typeof e["class"])return void console.error("Teleporter.js: No valid class passed to the teleportation step");var t={"class":e["class"]};return"number"==typeof e.opacity&&(t.opacity=e.opacity),"string"==typeof e.rotate&&(t.rotate=e.rotate),"object"===n(e.animation)&&(t.animation=r(e)),t}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});t.constructorArgument=function(e){var t=void 0,i={animation:{duration:800,delay:0,easing:"linear"}};if("string"==typeof e)t=o({},i,{selector:e});else if("object"===("undefined"==typeof e?"undefined":n(e))&&"string"==typeof e.selector){var s={selector:e.selector};"string"==typeof e.sizeClass&&(s.sizeClass=e.sizeClass),"object"===n(e.animation)&&(s.animation=r(e)),t=o({},i,s)}return t?t:void console.error("Teleporter.js: No valid argument passed to the constructor")},t.createTeleportationArgument=function(e){var t=void 0;if("string"==typeof e)t=[{"class":""},{"class":e}];else if("object"===("undefined"==typeof e?"undefined":n(e)))if(Array.isArray(e)){t=[],1===e.length&&t.push({"class":""});for(var r=0;r<e.length;r++)if("string"==typeof e[r])t.push({"class":e[r]});else{if("object"!==n(e[r])){t=void 0;break}t.push(i(e[r]))}}else t=[{"class":""},i(e)];return t?t:void console.error("Teleporter.js: No valid argument passed to method createTeleportation")}},function(e,t,n){"use strict";function r(e){var t=(0,a.getRect)(e);s(e.style,{width:t.width+"px",height:t.height+"px"});var n=document.createElement("div");for(n.className="teleporter-wrapper",n.style.willChange="transform";e.childNodes.length>0;)n.appendChild(e.childNodes[0]);return e.insertBefore(n,null),n}function i(e,t,n){s(e.style,{width:n.width+"px",height:n.height+"px",transform:null});var r=e.getBoundingClientRect();s(e.style,{transform:(0,a.getTransform)(t,r)})}function o(e){var t=e.children[0];if(t&&t.classList.contains("teleporter-wrapper")){for(;t.childNodes.length>0;)e.appendChild(t.childNodes[0]);e.removeChild(t)}s(e.style,{width:null,height:null})}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Object.defineProperty(t,"__esModule",{value:!0}),t.setWrapper=r,t.setWrapperStyles=i,t.resetElement=o;var a=n(1)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){var t=this;return this.runningTeleportation&&this.runningTeleportation.player&&this.runningTeleportation.player.cancel(),this.runningTeleportation=e,this.runningTeleportation.stepIndex=1,this.element.classList.remove("teleporter-idle"),this.element.classList.add("teleporter-active"),this.animate(),new Promise(function(e,n){s(t.runningTeleportation,{resolve:e,reject:n})})}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),p=n(1),c=n(3),u=function(){function e(t){return i(this,e),s(this,(0,l.constructorArgument)(t)),this.element=document.querySelector(this.selector),this.element?(this.element.classList.add("teleporter-idle"),void this.setSizeClass(this.sizeClass)):void console.error("Teleporter.js: No element found with the selector '"+this.selector+"'")}return a(e,[{key:"setSizeClass",value:function(e){(0,c.resetElement)(this.element),this.elementRect=(0,p.getRect)(this.element),this.sizeClass=e,this.sizeRect=(0,p.getRect)(this.element,this.sizeClass),this.wrapper=(0,c.setWrapper)(this.element),(0,c.setWrapperStyles)(this.wrapper,this.elementRect,this.sizeRect)}},{key:"getTeleportationSize",value:function(e){if(this.sizeClass)return{width:this.sizeRect.width,height:this.sizeRect.height};var t,n,i=e.map(function(e){return e.rect.width}),o=e.map(function(e){return e.rect.height});return{width:(t=Math).max.apply(t,r(i)),height:(n=Math).max.apply(n,r(o))}}},{key:"handleEvent",value:function(){if(this.runningTeleportation.player.removeEventListener("finish",this,!1),this.runningTeleportation.stepIndex<this.runningTeleportation.steps.length-1)this.runningTeleportation.stepIndex++,this.animate();else{var e=this.runningTeleportation.steps[this.runningTeleportation.stepIndex];s(this.wrapper.style,e.webAnimation.stepStyles[1]),this.element.classList.remove("teleporter-active"),this.element.classList.add("teleporter-idle"),this.runningTeleportation.resolve()}}},{key:"animate",value:function(){var e=this.runningTeleportation.steps[this.runningTeleportation.stepIndex];1===this.runningTeleportation.stepIndex&&(0,c.setWrapperStyles)(this.wrapper,this.runningTeleportation.steps[0].rect,this.runningTeleportation.sizeRect),this.runningTeleportation.player=this.wrapper.animate(e.webAnimation.stepStyles,{duration:e.webAnimation.animation.duration,delay:e.webAnimation.animation.delay,easing:e.webAnimation.animation.easing}),this.runningTeleportation.player.addEventListener("finish",this,!1)}},{key:"getTeleportationSizeRect",value:function(e){this.wrapper=(0,c.setWrapper)(this.element),s(this.wrapper.style,{width:e.width+"px",height:e.height+"px"});var t=(0,p.getRect)(this.wrapper);return(0,c.setWrapperStyles)(this.wrapper,this.elementRect,this.sizeRect),t}},{key:"getTeleportationSteps",value:function(e,t){for(var n=1;n<e.length;n++){var r=e[n-1],i=e[n];i.webAnimation={animation:s({},this.animation,i.animation),stepStyles:[{transform:(0,p.getTransform)(r.rect,t)},{transform:(0,p.getTransform)(i.rect,t)}]},r.rotate&&i.rotate&&(i.webAnimation.stepStyles[0].transform+=" rotate("+r.rotate+")",i.webAnimation.stepStyles[1].transform+=" rotate("+i.rotate+")"),"number"==typeof r.opacity&&"number"==typeof i.opacity&&(i.webAnimation.stepStyles[0].opacity=r.opacity,i.webAnimation.stepStyles[1].opacity=i.opacity)}return e}},{key:"createTeleportation",value:function(e){var t=this,n=(0,l.createTeleportationArgument)(e);(0,c.resetElement)(this.element),n.forEach(function(e){s(e,{rect:(0,p.getRect)(t.element,e["class"])})});var r={},i=this.getTeleportationSize(n);return r.sizeRect=this.getTeleportationSizeRect(i),r.steps=this.getTeleportationSteps(n,r.sizeRect),r.run=o.bind(this,r),r}},{key:"teleport",value:function(e){return this.createTeleportation(e).run()}}]),e}();t["default"]=u}])});