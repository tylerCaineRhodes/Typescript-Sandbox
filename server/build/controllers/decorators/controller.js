"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var metadataKeys_1 = require("./metadataKeys");
function controller(routePrefix) {
    //gonna be constructor function as apposed to applying to a method or property which will refer to prototype instead
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(metadataKeys_1.MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(metadataKeys_1.MetadataKeys.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(metadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];
            if (path) {
                router[method].apply(router, __spreadArrays(["" + routePrefix + path], middlewares, [routeHandler]));
            }
        }
    };
}
exports.controller = controller;
