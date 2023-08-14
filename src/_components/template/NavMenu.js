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
const react_redux_1 = require("react-redux");
const reactstrap_1 = require("reactstrap");
const react_router_dom_1 = require("react-router-dom");
require("./NavMenu.css");
const authentication_service_1 = __importDefault(require("../../_services/authentication.service"));
const NavMenu = ({ courses, currentCourse }) => {
    const [st_CurrentUser, set_CurrentUser] = (0, react_1.useState)(null);
    const [st_isAdmin, set_isAdmin] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        const subscription = authentication_service_1.default.currentUser.subscribe((x) => set_CurrentUser(x));
        if (authentication_service_1.default.currentUserValue)
            set_isAdmin(authentication_service_1.default.currentUserValue.roles.result.includes('Admin'));
        return () => {
            subscription.unsubscribe();
        };
    }, []);
    const logout = (event) => {
        if (event)
            event.preventDefault();
        authentication_service_1.default.logout();
        navigate('/login');
    };
    return (react_1.default.createElement("div", { className: "bg-white" },
        !st_CurrentUser && (react_1.default.createElement("div", { className: "p-4 d-flex justify-content-center", style: {
                backgroundColor: '#0d4862',
                backgroundImage: "url(/siteimages/header-background.jpg)",
                borderBottom: "10px solid #8ed2bd",
            } },
            react_1.default.createElement("div", { className: "" },
                react_1.default.createElement("img", { width: "85px", src: `siteimages/synergy-dialogue.png`, alt: "Synergy Dialogue" })),
            react_1.default.createElement("div", { className: "ml-4" },
                react_1.default.createElement("div", { className: "h3 text-uppercase text-white round", style: { letterSpacing: '0.05em', lineHeight: '32px' } }, "AI-Powered Peer Learning"),
                react_1.default.createElement("div", { className: "text-center text-white", style: { letterSpacing: '0.05em' } }, "Leveraging AI to create adaptive and personalized peer learning experiences")))),
        st_CurrentUser && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(reactstrap_1.NavbarBrand, { tag: react_router_dom_1.Link, to: "/Home" },
                react_1.default.createElement("img", { height: "50", src: `siteimages/synergy-logo.jpg`, alt: "Synergy Logo" })),
            react_1.default.createElement(reactstrap_1.Collapse, { className: "d-sm-inline-flex flex-sm-row-reverse", navbar: true },
                react_1.default.createElement("ul", { className: "navbar-nav flex-grow" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "text-right" },
                            "Welcome ",
                            react_1.default.createElement("span", { className: "font-weight-bold text-primary" }, authentication_service_1.default.currentUserValue['firstName']),
                            "\u00A0(",
                            react_1.default.createElement("span", { className: "text-info" }, authentication_service_1.default.currentUserValue['email']),
                            ")"),
                        react_1.default.createElement("div", { className: "small text-right" },
                            !st_isAdmin && authentication_service_1.default.currentUserValue['gmailAddress'] &&
                                react_1.default.createElement(react_1.default.Fragment, null,
                                    react_1.default.createElement(react_router_dom_1.Link, { className: "btn btn-sm btn-link text-primary", to: "/courses" }, "Courses"),
                                    react_1.default.createElement("span", null, "|")),
                            react_1.default.createElement(react_router_dom_1.Link, { className: "btn btn-sm btn-link text-primary", to: "/user-guides" }, "User Guides"),
                            "|",
                            st_isAdmin &&
                                react_1.default.createElement(react_1.default.Fragment, null,
                                    react_1.default.createElement(react_router_dom_1.Link, { className: "btn btn-sm btn-link text-primary", to: "/admin/courses" }, "Courses"),
                                    "|",
                                    react_1.default.createElement(react_router_dom_1.Link, { className: "btn btn-sm btn-link text-primary", to: "/admin/instructor-list" }, "Instructors"),
                                    "|"),
                            react_1.default.createElement(react_router_dom_1.Link, { className: "btn btn-sm btn-link text-primary", to: "/update-profile" }, "Edit Profile"),
                            "|",
                            react_1.default.createElement("button", { className: "btn btn-sm btn-link text-primary", onClick: logout }, "Logout"),
                            authentication_service_1.default.currentUserValue['gmailAddress'] && currentCourse &&
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("span", null, currentCourse.title),
                                    "\u00A0 | ",
                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/assignments" }, "Assignments"))))))))));
};
const mapStateToProps = (state) => ({
    courses: state.courseReducer.courses,
    currentCourse: state.courseReducer.currentCourse,
});
exports.default = (0, react_redux_1.connect)(mapStateToProps)(NavMenu);
