"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var styles = "font-weight:bold; font-size:16px;";
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.success = function (msg) {
        console.log("%c ".concat(msg), "color:#00B74A;".concat(styles));
    };
    Log.error = function (msg) {
        console.log("%c ".concat(msg), "color:#F93154;".concat(styles));
    };
    Log.info = function (msg) {
        console.log("%c ".concat(msg), "color:#39C0ED;".concat(styles));
    };
    Log.warn = function (msg) {
        console.log("%c ".concat(msg), "color:#FFA900;".concat(styles));
    };
    return Log;
}());
exports.Log = Log;
