window.__require = function t(e, i, o) {
function n(c, a) {
if (!i[c]) {
if (!e[c]) {
var r = c.split("/");
r = r[r.length - 1];
if (!e[r]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(r, !0);
if (s) return s(r, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = r;
}
var h = i[c] = {
exports: {}
};
e[c][0].call(h.exports, function(t) {
return n(e[c][1][t] || t);
}, h, h.exports, t, e, i, o);
}
return i[c].exports;
}
for (var s = "function" == typeof __require && __require, c = 0; c < o.length; c++) n(o[c]);
return n;
}({
BatNanCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "fd62cDPhsZMT4W31kjHJU7Y", "BatNanCtrl");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, o) {
var n, s = arguments.length, c = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, i, c) : n(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, r = (c.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._dataSource = null;
return e;
}
Object.defineProperty(e.prototype, "dataSource", {
get: function() {
return this._dataSource;
},
set: function(t) {
this._dataSource = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
};
e.prototype.onDestroy = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
};
e.prototype._onTouchBegin = function() {
this.dataSource.node.off(cc.Node.EventType.TOUCH_MOVE);
};
e.prototype._onTouchMoved = function(t) {
var e = t.touch.getLocation();
e = this.node.convertToNodeSpaceAR(e);
var i = t.touch.getDelta();
this.node.x += i.x;
this.node.y += i.y;
};
e.prototype.getBatDistance = function() {
var t = this.dataSource.SkeXucXac.node.position;
return this.node.position.sub(t).mag();
};
e.prototype._onTouchEnd = function(t) {
var e = t.touch.getLocation();
e = this.node.convertToNodeSpaceAR(e);
this.getBatDistance() > 100 && this.finishNan();
};
e.prototype.finishNan = function() {
this.node.active = !1;
this.node.setPosition(-2, 98);
this.dataSource.node.on(cc.Node.EventType.TOUCH_MOVE, this.dataSource.getComponent("UIWindow")._onTouchMoved, this.dataSource.getComponent("UIWindow"), !0);
};
return s([ a ], e);
}(cc.Component));
i.default = r;
cc._RF.pop();
}, {} ],
"Tx.Chat.NetworkClient": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "de150tvCSZFGoe4c9ZtsNqB", "Tx.Chat.NetworkClient");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, o) {
var n, s = arguments.length, c = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, i, c) : n(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("../Tx.Chat"), a = t("../Tx.Const"), r = cc._decorator, l = r.ccclass, h = (r.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.isConnect = !1;
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
i._instance = this;
};
e.prototype.connect = function() {
console.log("Connect");
cc.systemEvent.off(a.TxConst.CHAT_TAIXIU_SOCKET_EVENT, this.onResponeData, this);
cc.systemEvent.on(a.TxConst.CHAT_TAIXIU_SOCKET_EVENT, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(a.TxConst.CHAT_TAIXIU_SOCKET_EVENT, "https://chat.azonline.club/signalr/negotiate", "chatHub", fzgui.UserManager.instance.mainUserInfo.cookie, !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
fzgui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
cc.log(t);
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
this.registerChat();
}
t.R < 0 && fzgui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, i = 0; i < e; ++i) {
var o = t.M[i];
if (o.A && null != o.A[0] && null != o.A[0]) {
var n = o.A[0];
cc.log(o.M, n);
switch (o.M) {
case "receiveMessage":
c.default.instance.receiveMessage(n);
}
}
}
};
e.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ "taixiu" ]);
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
fzgui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(a.TxConst.CHAT_TAIXIU_SOCKET_EVENT, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
fzgui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var i;
e._instance = null;
return i = s([ l ], e);
}(cc.Component));
i.default = h;
cc._RF.pop();
}, {
"../Tx.Chat": "Tx.Chat",
"../Tx.Const": "Tx.Const"
} ],
"Tx.Chat": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "22a6a7s4uNI+5bZvXEIyKU/", "Tx.Chat");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, o) {
var n, s = arguments.length, c = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, i, c) : n(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("./network/Tx.Chat.NetworkClient"), a = cc._decorator, r = a.ccclass, l = a.property, h = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
i = e;
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
c.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, "taixiu" ]);
this.txtInputChat.string = "";
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, i = t.c;
if (void 0 !== e && void 0 !== i) {
if (e.length > 0 && i.length > 0) {
var o = i.split("$"), n = "", s = "", c = i;
if (o.length > 2) {
c = o[0];
var a = o[2], r = JSON.parse(a);
if (void 0 !== r || null !== r) {
n = r.Game;
s = r.Name;
}
}
n.length > 0 && s.length > 0 ? e += "@" + n + "_" + s + ": " : e += ": ";
var l = cc.instantiate(this.templateMessage);
l.position = new cc.Vec3(-140, -100, 0);
var h = t.n, u = e;
l.active = !0;
h = (h.localeCompare(fzgui.UserManager.instance.mainUserInfo.NickName), u);
l.getComponent(cc.Label).string = h + c;
this.listChat.addChild(l);
}
this.scrollListChat.scrollToBottom();
}
};
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
i._instance = this;
this.txtInputChat.node.on("editing-return", this.touchSendChat, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
e.prototype.onKeyDown = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.txtInputChat.focus();
}
};
var i;
e._instance = null;
s([ l(cc.Node) ], e.prototype, "templateMessage", void 0);
s([ l(cc.Node) ], e.prototype, "listChat", void 0);
s([ l(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
s([ l(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
return i = s([ r ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"./network/Tx.Chat.NetworkClient": "Tx.Chat.NetworkClient"
} ],
"Tx.Const": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5d07eCvAoBDAIJB2EyUz10D", "Tx.Const");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.TxConst = void 0;
var o = function() {
function t() {}
t.formatNumber = function(t) {
return void 0 === t ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
t.formatDateTime = function(t) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + " - " + t[1].substr(0, 5);
};
t.convertToMoney = function(t) {
var e = "", i = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? t.toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : t.toString();
1 == i && (e = "-" + e);
return e;
};
t.convertToK = function(t) {
var e = "", i = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? (t / 1e3).toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "K" : t.toString();
1 == i && (e = "-" + e);
return e;
};
t.MAX_KEY_VALUE = 8;
t.MAX_BET_TAI_XIU = 1e9;
t.MIN_BET = 10;
t.MAX_BET_PER_SESSION = 25e7;
t.RETURN_MONEY = 2;
t.diceNode = {
GameSessionID: 0
};
t.GameID = {
UNKNOWN_GAME: -1,
GATE: 0,
BA_CAY: 1,
TA_LA: 3,
XI_TO: 5,
TLMN_DEMLA: 7,
MAU_BINH: 9,
TLMN_NHATANTAT: 27,
POKER: 13,
SAM_LOC: 15,
LIENG: 17,
CHAN: 19,
XOC_DIA: 25,
TLMN_DEMLA_SOLO: 33,
SAM_LOC_SOLO: 35,
CHAT: 40,
POKER_SLOT: 41,
CARD_SLOT: 42,
TAI_XIU: 40,
CCU: 44,
EVENT_HOT: 45,
EVENT_GIFT: 46,
Zombie: 100,
POKEMON: 101,
ANGRYBIRD: 102,
TIENCA: 103,
VQMM: 105,
RUNG_RAM: 106
};
t.ON_TAIXIU_SOCKET = "OnTaiXiuWebSocKet";
t.EVENT_FREETX_NAME = "eventFreeTX";
t.CHAT_TAIXIU_SOCKET_EVENT = "OnChatTaiXiuSocketEvent";
t.CLOSE_TAIXIU = "CloseTaiXiu";
t.isHideTaiXiu = !1;
t.GameStatus = {
WAITING: 0,
BETTING: 1,
RACING: 2
};
t.BetType = {
BET_GOLD: 1,
BET_BAC: 2
};
t.BetGate = {
NONE: 0,
GATE_XIU: 1,
GATE_TAI: 2
};
t.RETURN_RESULT = 1;
return t;
}();
i.TxConst = o;
cc._RF.pop();
}, {} ],
"Tx.HistoryTurn": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f1296LhAwNEsa1qKWXo7yIc", "Tx.HistoryTurn");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, o) {
var n, s = arguments.length, c = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, i, c) : n(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("./network/Tx.NetworkClient"), a = t("./Tx.Const"), r = cc._decorator, l = r.ccclass, h = r.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.m_dataHisoryTurnTai = [];
e.m_dataHisoryTurnXiu = [];
e.XucXac = [];
e.imgDices = [];
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
i._instance = this;
c.default.instance.sendSignalR("GetSessionResultHistory", [ a.TxConst.diceNode.GameSessionID ]);
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
};
e.prototype.showHistoryTurnTaiXiu = function(t) {
this.m_coinData = t;
this.btnR.node.on(cc.Node.EventType.TOUCH_END, this.touchBtnR, this);
this.btnL.node.on(cc.Node.EventType.TOUCH_END, this.touchBtnL, this);
this.setViewHistoryTurn();
};
e.prototype.touchBtnR = function() {
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
this.m_GameSessionID++;
this.m_GameSessionID >= a.TxConst.GameSessionID ? this.m_GameSessionID = a.TxConst.GameSessionID - 1 : c.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
};
e.prototype.touchBtnL = function() {
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
this.m_GameSessionID--;
cc.log(this.m_GameSessionID);
this.m_GameSessionID < a.TxConst.GameSessionID - 15 ? this.m_GameSessionID = a.TxConst.GameSessionID - 15 : c.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
};
e.prototype.setViewHistoryTurn = function() {
var t = 0, e = 0, i = 0, o = 0;
if (this.m_coinData.length) {
for (var n in this.m_coinData) if (1 == this.m_coinData[n].LocationID) {
e += this.m_coinData[n].TotalBetValue;
o += this.m_coinData[n].RefundValue;
this.m_dataHisoryTurnXiu.push(this.m_coinData[n]);
} else {
t += this.m_coinData[n].TotalBetValue;
i += this.m_coinData[n].RefundValue;
this.m_dataHisoryTurnTai.push(this.m_coinData[n]);
}
this.lbTotalBetTai.string = a.TxConst.formatNumber(t);
this.lbTotalRefundTai.string = a.TxConst.formatNumber(i);
this.lbTotalRefundXiu.string = a.TxConst.formatNumber(o);
this.lbTotalBetXiu.string = a.TxConst.formatNumber(e);
this.m_GameSessionID = this.m_coinData[0].GameSessionID;
this.txtSessionInfo.getComponent(cc.Label).string = "#" + this.m_GameSessionID;
var s = this.m_coinData[0].Result.split(",");
for (n = 0; n < 3; n++) this.XucXac[n].getComponent(cc.Sprite).spriteFrame = this.imgDices[parseInt(s[n]) - 1];
if (this.m_coinData[0].LocationWinID == a.TxConst.BetGate.GATE_TAI) {
this.imgEffectTai.node.active = !0;
this.imgEffectTai.node.runAction(cc.rotateBy(.5, 360).repeatForever());
} else if (this.m_coinData[0].LocationWinID == a.TxConst.BetGate.GATE_XIU) {
this.imgEffectXiu.node.active = !0;
this.imgEffectXiu.node.runAction(cc.rotateBy(.5, 360).repeatForever());
}
this.txtTotalDice.getComponent(cc.Label).string = "= " + (parseInt(s[0]) + parseInt(s[1]) + parseInt(s[2])).toString();
this.refreshHistoryTurnTX();
} else {
this.lbTotalBetTai.string = "0";
this.lbTotalBetXiu.string = "0";
this.lbTotalRefundTai.string = "0";
this.lbTotalRefundXiu.string = "0";
}
};
e.prototype.refreshHistoryTurnTX = function() {
this.lvTaiContent.removeAllChildren();
this.lvXiuContent.removeAllChildren();
for (var t = 0; t < 2; t++) if (t && 0 < this.m_dataHisoryTurnTai.length) for (var e = 0; e < this.m_dataHisoryTurnTai.length; e++) this.addItemHisoryTurnTX(1, e); else if (!t && 0 < this.m_dataHisoryTurnXiu.length) for (e = 0; e < this.m_dataHisoryTurnXiu.length; e++) this.addItemHisoryTurnTX(2, e);
fzgui.UIWaitingLayout.hideWaiting();
};
e.prototype.addItemHisoryTurnTX = function(t, e) {
var i;
i = 1 == t ? this.m_dataHisoryTurnTai[e] : this.m_dataHisoryTurnXiu[e];
var o = cc.instantiate(this.template);
o.position = new cc.Vec3(0, 0);
var n = i.BetTime.split("T");
n = n[1].split(".");
o.getChildByName("txtThoiGian").getComponent(cc.Label).string = n[0];
o.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = i.AccountName;
o.getChildByName("txtTienDat").getComponent(cc.Label).string = a.TxConst.formatNumber(i.TotalBetValue);
o.getChildByName("txtTraLai").getComponent(cc.Label).string = a.TxConst.formatNumber(i.RefundValue);
o.getChildByName("Image_6").getComponent(cc.Sprite).spriteFrame = null;
1 == t ? this.lvTaiContent.addChild(o) : this.lvXiuContent.addChild(o);
};
var i;
e._instance = null;
s([ h(cc.Button) ], e.prototype, "btnR", void 0);
s([ h(cc.Button) ], e.prototype, "btnL", void 0);
s([ h(cc.Label) ], e.prototype, "lbTotalBetTai", void 0);
s([ h(cc.Label) ], e.prototype, "lbTotalBetXiu", void 0);
s([ h(cc.Label) ], e.prototype, "lbTotalRefundTai", void 0);
s([ h(cc.Label) ], e.prototype, "lbTotalRefundXiu", void 0);
s([ h(cc.Label) ], e.prototype, "txtSessionInfo", void 0);
s([ h(cc.Label) ], e.prototype, "txtTotalDice", void 0);
s([ h([ cc.Sprite ]) ], e.prototype, "XucXac", void 0);
s([ h(cc.Sprite) ], e.prototype, "imgEffectTai", void 0);
s([ h(cc.Sprite) ], e.prototype, "imgEffectXiu", void 0);
s([ h([ cc.SpriteFrame ]) ], e.prototype, "imgDices", void 0);
s([ h(cc.Node) ], e.prototype, "lvTaiContent", void 0);
s([ h(cc.Node) ], e.prototype, "lvXiuContent", void 0);
s([ h(cc.Node) ], e.prototype, "template", void 0);
return i = s([ l ], e);
}(fzgui.UIPopup);
i.default = u;
cc._RF.pop();
}, {
"./Tx.Const": "Tx.Const",
"./network/Tx.NetworkClient": "Tx.NetworkClient"
} ],
"Tx.History": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "43423alzXRBO7+jSnrTuunJ", "Tx.History");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, o) {
var n, s = arguments.length, c = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, i, c) : n(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("../network/Tx.NetworkClient"), a = t("../Tx.Const"), r = cc._decorator, l = r.ccclass, h = r.property, u = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
i._instance = this;
c.default.instance.sendSignalR("GetAccountHistory", [ a.TxConst.BetType.BET_GOLD, a.TxConst.GameID.TAI_XIU, 30 ]);
cc.log(this);
};
e.prototype.showAccountHistoryTaiXiu = function(t) {
if (t) for (var e = 0; e < t.length; e++) {
var i = t[e], o = i.StartTime, n = i.LocationName, s = i.Result, c = parseInt(s);
s = c >= 11 ? "Tài - " + c : "Xỉu - " + c;
var r = i.GameSessionID, l = i.TotalBetValue, h = i.RefundValue, u = i.PrizeValue, p = cc.instantiate(this.template);
p.position = new cc.Vec3(0, 0, 0);
p.getChildByName("txtPhien").getComponent(cc.Label).string = "" + r;
p.getChildByName("txtPhien").color = cc.Color.WHITE;
if (o.length > 0) {
var m = a.TxConst.formatDateTime(o);
p.getChildByName("txtThoiGian").getComponent(cc.Label).string = m;
p.getChildByName("txtThoiGian").color = cc.Color.WHITE;
}
p.getChildByName("txtCuaDat").getComponent(cc.Label).string = n;
p.getChildByName("txtCuaDat").color = cc.Color.WHITE;
p.getChildByName("txtKetQua").getComponent(cc.Label).string = s;
p.getChildByName("txtKetQua").color = cc.Color.WHITE;
p.getChildByName("txtTienDat").getComponent(cc.Label).string = a.TxConst.formatNumber(l);
p.getChildByName("txtTienDat").color = cc.Color.YELLOW;
p.getChildByName("txtTraLai").getComponent(cc.Label).string = a.TxConst.formatNumber(h);
p.getChildByName("txtTraLai").color = cc.Color.YELLOW;
p.getChildByName("txtNhan").getComponent(cc.Label).string = a.TxConst.formatNumber(u);
p.getChildByName("txtNhan").getComponent(cc.Label).horizontalAlign = 2;
p.getChildByName("txtNhan").color = cc.Color.YELLOW;
p.color = e % 2 == 0 ? cc.color(38, 4, 0) : cc.color(255, 255, 255);
this.content.addChild(p);
}
};
var i;
e._instance = null;
s([ h(cc.Node) ], e.prototype, "content", void 0);
s([ h(cc.Node) ], e.prototype, "template", void 0);
return i = s([ l ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {
"../Tx.Const": "Tx.Const",
"../network/Tx.NetworkClient": "Tx.NetworkClient"
} ],
"Tx.MainGame": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ce7ffhXzvtFjb6BAMeTU68o", "Tx.MainGame");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, o) {
var n, s = arguments.length, c = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, i, c) : n(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("./BatNanCtrl"), a = t("./network/Tx.NetworkClient"), r = t("./Tx.Const"), l = cc._decorator, h = l.ccclass, u = l.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.m_nGameStatus = 0;
e.m_nLocationIDWin = 0;
e.m_isNan = !1;
e.m_isTouchNan = !1;
e.m_nTimeNan = 10;
e._callback = null;
e.originalPos = null;
e.m_nBetType = 1;
e.m_btnKeyValue = [];
e.m_btnKeypad = [];
e.m_mapIndexToStrBit = [ "1K", "5K", "50K", "100K", "500K", "1M", "5M", "10M" ];
e.imgDices1 = [];
e.imgDices2 = [];
e.imgDices3 = [];
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
i._instance = this;
};
e.prototype.onEnable = function() {
this.originalPos = this.imgBat.position;
this.m_lblTimer.node.parent.zIndex = 1e3;
this.m_imgNanRoot.node.zIndex = 999;
this.m_imgNanRoot.getComponent(c.default).dataSource = this;
this.originalPos = this.imgBat.position;
this.initTaiXiu();
};
e.prototype.initTaiXiu = function() {
this.diceWith = this.imgHistoryFirst.node.width + 5;
this.firstPosHis = this.imgHistoryFirst.node.getPosition();
this.m_imgResult.active = !1;
this.sprCircle.node.active = !1;
this.imgBgTimer2.active = !1;
this.m_lblTurnID.string = "";
this.m_lblUsersTai.string = "0";
this.m_lblUsersXiu.string = "0";
this.m_lblMoneyTai.string = "0";
this.m_lblMoneyXiu.string = "0";
this.m_lblMessage.string = "";
this.m_lblBetedValueTai.string = "0";
this.m_lblBetedValueXiu.string = "0";
this.m_imgDice1.node.active = !1;
this.m_imgDice2.node.active = !1;
this.m_imgDice3.node.active = !1;
this.m_historyPanel.active = !0;
this.imgHistoryFirst.node.active = !1;
this.diceWith = this.imgHistoryFirst.node.width + 5;
this.firstPosHis = this.imgHistoryFirst.node.getPosition();
this.imgBgKeyboard.node.active = !1;
this.imgBgKeyboard.node.scaleY = 0;
this.panelNumberBig.active = !1;
this.panelKeypad.active = !1;
this.btnChat.node.on(cc.Node.EventType.TOUCH_END, this.showChat, this);
this.m_imgNanRoot.node.active = !1;
this.btnNan.node.on(cc.Node.EventType.TOUCH_END, this.touchNan, this);
this.btnSoKhac.node.on(cc.Node.EventType.TOUCH_END, this.touchChoseNumber, this);
this.btnAccept.node.on(cc.Node.EventType.TOUCH_END, this.callBet, this);
this.btnCancel.node.on(cc.Node.EventType.TOUCH_END, this.touchCancel, this);
this.btnAllIn.node.on(cc.Node.EventType.TOUCH_END, this.onTouchAllIn, this);
this.panelKeypad.active = !1;
this.panelNumberBig.active = !1;
this.m_imgEffectTai.node.active = !1;
this.m_imgEffectXiu.node.active = !1;
this.m_btnKeyValue.length = 0;
this.m_btnKeypad.length = 0;
for (var t = 0; t < r.TxConst.MAX_KEY_VALUE; t++) {
var e = "btn_" + this.m_mapIndexToStrBit[t], i = this.panelNumberBig.getChildByName(e);
i.on(cc.Node.EventType.TOUCH_END, this.callSelectValue, this, !0);
this.m_btnKeyValue.push(i);
}
for (t = 0; t < 11; t++) {
e = "btn_" + t;
var o = this.panelKeypad.getChildByName(e);
o.on(cc.Node.EventType.TOUCH_END, this.touchKeyNumber, this, !0);
this.m_btnKeypad.push(o);
}
this.m_isNan ? this.btnNan.node.getComponent(cc.Sprite).spriteFrame = this.btn_Nan : this.btnNan.node.getComponent(cc.Sprite).spriteFrame = this.btn_DungNan;
};
e.prototype.showChat = function() {
if (this.nodeChat.active) {
this.nodeChat.active = !1;
this.btnChat.node.getComponent(cc.Sprite).spriteFrame = this.spfBtnChatHide;
} else {
this.nodeChat.active = !0;
this.btnChat.node.getComponent(cc.Sprite).spriteFrame = this.spfBtnChatShow;
}
};
e.prototype.onTouchAllIn = function() {
this.m_llBetValue = fzgui.UserManager.instance.mainUserInfo.Money;
if (this.m_llBetValue > r.TxConst.MAX_BET_TAI_XIU) {
this.m_llBetValue = r.TxConst.MAX_BET_TAI_XIU;
this.showMessage("Chỉ đặt cửa trong khoảng 10 đến " + r.TxConst.formatNumber(r.TxConst.MAX_BET_TAI_XIU));
}
this.m_nBetGate == r.TxConst.BetGate.GATE_XIU ? this.ebInputBetXiu.string = r.TxConst.formatNumber(this.m_llBetValue) : this.ebInputBetTai.string = r.TxConst.formatNumber(this.m_llBetValue);
};
e.prototype.touchCancel = function() {
this.showMenhGiaPanel(!1);
this.panelKeypad.active = !1;
this.panelNumberBig.active = !1;
this.ebInputBetXiu.string = "";
this.ebInputBetTai.string = "";
this.keyPadValue = "";
this.m_llBetValue = 0;
this.m_nBetGate = r.TxConst.BetGate.NONE;
};
e.prototype.touchChoseNumber = function() {
if (this.panelNumberBig.active) {
this.panelNumberBig.active = !1;
this.panelKeypad.active = !0;
} else {
this.panelNumberBig.active = !0;
this.panelKeypad.active = !1;
}
this.keyPadValue = "";
};
e.prototype.touchKeyNumber = function(t) {
var e = t.target.name;
e = (e = e.replace(/btn_/g, "")).replace("10", "000");
this.keyPadValue += e;
this.m_llBetValue = parseInt(this.keyPadValue);
if (this.m_llBetValue > r.TxConst.MAX_BET_TAI_XIU) {
this.m_llBetValue = r.TxConst.MAX_BET_TAI_XIU;
this.showMessage("Chỉ đặt cửa trong khoảng 10 đến " + r.TxConst.formatNumber(r.TxConst.MAX_BET_TAI_XIU));
}
this.m_nBetGate == r.TxConst.BetGate.GATE_XIU ? this.ebInputBetXiu.string = r.TxConst.formatNumber(this.m_llBetValue) : this.ebInputBetTai.string = r.TxConst.formatNumber(this.m_llBetValue);
};
e.prototype.resultOfAccount = function(t) {
this.m_lblBetedValueXiu.string = "0";
this.m_lblBetedValueTai.string = "0";
var e = 0, i = 0;
if (t.length > 0) {
cc.log("resultOfAccount", t[0]);
var o = t[0].GameSessionID, n = t[0].BetValue, s = (t[0].RefundValue, t[0].Balance);
i = t[0].BetType;
e = t[0].PrizeValue;
if (this.m_llGameSessionID == o) {
this.setBalance(i, s);
this.showPrizeValue(i, e, n);
}
}
};
e.prototype.showPrizeValue = function(t, e, i) {
cc.log("showPrizeValue: " + e);
if (e > 0) {
var o = "+" + r.TxConst.formatNumber(parseInt(e));
this.m_lblMoneyWin.node.color = cc.Color.YELLOW;
this.m_lblMoneyWin.string = o;
this.m_lblMoneyWin.node.active = !0;
this.m_nLocationIDWin == r.TxConst.BetGate.GATE_TAI ? this.m_lblMoneyWin.node.setPosition(181, 207) : this.m_lblMoneyWin.node.setPosition(565, 207);
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
null != this._callback && this._callback(r.TxConst.RETURN_MONEY, o, t);
} else {
o = "-" + r.TxConst.formatNumber(parseInt(i));
this.m_lblMoneyWin.node.color = cc.Color.RED;
this.m_lblMoneyWin.string = o;
this.m_lblMoneyWin.node.active = !0;
this.m_nLocationIDWin == r.TxConst.BetGate.GATE_TAI ? this.m_lblMoneyWin.node.setPosition(565, 207) : this.m_lblMoneyWin.node.setPosition(181, 207);
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
}
};
e.prototype.callBet = function() {
this.m_lblMessage.string = "";
if (0 != this.m_llBetValue) if (this.m_llBetValue < r.TxConst.MIN_BET && 0 != this.m_llBetValue) this.showMessage("Đặt cửa không hợp lệ."); else if (this.m_llBetValue > r.TxConst.MAX_BET_TAI_XIU) this.showMessage("Mỗi lần đặt cửa tối đa không được vượt quá " + r.TxConst.convertToK(r.TxConst.MAX_BET_TAI_XIU) + " Big"); else {
if (this.m_nBetType == r.TxConst.BetType.BET_GOLD) if (this.m_nBetGate == r.TxConst.BetGate.GATE_TAI) {
if (this.m_llBetValue + this.m_totalBetTai > r.TxConst.MAX_BET_PER_SESSION) {
r.TxConst.convertToK;
this.showMessage("Đặt cửa mỗi phiên không vượt quá  " + r.TxConst.convertToK(r.TxConst.MAX_BET_PER_SESSION) + " big. Vui lòng đợi lượt sau");
return;
}
} else if (this.m_nBetGate == r.TxConst.BetGate.GATE_XIU && this.m_llBetValue + this.m_totalBetXiu > r.TxConst.MAX_BET_PER_SESSION) {
this.showMessage("Đặt cửa mỗi phiên không vượt quá  " + r.TxConst.convertToK(r.TxConst.MAX_BET_PER_SESSION) + " big. Vui lòng đợi lượt sau");
return;
}
this.m_nGameStatus != r.TxConst.GameStatus.RACING && this.m_nGameStatus != r.TxConst.GameStatus.WAITING ? this.SetBet() : this.showMessage("Đợi ván mới");
} else this.showMessage("Vui lòng đặt cửa.");
};
e.prototype.SetBet = function() {
if (this.m_nRemainWaiting <= 5) this.showMessage("Hết thời gian đặt cửa"); else {
a.default.instance.sendSignalR("SetBetTaiXiu", [ this.m_nBetType, this.m_nBetGate, this.m_llBetValue ]);
this.keyPadValue = "";
this.m_llBetValue = 0;
this.m_nBetGate == r.TxConst.BetGate.GATE_XIU ? this.ebInputBetXiu.string = "0" : this.ebInputBetTai.string = "0";
}
};
e.prototype.betOfAccount = function(t) {
cc.log("betOfAccount", t.length);
t.length > 0 && this.setBettedVal(t[0].LocationID, t[0].BetValue);
};
e.prototype.setBettedVal = function(t, e) {
if (t == r.TxConst.BetGate.GATE_TAI) {
this.ebInputBetXiu.enabled = !1;
this.m_lblBetedValueTai.string = r.TxConst.formatNumber(e);
this.m_nBetType == r.TxConst.BetType.BET_GOLD ? this.m_lblBetedValueTai.node.color = cc.color(225, 221, 87) : this.m_nBetType == r.TxConst.BetType.BET_BAC && (this.m_lblBetedValueTai.node.color = cc.color(255, 255, 255));
} else if (t == r.TxConst.BetGate.GATE_XIU) {
this.ebInputBetTai.enabled = !1;
this.m_lblBetedValueXiu.string = r.TxConst.formatNumber(e);
this.m_nBetType == r.TxConst.BetType.BET_GOLD ? this.m_lblBetedValueXiu.node.color = cc.color(225, 221, 87) : this.m_nBetType == r.TxConst.BetType.BET_BAC && (this.m_lblBetedValueXiu.node.color = cc.color(255, 255, 255));
}
};
e.prototype.setBalance = function(t, e) {
e < 0 || fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, e);
};
e.prototype.callSelectValue = function(t) {
fzgui.AudioManager.instance.playSfx(this.coin_drop, 1);
var e = t.target.name;
e = (e = (e = e.replace(/btn_/g, "")).replace("M", "000000")).replace("K", "000");
cc.log(e);
this.m_llBetValue += parseInt(e);
if (this.m_llBetValue > r.TxConst.MAX_BET_TAI_XIU) {
this.m_llBetValue = r.TxConst.MAX_BET_TAI_XIU;
this.showMessage("Chỉ đặt cửa trong khoảng 10 đến " + r.TxConst.formatNumber(r.TxConst.MAX_BET_TAI_XIU) + " Big");
}
cc.log(r.TxConst.formatNumber(this.m_llBetValue));
this.m_nBetGate == r.TxConst.BetGate.GATE_XIU ? this.ebInputBetXiu.string = r.TxConst.formatNumber(this.m_llBetValue) : this.ebInputBetTai.string = r.TxConst.formatNumber(this.m_llBetValue);
var i = t.target.getPosition(), o = cc.v3({
x: i.x + this.panelNumberBig.x + this.imgBgKeyboard.node.x,
y: i.y + this.panelNumberBig.y + this.imgBgKeyboard.node.y,
z: 0
});
this.moveMoney(cc.v3(o));
};
e.prototype.moveMoney = function(t) {
var e, i = new cc.Node();
i.addComponent(cc.Sprite).spriteFrame = this.bcoinSprite;
if (null != i) {
e = this.m_nBetGate == r.TxConst.BetGate.GATE_TAI ? this.btnChonTai.node.getPosition() : this.btnChonXiu.node.getPosition();
i.position = t;
var o = cc.sequence(cc.moveTo(.2, e), cc.removeSelf(!0));
i.runAction(o);
this.m_panelTaxiu.addChild(i, 10);
}
};
e.prototype.GetCurrentRooms = function() {
a.default.instance.sendSignalR("GetCurrentRoomsTaiXiu", [ this.m_nBetType ]);
};
e.prototype.currentRoomsInfo = function(t) {
if (t.length) {
var e = t.length;
if (0 != e) {
if (this.m_nGameStatus == r.TxConst.GameStatus.BETTING) {
this.m_imgDice1.node.active && (this.m_imgDice1.node.active = !1);
this.m_imgDice2.node.active && (this.m_imgDice2.node.active = !1);
this.m_imgDice3.node.active && (this.m_imgDice3.node.active = !1);
this.m_imgResult.active && (this.m_imgResult.active = !1);
if (this.m_imgEffectXiu.node.active) {
this.m_imgEffectXiu.node.stopAllActions();
this.m_imgEffectXiu.node.active = !1;
}
if (this.m_imgEffectTai.node.active) {
this.m_imgEffectTai.node.stopAllActions();
this.m_imgEffectTai.node.active = !1;
}
}
for (var i = 0; i < e; i++) {
var o = t[i], n = o.TotalAccount1, s = o.TotalBetValue1, c = o.TotalAccount2, a = o.TotalBetValue2;
this.m_lblMoneyTai.string = r.TxConst.convertToMoney(a);
this.m_totalBetTai = a;
this.m_lblMoneyXiu.string = r.TxConst.convertToMoney(s);
this.m_totalBetXiu = s;
this.m_lblUsersTai.string = r.TxConst.formatNumber(c);
this.m_lblUsersXiu.string = r.TxConst.formatNumber(n);
var l = cc.sequence(cc.scaleTo(.1, 1.1, 1.1), cc.scaleTo(.1, 1, 1));
a !== this._totalBetTai && this.m_lblMoneyTai.node.runAction(l.clone());
s !== this._totalBetXiu && this.m_lblMoneyXiu.node.runAction(l.clone());
c !== this._totalAccountTai && this.m_lblUsersTai.node.runAction(l.clone());
n !== this._totalAccountXiu && this.m_lblUsersXiu.node.runAction(l.clone());
this._totalBetXiu = s;
this._totalBetTai = a;
this._totalAccountXiu = n;
this._totalAccountTai = c;
}
} else cc.log("data 0");
} else cc.log("data undefine");
};
e.prototype.touchNan = function() {
this.m_isNan = !this.m_isNan;
this.m_isNan ? this.btnNan.node.getComponent(cc.Sprite).spriteFrame = this.btn_Nan : this.btnNan.node.getComponent(cc.Sprite).spriteFrame = this.btn_DungNan;
};
e.prototype.currentSession = function(t) {
if (null != t) {
this.resetBat();
r.TxConst.GameSessionID = t.GameSessionID;
this.m_llGameSessionID = t.GameSessionID;
this.m_nGameStatus = t.GameStatus;
this.m_lblTurnID.string = "#" + this.m_llGameSessionID;
cc.systemEvent.emit("InforGameSessionTX", "" + this.m_llGameSessionID);
if (this.m_nGameStatus == r.TxConst.GameStatus.BETTING) {
this.m_nRemainWaiting = t.RemainBetting;
if (this.m_nRemainWaiting > 5) {
this.btnChonTai.interactable = !0;
this.ebInputBetTai.enabled = !0;
this.btnChonXiu.interactable = !0;
this.ebInputBetXiu.enabled = !0;
}
} else {
this.m_nRemainWaiting = t.RemainWaiting;
this.showMenhGiaPanel(!1);
this.ebInputBetTai.string = "";
this.ebInputBetXiu.string = "";
this.m_llBetValue = 0;
this.keyPadValue = "";
this.m_nGameStatus == r.TxConst.GameStatus.RACING && this.m_nRemainWaiting > 8 && this.m_nRemainWaiting < 24 && (this.m_imgDice1.node.active && this.m_imgDice2.node.active && this.m_imgDice3.node.active || a.default.instance.sendSignalR("GetCurrentResultTaiXiu", []));
}
this.startTimer();
}
};
e.prototype.startTimer = function() {
var t = this;
this.m_totalBetTai = 0;
this.m_totalBetXiu = 0;
switch (this.m_nGameStatus) {
case r.TxConst.GameStatus.WAITING:
case r.TxConst.GameStatus.RACING:
this.imgBgTimer2.active = !0;
this.btnChonTai.interactable = !0;
this.ebInputBetTai.enabled = !0;
this.btnChonXiu.interactable = !0;
this.ebInputBetXiu.enabled = !0;
this.m_nBetGate = r.TxConst.BetGate.NONE;
break;

case r.TxConst.GameStatus.BETTING:
this.showDices(!1);
this.imgBgTimer2.active = !1;
this.m_nRemainWaiting > 5 ? this.m_lblTimerWaitResult.node.color = cc.color(255, 200, 10) : this.m_lblTimerWaitResult.node.color = cc.color(255, 0, 0);
this.m_imgEffectTai.node.stopAllActions();
this.m_imgEffectXiu.node.stopAllActions();
this.m_imgEffectXiu.node.active = !1;
this.m_imgEffectTai.node.active = !1;
this.m_imgResult.active = !1;
}
if (this.m_nRemainWaiting > 0) {
this.sprCircle.node.active = !0;
cc.tween(this.sprCircle.node).sequence(cc.tween().by(1, {
angle: -360
}), cc.tween().call(function() {
t.sprCircle.node.active = !0;
})).repeatForever().start();
if (!this.imgBgTimer2.active) {
this.m_lblTimer.node.active = !0;
this.startCountDownBetting(this.m_nRemainWaiting);
}
cc.director.getScheduler().unschedule(this.startCountDownWaiting, this);
cc.director.getScheduler().schedule(this.startCountDownWaiting, this, 1, null);
}
};
e.prototype.startCountDownBetting = function(t) {
this.m_lblTimer.node.getComponent("lbCountDown").setRemaningTime(t);
};
e.prototype.startCountDownWaiting = function(t) {
if (this.m_nRemainWaiting > 0) {
this.m_nRemainWaiting -= parseInt(t);
var e;
e = this.m_nRemainWaiting < 10 ? "0" + this.m_nRemainWaiting : "" + this.m_nRemainWaiting;
if (this.imgBgTimer2.active) {
this.m_lblTimerWaitResult.string = e;
this.m_lblTimer.node.active = !1;
}
if (this.m_nGameStatus == r.TxConst.GameStatus.RACING) {
if (5 == this.m_nRemainWaiting) {
this.GetAccountResult();
this.getInfoEventDuDay();
}
} else if (this.m_nGameStatus == r.TxConst.GameStatus.BETTING && this.m_nRemainWaiting <= 5) {
this.btnChonTai.interactable = !1;
this.ebInputBetTai.enabled = !1;
this.btnChonXiu.interactable = !1;
this.ebInputBetXiu.enabled = !1;
this.showMenhGiaPanel(!1);
this.m_lblTimerWaitResult.node.color = cc.color(255, 0, 0);
}
this.m_nRemainWaiting <= 0 && this.stopCountDownWaiting();
}
};
e.prototype.stopCountDownWaiting = function() {
cc.director.getScheduler().unschedule(this.startCountDownBetting, this);
};
e.prototype.getInfoEventDuDay = function() {
a.default.instance.sendSignalR("GetEventRank", []);
};
e.prototype.GetAccountResult = function() {
a.default.instance.sendSignalR("GetAccountResultTaiXiu", [ this.m_llGameSessionID ]);
};
e.prototype.showDices = function(t) {
this.m_imgDice1.node.active = t;
this.m_imgDice2.node.active = t;
this.m_imgDice3.node.active = t;
};
e.prototype.showMenhGiaPanel = function(t) {
this.panelNumberBig.active = t;
this.btnKeyBroad.active = t;
this.m_imgDayLose.active = !t;
this.m_imgDayWin.active = !t;
if (t) {
this.imgBgKeyboard.node.active = !0;
this.imgBgKeyboard.node.runAction(cc.scaleTo(.3, 1, 1));
} else this.imgBgKeyboard.node.runAction(cc.sequence(cc.scaleTo(.3, 1, 0), cc.callFunc(function() {
this.imgBgKeyboard.node.active = !1;
this.panelKeypad.active = !1;
this.panelNumberBig.active = !1;
}, this)));
};
e.prototype.resetBat = function() {
this.imgBat.stopAllActions();
this.imgBat.active = !1;
this.imgBat.setPosition(this.originalPos.x, this.originalPos.y);
};
e.prototype.currentResult = function(t) {
cc.log(r.TxConst.GameStatus.RACING, t);
if (this.m_nGameStatus != r.TxConst.GameStatus.RACING || !(this.m_imgDice1.node.active || this.m_imgDice2.node.active || this.m_imgDice3.node.active)) {
this.m_nLocationIDWin = t.LocationIDWin;
if (!(this.m_nLocationIDWin <= 0 || t.Dice1 <= 0 || t.Dice2 <= 0 || t.Dice3 <= 0)) {
this.m_imgDice1.getComponent(cc.Sprite).spriteFrame = this.imgDices1[t.Dice1 - 1];
this.m_imgDice1.node.active = !1;
this.m_imgDice2.getComponent(cc.Sprite).spriteFrame = this.imgDices2[t.Dice2 - 1];
this.m_imgDice2.node.active = !1;
this.m_imgDice3.getComponent(cc.Sprite).spriteFrame = this.imgDices3[t.Dice3 - 1];
this.m_imgDice3.node.active = !1;
this.m_imgResult.getChildByName("txtResult").getComponent(cc.Label).string = "" + (t.Dice1 + t.Dice2 + t.Dice3);
this.m_imgResult.active = !1;
this.startAnimation();
}
}
};
e.prototype.startAnimation = function() {
var t = this;
this.m_lblTimer.node.active = !1;
this.SkeXucXac.node.active = !0;
this.SkeXucXac.setAnimation(0, "Idle", !1);
this.SkeXucXac.setCompleteListener(function() {
t.showScore();
});
};
e.prototype.showScore = function() {
this.SkeXucXac.node.active = !1;
this.m_imgDice1.node.active = !0;
this.m_imgDice2.node.active = !0;
this.m_imgDice3.node.active = !0;
if (!this.m_isNan || this.m_isTouchNan) {
if (this.m_isTouchNan) {
cc.director.getScheduler().unschedule(this.waitHideNan, this);
this.imgBat.active = !1;
this.setListenerNan(!1);
this.m_isTouchNan = !1;
}
this.m_imgResult.active = !0;
if (this.m_nLocationIDWin == r.TxConst.BetGate.GATE_TAI) {
this.m_imgEffectTai.node.active = !0;
this.m_imgEffectTai.node.runAction(cc.rotateBy(.5, 360).repeatForever());
} else if (this.m_nLocationIDWin == r.TxConst.BetGate.GATE_XIU) {
this.m_imgEffectXiu.node.active = !0;
this.m_imgEffectXiu.node.runAction(cc.rotateBy(.5, 360).repeatForever());
}
null != this._callback && this._callback(r.TxConst.RETURN_RESULT, this.m_nLocationIDWin);
} else {
this.setListenerNan(!0);
this.imgBat.active = !0;
this.m_nTimeNan = 12;
cc.director.getScheduler().schedule(this.waitHideNan, this, 1, null);
}
};
e.prototype.setListenerNan = function(t) {
this.imgBgTimer2.zIndex = 1e3;
if (t) {
this.m_imgNan.active = !0;
this.m_imgNan.zIndex = 999;
this.panelChen.zIndex = 998;
} else this.m_imgNan.active = !1;
};
e.prototype.waitHideNan = function() {
this.m_nTimeNan--;
if (!this.m_nTimeNan) {
this.m_isTouchNan = !0;
this.showScore();
}
};
e.prototype.gameHistory = function(t) {
if (t.length) {
r.TxConst.dataHistoryGame = t;
var e = t, i = e.length;
if (0 != i) {
i > 15 && (i = 15);
this.m_lblMessage.string = "";
this.m_historyPanel.active = !0;
this.m_historyPanel.removeAllChildren();
for (var o = this.spNutDenActive, n = this.spNutDenPhien, s = this.spNutTrangActive, c = this.spNutTrangPhien, a = 0; a < i; a++) {
var l = e[a].LocationIDWin, h = new cc.Node(), u = h.addComponent(cc.Sprite);
l == r.TxConst.BetGate.GATE_TAI ? u.spriteFrame = 0 == a ? o : n : u.spriteFrame = 0 == a ? s : c;
this.m_historyPanel.addChild(h);
h.y = this.firstPosHis.y;
h.x = this.firstPosHis.x - a * this.diceWith;
h.active = !0;
h.width = 30;
h.height = 30;
h.name = e[a].GameSessionID.toString();
h.on(cc.Node.EventType.TOUCH_END, this.touchShowHistoryTurn, this, !0);
0 == a && h.runAction(cc.sequence(cc.moveBy(.2, 0, 10), cc.moveBy(.2, 0, -10)).repeatForever());
}
}
}
};
e.prototype.touchShowHistoryTurn = function(t) {
r.TxConst.diceNode.GameSessionID = parseInt(t.target.name);
fzgui.UIPopupManager.instance.showPopupFromPrefab(this.HisTurn);
};
e.prototype.touchTai = function() {
if (this.m_nGameStatus != r.TxConst.GameStatus.WAITING) if (this.m_nBetGate != r.TxConst.BetGate.GATE_XIU || "0" == this.m_lblBetedValueXiu.string) {
this.m_nBetGate = r.TxConst.BetGate.GATE_TAI;
this.m_llBetValue = 0;
if (parseInt(this.ebInputBetTai.string) > 0) {
for (var t = this.ebInputBetTai.string.trim().split("."), e = "", i = 0; i < t.length; i++) e += t[i];
this.m_llBetValue = parseInt(e);
} else this.ebInputBetTai.string = "0";
this.ebInputBetXiu.string = "";
this.showMenhGiaPanel(!0);
} else this.showMessage("Không đặt 2 cửa một phiên "); else this.showMessage("Đợi ván mới");
};
e.prototype.touchXiu = function() {
if (this.m_nGameStatus != r.TxConst.GameStatus.WAITING) if (this.m_nBetGate != r.TxConst.BetGate.GATE_TAI || "0" == this.m_lblBetedValueTai.string) {
this.m_nBetGate = r.TxConst.BetGate.GATE_XIU;
this.m_llBetValue = 0;
if (parseInt(this.ebInputBetXiu.string) > 0) {
for (var t = this.ebInputBetXiu.string.trim().split("."), e = "", i = 0; i < t.length; i++) e += t[i];
this.m_llBetValue = parseInt(e);
} else this.ebInputBetXiu.string = "0";
this.ebInputBetTai.string = "";
this.showMenhGiaPanel(!0);
} else this.showMessage("Không đặt 2 cửa một phiên "); else this.showMessage("Đợi ván mới");
};
e.prototype.showMessage = function(t) {
this.m_historyPanel.active = !1;
this.m_lblMessage.string = t;
this.m_lblMessage.node.getParent().opacity = 255;
this.m_lblMessage.node.getParent().stopAllActions();
var e = cc.fadeOut(3), i = cc.callFunc(this.showHistory, this);
this.m_lblMessage.node.getParent().runAction(cc.sequence(e, i));
};
e.prototype.showHistory = function() {
this.m_historyPanel.active = !0;
this.m_lblMessage.string = "";
};
e.prototype.setEventRank = function(t) {
this.txtBestThang.string = t.WinQuantity;
this.txtBestThua.string = t.LoseQuantity;
};
e.prototype.touchEvent = function() {
var t = fzgui.EBundle_Name.LOBBY;
fzgui.BundleManager.instance.getPrefabFromBundle("prefabs/Prefab_Events", t, function(t) {
fzgui.UIPopupManager.instance.showPopupFromPrefab(t);
});
};
var i;
e._instance = null;
s([ u(cc.Sprite) ], e.prototype, "m_imgDice1", void 0);
s([ u(cc.Sprite) ], e.prototype, "m_imgDice2", void 0);
s([ u(cc.Sprite) ], e.prototype, "m_imgDice3", void 0);
s([ u(cc.Sprite) ], e.prototype, "m_imgEffectTai", void 0);
s([ u(cc.Sprite) ], e.prototype, "m_imgEffectXiu", void 0);
s([ u(cc.Sprite) ], e.prototype, "imgBgKeyboard", void 0);
s([ u(cc.Sprite) ], e.prototype, "sprCircle", void 0);
s([ u(cc.Sprite) ], e.prototype, "imgHistoryFirst", void 0);
s([ u(cc.Sprite) ], e.prototype, "m_imgNanRoot", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "imgDices1", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "imgDices2", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "imgDices3", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "spNutDenActive", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "spNutDenPhien", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "spNutTrangActive", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "spNutTrangPhien", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "btn_Nan", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "btn_DungNan", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "bcoinSprite", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "spfBtnChatShow", void 0);
s([ u(cc.SpriteFrame) ], e.prototype, "spfBtnChatHide", void 0);
s([ u(cc.Node) ], e.prototype, "m_imgResult", void 0);
s([ u(cc.Node) ], e.prototype, "imgBgTimer2", void 0);
s([ u(cc.Node) ], e.prototype, "m_imgNan", void 0);
s([ u(cc.Node) ], e.prototype, "panelChen", void 0);
s([ u(cc.Node) ], e.prototype, "imgBat", void 0);
s([ u(cc.Node) ], e.prototype, "panelNumberBig", void 0);
s([ u(cc.Node) ], e.prototype, "panelKeypad", void 0);
s([ u(cc.Node) ], e.prototype, "m_imgDayLose", void 0);
s([ u(cc.Node) ], e.prototype, "m_imgDayWin", void 0);
s([ u(cc.Node) ], e.prototype, "m_historyPanel", void 0);
s([ u(cc.Node) ], e.prototype, "btnKeyBroad", void 0);
s([ u(cc.Node) ], e.prototype, "m_panelTaxiu", void 0);
s([ u(cc.Node) ], e.prototype, "nodeChat", void 0);
s([ u(sp.Skeleton) ], e.prototype, "SkeXucXac", void 0);
s([ u(sp.Skeleton) ], e.prototype, "SkeKetQua", void 0);
s([ u(cc.Label) ], e.prototype, "m_lblTurnID", void 0);
s([ u(cc.Label) ], e.prototype, "ebInputBetTai", void 0);
s([ u(cc.Label) ], e.prototype, "ebInputBetXiu", void 0);
s([ u(cc.Label) ], e.prototype, "m_lblTimerWaitResult", void 0);
s([ u(cc.Label) ], e.prototype, "m_lblMessage", void 0);
s([ u(cc.Label) ], e.prototype, "m_lblUsersTai", void 0);
s([ u(cc.Label) ], e.prototype, "m_lblUsersXiu", void 0);
s([ u(cc.Label) ], e.prototype, "m_lblMoneyTai", void 0);
s([ u(cc.Label) ], e.prototype, "m_lblMoneyXiu", void 0);
s([ u(cc.Label) ], e.prototype, "m_lblBetedValueTai", void 0);
s([ u(cc.Label) ], e.prototype, "m_lblBetedValueXiu", void 0);
s([ u(cc.Label) ], e.prototype, "m_lblMoneyWin", void 0);
s([ u(cc.Label) ], e.prototype, "m_lblTimer", void 0);
s([ u(cc.Label) ], e.prototype, "txtBestThua", void 0);
s([ u(cc.Label) ], e.prototype, "txtBestThang", void 0);
s([ u(cc.Button) ], e.prototype, "btnChonTai", void 0);
s([ u(cc.Button) ], e.prototype, "btnChonXiu", void 0);
s([ u(cc.Button) ], e.prototype, "btnSoKhac", void 0);
s([ u(cc.Button) ], e.prototype, "btnAccept", void 0);
s([ u(cc.Button) ], e.prototype, "btnNan", void 0);
s([ u(cc.Button) ], e.prototype, "btnCancel", void 0);
s([ u(cc.Button) ], e.prototype, "btnAllIn", void 0);
s([ u(cc.Button) ], e.prototype, "btnChat", void 0);
s([ u(cc.Prefab) ], e.prototype, "HisTurn", void 0);
s([ u(cc.AudioClip) ], e.prototype, "coin_drop", void 0);
return i = s([ h ], e);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {
"./BatNanCtrl": "BatNanCtrl",
"./Tx.Const": "Tx.Const",
"./network/Tx.NetworkClient": "Tx.NetworkClient"
} ],
"Tx.NetworkClient": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f92d9Jk98NMapfWVtveZ+Xp", "Tx.NetworkClient");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, o) {
var n, s = arguments.length, c = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, i, c) : n(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("../popup/Tx.History"), a = t("../popup/Tx.VinhDanh"), r = t("../Tx.Const"), l = t("../Tx.HistoryTurn"), h = t("../Tx.MainGame"), u = cc._decorator, p = u.ccclass, m = (u.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.isConnect = !1;
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
i._instance = this;
};
e.prototype.connect = function() {
console.log("Connect");
cc.systemEvent.off(r.TxConst.ON_TAIXIU_SOCKET, this.onResponeData, this);
cc.systemEvent.on(r.TxConst.ON_TAIXIU_SOCKET, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(r.TxConst.ON_TAIXIU_SOCKET, "https://tx.azonline.club/signalr/negotiate", "txhub", fzgui.UserManager.instance.mainUserInfo.cookie, !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
fzgui.ZLog.log("=====================CONNECT WS TX===============================");
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
fzgui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s || "1" == t.s) if (this.isConnect) this.sendSignalR("GetCurrentRoomsTaiXiu", [ 1 ]); else {
this.isConnect = !0;
this.connectSuccess();
this.sendSignalR("GetCurrentRoomsTaiXiu", [ 1 ]);
}
t.R < 0 && fzgui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length && t.M != []) for (var e = t.M.length, i = 0; i < e; ++i) {
var o = t.M[i];
if (o.A && null != o.A[0] && null != o.A[0]) {
var n = o.A[0];
switch (o.M) {
case "currentResult":
h.default.instance.currentResult(n);
break;

case "currentSession":
h.default.instance.currentSession(n);
break;

case "currentRoomsInfo":
h.default.instance.currentRoomsInfo(n);
break;

case "gameHistory":
h.default.instance.gameHistory(n);
break;

case "eventRank":
h.default.instance.setEventRank(n);
break;

case "resultOfAccount":
h.default.instance.resultOfAccount(n);
break;

case "betOfAccount":
h.default.instance.betOfAccount(n);
break;

case "sessionHistory":
l.default.instance.showHistoryTurnTaiXiu(n);
break;

case "taiXiuAccountHistory":
c.default.instance.showAccountHistoryTaiXiu(n);
break;

case "taiXiuTopWinner":
a.default.instance.showTopAccountsTaiXiu(n);
}
}
}
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
fzgui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(r.TxConst.ON_TAIXIU_SOCKET, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
fzgui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var i;
e._instance = null;
return i = s([ p ], e);
}(cc.Component));
i.default = m;
cc._RF.pop();
}, {
"../Tx.Const": "Tx.Const",
"../Tx.HistoryTurn": "Tx.HistoryTurn",
"../Tx.MainGame": "Tx.MainGame",
"../popup/Tx.History": "Tx.History",
"../popup/Tx.VinhDanh": "Tx.VinhDanh"
} ],
"Tx.SoiCau": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "847768LLpxHyoQqQJUdMzRw", "Tx.SoiCau");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, o) {
var n, s = arguments.length, c = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, i, c) : n(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("./Tx.Const"), a = cc._decorator, r = a.ccclass, l = a.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._arrSC1 = [];
return e;
}
e.prototype.onEnable = function() {
this.buttonL.node.tagName = 0;
this.buttonR.node.tagName = 1;
this.tongCb.isSelected = !0;
this.xucxac1Cb.isSelected = !0;
this.xucxac2Cb.isSelected = !0;
this.xucxac3Cb.isSelected = !0;
this.pnlXXT.active = !0;
this.pnlXX1.active = !0;
this.pnlXX2.active = !0;
this.pnlXX3.active = !0;
this.initData(c.TxConst.dataHistoryGame);
};
e.prototype.initData = function(t) {
cc.log(t);
this.pnlSC1.removeAllChildren();
this.pnlSC2.removeAllChildren();
this.pnlXXT.removeAllChildren();
this.pnlXX1.removeAllChildren();
this.pnlXX2.removeAllChildren();
this.pnlXX3.removeAllChildren();
var e = 0, i = 0, o = -1, n = 0, s = t[0].DiceSum;
for (var c in t) {
if (s > 10 && t[c].DiceSum < 11 || s < 11 && t[c].DiceSum > 10) {
s = t[c].DiceSum;
n++;
}
n < 19 && this._arrSC1.push(t[c]);
}
o = -1;
n = 0;
s = this._arrSC1[this._arrSC1.length - 1].DiceSum;
for (var a = this._arrSC1.length - 1; a >= 0; a--) {
if (s > 10 && this._arrSC1[a].DiceSum < 11 || s < 11 && this._arrSC1[a].DiceSum > 10) {
s = this._arrSC1[a].DiceSum;
n++;
o = 0;
} else if (6 == ++o) {
o = 0;
n++;
}
if (n > 19) break;
var r = cc.instantiate(this.template);
r.position = new cc.Vec3(0, 0);
r.active = !0;
r.getChildByName("label").getComponent(cc.Label).string = this._arrSC1[a].DiceSum;
if (this._arrSC1[a].DiceSum > 10) {
e++;
r.getComponent(cc.Sprite).spriteFrame = this.ellipseBack;
r.getChildByName("label").color = cc.color(98, 240, 252);
} else {
i++;
r.getComponent(cc.Sprite).spriteFrame = this.ellipseWhite;
r.getChildByName("label").color = cc.color(255, 255, 255);
}
0 == a && (r.getChildByName("label").color = cc.color(255, 255, 0));
r.setPosition(this.getPosforSC1(n, o));
this.pnlSC1.addChild(r);
}
for (var l = 0, h = 0, u = 0, p = 0, m = t.length - 1; m >= 0; m--) {
var d = new cc.Node(), g = d.addComponent(cc.Sprite), f = null;
if (t[m].DiceSum > 10) {
f = 0 == m ? this.nutdenActive : this.nutdenIcon;
u++;
} else {
f = 0 == m ? this.nuttrangActive : this.nuttrangIcon;
p++;
}
f && (g.spriteFrame = f);
d.setPosition(this.getPosforSC1(h, l));
this.pnlSC2.addChild(d);
if (5 == ++l) {
l = 0;
h++;
}
if (s > 10 && t[m].DiceSum < 11 || s < 11 && t[m].DiceSum > 10) {
s = t[m].DiceSum;
n++;
o = 0;
} else if (6 == ++o) {
o = 0;
n++;
}
}
this.lbSc1Duoi.string = "Xỉu: " + i;
this.lbSc1Tren.string = "Tài: " + e;
this.lbSc2Duoi.string = "Xỉu: " + p;
this.lbSc2Tren.string = "Tài: " + u;
this.lb1.string = "Phiên gần nhất (#" + t[0].GameSessionID + ") - ";
t[0].DiceSum > 10 && (this.lb2.string = "Tổng " + t[0].DiceSum + ": (" + t[0].Dice1 + "-" + t[0].Dice2 + "-" + t[0].Dice3 + ")");
for (var _ = t.length > 19 ? 19 : t.length, T = (n = 0, _ > 19 ? 19 : _); T >= 0; T--) {
var y = new cc.Node(), C = y.addComponent(cc.Sprite);
t[T].DiceSum > 10 ? C.spriteFrame = this.ballBlack : C.spriteFrame = this.ballWhite;
y.setPosition(this.getPosforSC2(n, t[T].DiceSum));
this.pnlXXT.addChild(y, 2);
var v = new cc.Node();
v.addComponent(cc.Sprite).spriteFrame = this.ballYellow;
v.setPosition(this.getPosforSC3(n, t[T].Dice1));
this.pnlXX1.addChild(v, 2);
var b = new cc.Node();
b.addComponent(cc.Sprite).spriteFrame = this.ballRed;
b.setPosition(this.getPosforSC3(n, t[T].Dice2));
this.pnlXX2.addChild(b, 2);
var S = new cc.Node();
S.addComponent(cc.Sprite).spriteFrame = this.ballBlue;
S.setPosition(this.getPosforSC3(n, t[T].Dice3));
this.pnlXX3.addChild(S, 2);
if (19 == T) {
var N = this.drawLine(cc.v2(0, this.getPosforSC2(n, t[T].DiceSum).y), this.getPosforSC2(n, t[T].DiceSum), 4, cc.color(255, 239, 135));
this.pnlXXT.addChild(N, 1);
var B = this.drawLine(cc.v2(0, this.getPosforSC3(n, t[T].Dice1).y), this.getPosforSC3(n, t[T].Dice1), 2, cc.color(250, 255, 2));
this.pnlXX1.addChild(B, 1);
var x = this.drawLine(cc.v2(0, this.getPosforSC3(n, t[T].Dice2).y), this.getPosforSC3(n, t[T].Dice2), 2, cc.color(255, 93, 117));
this.pnlXX2.addChild(x, 1);
var I = this.drawLine(cc.v2(0, this.getPosforSC3(n, t[T].Dice3).y), this.getPosforSC3(n, t[T].Dice3), 2, cc.color(97, 239, 251));
this.pnlXX3.addChild(I, 1);
} else {
var E = this.drawLine(this.getPosforSC2(n - 1, t[T + 1].DiceSum), this.getPosforSC2(n, t[T].DiceSum), 4, cc.color(255, 239, 135));
this.pnlXXT.addChild(E, 1);
var D = this.drawLine(this.getPosforSC3(n - 1, t[T + 1].Dice1), this.getPosforSC3(n, t[T].Dice1), 2, cc.color(250, 255, 2));
this.pnlXX1.addChild(D, 1);
var X = this.drawLine(this.getPosforSC3(n - 1, t[T + 1].Dice2), this.getPosforSC3(n, t[T].Dice2), 2, cc.color(255, 93, 117));
this.pnlXX2.addChild(X, 1);
var A = this.drawLine(this.getPosforSC3(n - 1, t[T + 1].Dice3), this.getPosforSC3(n, t[T].Dice3), 2, cc.color(97, 239, 251));
this.pnlXX3.addChild(A, 1);
}
n++;
}
};
e.prototype.getPosforSC1 = function(t, e) {
var i = 40.5 + 40.5 * t, o = 179 - 40 * e;
return cc.v2(i, o);
};
e.prototype.getPosforSC2 = function(t, e) {
var i = 36 + 36 * t, o = 35 + 35 * (parseInt(e / 3) - 1) + e % 3 * (35 / 3);
return cc.v2(i, o);
};
e.prototype.getPosforSC3 = function(t, e) {
var i = 36 + 36 * t, o = 35 + 35 * (e - 1);
return cc.v2(i, o);
};
e.prototype.touchPageView = function() {
0 == this.pageViewSC.getCurrentPageIndex() ? this.pageViewSC.scrollToPage(1, 0) : this.pageViewSC.scrollToPage(0, 0);
};
e.prototype.touchTongCB = function() {
this.pnlXXT.active ? this.pnlXXT.active = !1 : this.pnlXXT.active = !0;
};
e.prototype.touchXucXac1CB = function() {
this.pnlXX1.active ? this.pnlXX1.active = !1 : this.pnlXX1.active = !0;
};
e.prototype.touchXucXac2CB = function() {
this.pnlXX2.active ? this.pnlXX2.active = !1 : this.pnlXX2.active = !0;
};
e.prototype.touchXucXac3CB = function() {
this.pnlXX3.active ? this.pnlXX3.active = !1 : this.pnlXX3.active = !0;
};
e.prototype.touchClose = function() {
this.node.active = !1;
};
e.prototype.drawLine = function(t, e, i, o) {
var n = new cc.Node(), s = n.addComponent(cc.Graphics);
s.lineWidth = i;
s.moveTo(t.x, t.y);
s.lineTo(e.x, e.y);
s.strokeColor = o;
s.stroke();
return n;
};
s([ l(cc.Label) ], e.prototype, "lbSc1Duoi", void 0);
s([ l(cc.Label) ], e.prototype, "lbSc1Tren", void 0);
s([ l(cc.Label) ], e.prototype, "lbSc2Duoi", void 0);
s([ l(cc.Label) ], e.prototype, "lbSc2Tren", void 0);
s([ l(cc.Label) ], e.prototype, "lb1", void 0);
s([ l(cc.Label) ], e.prototype, "lb2", void 0);
s([ l(cc.Button) ], e.prototype, "buttonL", void 0);
s([ l(cc.Button) ], e.prototype, "buttonR", void 0);
s([ l(cc.Node) ], e.prototype, "pnlSC1", void 0);
s([ l(cc.Node) ], e.prototype, "pnlSC2", void 0);
s([ l(cc.Node) ], e.prototype, "pnlXXT", void 0);
s([ l(cc.Node) ], e.prototype, "pnlXX1", void 0);
s([ l(cc.Node) ], e.prototype, "pnlXX2", void 0);
s([ l(cc.Node) ], e.prototype, "pnlXX3", void 0);
s([ l(cc.Node) ], e.prototype, "panel_2", void 0);
s([ l(cc.Node) ], e.prototype, "template", void 0);
s([ l(cc.Toggle) ], e.prototype, "tongCb", void 0);
s([ l(cc.Toggle) ], e.prototype, "xucxac1Cb", void 0);
s([ l(cc.Toggle) ], e.prototype, "xucxac2Cb", void 0);
s([ l(cc.Toggle) ], e.prototype, "xucxac3Cb", void 0);
s([ l(cc.SpriteFrame) ], e.prototype, "ellipseBack", void 0);
s([ l(cc.SpriteFrame) ], e.prototype, "ellipseWhite", void 0);
s([ l(cc.SpriteFrame) ], e.prototype, "nutdenActive", void 0);
s([ l(cc.SpriteFrame) ], e.prototype, "nutdenIcon", void 0);
s([ l(cc.SpriteFrame) ], e.prototype, "nuttrangActive", void 0);
s([ l(cc.SpriteFrame) ], e.prototype, "nuttrangIcon", void 0);
s([ l(cc.SpriteFrame) ], e.prototype, "ballBlack", void 0);
s([ l(cc.SpriteFrame) ], e.prototype, "ballWhite", void 0);
s([ l(cc.SpriteFrame) ], e.prototype, "ballYellow", void 0);
s([ l(cc.SpriteFrame) ], e.prototype, "ballRed", void 0);
s([ l(cc.SpriteFrame) ], e.prototype, "ballBlue", void 0);
s([ l(cc.PageView) ], e.prototype, "pageViewSC", void 0);
return s([ r ], e);
}(fzgui.UIPopup);
i.default = h;
cc._RF.pop();
}, {
"./Tx.Const": "Tx.Const"
} ],
"Tx.UINumericLabelHelper": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3bf52qpuRxFjqsS01sEuAs7", "Tx.UINumericLabelHelper");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, o) {
var n, s = arguments.length, c = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, i, c) : n(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, r = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return s([ a ], e);
}(fzgui.UINumericLabelHelper));
i.default = r;
cc._RF.pop();
}, {} ],
"Tx.VinhDanh": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ce663pTjA5BPZebqeXdq7va", "Tx.VinhDanh");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, o) {
var n, s = arguments.length, c = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, i, c) : n(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("../network/Tx.NetworkClient"), a = t("../Tx.Const"), r = cc._decorator, l = r.ccclass, h = r.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spfHuanChuong = [];
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
i._instance = this;
c.default.instance.sendSignalR("GetTopAccounts", [ a.TxConst.BetType.BET_GOLD, a.TxConst.GameID.TAI_XIU, 10 ]);
};
e.prototype.showTopAccountsTaiXiu = function(t) {
if (t.length) for (var e = t.length, i = 0; i < e; i++) {
var o = t[i], n = o.UserName, s = o.PrizeValue, c = cc.instantiate(this.template);
c.position = new cc.Vec3(0, 0, 0);
if (0 == i) {
c.getChildByName("txtHang").active = !1;
c.getChildByName("sprHuanChuong").getComponent(cc.Sprite).spriteFrame = this.spfHuanChuong[i];
c.getChildByName("txtTenTaiKhoan").color = cc.Color.YELLOW;
c.getChildByName("txtTienThang").color = cc.Color.YELLOW;
} else if (1 == i) {
c.getChildByName("txtHang").active = !1;
c.getChildByName("sprHuanChuong").getComponent(cc.Sprite).spriteFrame = this.spfHuanChuong[i];
c.getChildByName("txtTenTaiKhoan").color = cc.Color.WHITE;
c.getChildByName("txtTienThang").color = cc.Color.WHITE;
} else if (2 == i) {
c.getChildByName("txtHang").active = !1;
c.getChildByName("sprHuanChuong").getComponent(cc.Sprite).spriteFrame = this.spfHuanChuong[i];
c.getChildByName("txtTenTaiKhoan").color = cc.Color.ORANGE;
c.getChildByName("txtTienThang").color = cc.Color.ORANGE;
} else {
c.getChildByName("txtHang").active = !0;
c.getChildByName("txtHang").getComponent(cc.Label).string = "" + (i + 1);
}
if (i > 2) {
c.getChildByName("txtTienThang").color = cc.Color.GRAY;
c.getChildByName("txtTenTaiKhoan").color = cc.Color.GRAY;
}
c.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = n;
c.getChildByName("txtTienThang").getComponent(cc.Label).string = a.TxConst.formatNumber(s);
this.content.addChild(c);
}
};
var i;
e._instance = null;
s([ h(cc.Node) ], e.prototype, "template", void 0);
s([ h(cc.Node) ], e.prototype, "content", void 0);
s([ h([ cc.SpriteFrame ]) ], e.prototype, "spfHuanChuong", void 0);
return i = s([ l ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {
"../Tx.Const": "Tx.Const",
"../network/Tx.NetworkClient": "Tx.NetworkClient"
} ],
Utils: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "478fcpjsoNBh4cX8aoFKW8p", "Utils");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.common = void 0;
var o, n = cc._decorator;
n.ccclass, n.property;
(function(t) {
var e = function() {
function t() {}
t.degreesToVec2 = function(e) {
return t.radianToVec2(e * t.Deg2Rad);
};
t.radianToVec2 = function(t) {
return cc.v2(Math.cos(t), Math.sin(t));
};
t.numberToEnum = function(t, e) {
return e[e[t]];
};
t.loadSpriteFrameFromBase64 = function(t, e) {
var i = new Image();
i.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(i);
t.handleLoadedTexture();
var o = new cc.SpriteFrame(t);
e(o);
}.bind(this);
i.src = "data:image/png;base64," + t;
};
t.formatNumber = function(t) {
return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
t.formatDateTime = function(t) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + "/" + e[0] + " - " + t[1].substr(0, 5);
};
t.formatNumberMin = function(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "B";
}
if (t >= 1e6) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "M";
}
if (t >= 1e3) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "K";
}
return this.formatNumber(t);
};
t.stringToInt = function(t) {
var e = parseInt(t.replace(/\./g, "").replace(/,/g, ""));
isNaN(e) && (e = 0);
return e;
};
t.randomRangeInt = function(t, e) {
return Math.floor(Math.random() * (e - t)) + t;
};
t.randomRange = function(t, e) {
return Math.random() * (e - t) + t;
};
t.v2Distance = function(t, e) {
return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
};
t.v2Degrees = function(t, e) {
return 180 * Math.atan2(e.y - t.y, e.x - t.x) / Math.PI;
};
t.dateToYYYYMMdd = function(t) {
var e = t.getMonth() + 1, i = t.getDate();
return [ t.getFullYear(), (e > 9 ? "" : "0") + e, (i > 9 ? "" : "0") + i ].join("-");
};
t.dateToYYYYMM = function(t) {
var e = t.getMonth() + 1;
t.getDate();
return [ t.getFullYear(), (e > 9 ? "" : "0") + e ].join("-");
};
t.removeDups = function(t) {
var e = {};
t.forEach(function(t) {
e[t] || (e[t] = !0);
});
return Object.keys(e);
};
t.Rad2Deg = -57.2957795;
t.Deg2Rad = -.0174532925;
return t;
}();
t.Utils = e;
})(o = i.common || (i.common = {}));
i.default = o.Utils;
cc._RF.pop();
}, {} ],
lbCountDown: [ function(t, e) {
"use strict";
cc._RF.push(e, "10a7avoXkFOA44TGPFkeGGL", "lbCountDown");
cc.Class({
extends: cc.Component,
properties: {
lbGameCooldown1: cc.Label,
lbGameCooldown2: cc.Label,
remaningTime: 0,
_posNum1: cc.v2(0, 0),
_posNum2: cc.v2(0, 0)
},
onLoad: function() {
this._posNum1 = this.lbGameCooldown1.node.position;
this._posNum2 = this.lbGameCooldown2.node.position;
},
setRemaningTime: function(t) {
this.remaningTime = t;
var e = ("0" + Math.floor(this.remaningTime)).slice(-2);
this.lbGameCooldown1.string = e[0];
this.lbGameCooldown2.string = e[1];
},
getRemaningTime: function() {
return this.remaningTime;
},
_changeColorTime: function() {
this.remaningTime < 6 ? (this.lbGameCooldown1.node.color = cc.Color.RED, this.lbGameCooldown2.node.color = cc.Color.RED) : (this.lbGameCooldown1.node.color = cc.Color.WHITE, 
this.lbGameCooldown2.node.color = cc.Color.WHITE);
},
update: function(t) {
if (null != this.remaningTime) {
var e = this.lbGameCooldown1.string, i = this.lbGameCooldown2.string;
this.remaningTime = Math.max(this.remaningTime - t, 0);
if (this.remaningTime <= 6) {
this.lbGameCooldown1.node.color = new cc.Color(255, 0, 0, 0);
this.lbGameCooldown2.node.color = new cc.Color(255, 0, 0, 0);
} else {
this.lbGameCooldown1.node.color = new cc.Color(255, 255, 255, 0);
this.lbGameCooldown2.node.color = new cc.Color(255, 255, 255, 0);
}
this.setRemaningTime(this.remaningTime);
var o = this.lbGameCooldown1.string, n = this.lbGameCooldown2.string;
if (e !== o && (this.lbGameCooldown1.node.position = this._posNum1.add(cc.v2(0, this.lbGameCooldown1.node.height / 2)))) {
this.lbGameCooldown1.node.opacity = 0;
this.lbGameCooldown1.node.runAction(cc.spawn(cc.fadeIn(.23), cc.moveTo(.23, this._posNum1).easing(cc.easeBackOut())));
}
if (i !== n && (this.lbGameCooldown2.node.position = this._posNum2.add(cc.v2(0, this.lbGameCooldown2.node.height / 2)))) {
this.lbGameCooldown2.node.opacity = 0;
this.lbGameCooldown2.node.runAction(cc.spawn(cc.fadeIn(.23), cc.moveTo(.23, this._posNum2).easing(cc.easeBackOut())));
}
}
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "BatNanCtrl", "Tx.Chat", "Tx.Const", "Tx.HistoryTurn", "Tx.MainGame", "Tx.SoiCau", "Tx.UINumericLabelHelper", "Utils", "lbCountDown", "Tx.Chat.NetworkClient", "Tx.NetworkClient", "Tx.History", "Tx.VinhDanh" ]);