module.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=6)}([function(t,e){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,e){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},function(t,e,i){"use strict";var n=i(0),r=i.n(n);function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=i(1),a=i.n(s),u=i(2),c=i.n(u),l=i(3),p=i.n(l),f=i(4),d=function(t){var e,i;function n(){return t.apply(this,arguments)||this}i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,o(e,i);var r=n.prototype;return r.oninit=function(e){var i,n,r;t.prototype.oninit.call(this,e),this.monthlyCounts=app.forum.attribute("miniflar-top-like-givers-widget.data"),null!=(i=this.attrs.state).users||(i.users=[]),null!=(n=this.attrs.state).isLoading||(n.isLoading=!1),null!=(r=this.attrs.state).hasLoaded||(r.hasLoaded=!1)},r.oncreate=function(e){t.prototype.oncreate.call(this,e),this.attrs.state.hasLoaded||this.load()},r.className=function(){return"MiniFLAR-TopLikeGiversWidget"},r.icon=function(){return"fas fa-thumbs-up"},r.title=function(){return app.translator.trans("miniflar-top-like-givers-widget.forum.widget.title")},r.description=function(){return""},r.content=function(){var t=this;if(this.attrs.state.isLoading)return m(a.a,null);var e=this.attrs.state.users.sort((function(e,i){return t.monthlyCounts[i.id()]-t.monthlyCounts[e.id()]}));return m("div",{className:"MiniFLAR-TopLikeGiversWidget-users"},e.map((function(e){return m("div",{className:"MiniFLAR-TopLikeGiversWidget-users-item"},m("div",{className:"MiniFLAR-TopLikeGiversWidget-users-item-avatar"},c()(e)),m("div",{className:"MiniFLAR-TopLikeGiversWidget-users-item-content"},m("div",{className:"MiniFLAR-TopLikeGiversWidget-users-item-name"},e.displayName()),m("div",{className:"MiniFLAR-TopLikeGiversWidget-users-item-value"},p()("fas fa-thumbs-up")," ",t.monthlyCounts[e.id()])))})))},r.load=function(){var t=this;this.attrs.state.isLoading=!0,app.store.find("users",{filter:{top_like_givers:!0}}).then((function(e){t.attrs.state.users=e,t.attrs.state.isLoading=!1,t.attrs.state.hasLoaded=!0,m.redraw()}))},n}(i.n(f).a);e.a=function(t){(new r.a).add({key:"topLikeGivers",component:d,isDisabled:function(){var e=t.forum.attribute("miniflar-top-like-givers-widget.data");return!t.forum.attribute("canSearchUsers")||!e||!Object.keys(e).length},isUnique:!0,placement:"end",position:3}).extend(t,"miniflar-top-like-givers-widget")}},function(t,e,i){"use strict";i.r(e);var n=i(5);app.initializers.add("miniflar/top-like-givers-widget",(function(){Object(n.a)(app)}))}]);
//# sourceMappingURL=forum.js.map