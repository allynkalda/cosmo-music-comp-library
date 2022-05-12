"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Small = exports.Secondary = exports.Primary = exports.Large = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Example/Button',
  component: _Button.Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, _objectSpread({}, args));
};

var Primary = Template.bind({}); // More on args: https://storybook.js.org/docs/react/writing-stories/args

exports.Primary = Primary;
Primary.args = {
  primary: true,
  label: 'See brass teachers'
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  label: 'See brass teachers'
};
var Large = Template.bind({});
exports.Large = Large;
Large.args = {
  size: 'large',
  label: 'See brass teachers'
};
var Small = Template.bind({});
exports.Small = Small;
Small.args = {
  size: 'small',
  label: 'See brass teachers'
};