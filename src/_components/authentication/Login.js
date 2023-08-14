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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const react_router_dom_1 = require("react-router-dom");
const LoadingSpinner_1 = __importDefault(require("../sharedControls/LoadingSpinner"));
const PageHeader_1 = __importDefault(require("../sharedControls/PageHeader"));
const authentication_service_1 = __importDefault(require("../../_services/authentication.service"));
const Login = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_2.useEffect)(() => {
        const currentUser = authentication_service_1.default.currentUserValue;
        if (currentUser && currentUser.data) {
            const roles = currentUser.roles.result;
            if (roles) {
                if (roles.includes('Admin')) {
                    navigate('/admin/courses');
                }
                else if (roles.includes('Student') || roles.includes('Instructor')) {
                    navigate('/courses');
                }
            }
        }
    }, [navigate]);
    if (!authentication_service_1.default.currentUserValue) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(PageHeader_1.default, { title: "Login" }),
            react_1.default.createElement("div", { className: "p-2" },
                react_1.default.createElement(formik_1.Formik, { initialValues: {
                        username: '',
                        password: ''
                    }, validationSchema: Yup.object().shape({
                        username: Yup.string().required('Username is required'),
                        password: Yup.string().required('Password is required')
                    }), onSubmit: ({ username, password }, { setStatus, setSubmitting }) => __awaiter(void 0, void 0, void 0, function* () {
                        setStatus();
                        try {
                            const result = yield authentication_service_1.default.login(username, password);
                            if ('status' in result) {
                                // AxiosResponse, handle the response data
                                if (result.status !== 200) {
                                    setStatus(result.data["message"]);
                                }
                                else {
                                    const responseData = result.data;
                                    if (responseData.roles != null) {
                                        if (responseData.roles.result.includes('Admin')) {
                                            navigate('/admin/courses');
                                        }
                                        else {
                                            navigate('/courses');
                                        }
                                    }
                                }
                            }
                            else {
                                if ('data' in result) {
                                    // User object, successful login
                                    const responseData = result.data;
                                    if (responseData.roles != null) {
                                        if (responseData.roles.result.includes('Admin')) {
                                            navigate('/admin/courses');
                                        }
                                        else {
                                            navigate('/courses');
                                        }
                                    }
                                }
                            }
                        }
                        catch (error) {
                            setStatus(error.message);
                        }
                        finally {
                            setSubmitting(false);
                        }
                    }) }, ({ errors, status, touched, isSubmitting }) => (react_1.default.createElement(formik_1.Form, null,
                    react_1.default.createElement("div", { className: "form-group" },
                        react_1.default.createElement("label", { htmlFor: "username" }, "Username"),
                        react_1.default.createElement(formik_1.Field, { name: "username", type: "text", className: `form-control ${errors.username && touched.username ? 'is-invalid' : ''}` }),
                        react_1.default.createElement(formik_1.ErrorMessage, { name: "username", component: "div", className: "invalid-feedback" })),
                    react_1.default.createElement("div", { className: "form-group" },
                        react_1.default.createElement("label", { htmlFor: "password" }, "Password"),
                        react_1.default.createElement(formik_1.Field, { name: "password", type: "password", className: `form-control ${errors.password && touched.password ? 'is-invalid' : ''}` }),
                        react_1.default.createElement(formik_1.ErrorMessage, { name: "password", component: "div", className: "invalid-feedback" })),
                    react_1.default.createElement("div", { className: "form-group" },
                        react_1.default.createElement("button", { type: "submit", className: "btn btn-primary", disabled: isSubmitting }, "Login"),
                        react_1.default.createElement("span", { className: "ml-2 small" },
                            "Not registered yet? Register as a ",
                            react_1.default.createElement(react_router_dom_1.Link, { to: "/register-with-code" }, "Student"),
                            "\u00A0or\u00A0",
                            react_1.default.createElement(react_router_dom_1.Link, { to: "/register" }, "Instructor")),
                        isSubmitting && react_1.default.createElement(LoadingSpinner_1.default, null)),
                    status && react_1.default.createElement("div", { className: "alert alert-danger" }, status)))))));
    }
    else {
        return react_1.default.createElement("div", null,
            "You are signed in as ",
            authentication_service_1.default.currentUserValue["username"],
            "!");
    }
};
exports.default = Login;
