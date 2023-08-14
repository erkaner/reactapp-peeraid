"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Layout_1 = __importDefault(require("./_components/template/Layout"));
const LoadingSpinner_1 = __importDefault(require("./_components/sharedControls/LoadingSpinner"));
const UserGuides_1 = __importDefault(require("./_components/staticpages/UserGuides"));
const Contact_1 = __importDefault(require("./_components/staticpages/Contact"));
const CaseStudies_1 = __importDefault(require("./_components/staticpages/CaseStudies"));
const ResearchTeam_1 = __importDefault(require("./_components/staticpages/ResearchTeam"));
const Research_1 = __importDefault(require("./_components/staticpages/Research"));
const TermsOfService_1 = __importDefault(require("./_components/staticpages/TermsOfService"));
const PrivacyPolicy_1 = __importDefault(require("./_components/staticpages/PrivacyPolicy"));
const CopyrightPolicy_1 = __importDefault(require("./_components/staticpages/CopyrightPolicy"));
const TryOutSynergy_1 = __importDefault(require("./_components/staticpages/TryOutSynergy"));
const Login_1 = __importDefault(require("./_components/authentication/Login"));
const Register_1 = __importDefault(require("./_components/authentication/Register"));
const Home_1 = __importDefault(require("./_components/staticpages/Home"));
const App = () => {
    return (react_1.default.createElement(Layout_1.default, null,
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(LoadingSpinner_1.default, null) },
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: '/home', element: react_1.default.createElement(Home_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/login', element: react_1.default.createElement(Login_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/register', element: react_1.default.createElement(Register_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/terms-of-service', element: react_1.default.createElement(TermsOfService_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/privacy-policy', element: react_1.default.createElement(PrivacyPolicy_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/copyright-policy', element: react_1.default.createElement(CopyrightPolicy_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/tryout', element: react_1.default.createElement(TryOutSynergy_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/user-guides', element: react_1.default.createElement(UserGuides_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/research', element: react_1.default.createElement(Research_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/case-studies', element: react_1.default.createElement(CaseStudies_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/research-team', element: react_1.default.createElement(ResearchTeam_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/contact', element: react_1.default.createElement(Contact_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '*', element: react_1.default.createElement(Home_1.default, null) })))));
};
exports.default = App;
