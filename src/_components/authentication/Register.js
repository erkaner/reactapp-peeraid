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
const axios_1 = __importDefault(require("axios"));
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const LoadingSpinner_1 = __importDefault(require("../sharedControls/LoadingSpinner"));
const PageHeader_1 = __importDefault(require("../sharedControls/PageHeader"));
const react_router_dom_2 = require("react-router-dom");
const Register = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [submitted, setSubmitted] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const [loading, setLoading] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_2.useNavigate)();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => (Object.assign(Object.assign({}, prevData), { [name]: value.trim() })));
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        setSubmitted(true);
        setLoading(true);
        setError('');
        try {
            yield axios_1.default.post('api/account/register', {
                FirstName: formData.firstName,
                LastName: formData.lastName,
                Username: formData.email,
                Password: formData.password,
                IsLocked: true,
                Role: 'Admin',
            });
            setLoading(false);
            console.log('success: registration');
            //localStorage.setItem('user', formData.email);
            navigate('/login');
        }
        catch (error) {
            setLoading(false);
            console.log('error:' + error.message);
            setError(error.message);
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        loading && react_1.default.createElement(LoadingSpinner_1.default, null),
        react_1.default.createElement("div", { className: "pt-3 mb-4" },
            react_1.default.createElement("div", { className: "bg-light p-2 small" },
                react_1.default.createElement("p", { className: "" }, "This registration form is only for instructors. After registration, you may use the system once your account is approved."),
                react_1.default.createElement("p", { className: "" },
                    "If you experience any delays or have any questions, please email us a",
                    react_1.default.createElement(PageHeader_1.default, { title: "Registration [For Instructors Only]" }),
                    "t ",
                    react_1.default.createElement("span", { className: "text-primary bg-light" }, "learnwithsynergy@gmail.com"),
                    "."),
                react_1.default.createElement("p", { className: "" },
                    "If you are a student trying to access the system, please contact your instructor to ask for the course registration code. Once you know the code, you can register here:\u00A0",
                    react_1.default.createElement("a", { className: "text-primary bg-light", href: "https://synergylearn.net/register-with-code" }, "https://synergylearn.net/register-with-code"),
                    "."))),
        react_1.default.createElement("form", { name: "form", onSubmit: handleSubmit },
            react_1.default.createElement("div", { className: 'form-group' + (submitted && !formData.firstName ? ' has-error' : '') },
                react_1.default.createElement("label", { htmlFor: "firstName" }, "First Name"),
                react_1.default.createElement("input", { type: "text", className: "form-control", name: "firstName", value: formData.firstName, onChange: handleChange }),
                submitted && !formData.firstName && react_1.default.createElement("div", { className: "small text-danger" }, "First Name is required")),
            react_1.default.createElement("div", { className: 'form-group' + (submitted && !formData.lastName ? ' has-error' : '') },
                react_1.default.createElement("label", { htmlFor: "lastName" }, "Last Name"),
                react_1.default.createElement("input", { type: "text", className: "form-control", name: "lastName", value: formData.lastName, onChange: handleChange }),
                submitted && !formData.lastName && react_1.default.createElement("div", { className: "small text-danger" }, "Last Name is required")),
            react_1.default.createElement("div", { className: 'form-group' + (submitted && !formData.email ? ' has-error' : '') },
                react_1.default.createElement("label", { htmlFor: "email" }, "Email"),
                react_1.default.createElement("input", { type: "text", className: "form-control", name: "email", value: formData.email, onChange: handleChange }),
                submitted && !formData.email && react_1.default.createElement("div", { className: "small text-danger" }, "Email is required")),
            react_1.default.createElement("div", { className: 'form-group' + (submitted && !formData.password ? ' has-error' : '') },
                react_1.default.createElement("label", { htmlFor: "password" }, "Password"),
                react_1.default.createElement("input", { type: "password", className: "form-control", name: "password", value: formData.password, onChange: handleChange }),
                submitted && !formData.password && react_1.default.createElement("div", { className: "small text-danger" }, "Password is required")),
            react_1.default.createElement("div", { className: "text-dark small pb-3" },
                "By clicking Register, you agree to our ",
                react_1.default.createElement(react_router_dom_1.Link, { target: "_blank", to: "/terms-of-service" }, "Terms of Service"),
                ". Learn how we collect, use, and share your anonymized data for research in our ",
                react_1.default.createElement(react_router_dom_1.Link, { target: "_blank", to: "/privacy-policy" }, "Privacy Policy"),
                "."),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("button", { className: "btn btn-primary" }, "Register")),
            error !== '' && react_1.default.createElement("div", { className: "text-danger" }, error))));
};
exports.default = Register;
