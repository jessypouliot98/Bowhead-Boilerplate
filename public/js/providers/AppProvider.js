"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContext = exports.AppConsumer = exports.AppProvider = void 0;
var react_1 = __importDefault(require("react"));
var Context = react_1.default.createContext({});
exports.AppContext = Context;
var Consumer = Context.Consumer;
exports.AppConsumer = Consumer;
var AppProvider = /** @class */ (function (_super) {
    __extends(AppProvider, _super);
    function AppProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            plugins: {},
            loading: false,
            globalState: {},
            menu: {},
        };
        return _this;
    }
    AppProvider.prototype.componentDidMount = function () {
    };
    AppProvider.prototype.render = function () {
        return (react_1.default.createElement(Context.Provider, { value: {
                state: this.state.globalState,
            } }, !this.state.loading && (this.props.children)));
    };
    return AppProvider;
}(react_1.default.Component));
exports.AppProvider = AppProvider;
