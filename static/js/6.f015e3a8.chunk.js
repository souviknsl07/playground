(this["webpackJsonpreact-native-elements-playground"]=this["webpackJsonpreact-native-elements-playground"]||[]).push([[6],{1036:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=p(n(0)),o=p(n(1040)),c=p(n(2));function p(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.default)({}),s=l.Provider,i=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return r.default.createElement(i,null,(function(t){return r.default.createElement(e,a({components:n||t},o))}))}};var m=function(e){var t=e.components,n=e.children;return r.default.createElement(s,{value:t},n)};m.propTypes={components:c.default.object.isRequired,children:c.default.element.isRequired},t.default=m},1037:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1038);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(1036);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},1038:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=s(o),p=s(n(1039)),l=n(1036);function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return i(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,o=void 0===r?{}:r,l=e.children,s=e.components,i=void 0===s?{}:s,m=e.Layout,f=e.layoutProps,d=i[n+"."+t]||i[t]||u[t]||t;return m?((0,p.default)(this,m),c.default.createElement(m,a({components:i},f),c.default.createElement(d,o,l))):c.default.createElement(d,o,l)}}]),t}(o.Component);t.default=(0,l.withMDXComponents)(f)},1039:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,i=s&&s(Object);e.exports=function e(t,n,m){if("string"!==typeof n){if(i){var u=s(n);u&&u!==i&&e(t,u,m)}var f=c(n);p&&(f=f.concat(p(n)));for(var d=0;d<f.length;++d){var h=f[d];if(!a[h]&&!r[h]&&(!m||!m[h])){var g=l(n,h);try{o(t,h,g)}catch(y){}}}return t}return t}},1040:function(e,t,n){"use strict";t.__esModule=!0;var a=o(n(0)),r=o(n(1041));function o(e){return e&&e.__esModule?e:{default:e}}t.default=a.default.createContext||r.default,e.exports=t.default},1041:function(e,t,n){"use strict";t.__esModule=!0;var a=n(0),r=(c(a),c(n(2))),o=c(n(1042));c(n(1043));function c(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,a){e=n,t.forEach((function(t){return t(e,a)}))}}}t.default=function(e,t){var n,c,m="__create-react-context-"+(0,o.default)()+"__",u=function(e){function n(){var t,a;p(this,n);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return t=a=l(this,e.call.apply(e,[this].concat(o))),a.emitter=i(a.props.value),l(a,t)}return s(n,e),n.prototype.getChildContext=function(){var e;return(e={})[m]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,a=e.value,r=void 0;((o=n)===(c=a)?0!==o||1/o===1/c:o!==o&&c!==c)?r=0:(r="function"===typeof t?t(n,a):1073741823,0!==(r|=0)&&this.emitter.set(e.value,r))}var o,c},n.prototype.render=function(){return this.props.children},n}(a.Component);u.childContextTypes=((n={})[m]=r.default.object.isRequired,n);var f=function(t){function n(){var e,a;p(this,n);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=a=l(this,t.call.apply(t,[this].concat(o))),a.state={value:a.getValue()},a.onUpdate=function(e,t){0!==((0|a.observedBits)&t)&&a.setState({value:a.getValue()})},l(a,e)}return s(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},n.prototype.componentDidMount=function(){this.context[m]&&this.context[m].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[m]&&this.context[m].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[m]?this.context[m].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(a.Component);return f.contextTypes=((c={})[m]=r.default.object,c),{Provider:u,Consumer:f}},e.exports=t.default},1042:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(58))},1043:function(e,t,n){"use strict";var a=n(1044);e.exports=a},1044:function(e,t,n){"use strict";function a(e){return function(){return e}}var r=function(){};r.thatReturns=a,r.thatReturnsFalse=a(!1),r.thatReturnsTrue=a(!0),r.thatReturnsNull=a(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},1064:function(e,t,n){"use strict";n.r(t);var a=n(174),r=n(0),o=n.n(r),c=n(1037);t.default=function(e){var t=e.components;Object(a.a)(e,["components"]);return o.a.createElement(c.MDXTag,{name:"wrapper",components:t},o.a.createElement(c.MDXTag,{name:"h2",components:t},"Props"),o.a.createElement(c.MDXTag,{name:"ul",components:t},o.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#containerStyle"}},o.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"containerStyle"))),o.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#isvisible"}},o.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"isVisible"))),o.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#modalprops"}},o.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"modalProps")))),o.a.createElement(c.MDXTag,{name:"hr",components:t}),o.a.createElement(c.MDXTag,{name:"h2",components:t},"Reference"),o.a.createElement(c.MDXTag,{name:"h3",components:t},o.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"containerStyle")),o.a.createElement(c.MDXTag,{name:"p",components:t},"Style of the bottom sheet's container"),o.a.createElement(c.MDXTag,{name:"p",components:t},"Use this to change the color of the underlay"),o.a.createElement(c.MDXTag,{name:"table",components:t},o.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"View style (object)"),o.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Internal Style")))),o.a.createElement(c.MDXTag,{name:"hr",components:t}),o.a.createElement(c.MDXTag,{name:"h3",components:t},o.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"isVisible")),o.a.createElement(c.MDXTag,{name:"p",components:t},"Is the modal component shown"),o.a.createElement(c.MDXTag,{name:"table",components:t},o.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"boolean"),o.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"false")))),o.a.createElement(c.MDXTag,{name:"hr",components:t}),o.a.createElement(c.MDXTag,{name:"h3",components:t},o.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"modalProps")),o.a.createElement(c.MDXTag,{name:"p",components:t},"Additional props handed to the ",o.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Modal")),o.a.createElement(c.MDXTag,{name:"table",components:t},o.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},o.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"https://reactnative.dev/docs/modal.html#props"}},"Modal Props")),o.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"{}")))))}}}]);
//# sourceMappingURL=6.f015e3a8.chunk.js.map