"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Welcome = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Welcome = function Welcome() {
  var messge = 'Hello React JS';

  var welcomeElement = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    id: "spanMessage",
    className: ""
  }, messge), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", null, "Hi Guys..."));

  return welcomeElement;
};

exports.Welcome = Welcome;