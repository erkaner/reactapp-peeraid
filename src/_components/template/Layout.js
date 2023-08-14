"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const NavMenu_1 = __importDefault(require("./NavMenu"));
const Layout = ({ children }) => {
    return (react_1.default.createElement("div", { style: { height: "100vh", backgroundImage: "url(/siteimages/timeline-background.png)" } },
        react_1.default.createElement(NavMenu_1.default, null),
        react_1.default.createElement(reactstrap_1.Container, { className: "pb-4 pt-4 bg-white" }, children)));
};
exports.default = Layout;
