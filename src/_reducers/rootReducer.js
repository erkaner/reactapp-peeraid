"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const userReducer_1 = __importDefault(require("./userReducer"));
const courseReducer_1 = __importDefault(require("./courseReducer"));
const rootReducer = (0, redux_1.combineReducers)({
    userReducer: userReducer_1.default,
    courseReducer: courseReducer_1.default,
});
exports.default = rootReducer;
