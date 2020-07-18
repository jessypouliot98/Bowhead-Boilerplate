"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_router_dom_1 = require("react-router-dom");
var AppProvider_1 = require("@providers/AppProvider");
var App_1 = __importDefault(require("./App"));
//
var root = document.getElementById('root');
var app = (react_1.default.createElement(AppProvider_1.AppProvider, null,
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(App_1.default, null))));
react_dom_1.default.render(app, root);
