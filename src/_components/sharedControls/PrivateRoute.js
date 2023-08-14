"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const authentication_service_1 = __importDefault(require("../../_services/authentication.service"));
const PrivateRoute = (_a) => {
    var { path, isAnonymousPage, component } = _a, rest = __rest(_a, ["path", "isAnonymousPage", "component"]);
    const isAuthenticated = authentication_service_1.default.currentUserValue !== null;
    if (isAnonymousPage || isAuthenticated) {
        return react_1.default.createElement(react_router_dom_1.Route, Object.assign({}, rest, { Component: component }));
    }
    return null;
};
exports.default = PrivateRoute;
