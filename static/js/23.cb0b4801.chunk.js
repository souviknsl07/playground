(this["webpackJsonpreact-native-elements-playground"]=this["webpackJsonpreact-native-elements-playground"]||[]).push([[23],{1036:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=p(a(0)),o=p(a(1040)),m=p(a(2));function p(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.default)({}),l=c.Provider,s=c.Consumer;t.withMDXComponents=function(e){return function(t){var a=t.components,o=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["components"]);return r.default.createElement(s,null,(function(t){return r.default.createElement(e,n({components:a||t},o))}))}};var i=function(e){var t=e.components,a=e.children;return r.default.createElement(l,{value:t},a)};i.propTypes={components:m.default.object.isRequired,children:m.default.element.isRequired},t.default=i},1037:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1038);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(n).default}});var r=a(1036);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},1038:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),m=l(o),p=l(a(1039)),c=a(1036);function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var g={inlineCode:"code",wrapper:"div"},T=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.parentName,r=e.props,o=void 0===r?{}:r,c=e.children,l=e.components,s=void 0===l?{}:l,i=e.Layout,T=e.layoutProps,D=s[a+"."+t]||s[t]||g[t]||t;return i?((0,p.default)(this,i),m.default.createElement(i,n({components:s},T),m.default.createElement(D,o,c))):m.default.createElement(D,o,c)}}]),t}(o.Component);t.default=(0,c.withMDXComponents)(T)},1039:function(e,t,a){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,m=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,s=l&&l(Object);e.exports=function e(t,a,i){if("string"!==typeof a){if(s){var g=l(a);g&&g!==s&&e(t,g,i)}var T=m(a);p&&(T=T.concat(p(a)));for(var D=0;D<T.length;++D){var M=T[D];if(!n[M]&&!r[M]&&(!i||!i[M])){var E=c(a,M);try{o(t,M,E)}catch(X){}}}return t}return t}},1040:function(e,t,a){"use strict";t.__esModule=!0;var n=o(a(0)),r=o(a(1041));function o(e){return e&&e.__esModule?e:{default:e}}t.default=n.default.createContext||r.default,e.exports=t.default},1041:function(e,t,a){"use strict";t.__esModule=!0;var n=a(0),r=(m(n),m(a(2))),o=m(a(1042));m(a(1043));function m(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(a,n){e=a,t.forEach((function(t){return t(e,n)}))}}}t.default=function(e,t){var a,m,i="__create-react-context-"+(0,o.default)()+"__",g=function(e){function a(){var t,n;p(this,a);for(var r=arguments.length,o=Array(r),m=0;m<r;m++)o[m]=arguments[m];return t=n=c(this,e.call.apply(e,[this].concat(o))),n.emitter=s(n.props.value),c(n,t)}return l(a,e),a.prototype.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},a.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var a=this.props.value,n=e.value,r=void 0;((o=a)===(m=n)?0!==o||1/o===1/m:o!==o&&m!==m)?r=0:(r="function"===typeof t?t(a,n):1073741823,0!==(r|=0)&&this.emitter.set(e.value,r))}var o,m},a.prototype.render=function(){return this.props.children},a}(n.Component);g.childContextTypes=((a={})[i]=r.default.object.isRequired,a);var T=function(t){function a(){var e,n;p(this,a);for(var r=arguments.length,o=Array(r),m=0;m<r;m++)o[m]=arguments[m];return e=n=c(this,t.call.apply(t,[this].concat(o))),n.state={value:n.getValue()},n.onUpdate=function(e,t){0!==((0|n.observedBits)&t)&&n.setState({value:n.getValue()})},c(n,e)}return l(a,t),a.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},a.prototype.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},a.prototype.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},a.prototype.getValue=function(){return this.context[i]?this.context[i].get():e},a.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},a}(n.Component);return T.contextTypes=((m={})[i]=r.default.object,m),{Provider:g,Consumer:T}},e.exports=t.default},1042:function(e,t,a){"use strict";(function(t){var a="__global_unique_id__";e.exports=function(){return t[a]=(t[a]||0)+1}}).call(this,a(58))},1043:function(e,t,a){"use strict";var n=a(1044);e.exports=n},1044:function(e,t,a){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},1048:function(e,t,a){"use strict";a.r(t);var n=a(174),r=a(0),o=a.n(r),m=a(1037);t.default=function(e){var t=e.components;Object(n.a)(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:t},o.a.createElement(m.MDXTag,{name:"h2",components:t},"Props"),o.a.createElement(m.MDXTag,{name:"blockquote",components:t},o.a.createElement(m.MDXTag,{name:"p",components:t,parentName:"blockquote"},"Also receives all\n",o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://reactnative.dev/docs/touchablenativefeedback.html#props"}},"TouchableNativeFeedback"),"\n(Android) or\n",o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://reactnative.dev/docs/touchableopacity.html#props"}},"TouchableOpacity"),"\n(iOS) props")),o.a.createElement(m.MDXTag,{name:"ul",components:t},o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#activeopacity"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"activeOpacity"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#caption"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"caption"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#captionstyle"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"captionStyle"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#containerstyle"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"containerStyle"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#contentcontainerstyle"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"contentContainerStyle"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#featured"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"featured"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#height"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"height"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#icon"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"icon"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#iconcontainerstyle"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"iconContainerStyle"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#imagecomponent"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"ImageComponent"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#imagecontainerstyle"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"imageContainerStyle"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#imageprops"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"imageProps"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#imagesrc"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"imageSrc"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#onpress"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"onPress"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#overlaycontainerstyle"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"overlayContainerStyle"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#title"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"title"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#titlenumberoflines"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"titleNumberOfLines"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#titlestyle"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"titleStyle"))),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#width"}},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"width")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h2",components:t},"Reference"),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"activeOpacity")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Number passed to control opacity on press (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"number"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"0.2")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"caption")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Text inside the tilt when tile is featured"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"string ",o.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"td"},"OR")," React element or component"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"captionStyle")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Styling for the caption (optional); You only use this if ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"caption")," is a string"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"object (style)"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"containerStyle")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Styling for the outer tile container (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"object (style)"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"contentContainerStyle")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Styling for bottom container when not featured tile (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"object (style)"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"featured")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Changes the look of the tile (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"boolean"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"false")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"height")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Height for the tile"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"number"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Device Width ","*"," 0.8")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"icon")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Icon Component Props (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"object {name: string, color: string, size: number, type: string (default is material, or choose from ",o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"icon.md#available-icon-sets"}},"supported icon sets"),"), iconStyle: object(style)}"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"iconContainerStyle")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Styling for the outer icon container (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"object (style)"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"ImageComponent")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Custom ImageComponent for Tile"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"React component or element"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"BackgroundImage")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"imageContainerStyle")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Styling for the image (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"object (style)"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"imageProps")),o.a.createElement(m.MDXTag,{name:"p",components:t},'Optional properties to pass to the image if provided e.g "resizeMode" (options)'),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"{",o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"td",props:{href:"image.md#props"}},"...Image props"),"}"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"imageSrc")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Source for the image (required)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"object (image)"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"onPress")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Function to call when tile is pressed (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"function (event)"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"overlayContainerStyle")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Styling for the overlay container when using featured tile (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"View style (object)"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"title")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Text inside the tile (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"string"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"titleNumberOfLines")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Number of lines for Title"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"number"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"titleStyle")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Styling for the title (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"object (style)"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"none")))),o.a.createElement(m.MDXTag,{name:"hr",components:t}),o.a.createElement(m.MDXTag,{name:"h3",components:t},o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"h3"},"width")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Width for the tile (optional)"),o.a.createElement(m.MDXTag,{name:"table",components:t},o.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Type"),o.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:"center"}},"Default"))),o.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"number"),o.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:"center"}},"Device Width")))))}}}]);
//# sourceMappingURL=23.cb0b4801.chunk.js.map