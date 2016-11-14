'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionComponent = (function (_BaseComponent) {
  _inherits(OptionComponent, _BaseComponent);

  function OptionComponent(props) {
    _classCallCheck(this, OptionComponent);

    _get(Object.getPrototypeOf(OptionComponent.prototype), 'constructor', this).call(this, props);
    this._bind('goBack', 'handleDownload', 'imageCropURL');
  }

  _createClass(OptionComponent, [{
    key: 'goBack',
    value: function goBack() {
      this.props.onBacktoCategory();
    }
  }, {
    key: 'handleDownload',
    value: function handleDownload(event) {
      var _this = this;

      event.preventDefault();
      var templateTitle = this.props.template.title;
      var id = this.props.template.id;
      if (confirm('Download ' + templateTitle + ' Template?')) {
        // window.location.href = "/public/system/templates/images/000/000/017/original/FlexboxCompatability.PNG"
        $.ajax({
          method: 'GET',
          url: '/templates/' + id + '/file_send',
          success: function () {
            _this.goBack();
          }
        });
      }
    }
  }, {
    key: 'imageCropURL',
    value: function imageCropURL(event) {
      event.preventDefault();
      var id = this.props.template.id;
      $.ajax({
        method: 'POST',
        url: '/templates/' + id + '/crop'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var fileDownloadURL = "/templates/" + this.props.template.id + "/file_send";
      var imageCropURL = "/templates/" + this.props.template.id + "/to_crop";
      return React.createElement(
        'div',
        { className: 'outside-container-box' },
        React.createElement(
          'div',
          { className: 'container-box' },
          React.createElement(
            'span',
            { className: 'glyphicon glyphicon-arrow-left position', onClick: this.goBack },
            'BACK'
          ),
          React.createElement('br', null),
          React.createElement(
            'div',
            { className: 'parent' },
            React.createElement('div', { className: 'item' }),
            React.createElement(
              'div',
              { className: 'item' },
              React.createElement(
                'h1',
                { className: 'templateTitle' },
                this.props.template.title,
                ' Template'
              )
            ),
            React.createElement('div', { className: 'item' })
          ),
          React.createElement(
            'div',
            { className: 'parent4' },
            React.createElement('div', { className: 'item4' }),
            React.createElement(
              'div',
              { className: 'item4 categories' },
              React.createElement(
                'div',
                { className: 'btn-group btn-div' },
                React.createElement(
                  'a',
                  { className: 'categoryLink', href: fileDownloadURL },
                  'I have Photoshop'
                ),
                React.createElement(
                  'a',
                  { className: 'categoryLink marginLink', href: imageCropURL },
                  'I don\'t have Photoshop'
                )
              )
            ),
            React.createElement('div', { className: 'item4' })
          )
        )
      );
    }
  }]);

  return OptionComponent;
})(BaseComponent);
