"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const LoadingSpinner = () => {
    return ((0, jsx_runtime_1.jsx)("div", { id: "cover-spin-background", children: (0, jsx_runtime_1.jsx)("img", { id: "cover-spin", alt: "Loading...", src: `siteimages/loading-circle.gif` }) }));
};
exports.default = LoadingSpinner;
