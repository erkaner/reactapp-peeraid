"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const PageHeader = ({ title }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const goBack = () => {
        navigate(-1); // Go back one step in the history stack
    };
    return (react_1.default.createElement("div", { className: "row mb-3" },
        react_1.default.createElement("div", { className: "col-auto mr-auto" },
            react_1.default.createElement("div", { className: "display-4" }, title)),
        react_1.default.createElement("div", { className: "col-auto" },
            react_1.default.createElement("button", { className: "btn btn-light text-danger mt-4", onClick: goBack },
                react_1.default.createElement("i", { className: "fa fa-angle-double-left" }),
                "\u00A0Go Back"))));
};
exports.default = PageHeader;
