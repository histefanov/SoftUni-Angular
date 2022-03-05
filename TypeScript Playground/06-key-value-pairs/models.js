"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log("key = ".concat(this.key, ", value = ").concat(this.val));
    };
    return KeyValuePair;
}());
exports.default = KeyValuePair;
