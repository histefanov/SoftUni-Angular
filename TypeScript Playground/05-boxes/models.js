"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box = /** @class */ (function () {
    function Box() {
        this._box = [];
    }
    Box.prototype.add = function (item) {
        this._box.push(item);
    };
    Box.prototype.remove = function () {
        this._box.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._box.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
exports.default = Box;
