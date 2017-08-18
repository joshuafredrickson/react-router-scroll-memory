"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=_interopDefault(require("react")),reactRouterDom=require("react-router-dom"),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ScrollMemory=function(e){function t(o){classCallCheck(this,t);var r=possibleConstructorReturn(this,e.call(this,o));return r.scrollElement=r.scrollElement.bind(r),r.saveUrl=r.saveUrl.bind(r),r.url=[],r.scrollTo=0,r}return inherits(t,e),t.getScrollPage=function(){var e=0;return document.documentElement&&null!==document.documentElement&&(e=document.documentElement.scrollTop),window.pageYOffset||e},t.prototype.componentWillReceiveProps=function(e){if("undefined"!=typeof window){var o=this.props.location,r=e.location,n=r!==o,l=t.getScrollPage();if(this.scrollTo=0,n){var i=this.url[0]||{pathname:"",scroll:0};i&&i.pathname===r.pathname&&(this.scrollTo=i.scroll),this.scrollElement(),this.saveUrl(o,l)}}},t.prototype.saveUrl=function(e,t){this.url.unshift({pathname:e.pathname,scroll:t}),this.url=this.url.slice(0,2)},t.prototype.scrollElement=function(){var e=this;window.requestAnimationFrame(function(){window.scrollTo(0,e.scrollTo)})},t.prototype.render=function(){return null},t}(React.Component),index=reactRouterDom.withRouter(ScrollMemory);module.exports=index;
