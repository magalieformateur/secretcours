(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1756:function(t,e,n){"use strict";var a=n(1),r=n.n(a),o=n(421),i=n(6),c=n.n(i),l=n(412),u=n.n(l),s=n(423),d=n(3197),p=n(477),m=n(3198),b=n(3258);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={classes:c.a.objectOf(c.a.string),text:c.a.string.isRequired,buttonText:c.a.string.isRequired,onClickButton:c.a.func.isRequired,titleComponent:c.a.oneOfType([c.a.string,c.a.func]),hideButton:c.a.bool,ButtonProps:c.a.object},v=function(t){var e=t.classes,n=t.titleComponent,a=t.text,o=t.buttonText,i=t.ButtonProps,c=t.onClickButton,l=t.hideButton;return r.a.createElement("section",{className:u()(e.root,g({},e.hiddenButton,l))},r.a.createElement(b.a,{clipPath:r.a.createElement("path",{d:"M32 104L42 1H426V104H0Z"}),className:e.backgroundFigure},r.a.createElement("div",{className:"".concat(e.backgroundFigure," ").concat(e.backgroundColor),"aria-hidden":!0})),r.a.createElement("div",{className:e.wrapper},r.a.createElement(d.a,{component:n,className:e.title,variant:p.a.VARIANT.H3},a),r.a.createElement(m.a,h({className:e.button,ocStyle:"secondaryOnContrastedBackground",onClick:c},i),o)))};v.propTypes=f,v.defaultProps={titleComponent:null,classes:{},hideButton:!1,ButtonProps:{}};var w=Object(s.a)(function(t){var e,n,a=t.palette,r=t.spacing,o=t.breakpoints;return{root:g({position:"relative",backgroundColor:a.background.primary,padding:r(4,0),borderTop:"1px solid ".concat(a.brand.main)},o.down("xs"),{paddingTop:r(2),paddingBottom:r(4)}),button:{},title:g({color:a.brand.main,width:"49%"},o.down("sm"),{marginBottom:r(8)}),hiddenButton:{marginBottom:0,"& $backgroundFigure":g({height:"102%"},o.down("sm"),{height:0}),"& $title":g({},o.down("sm"),{marginBottom:"0 !important"}),"& $button":{display:"none"}},wrapper:(e={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",boxSizing:"border-box",position:"relative",paddingLeft:r(1),paddingRight:r(1),marginLeft:"auto",marginRight:"auto"},g(e,o.up("md"),{maxWidth:768,paddingLeft:r(2),paddingRight:r(2),flexDirection:"row",justifyContent:"space-between"}),g(e,o.up("lg"),{maxWidth:968}),g(e,o.up("xl"),{maxWidth:1200}),g(e,o.down("sm"),{textAlign:"center"}),e),backgroundFigure:(n={margin:0,position:"absolute",top:-1,right:0,zIndex:0,height:"101%",width:"46%"},g(n,o.up("md"),{width:"61%"}),g(n,o.up("lg"),{width:"46%"}),g(n,o.up("xl"),{width:"51%"}),g(n,o.down("md"),{height:"100%"}),g(n,o.down("sm"),{top:"inherit",bottom:0,width:"200%",height:107}),n),backgroundColor:{background:a.brand.main,backgroundSize:"cover"}}})(v),y=n(12),k=n(1759),x=n(973),B={event:c.a.string,href:c.a.string,buttonLabel:c.a.string,isFormShown:c.a.bool},E=function(t){var e=t.event,n=t.href,a=t.buttonLabel,o=t.isFormShown;return r.a.createElement(w,{titleComponent:"p",text:Object(y.translate)("paths_list.contact_cta"),buttonText:a||Object(y.translate)("contact_banner.contact_button"),onClickButton:n?function(){}:x.c,hideButton:o,ButtonProps:{"data-event":e,href:n,Component:n?"a":"button",target:n?"_blank":null}})};E.propTypes=B,E.defaultProps={event:null,href:null,buttonLabel:"",isFormShown:!1};e.a=Object(o.b)(function(t){return{isFormShown:k.a.isLearningPathInformationFormShown(t)}})(E)},3258:function(t,e,n){"use strict";var a=n(1),r=n.n(a),o=n(6),i=n.n(o),c=n(591),l={children:i.a.node.isRequired,clipPath:i.a.node.isRequired,className:i.a.string};function u(t){var e=t.children,n=t.clipPath,o=t.className,i="mask_".concat(Object(c.a)());if(Array.isArray(e))throw new Error("A ClipMask may have only one child element");var l="url(#".concat(i,")"),u=Object(a.cloneElement)(e,{style:{clipPath:l,WebkitClipPath:l}});return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{preserveAspectRatio:"none",viewBox:"0 0 100 100","aria-hidden":"true",className:o,style:{pointerEvents:"none"}},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:i,clipPathUnits:"objectBoundingBox",transform:"scale(0.01 0.01)"},n))),u)}u.propTypes=l,u.defaultProps={className:""},e.a=u},535:function(t,e,n){"use strict";n.r(e);var a=n(1089),r=n(1757),o=n(1),i=n.n(o),c=n(723),l=n(444),u=n(3322),s=n(2),d=n(1756);function p(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"HubspotForm",function(){return b});var b=a.a;e.default={HubspotForm:a.a,HubspotService:r.a,init:function(){p(s.a.document.querySelectorAll('[data-component="ContactBanner"]')).forEach(function(t){var e=c.a.getDataFromElement(t,"contact");l.a.renderElementWrappedWithProvider(i.a.createElement(u.a,null,i.a.createElement(d.a,e)),t)})}}}}]);
//# sourceMappingURL=default~business~commonOld~courseView~cpf~dashboard~funding~funnel~jobGuarantee~mentorshipStudentDas~6999f9e1.919f6063c9bec1269ada.js.map