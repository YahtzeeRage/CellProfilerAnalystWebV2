(self.webpackChunkgatsby_test=self.webpackChunkgatsby_test||[]).push([[4761],{76912:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return jt}});var r=n(67294),a=n(45697),o=n.n(a),i=n(14293),c=n.n(i),u=n(68630),l=n.n(u),f=n(28583),s=n.n(f),y=n(91095),h=n(10590),d=n(77818),b=function t(e,n){return{x:e,y:n,distance:function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},add:function(e){return t(this.x+e.x,this.y+e.y)},subtract:function(e){return t(this.x-e.x,this.y-e.y)},scalarMult:function(e){return t(this.x*e,this.y*e)},scalarDivide:function(e){if(0===e)throw new Error("Division by 0 error");return t(this.x/e,this.y/e)},equals:function(t){return this.x===t.x&&this.y===t.y}}},p=function(t,e){return{center:t,radius:e,hasIntersection:function(t){var e=this.center,n=t.center,r=this.radius,a=t.radius,o=e.distance(n);return!(o>r+a)&&!(o<Math.abs(r-a))},equals:function(t){var e=this.center,n=t.center;return this.radius===t.radius&&e.equals(n)},intersection:function(t){var e=this.center,n=t.center,r=this.radius,a=t.radius,o=e.distance(n);if(!this.hasIntersection(t)||this.equals(t))return[];var i=(Math.pow(r,2)-Math.pow(a,2)+Math.pow(o,2))/(2*o),c=Math.sqrt(Math.pow(r,2)-Math.pow(i,2)),u=e.add(n.subtract(e).scalarMult(i).scalarDivide(o)),l=e.x,f=e.y,s=n.x,y=n.y,h=u.x,d=u.y,p=[b(h-c*(y-f)/o,d+c*(s-l)/o),b(h+c*(y-f)/o,d-c*(s-l)/o)];return p.sort((function(t,e){return t.x-e.x})),p},solveX:function(t){var e=Math.sqrt(Math.pow(this.radius,2)-Math.pow(t-this.center.y,2));return[this.center.x-e,this.center.x+e]},solveY:function(t){var e=Math.sqrt(Math.pow(this.radius,2)-Math.pow(t-this.center.x,2));return[this.center.y-e,this.center.y+e]}}};function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v=function(t,e){var n=t.x,r=t.x0,a=t.y,o=t.y0,i=t.horizontal,c=t.alignment||"middle",u="middle"===c?e/2:e,l=i?-1:1;return i?{x0:r,x1:n,y0:"start"===c?a:a-l*u,y1:"end"===c?a:a+l*u}:{x0:"start"===c?n:n-l*u,x1:"end"===c?n:n+l*u,y0:o,y1:a}},x=function(t,e){var n=t.data,r=t.scale,a=void 0===n[e]._x1?"_x":"_x1";return r.x(n[e][a])},w=function(t){return-1*t+Math.PI/2},O=function(t,e){return(0,t.getPath)(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){m(t,e,n[e])}))}return t}({},t,v(t,e)))},P=function(t,e,n){var r="".concat(e.topLeft," ").concat(e.topLeft," ").concat(n),a="".concat(e.topRight," ").concat(e.topRight," ").concat(n),o="".concat(e.bottomLeft," ").concat(e.bottomLeft," ").concat(n),i="".concat(e.bottomRight," ").concat(e.bottomRight," ").concat(n),c=["M","A ".concat(o,","),"L","A ".concat(r,","),"L","A ".concat(a,","),"L","A ".concat(i,",")].reduce((function(e,n,r){return e+="".concat(n," ").concat(t[r].x,", ").concat(t[r].y," \n")}),"");return"".concat(c," z")},M=function(t,e,n){var r=v(t,e),a=r.y0>r.y1?1:-1,o=a>0?"0 0 1":"0 0 0",i=function(t,e,n){var r=t.x0,a=t.x1,o=t.y0,i=t.y1,c=function(t){var c="Left"===t,u=c?1:-1,l=c?r:a,f={x:l+u*n["bottom".concat(t)],y:o},s={x:l,y:o-e*n["bottom".concat(t)]},y={x:l,y:i+e*n["top".concat(t)]},h={x:l+u*n["top".concat(t)],y:i};if(1===e?o-n["bottom".concat(t)]<i+n["top".concat(t)]:o+n["bottom".concat(t)]>i-n["top".concat(t)]){var d=b(l+u*n["top".concat(t)],i+e*n["top".concat(t)]),m=p(d,n["top".concat(t)]),g=b(l+u*n["bottom".concat(t)],o-e*n["bottom".concat(t)]),v=p(g,n["bottom".concat(t)]),x=m.intersection(v);if(x.length>0){var w=x[c?0:1];s={x:w.x,y:w.y},y={x:w.x,y:w.y}}else if(n["top".concat(t)]>n["bottom".concat(t)]){var O=m.solveX(o)[c?0:1];f={x:O,y:o},s={x:O,y:o},y={x:O,y:o}}else{var P=v.solveX(i)[c?0:1];s={x:P,y:i},y={x:P,y:i},h={x:P,y:i}}}var M=[f,s,y,h];return c?M:M.reverse()};return c("Left").concat(c("Right"))}(r,a,n);return P(i,n,o)},A=function(t,e,n){var r=v(t,e),a=r.x0<r.x1?1:-1,o={topRight:a>0?n.topLeft:n.bottomLeft,bottomRight:a>0?n.topRight:n.bottomRight,bottomLeft:a>0?n.bottomRight:n.topRight,topLeft:a>0?n.bottomLeft:n.topLeft},i=function(t,e,n){var r=t.y0,a=t.y1,o=t.x0<t.x1?t.x0:t.x1,i=t.x0<t.x1?t.x1:t.x0,c=function(t){var c="top"===t,u=c?-1:1,l=c?a:r,f={x:o,y:l-u*n["".concat(t,"Left")]},s={x:o+n["".concat(t,"Left")],y:l},y={x:i-n["".concat(t,"Right")],y:l},h={x:i,y:l-u*n["".concat(t,"Right")]};if(s.x>y.x){var d=b(o+n["".concat(t,"Left")],l-u*n["".concat(t,"Left")]),m=p(d,n["".concat(t,"Left")]),g=b(i-n["".concat(t,"Right")],l-u*n["".concat(t,"Right")]),v=p(g,n["".concat(t,"Right")]),x=m.intersection(v);if(x.length>0){var w=x[e>0?1:0];s={x:w.x,y:w.y},y={x:w.x,y:w.y}}else if(n["".concat(t,"Right")]>n["".concat(t,"Left")]){var O=v.solveY(o)[c?0:1];f={x:o,y:O},s={x:o,y:O},y={x:o,y:O}}else{var P=m.solveY(i)[c?0:1];h={x:i,y:P},y={x:i,y:P},s={x:i,y:P}}}return[f,s,y,h]},u=c("top"),l=c("bottom");return[l[1],l[0]].concat(g(u),[l[3],l[2]])}(r,a,o);return P(i,o,"0 0 1")},j=function(t,e){var n,r,a=t.datum,o=t.scale,i=t.index,c=t.alignment,u=t.style,l=o.y(a._y0||0),f=o.y(void 0!==a._y1?a._y1:a._y),s=o.x(void 0!==a._x1?a._x1:a._x);if(u.width){var y=function(t,e){var n=t.scale,r=n.y.range(),a=Math.max.apply(Math,g(r)),o=Math.abs(n.x.range()[1]-n.x.range()[0]);return e/(2*Math.PI*a)*o}(t,u.width),h="middle"===c?y/2:y;n="start"===c?s:s-h,r="end"===c?s:s+h}else n=function(t,e){var n=t.data,r=t.scale,a=t.alignment,o=x(t,e),i=Math.abs(r.x.range()[1]-r.x.range()[0]),c=0===e?x(t,n.length-1)-2*Math.PI:x(t,e-1);return 0===e&&i<2*Math.PI?r.x.range()[0]:"start"===a||"end"===a?"start"===a?c:o:(o+c)/2}(t,i),r=function(t,e){var n=t.data,r=t.scale,a=t.alignment,o=x(t,e),i=Math.abs(r.x.range()[1]-r.x.range()[0]),c=r.x.range()[1]===2*Math.PI?x(t,0)+2*Math.PI:r.x.range()[1],u=e===n.length-1?x(t,0)+2*Math.PI:x(t,e+1);return e===n.length-1&&i<2*Math.PI?c:"start"===a||"end"===a?"start"===a?o:u:(o+u)/2}(t,i);var b=function(t){return d.Z().innerRadius(l).outerRadius(f).startAngle(w(n)).endAngle(w(r)).cornerRadius(e[t])()},p=function(t){var e=b("".concat(t,"Right")),n=e.match(/[A-Z]/g),r=e.split(/[A-Z]/).slice(1),a=n.indexOf("L"),o=b("".concat(t,"Left")),i=o.match(/[A-Z]/g),c=o.split(/[A-Z]/).slice(1),u=i.indexOf("L");return{rightMoves:n,rightCoords:r,rightMiddle:a,leftMoves:i,leftCoords:c,leftMiddle:u}},m=function(){var t,a,o=e.topRight,i=e.topLeft,c=f*Math.abs(r-n),u=p("top"),l=u.rightMoves,s=u.rightCoords,y=u.rightMiddle,h=u.leftMoves,d=u.leftCoords,b=u.leftMiddle;if(o===i||c<2*o+2*i)t=o>i?l:h,a=o>i?s:d;else{var m,v=function(t){return t<3},x=i>o&&v(y)?1:2;if(o>i){var w=v(y)?b:b-2;m=v(b)?b-1:w}else{var O=v(b)?1:2;m=v(y)?O:b-2}t=g(l.slice(0,x)).concat(g(h.slice(m))),a=g(s.slice(0,x)).concat(g(d.slice(m)))}var P=t.indexOf("L"),M=t.slice(0,P),A=a.slice(0,P);return M.map((function(t,e){return{command:t,coords:A[e].split(",")}}))}(),v=function(){var t,a,o=e.bottomRight,i=e.bottomLeft,c=l*Math.abs(r-n),u=p("bottom"),f=u.rightMoves,s=u.rightCoords,y=u.rightMiddle,h=u.leftMoves,d=u.leftCoords,b=u.leftMiddle;if(o===i||c<2*o+2*i)t=o>i?f:h,a=o>i?s:d;else{var m=function(t,e){return t.length-e<4},v=(o>i?m(f,y):m(h,b))?-1:-3;t=g(h.slice(0,b+2)).concat(g(f.slice(v))),a=g(d.slice(0,b+2)).concat(g(s.slice(v)))}var x=t.indexOf("L"),w=t.slice(x,-1),O=a.slice(x,-1);return w.map((function(t,e){return{command:t,coords:O[e].split(",")}}))}(),O=g(m).concat(g(v)).reduce((function(t,e){return t+="".concat(e.command," ").concat(e.coords.join())}),"");return"".concat(O," z")};function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=function(t,e){var n={topLeft:0,topRight:0,bottomLeft:0,bottomRight:0};return t?l()(t)?function(t,e){var n={topLeft:0,topRight:0,bottomLeft:0,bottomRight:0},r=function(r,a){c()(t[r])?c()(t[a])||(n[r]=y.Z.evaluateProp(t[a],e)):n[r]=y.Z.evaluateProp(t[r],e)};return r("topLeft","top"),r("topRight","top"),r("bottomLeft","bottom"),r("bottomRight","bottom"),n}(t,e):(n.topLeft=y.Z.evaluateProp(t,e),n.topRight=y.Z.evaluateProp(t,e),n):n},R=function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n={fill:"black",stroke:t.fill||"black"};return y.Z.evaluateStyle(s()(n,t),e)}(t.style,t),n=function(t,e){var n=e.scale,r=e.data,a=e.defaultBarWidth,o=e.style;if(t)return y.Z.evaluateProp(t,e);if(o.width)return o.width;var i=n.x.range(),c=Math.abs(i[1]-i[0]),u=r.length+2,l=(e.barRatio||.5)*(r.length<2?a:c/u);return Math.max(1,l)}(t.barWidth,s()({},t,{style:e})),r=_(t.cornerRadius,s()({},t,{style:e,barWidth:n})),a=y.Z.evaluateProp(t.ariaLabel,t),o=y.Z.evaluateProp(t.desc,t),i=y.Z.evaluateProp(t.id,t),c=y.Z.evaluateProp(t.tabIndex,t);return s()({},t,{ariaLabel:a,style:e,barWidth:n,cornerRadius:r,desc:o,id:i,tabIndex:c})},L=function(t){var e=t=R(t),n=e.polar,a=e.origin,o=e.style,i=e.barWidth,c=e.cornerRadius,u=n?function(t,e){return j(t,e)}(t,c):function(t,e,n){return t.getPath?O(t,e):t.horizontal?A(t,e,n):M(t,e,n)}(t,i,c),l=n&&a?"translate(".concat(a.x,", ").concat(a.y,")"):void 0;return r.cloneElement(t.pathComponent,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){Z(t,e,n[e])}))}return t}({},t.events,{"aria-label":t.ariaLabel,style:o,d:u,className:t.className,clipPath:t.clipPath,desc:t.desc,index:t.index,role:t.role,shapeRendering:t.shapeRendering,transform:t.transform||l,tabIndex:t.tabIndex}))};L.defaultProps={defaultBarWidth:8,pathComponent:r.createElement(h.Z,null),role:"presentation",shapeRendering:"auto"};var S=L,D=n(16896),C=n(37191),E=n(3645),T=n(5007),I=n(97141),k=n(67523),W=n(76800),z=n(95477),N=n(16924),q=n(92117),B=n(7406),F=function(t,e){var n=function(n){var r="log"===N.Z.getType(t.scale[n])?1/Number.MAX_SAFE_INTEGER:0,a=B.Z.getMinValue(t.domain[n]),o=B.Z.getMaxValue(t.domain[n]);return a<0&&o<=0?r=o:a>=0&&o>0&&(r=a),e["_".concat(n)]instanceof Date?new Date(r):r},r=void 0!==e._y0?e._y0:n("y"),a=void 0!==e._x0?e._x0:n("x");return y.Z.scalePoint(t,s()({},e,{_y0:r,_x0:a}))},X=n(32993),G=n.n(X),V=n(28481),Y=Array.prototype,K=Y.slice,U=(Y.map,n(78150));function $(t){return function(){return t}}function H(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return J(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Q(t,e){var n,r;if(void 0===e){var a,o=H(t);try{for(o.s();!(a=o.n()).done;){var i=a.value;null!=i&&(void 0===n?i>=i&&(n=r=i):(n>i&&(n=i),r<i&&(r=i)))}}catch(s){o.e(s)}finally{o.f()}}else{var c,u=-1,l=H(t);try{for(l.s();!(c=l.n()).done;){var f=c.value;null!=(f=e(f,++u,t))&&(void 0===n?f>=f&&(n=r=f):(n>f&&(n=f),r<f&&(r=f)))}}catch(s){l.e(s)}finally{l.f()}}return[n,r]}function tt(t){return t}var et=n(75436);function nt(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return rt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rt(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function at(t){return Math.ceil(Math.log(function(t,e){var n=0;if(void 0===e){var r,a=nt(t);try{for(a.s();!(r=a.n()).done;){var o=r.value;null!=o&&(o=+o)>=o&&++n}}catch(f){a.e(f)}finally{a.f()}}else{var i,c=-1,u=nt(t);try{for(u.s();!(i=u.n()).done;){var l=i.value;null!=(l=e(l,++c,t))&&(l=+l)>=l&&++n}}catch(f){u.e(f)}finally{u.f()}}return n}(t))/Math.LN2)+1}function ot(){var t=tt,e=Q,n=at;function r(r){Array.isArray(r)||(r=Array.from(r));var a,o,i=r.length,c=new Array(i);for(a=0;a<i;++a)c[a]=t(r[a],a,r);var u=e(c),l=u[0],f=u[1],s=n(c,l,f);if(!Array.isArray(s)){var y=f,h=+s;if(e===Q){var d=function(t,e,n){for(var r;;){var a=(0,et.G9)(t,e,n);if(a===r||0===a||!isFinite(a))return[t,e];a>0?(t=Math.floor(t/a)*a,e=Math.ceil(e/a)*a):a<0&&(t=Math.ceil(t*a)/a,e=Math.floor(e*a)/a),r=a}}(l,f,h),b=(0,V.Z)(d,2);l=b[0],f=b[1]}if((s=(0,et.ZP)(l,f,h))[s.length-1]>=f)if(y>=f&&e===Q){var p=(0,et.G9)(l,f,h);isFinite(p)&&(p>0?f=(Math.floor(f/p)+1)*p:p<0&&(f=(Math.ceil(f*-p)+1)/-p))}else s.pop()}for(var m=s.length;s[0]<=l;)s.shift(),--m;for(;s[m-1]>f;)s.pop(),--m;var g,v=new Array(m+1);for(a=0;a<=m;++a)(g=v[a]=[]).x0=a>0?s[a-1]:l,g.x1=a<m?s[a]:f;for(a=0;a<i;++a)l<=(o=c[a])&&o<=f&&v[(0,U.ZP)(s,o,0,m)].push(r[a]);return v}return r.value=function(e){return arguments.length?(t="function"==typeof e?e:$(e),r):t},r.domain=function(t){return arguments.length?(e="function"==typeof t?t:$([t[0],t[1]]),r):e},r.thresholds=function(t){return arguments.length?(n="function"==typeof t?t:Array.isArray(t)?$(K.call(t)):$(t),r):n},r}var it=n(11972);function ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){ut(t,e,n[e])}))}return t}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lt(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var ft,st,yt,ht,dt=(ft=function(t){var e=t.data,n=void 0===e?[]:e,r=t.x,a=t.bins;if(!(n&&n.length||Array.isArray(a)))return[];var o=function(t){var e=t.data,n=t.bins,r=t.x,a=y.Z.createAccessor(r||"x"),o=e.some((function(t){return a(t)instanceof Date})),i=Array.isArray(n)&&n.some((function(t){return t instanceof Date}));return o||i}({data:n,bins:a,x:r});return function(t){var e=t.data,n=t.x,r=t.bins,a=t.dataOrBinsContainsDates,o=y.Z.createAccessor(n||"x"),i=ot().value(o),c=(a?it.scaleTime():it.scaleLinear()).domain(Q(e,o)).nice();return Array.isArray(r)?(i.domain([r[0],r[r.length-1]]),i.thresholds(r.slice(1,r.length-1)),i):Number.isInteger(r)?(i.domain(c.domain()),i.thresholds(r),i):a?(i.domain(c.domain()),i.thresholds(c.ticks()),i):(i.domain(c.domain()),i)}({data:n,x:r,bins:a,dataOrBinsContainsDates:o})(n).filter((function(t){var e=t.x0,n=t.x1;return o?new Date(e).getTime()!==new Date(n).getTime():e!==n})).map((function(t){var e=o?new Date(t.x0):t.x0,n=o?new Date(t.x1):t.x1;return{x0:e,x1:n,x:o?new Date((e.getTime()+n.getTime())/2):(e+n)/2,y:t.length,binnedData:lt(t)}}))},ht=!1,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(ht&&G()(st,e))return yt;var r=ft.apply(void 0,e);return ht=!0,yt=r,st=e,r}),bt=function(t){var e=t.bins,n=t.data,r=t.x,a=n.some((function(t){var e=t._y;return!c()(e)}))?n:dt({data:n,x:r,bins:e});return W.Z.getData(ct({},t,{data:a,x:"x"}))},pt=function(t,e){var n=bt(t);if(!n.length)return[0,1];if("x"===e){var r=n[0],a=n[n.length-1];return z.Z.getDomainWithZero(ct({},t,{data:[{x:r.x0},{x:a.x1}],x:"x"}),"x")}return t.data.length?z.Z.getDomainWithZero(ct({},t,{data:n}),"y"):[0,1]},mt=function(t,e){var n=y.Z.modifyProps(t,e,"histogram"),r=t=s()({},n,function(t){var e=y.Z.getDefaultStyles(t,"histogram"),n=y.Z.getStyles(t.style,e),r=t.range||{x:y.Z.getRange(t,"x"),y:y.Z.getRange(t,"y")},a={x:pt(t,"x"),y:pt(t,"y")},o=bt(t);return{style:n,data:o=W.Z.formatDataFromDomain(o,a,0),scale:{x:N.Z.getBaseScale(t,"x").domain(a.x).range(t.horizontal?r.y:r.x),y:N.Z.getBaseScale(t,"y").domain(a.y).range(t.horizontal?r.x:r.y)},domain:a}}(n)),a=r.binSpacing,o=r.cornerRadius,i=r.data,u=r.domain,l=r.events,f=r.height,h=r.horizontal,d=r.padding,b=r.scale,p=r.sharedEvents,m=r.standalone,g=r.style,v=r.theme,x=r.width,w=r.labels,O=r.name,P=r.getPath,M={parent:{horizontal:h,domain:u,scale:b,width:x,height:f,data:i,standalone:m,name:O,theme:v,padding:d,style:g.parent}},A=function(t){var e=b.x(t.x0),n=b.x(t.x1);return Math.abs(n-e)};return i.reduce((function(e,n,r){var u=c()(n.eventKey)?r:n.eventKey,s=F(t,n),y=s.x,d=s.y,m=s.y0,v=s.x0,O={alignment:"middle",barWidth:function(t){return a?A(t)-a:A(t)}(n),cornerRadius:o,data:i,datum:n,horizontal:h,index:r,scale:b,style:g.data,width:x,height:f,x:y,y:d,y0:m,x0:v,getPath:P};e[u]={data:O};var M=q.Z.getText(t,n,r);return(null!=M||w&&(l||p))&&(e[u].labels=q.Z.getProps(t,r)),e}),M)};function gt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function wt(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var Ot={width:450,height:300,padding:50},Pt=function(t){function e(){return vt(this,e),wt(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n=e,(r=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var t=e.animationWhitelist,n=e.role,r=y.Z.modifyProps(this.props,Ot,n);if(this.shouldAnimate())return this.animateComponent(r,t);var a=this.renderData(r);return r.standalone?this.renderContainer(r.containerComponent,a):a}}])&&xt(n.prototype,r),a&&xt(n,a),e}(r.Component);Object.defineProperty(Pt,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","style","width"]}),Object.defineProperty(Pt,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryHistogram"}),Object.defineProperty(Pt,"role",{configurable:!0,enumerable:!0,writable:!0,value:"histogram"}),Object.defineProperty(Pt,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:{onLoad:{duration:2e3,before:function(){return{_y:0,_y1:0,_y0:0}},after:function(t){return{_y:t._y,_y1:t._y1,_y0:t._y0}}},onExit:{duration:500,before:function(){return{_y:0,yOffset:0}}},onEnter:{duration:500,before:function(){return{_y:0,_y1:0,_y0:0}},after:function(t){return{_y:t._y,_y1:t._y1,_y0:t._y0}}}}}),Object.defineProperty(Pt,"getFormattedData",{configurable:!0,enumerable:!0,writable:!0,value:dt}),Object.defineProperty(Pt,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){gt(t,e,n[e])}))}return t}({},D.Z.baseProps,D.Z.dataProps,{binSpacing:C.Z.nonNegative,bins:o().oneOfType([o().arrayOf(o().oneOfType([o().number,o().instanceOf(Date)])),C.Z.nonNegative]),cornerRadius:o().oneOfType([o().number,o().func,o().shape({top:o().oneOfType([o().number,o().func]),topLeft:o().oneOfType([o().number,o().func]),topRight:o().oneOfType([o().number,o().func]),bottom:o().oneOfType([o().number,o().func]),bottomLeft:o().oneOfType([o().number,o().func]),bottomRight:o().oneOfType([o().number,o().func])})]),getPath:o().func,horizontal:o().bool})}),Object.defineProperty(Pt,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:r.createElement(E.Z,null),data:[],dataComponent:r.createElement(S,null),groupComponent:r.createElement("g",{role:"presentation"}),labelComponent:r.createElement(T.Z,null),samples:50,sortOrder:"ascending",standalone:!0,theme:I.Z.grayscale}}),Object.defineProperty(Pt,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:pt}),Object.defineProperty(Pt,"getData",{configurable:!0,enumerable:!0,writable:!0,value:bt}),Object.defineProperty(Pt,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(t){return mt(t,Ot)}}),Object.defineProperty(Pt,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});var Mt=(0,k.Z)(Pt),At=n(78653);var jt=function(t){return r.createElement("div",null,r.createElement(At.Z,null,r.createElement(Mt,{style:{data:{fill:"rgb(84,136,187)"}},data:t.histogramData,bins:30})))}}}]);
//# sourceMappingURL=6d3c0703eac7f7b54ff4805e63595a20f0b6e944-356f1c70beadda32daba.js.map