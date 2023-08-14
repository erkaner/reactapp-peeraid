"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var TryOutSynergy = function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Try Out Synegy"),
        React.createElement("p", { className: "pt-2" },
            "If you are teaching a course in Higher Education and if you want to use Synergy to implement a feedback activity in your course, please sign up for Synergy on this page: ",
            React.createElement(react_router_dom_1.Link, { to: "/register" }, "Registration for the instructors"),
            ". You will be notified once your registration is confirmed."),
        React.createElement("p", null,
            "If you have any questions please contact us at ",
            React.createElement("a", { href: "mailto:learnwithsynergy@gmail.com" }, "learnwithsynergy@gmail.com"),
            ".")));
};
exports.default = TryOutSynergy;
//# sourceMappingURL=TryOutSynergy.js.map