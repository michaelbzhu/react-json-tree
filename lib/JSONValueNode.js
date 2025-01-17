'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Renders simple values (eg. strings, numbers, booleans, etc)
 */

var JSONValueNode = function JSONValueNode(_ref) {
  var nodeType = _ref.nodeType,
    styling = _ref.styling,
    labelRenderer = _ref.labelRenderer,
    keyPath = _ref.keyPath,
    valueRenderer = _ref.valueRenderer,
    value = _ref.value,
    valueGetter = _ref.valueGetter,
    iconRenderer = _ref.iconRenderer;
  return _react2['default'].createElement(
    'li',
    styling('value', nodeType, keyPath),
    _react2['default'].createElement(
      'label',
      styling(['label', 'valueLabel'], nodeType, keyPath),
      labelRenderer(keyPath, nodeType, false, false)
    ),
    _react2['default'].createElement(
      'span',
      styling('valueText', nodeType, keyPath),
      valueRenderer.apply(
        undefined,
        [valueGetter(value), value].concat(keyPath)
      )
    ),
    _react2['default'].createElement(
      'span',
      styling('renderedIcon', nodeType, keyPath),
      iconRenderer(keyPath, nodeType, false, false)
    )
  );
};

JSONValueNode.propTypes = {
  nodeType: _propTypes2['default'].string.isRequired,
  styling: _propTypes2['default'].func.isRequired,
  labelRenderer: _propTypes2['default'].func.isRequired,
  keyPath: _propTypes2['default'].arrayOf(
    _propTypes2['default'].oneOfType([
      _propTypes2['default'].string,
      _propTypes2['default'].number
    ])
  ).isRequired,
  valueRenderer: _propTypes2['default'].func.isRequired,
  value: _propTypes2['default'].any,
  valueGetter: _propTypes2['default'].func,
  iconRenderer: _propTypes2['default'].func
};

JSONValueNode.defaultProps = {
  valueGetter: function valueGetter(value) {
    return value;
  }
};

exports['default'] = JSONValueNode;
