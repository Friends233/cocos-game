window.__require=function t(e,o,n){function i(c,a){if(!o[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var l="function"==typeof __require&&__require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var u=o[c]={exports:{}};e[c][0].call(u.exports,function(t){return i(e[c][1][t]||t)},u,u.exports,t,e,o,n)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({GameConfig:[function(t,e,o){"use strict";cc._RF.push(e,"2197dXlmixCibGa45Vyz3hP","GameConfig"),Object.defineProperty(o,"__esModule",{value:!0}),o.BLOCK_STATE=o.Config=o.CUSTOM_EVENT=void 0,o.CUSTOM_EVENT={GAME_OVER:"GAME_OVER",NEXT_LEVEL:"NEXT_LEVEL",PASS_LEVEL:"PASS_LEVEL",GAME_START:"GAME_START",GAME_INIT:"GAME_INIT",GAME_DESTROY:"GAME_DESTROY",ADD_SCORE:"ADD_SCORE",SET_BLOCK:"SET_BLOCK",CHECK_IS_SET:"CHECK_IS_SET",START_GUIDE:"START_GUIDE",GUIDE_OVER:"GUIDE_OVER"},o.Config={maxRow:10,maxCol:10,setBlockColor:"#ffd84f",miniBlockColor:"#ffc34f",miniBlockDisabledColor:"#CB9C42",defaultColor:"#8FBABA",blockAniDelay:35,blockMaxOffset:29,blockManagerDragOffsetY:150,miniBlockOffset:2,miniBlockW:33.5,miniBlockMatrix:[[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,0],[0,0,1,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,0],[0,0,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,0],[0,0,0,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,1,0],[0,0,1,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,1,1,1,0],[0,1,0,0,0],[0,1,0,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,1,0,0,0],[0,1,0,0,0],[0,1,1,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,1,0],[0,0,0,1,0],[0,1,1,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,1,1,1,0],[0,0,0,1,0],[0,0,0,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,1,1,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,1,0],[0,0,1,1,0],[0,0,0,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,1,0],[0,0,1,1,0],[0,0,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,0,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,1,0,0],[0,1,1,1,0],[0,0,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,0],[0,1,1,0,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,0,0],[0,0,1,1,0],[0,0,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0]],[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]]],guideBlockMatrix:[[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0]]},function(t){t[t.EMPTY=0]="EMPTY",t[t.NON_EMPTY=1]="NON_EMPTY"}(o.BLOCK_STATE||(o.BLOCK_STATE={})),cc._RF.pop()},{}],GameScene:[function(t,e,o){"use strict";cc._RF.push(e,"5798dhpwtNHQq2OXS4At/jG","GameScene");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},c=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./Config/GameConfig"),s=t("./exportEvent"),l=cc._decorator,u=l.ccclass,f=l.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultBlock=null,e.gameConfig=r({},a.Config),e.blockMatrix=null,e.score=0,e.setBlockNum=0,e.isGuide=!1,e.allBlcokManagerNode=[],e.isGameOver=!1,e}return i(e,t),e.prototype.onLoad=function(){},e.prototype.start=function(){var t=this;this.blockMatrix=cc.find("blockMatrix",this.node);var e=this.gameConfig;e.maxRow,e.maxCol,this.allBlcokManagerNode=["miniBlockWrpLeft","miniBlockWrpMid","miniBlockWrpRight"].map(function(e){return cc.find(e,t.node)}),cc.find("guideWrp",this.node).active=!1,this.setDefaultBlock([]),this.addNodeEvent()},e.prototype.setDefaultBlock=function(t){void 0===t&&(t=[]),t=Array.isArray(t)?t:[];var e=this.gameConfig,o=e.maxRow,n=e.maxCol,i=this.blockMatrix;i.removeAllChildren();for(var r=0;r<o;r++)for(var c=0;c<n;c++){var s=cc.instantiate(this.defaultBlock),l=s.getComponent("block");l.changeBlockState(a.BLOCK_STATE.EMPTY),t.includes(o*r+c)&&l.changeBlockState(a.BLOCK_STATE.NON_EMPTY),s.setParent(i)}},e.prototype.startGuide=function(){this.isGuide=!0,cc.find("guideWrp",this.node).active=!0,this.setDefaultBlock([0,10,20,30,40,50,60,70,80,95,96,97,98,99]),this.allBlcokManagerNode.forEach(function(t,e){var o=t.getComponent("blockManager");0==e?o.refreshMiniBlock(!1,a.Config.guideBlockMatrix):o.setNodeState(1)})},e.prototype.addNodeEvent=function(){var t,e=this;this.node.on(a.CUSTOM_EVENT.ADD_SCORE,this.addScore,this),this.node.on(a.CUSTOM_EVENT.SET_BLOCK,this.setBlockEventCb,this),this.node.on(a.CUSTOM_EVENT.CHECK_IS_SET,this.checkIsSetBlock,this),s.default.on(a.CUSTOM_EVENT.NEXT_LEVEL,this.nextLevel,this),s.default.on(a.CUSTOM_EVENT.START_GUIDE,this.startGuide,this),s.default.on(a.CUSTOM_EVENT.GAME_INIT,function(t){var o=t.detail,n=void 0===o?{}:o;e.resetConfig(n)},this),s.default.on(a.CUSTOM_EVENT.GAME_DESTROY,function(){e.node.destroy()},this),window.addEventListener("message",function(t){var e=t.data;console.log("cocos\u6536\u5230\u7684\u6d88\u606f",e,t)});var o=null===(t=null===window||void 0===window?void 0:window.location)||void 0===t?void 0:t.href,n=cc.find("test",this.node);if(n.active=!0,(null==o?void 0:o.includes("duibadev"))||(null==o?void 0:o.includes("duibatest"))||o.includes("localhost")){var i={refreshProp:"refreshStageProps",start:"startGuide",init:"testInit",clear:"setDefaultBlock",radom:"testRadom",submit:"gameOver"};n.children.forEach(function(t){var o=null==e?void 0:e[i[t.name]];t.on(cc.Node.EventType.TOUCH_END,o,e)})}},e.prototype.testRadom=function(){for(var t=this.gameConfig,e=t.maxCol,o=t.maxRow,n=[],i=function(t){n.push.apply(n,Array(6).fill("").map(function(e,n){return n+1+(t+1)*o}))},r=0;r<e-2;r++)i(r);this.setDefaultBlock(n)},e.prototype.testStartGame=function(){console.log("\u6d4b\u8bd5"),s.default.fire(a.CUSTOM_EVENT.GAME_START)},e.prototype.testInit=function(){console.log("\u6d4b\u8bd5\u521d\u59cb\u5316"),s.default.fire(a.CUSTOM_EVENT.GAME_INIT,{})},e.prototype.addScore=function(){this.score+=1,this.setLable("score",this.score)},e.prototype.startGame=function(t){t.detail,this.startGuide()},e.prototype.resetConfig=function(t){void 0===t&&(t={}),this.gameConfig=r(r({},a.Config),t),this.score=0,this.setBlockNum=0,this.isGameOver=!1,this.setLable("score",0),this.setLable("bestScore","\u5386\u53f2\u6700\u9ad8\u5206\uff1a"+(t.bestScore||0)),this.setLable("goldCoin",(t.goldCoin||0)+""),this.setDefaultBlock(),this.refreshStageProps()},e.prototype.gameOver=function(){this.isGameOver=!0,console.log("gameOver"),s.default.fire(a.CUSTOM_EVENT.GAME_OVER,{score:this.score})},e.prototype.setLable=function(t,e){cc.find(t,this.node).getComponent(cc.Label).string=e+""},e.prototype.onDestroy=function(){this.unschedule(this.startCd)},e.prototype.setBlockEventCb=function(){this.checkIsSetBlock(),this.setBlockNum++,this.setBlockNum>=3&&this.refreshStageProps(),this.isCheckGameOver(),this.isGuide?(this.setBlockNum--,this.isGuide=!1,cc.find("guideWrp/guide1",this.node).active=!1,cc.find("guideWrp/guide2",this.node).opacity=255,this.allBlcokManagerNode[0].getComponent("blockManager").refreshMiniBlock(!0),s.default.fire(a.CUSTOM_EVENT.GUIDE_OVER)):cc.find("guideWrp",this.node).active=!1},e.prototype.isCheckGameOver=function(){var t=this;this.scheduleOnce(function(){0===t.allBlcokManagerNode.filter(function(t){var e=t.getComponent("blockManager");return!(e.isDisabled||0===e.miniBlockKey.length)}).length&&t.gameOver()},.8)},e.prototype.checkIsSetBlock=function(){this.allBlcokManagerNode.filter(function(t){t.getComponent("blockManager").checkIsSetBlock()})},e.prototype.refreshStageProps=function(){this.setBlockNum=0,this.allBlcokManagerNode.filter(function(t){t.getComponent("blockManager").refreshMiniBlock(!0)})},e.prototype.update=function(){!this.isGameOver&&this.isStartGame},c([f(cc.Prefab)],e.prototype,"defaultBlock",void 0),c([u],e)}(cc.Component);o.default=h,cc._RF.pop()},{"./Config/GameConfig":"GameConfig","./exportEvent":"exportEvent"}],ImgFixedSize:[function(t,e,o){"use strict";cc._RF.push(e,"3ea067CJuhGxJmUsuZZ1Xje","ImgFixedSize");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,s=c.property,l=c.menu,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._fixedSize=1,e}return i(e,t),Object.defineProperty(e.prototype,"fixedSize",{get:function(){return this._fixedSize},set:function(t){this._fixedSize=t,this.onSizeChanged()},enumerable:!1,configurable:!0}),e.prototype.onLoad=function(){this._fixedSize=this.fixedSize,this.node.on(cc.Node.EventType.SIZE_CHANGED,this.onSizeChanged,this),this.onSizeChanged()},e.prototype.onSizeChanged=function(){var t=this.node.width,e=this.node.height,o=Math.max(t,e);this.node.scale=this.fixedSize/o},r([s({type:cc.Integer,tooltip:"\u56fa\u5b9a\u5c3a\u5bf8"})],e.prototype,"fixedSize",null),r([s({type:cc.Integer,tooltip:"\u56fa\u5b9a\u5c3a\u5bf8"})],e.prototype,"_fixedSize",void 0),r([a,l("framework/ImgFixedSize")],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],blockManager:[function(t,e,o){"use strict";cc._RF.push(e,"15dc8zLZKZGHoOAWrl8CvIO","blockManager");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},c=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function c(t){try{s(n.next(t))}catch(e){r(e)}}function a(t){try{s(n.throw(t))}catch(e){r(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(c,a)}s((n=n.apply(t,e||[])).next())})},a=this&&this.__generator||function(t,e){var o,n,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(t){return function(e){return s([t,e])}}function s(r){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,n=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=e.call(t,c)}catch(a){r=[6,a],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},s=this&&this.__spreadArrays||function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<o;e++)for(var r=arguments[e],c=0,a=r.length;c<a;c++,i++)n[i]=r[c];return n};Object.defineProperty(o,"__esModule",{value:!0});var l=t("./Config/GameConfig"),u=t("./propPool"),f=t("./utils"),h=cc._decorator,p=h.ccclass,d=h.property,v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isMove=!1,e.viewWidth=0,e.viewHeight=0,e.blockMatrix=null,e.defaultPos=null,e.addScoreEvent=null,e.setBlockEvent=null,e.checkIsSet=null,e.miniBlockKey=[],e.isDisabled=!1,e.miniBlockPre=null,e.isBlcokClearAni=!1,e.setAudio=null,e.clearAudio=null,e}return i(e,t),e.prototype.start=function(){this.viewHeight=cc.view.getVisibleSize().height,this.viewWidth=cc.view.getVisibleSize().width,this.defaultPos=this.node.getPosition(),this.addScoreEvent=new cc.Event.EventCustom(l.CUSTOM_EVENT.ADD_SCORE,!0),this.setBlockEvent=new cc.Event.EventCustom(l.CUSTOM_EVENT.SET_BLOCK,!0),this.checkIsSet=new cc.Event.EventCustom(l.CUSTOM_EVENT.CHECK_IS_SET,!0),this.blockMatrix=cc.find("blockMatrix",this.node.parent),this.refreshMiniBlock(),this.addNodeEvent()},e.prototype.refreshMiniBlock=function(t,e){var o=this,n=[];n=e?s(e):f.getRandomArrayElements(l.Config.miniBlockMatrix,1)[0],this.miniBlockKey=JSON.parse(JSON.stringify(n)),this.node.removeAllChildren();var i=l.Config.miniBlockOffset,r=l.Config.miniBlockW,c=n.length,a=0,h=Array(c).fill(0);n.forEach(function(t,e){var n=0;t.map(function(t,a){if(1==t){h[a]++,n++;var s=u.default.isEmpyt?cc.instantiate(o.miniBlockPre):u.default.pop(),l=i+r;s.x=a*l-o.node.width/2+i+r/2,s.y=(c-e-1)*l-o.node.width/2+i+r/2,s.setParent(o.node)}}),n>a&&(a=n)}),a%2==0&&this.node.children.forEach(function(t){t.x-=r/2}),Math.max.apply(Math,h)%2==0&&this.node.children.forEach(function(t){t.y+=r/2}),t&&cc.tween(this.node).to(.3,{opacity:255,position:this.defaultPos}).start(),this.checkIsSetBlock()},e.prototype.setBlockMatrixAll=function(){var t=this;this.isMove=!1;var e=this.node.children;if(this.isSetBlockMartix())return e.forEach(function(e){e.getComponent("miniBlock").setBlockMatrix(),cc.find("Canvas").dispatchEvent(t.addScoreEvent)}),this.clearAllChildren(),this.checkBlockMatrix(),cc.audioEngine.play(this.setAudio,!1,1),void cc.find("Canvas").dispatchEvent(this.setBlockEvent);this.node.setPosition(this.defaultPos),this.node.scale=1},e.prototype.clearAllChildren=function(){this.miniBlockKey=[],this.node.children.forEach(function(t){u.default.push(t)}),this.node.removeAllChildren(),this.node.opacity=0,this.node.setPosition(this.defaultPos.x,this.defaultPos.y-100),this.node.scale=1,this.setNodeState(1)},e.prototype.checkBlockMatrix=function(){for(var t=this.blockMatrix.children.map(function(t){var e=t.getComponent("block");return{node:t,script:e,blockState:e.blockState,idx:t.getSiblingIndex()}}),e=l.Config.maxCol,o=l.Config.maxRow,n=[],i=0;i<e;i++)for(var r=[],c=0;c<o&&(a=t[c+i*e]).blockState===l.BLOCK_STATE.NON_EMPTY;c++)r.push(a),r.length===o&&n.push(r);for(i=0;i<o;i++)for(r=[],c=0;c<e;c++){var a;if((a=t[i+c*o]).blockState!==l.BLOCK_STATE.NON_EMPTY)break;r.push(a),r.length===e&&n.push(r)}return this.clearMatrixBlock(n),n.length>0},e.prototype.clearMatrixBlock=function(t){var e=this,o=function(t){return c(e,void 0,void 0,function(){var e=this;return a(this,function(n){switch(n.label){case 0:return 0===t.length?[2]:(t.pop().script.playClearAni(function(){cc.find("Canvas").dispatchEvent(e.addScoreEvent),0==t.length&&cc.find("Canvas").dispatchEvent(e.checkIsSet)}),[4,f.waitTime(l.Config.blockAniDelay)]);case 1:return n.sent(),o(t),[2]}})})};t.length>0&&cc.audioEngine.play(this.clearAudio,!1,1),t.forEach(function(t){o(t)})},e.prototype.checkIsSetBlock=function(){var t=this.blockMatrix.children.filter(function(t){return(t=t.getComponent("block")).blockState===l.BLOCK_STATE.EMPTY}).map(function(t){return t.getSiblingIndex()});if(0!==this.miniBlockKey.length){for(var e=0;e<t.length;e++){for(var o=t[e],n=Math.trunc(o/10),i=o%10,r=-1,c=-1,a=!1,s=0;s<this.miniBlockKey.length&&!a;s++)for(var u=this.miniBlockKey[s],f=0;f<u.length;f++)if(u[f]===l.BLOCK_STATE.NON_EMPTY)if(-1==r&&-1==c)r=s,c=f;else{var h=n+(s-r),p=i+(f-c),d=p+10*h;(h<0||p<0||d<0||h>=10||p>=10||!t.includes(d))&&(a=!0)}if(!a)return void this.setNodeState(0)}this.setNodeState(1)}else this.setNodeState(1)},e.prototype.setNodeState=function(t){var e=this.isDisabled=0!=t;this.node.children.forEach(function(t){t.color=cc.color(e?l.Config.miniBlockDisabledColor:l.Config.miniBlockColor)})},e.prototype.isSetBlockMartix=function(){for(var t=this.node.children,e=[],o=0;o<t.length;o++){var n=t[o].getComponent("miniBlock").getTargetMatrix(),i=n.targetPos;if(!(s=n.targetNode))return!1;e.push({targetPos:i,targetNode:s})}var r=0===e.filter(function(t){return t.targetNode.getComponent("block").blockState===l.BLOCK_STATE.NON_EMPTY}).length;if(!r)return!1;var c=e.map(function(t){return t.targetNode.getSiblingIndex()}),a=c.find(function(t,e){return c.includes(t,e+1)});if(cc.find("Canvas").getComponent("GameScene").isGuide&&!a&&r){var s=(null==e?void 0:e[0]).targetNode;if(90!==c[0])return!1}return!a&&r},e.prototype.nodeReset=function(){this.node.setPosition(this.defaultPos),this.node.scale=1},e.prototype.addNodeEvent=function(){var t=this;this.node.on(cc.Node.EventType.TOUCH_START,function(){1!=t.isDisabled&&(t.isMove=!0,t.node.scale=1.7)},this),this.node.on(cc.Node.EventType.TOUCH_END,function(){t.isMove&&t.setBlockMatrixAll()},this),cc.find("Canvas").on(cc.Node.EventType.TOUCH_END,function(){t.isMove&&t.setBlockMatrixAll()}),cc.find("Canvas").on(cc.Node.EventType.TOUCH_CANCEL,function(){t.isMove&&t.setBlockMatrixAll()}),cc.find("Canvas").on(cc.Node.EventType.MOUSE_LEAVE,function(){t.isMove&&t.setBlockMatrixAll()}),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){if(t.isMove){var o=e.getPreviousLocation(),n=t.viewWidth,i=t.viewHeight;if(o.x<0||o.x>n||o.y>i-200||o.y<0)return t.isMove=!1,void t.nodeReset();t.node.setPosition(o.x-n/2,o.y-(812-(1624-i)/2)+l.Config.blockManagerDragOffsetY)}},this)},r([d(cc.Prefab)],e.prototype,"miniBlockPre",void 0),r([d(cc.AudioClip)],e.prototype,"setAudio",void 0),r([d(cc.AudioClip)],e.prototype,"clearAudio",void 0),r([p],e)}(cc.Component);o.default=v,cc._RF.pop()},{"./Config/GameConfig":"GameConfig","./propPool":"propPool","./utils":"utils"}],block:[function(t,e,o){"use strict";cc._RF.push(e,"6e215zrjgRBjK+Ok76dz8gM","block");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./Config/GameConfig"),a=cc._decorator,s=a.ccclass,l=(a.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.blockState=c.BLOCK_STATE.EMPTY,e.ani=null,e.aniDuration=0,e.speed=.9,e}return i(e,t),e.prototype.start=function(){this.ani=this.node.getComponent(cc.Animation);var t=this.ani.getAnimationState("blockBoom");this.aniDuration=t.duration},e.prototype.playClearAni=function(t){var e=this,o=this.ani;this.ani.getAnimationState("blockBoom").speed=this.speed,o.once("finished",function(){e.changeBlockState(c.BLOCK_STATE.EMPTY),null==t||t()}),o.play()},e.prototype.changeBlockState=function(t){this.node.scale=1,this.blockState=t,this.node.color=cc.color(t===c.BLOCK_STATE.NON_EMPTY?c.Config.setBlockColor:c.Config.defaultColor)},r([s],e)}(cc.Component));o.default=l,cc._RF.pop()},{"./Config/GameConfig":"GameConfig"}],exportEvent:[function(t,e,o){"use strict";cc._RF.push(e,"d252b/Dmr1HLLC3k85LvdL5","exportEvent"),Object.defineProperty(o,"__esModule",{value:!0}),o.EventCenterClass=void 0;var n=function(t,e,o){this.type=t,this.target=e,this.detail=o,this.timeStamp=+new Date},i=function(){function t(){this._listeners={}}return t.prototype.on=function(t,e,o,n){for(var i,r=(i=this._listeners=this._listeners||{})[t]=i[t]||[],c=0,a=r.length;c<a;c++)if(r[c].listener===e)return;return r.push({listener:e,context:o,once:n}),this},t.prototype.off=function(t,e){var o;if(o=this._listeners=this._listeners||{},0==arguments.length)return o=null,this;var n=o&&o[t];if(n){if(1==arguments.length)return delete o[t],this;for(var i=0,r=n.length;i<r;i++){var c=n[i];if(c.listener===e){n.splice(i,1),0===n.length&&delete o[t];break}}}return this},t.prototype.fire=function(t,e){var o,i;"string"==typeof t?i=t:(o=t,i=t.type);var r=this._listeners;if(!r)return!1;var c=r[i];if(c){var a=c.slice(0);o=o||new n(i,this,e);for(var s=0;s<a.length;s++){var l=a[s];if(l.listener.call(l.context,o),l.once){var u=c.indexOf(l);u>-1&&c.splice(u,1)}}return 0==c.length&&delete r[i],!0}return!1},t}();o.EventCenterClass=i;var r=new i;cc.EventBus=r,o.default=r,cc._RF.pop()},{}],miniBlock:[function(t,e,o){"use strict";cc._RF.push(e,"b1207cbMWhNVLKTFVfAq/t2","miniBlock");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./Config/GameConfig"),a=cc._decorator,s=a.ccclass,l=(a.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isMove=!1,e.viewWidth=0,e.viewHeight=0,e.targetNode=null,e}return i(e,t),e.prototype.start=function(){this.viewHeight=cc.view.getVisibleSize().height,this.viewWidth=cc.view.getVisibleSize().width},e.prototype.getTargetMatrix=function(){var t=this.node.parent.convertToWorldSpaceAR(this.node.getPosition()),e=(cc.find("blockMatrix",this.node.parent.parent),this.posFindBlock(t)),o=e.targetPos,n=e.targetNode;return this.targetNode=n,{targetPos:o,targetNode:n}},e.prototype.setBlockMatrix=function(){this.targetNode.getComponent("block").changeBlockState(c.BLOCK_STATE.NON_EMPTY)},e.prototype.posFindBlock=function(t){var e=cc.find("blockMatrix",this.node.parent.parent),o=c.Config.blockMaxOffset,n=-1,i=e.children.map(function(i,r){var c=e.convertToWorldSpaceAR(i.getPosition()),a=Math.sqrt(Math.pow(c.x-t.x,2)+Math.pow(c.y-t.y,2));return a<o&&(o=a,n=r),{nodePos:c,node:i}});return-1===n?{}:{targetPos:i[n].nodePos,targetNode:i[n].node}},r([s],e)}(cc.Component));o.default=l,cc._RF.pop()},{"./Config/GameConfig":"GameConfig"}],propPool:[function(t,e,o){"use strict";cc._RF.push(e,"4aa71yimutPW6m+/Bh2NXn9","propPool"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){this.pool=[],this._isEmpyt=!0}return Object.defineProperty(t.prototype,"isEmpyt",{get:function(){var t;return!(null===(t=this.pool)||void 0===t?void 0:t.length)},enumerable:!1,configurable:!0}),t.prototype.push=function(t){t.active=!1,this.pool.push(t)},t.prototype.pop=function(){if(0===this.pool.length)return null;var t=this.pool.pop();return t.active=!0,t},t}();o.default=new n,cc._RF.pop()},{}],utils:[function(t,e,o){"use strict";cc._RF.push(e,"6aca3erpIVPLpMW4bJwDRR6","utils");var n=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function c(t){try{s(n.next(t))}catch(e){r(e)}}function a(t){try{s(n.throw(t))}catch(e){r(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(c,a)}s((n=n.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var o,n,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(t){return function(e){return s([t,e])}}function s(r){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,n=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=e.call(t,c)}catch(a){r=[6,a],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},r=this&&this.__spreadArrays||function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<o;e++)for(var r=arguments[e],c=0,a=r.length;c<a;c++,i++)n[i]=r[c];return n};function c(t,e){return Math.floor(Math.random()*(e-t))+t}Object.defineProperty(o,"__esModule",{value:!0}),o.getUrlParam=o.getProbability=o.getRandomArrayElements=o.randomNum=o.loadGameResources=o.numToChinese=o.set16ToRgb=o.waitTime=void 0,o.waitTime=function(t){return new Promise(function(e){return setTimeout(e,t)})},o.set16ToRgb=function(t){if(t&&/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(t)){var e=t.toLowerCase().replace(/\#/g,""),o=e.length;if(3==o){for(var n="",i=0;i<o;i++)n+=e.slice(i,i+1).concat(e.slice(i,i+1));e=n}var r=[];for(i=0;i<6;i+=2){var c=e.slice(i,i+2);r.push(parseInt("0x"+c))}return r}},o.numToChinese=function(t){return["\u96f6","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341"][t]},o.loadGameResources=function(){return n(void 0,void 0,void 0,function(){return i(this,function(){return[2,new Promise(function(t){cc.resources.preloadDir("images",cc.SpriteFrame,function(e,o){console.log("111",o),t(o,e)})})]})})},o.randomNum=c,o.getRandomArrayElements=function(t,e){if(t.length<=e)return t;for(var o,n,i=t.slice(0),r=t.length,c=r-e;r-- >c;)o=i[n=(r+1)*Math.random()>>0],i[n]=i[r],i[r]=o;return i.slice(c)},o.getProbability=function(t){return r(Array(100-t).fill(!1),Array(t).fill(!0))[Math.floor(c(0,99))]},o.getUrlParam=function(t){var e=window.location.search,o=e.slice(1).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"));return e.length?o&&o[2]:null},cc._RF.pop()},{}]},{},["GameConfig","GameScene","ImgFixedSize","block","blockManager","exportEvent","miniBlock","propPool","utils"]);