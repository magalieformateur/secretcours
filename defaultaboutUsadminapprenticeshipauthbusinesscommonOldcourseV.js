(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{426:function(t,e,r){"use strict";r.r(e);var n=r(25),o=r(1),i=r.n(o),c=r(340),a=r.n(c),u=r(3322),s=r(2),f=r(6),l=r.n(f),p=r(496),m=r.n(p),h=[{oc_prefix:"https://user.oc-static.com/",imgix_url:"https://oc-user.imgix.net/"},{oc_prefix:"//user.oc-static.com/",imgix_url:"https://oc-user.imgix.net/"},{oc_prefix:"https://course.oc-static.com/",imgix_url:"https://oc-course.imgix.net/"},{oc_prefix:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/",imgix_url:"https://oc-course.imgix.net/"},{oc_prefix:"https://sdz-upload.s3.amazonaws.com/",imgix_url:"https://oc-upload.imgix.net/"},{oc_prefix:"//sdz-upload.s3.amazonaws.com/",imgix_url:"https://oc-upload.imgix.net/"},{oc_prefix:"https://s3-eu-west-1.amazonaws.com/sdz-upload/",imgix_url:"https://oc-upload.imgix.net/"},{oc_prefix:"//s3-eu-west-1.amazonaws.com/sdz-upload/",imgix_url:"https://oc-upload.imgix.net/"},{oc_prefix:"https://static.oc-static.com/",imgix_url:"https://oc-static.imgix.net/"},{oc_prefix:"//static.oc-static.com/",imgix_url:"https://oc-static.imgix.net/"},{oc_prefix:"https://stage.oc-static.com/",imgix_url:"https://oc-stage.imgx.net/"},{oc_prefix:"/bundles/",imgix_url:"https://oc-bundles-images.imgix.net/"},{oc_prefix:"/images/",imgix_url:"https://oc-images.imgix.net/"}];var b={getUrl:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=function(t){var e="";return h.some(function(r){var n=r.oc_prefix.length;return t.substr(0,n)===r.oc_prefix&&(e=r.imgix_url+t.substr(n),!0)}),e}(t);if(!n)return t;var o=-1===n.indexOf("?")?"?":"&",i="".concat(n).concat(o,"auto=compress,format&q=80");return e&&(i+="&w=".concat(e)),r&&(i+="&h=".concat(r)),i}};function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=x(t);if(e){var o=x(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;return j(t)}(this,r)}}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var _={src:l.a.string.isRequired,alt:l.a.string,disableCdn:l.a.bool,height:l.a.number,otherAttributes:l.a.object,width:l.a.number},S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(c,i.a.Component);var e,r,n,o=w(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=o.call(this,t)).state={hasCdnError:!1},e.onCdnImageError=e.onCdnImageError.bind(j(e)),e}return e=c,(r=[{key:"createSrcSet",value:function(t){var e=this.props,r=e.width,n=e.height;if(!r&&!n)return null;for(var o=[],i=0;i<2;i++){var c=i+1;o.push("".concat(t,"&dpr=").concat(c," ").concat(c,"x"))}return o.join(",")}},{key:"onCdnImageError",value:function(){this.setState({hasCdnError:!0})}},{key:"renderOriginalImage",value:function(){var t=this.props,e=t.src,r=t.width,n=t.height,o=t.otherAttributes,c=y(t,["src","width","height","otherAttributes"]);return c=m()(c,["disableCdn"]),i.a.createElement("img",g({src:e,width:r||null,height:n||null},o,c))}},{key:"renderCdnImage",value:function(){var t=this.props,e=t.src,r=t.width,n=t.height,o=t.otherAttributes,c=y(t,["src","width","height","otherAttributes"]);c=m()(c,["disableCdn"]);var a=b.getUrl(e,r,n);return i.a.createElement("img",g({onError:this.onCdnImageError,srcSet:this.createSrcSet(a),src:a,width:r||null,height:n||null},o,c))}},{key:"render",value:function(){return this.props.disableCdn||this.state.hasCdnError?this.renderOriginalImage():this.renderCdnImage()}}])&&v(e.prototype,r),n&&v(e,n),c}();S.propTypes=_,S.defaultProps={alt:"",disableCdn:!1,height:null,width:null,otherAttributes:{}};var C=S;function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach(function(e){A(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function A(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var R="".concat("data-image-cdn-","attr-"),D="".concat(R,"src"),T="".concat(R,"alt"),z="".concat("data-image-cdn-","background-image"),U="".concat("data-image-cdn-","width"),F="".concat("data-image-cdn-","height"),W={class:"className"},q=[U,F,D,T];function N(t){return{width:+(t.getAttribute(U)||0),height:+(t.getAttribute(F)||0)}}var J=function(t){var e=t.disableCdn,r=void 0!==e&&e;I(s.a.document.querySelectorAll("[".concat(D,"]"))).forEach(function(t){var e={},n=function(t){return{src:t.getAttribute(D),alt:t.getAttribute(T)||""}}(t),o=n.src,c=n.alt;I(t.attributes).forEach(function(t){if(!(q.indexOf(t.name)>-1)&&t.name.substr(0,R.length)===R){var r=function(t){var e=t.substr(R.length);return W[e]||e}(t.name);e[r]=t.value}});var s=E(E({},N(t)),{},{src:o,alt:c,disableCdn:r,otherAttributes:e});a.a.render(i.a.createElement(u.a,null,i.a.createElement(C,s)),t)})},M=function(t){var e=t.disableCdn,r=void 0!==e&&e;I(s.a.document.querySelectorAll("[".concat(z,"]"))).forEach(function(t){var e=t.getAttribute(z),n=N(t),o=r?e:b.getUrl(e,n.width,n.height);t.style.backgroundImage="url(".concat(o,")")})};function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(){return(B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function G(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?G(Object(r),!0).forEach(function(e){Y(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function K(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=X(t);if(e){var o=X(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===$(e)||"function"==typeof e))return e;return V(t)}(this,r)}}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Z(t){var e="WithFromImageCdn(".concat(t.displayName||t.name,")"),r=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(u,i.a.Component);var r,o,c,a=Q(u);function u(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return Y(V(t=a.call.apply(a,[this].concat(r))),"state",{filesWithErrors:{},urlsToCdnUrls:{}}),Y(V(t),"fromImageCdn",function(e){var r=t.state,o=r.filesWithErrors,i=r.urlsToCdnUrls;if(!Object(n.c)("cdnImage")||o[e])return e;if(i[e])return i[e];var c=b.getUrl(e),a=new s.a.window.Image;return a.onerror=function(){return t.markFileAsError(e)},a.onload=function(){return t.markFileAsSuccess(e,c)},a.src=c,c}),Y(V(t),"markFileAsError",function(e){t.setState(function(t){return{filesWithErrors:H(H({},t.filesWithErrors),{},Y({},e,!0))}})}),Y(V(t),"markFileAsSuccess",function(e,r){t.setState(function(t){return{urlsToCdnUrls:H(H({},t.urlsToCdnUrls),{},Y({},e,r))}})}),t}return r=u,(o=[{key:"render",value:function(){return i.a.createElement(t,B({},this.props,{fromImageCdn:this.fromImageCdn}))}}])&&K(r.prototype,o),c&&K(r,c),u}();return Y(r,"displayName",e),r}r.d(e,"ImageCdn",function(){return C}),r.d(e,"withFromImageCdn",function(){return Z}),r.d(e,"imgixService",function(){return b});e.default={name:"imageCdn",init:function(){var t=Object(n.c)("cdnImage");J({disableCdn:!t}),M({disableCdn:!t})}}}}]);
//# sourceMappingURL=default~aboutUs~admin~apprenticeship~auth~business~commonOld~courseView~courses~cpf~dashboard~freeUs~95038eef.638c8ec1870433b016f2.js.map