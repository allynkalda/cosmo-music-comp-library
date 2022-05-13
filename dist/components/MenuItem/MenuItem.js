"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _menuItem = _interopRequireDefault(require("./menuItem.css"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(_ref) {
  var id = _ref.id,
      href = _ref.href,
      label = _ref.label,
      listClass = _ref.listClass,
      linkClass = _ref.linkClass,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
    id: id,
    className: (0, _classnames.default)(_menuItem.default.menuItem, listClass),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: linkClass,
      href: href,
      onMouseEnter: onMouseEnter,
      onClick: onClick,
      children: label
    })
  }, id);
};

exports.MenuItem = MenuItem;
MenuItem.propTypes = {
  id: _propTypes.default.string | _propTypes.default.number,
  href: _propTypes.default.string,
  listClass: _propTypes.default.object,
  linkClass: _propTypes.default.object,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  onMouseEnter: _propTypes.default.func
};
MenuItem.defaultProps = {
  onClick: undefined,
  onMouseEnter: undefined
};