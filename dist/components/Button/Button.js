"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./button.css");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["primary", "backgroundColor", "size", "label"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var primary = _ref.primary,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded);

  var mode = primary ? 'primary' : 'secondary';
  var sizeProps = size ? size : 'medium';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", _objectSpread(_objectSpread({
    type: "button",
    className: ['button', sizeProps, mode].join(' '),
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, props), {}, {
    children: label
  }));
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: _propTypes.default.bool,

  /**
   * What background color to use
   */
  backgroundColor: _propTypes.default.string,

  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),

  /**
   * Button contents
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Optional click handler
   */
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};
var _default = Button;
exports.default = _default;