(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{rRDx:function(e,i,t){"use strict";t.r(i),t.d(i,"IonSplitPane",function(){return r});var n=t("HHlg"),s="split-pane-main",o="split-pane-side",a={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},r=function(){function e(){this.visible=!1,this.disabled=!1,this.when=a.lg}return e.prototype.visibleChanged=function(e){var i={visible:e,isPane:this.isPane.bind(this)};this.ionChange.emit(i),this.ionSplitPaneVisible.emit(i)},e.prototype.componentDidLoad=function(){this.styleChildren(),this.updateState()},e.prototype.componentDidUnload=function(){this.rmL&&(this.rmL(),this.rmL=void 0)},e.prototype.updateState=function(){var e=this;if(!this.isServer)if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)this.visible=!1;else{var i=this.when;if("boolean"!=typeof i){var t=a[i]||i;if(0!==t.length){var n=function(i){e.visible=i.matches},s=this.win.matchMedia(t);s.addListener(n),this.rmL=function(){return s.removeListener(n)},this.visible=s.matches}else this.visible=!1}else this.visible=i}},e.prototype.isPane=function(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains(o)},e.prototype.styleChildren=function(){if(!this.isServer){for(var e=this.el.children,i=this.el.childElementCount,t=!1,n=0;n<i;n++){var s=e[n],o=s.hasAttribute("main");if(o){if(t)return void console.warn("split pane can not have more than one main node");t=!0}l(s,o)}t||console.warn("split pane could not found any main node")}},e.prototype.hostData=function(){return{class:Object.assign({},Object(n.k)(this.mode,"split-pane"),{"split-pane-visible":this.visible})}},Object.defineProperty(e,"is",{get:function(){return"ion-split-pane"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled",watchCallbacks:["updateState"]},el:{elementRef:!0},isServer:{context:"isServer"},visible:{state:!0,watchCallbacks:["visibleChanged"]},when:{type:"Any",attr:"when",watchCallbacks:["updateState"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionSplitPaneVisible",method:"ionSplitPaneVisible",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-md{--border:1px solid var(--ion-item-border-color,var(--ion-border-color,rgba(0,0,0,0.13)))}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function l(e,i){var t,n;i?(t=s,n=o):(t=o,n=s);var a=e.classList;a.add(t),a.remove(n)}}}]);