'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Templates = (function (_BaseComponent) {
  _inherits(Templates, _BaseComponent);

  function Templates(props) {
    _classCallCheck(this, Templates);

    _get(Object.getPrototypeOf(Templates.prototype), 'constructor', this).call(this);
    this._bind('addTemplate', 'deleteTemplate', 'handleEditTemplate', 'handleCatCycle', 'fetchTemplates');
    this.state = {
      categories: props.data[0],
      templates: props.data[1],
      selectedCatID: 'All'
    };
  }

  _createClass(Templates, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;

      this.timer = setInterval(function () {
        return _this.fetchTemplates();
      }, 2000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'fetchTemplates',
    value: function fetchTemplates() {
      var _this2 = this;

      $.ajax({
        method: 'GET',
        url: '/templates',
        datatype: 'JSON',
        success: function (templates) {
          _this2.setState({ templates: templates });
        }
      });
    }
  }, {
    key: 'addTemplate',
    value: function addTemplate(template) {
      var templates = React.addons.update(this.state.templates, { $push: [template] });
      this.setState({ templates: templates });
    }
  }, {
    key: 'deleteTemplate',
    value: function deleteTemplate(template) {
      var index = this.state.templates.indexOf(template);
      var templates = React.addons.update(this.state.templates, { $splice: [[index, 1]] });
      this.setState({ templates: templates });
    }
  }, {
    key: 'handleEditTemplate',
    value: function handleEditTemplate(template, data) {
      var index = this.state.templates.indexOf(template);
      var templates = React.addons.update(this.state.templates, { $splice: [[index, 1, data]] });
      this.setState({ templates: templates });
    }
  }, {
    key: 'handleCatCycle',
    value: function handleCatCycle(event) {
      var id = event.currentTarget.value;
      this.setState({ selectedCatID: id });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var chosenTemplates = [];
      var currentState = this.state.selectedCatID;
      this.state.templates.forEach(function (template) {
        if (currentState === "All") {
          chosenTemplates.push(template);
        } else if (template.category_id === parseInt(currentState)) {
          chosenTemplates.push(template);
          chosenTemplates = chosenTemplates.sort(function (a, b) {
            var firstTitle = a.title.toLowerCase();
            var secondTitle = b.title.toLowerCase();
            if (firstTitle < secondTitle) {
              return -1;
            } else if (firstTitle > secondTitle) {
              return 1;
            } else {
              return 0;
            }
          });
        }
      });
      var templates = chosenTemplates.map(function (template, index) {
        return React.createElement(Template, { key: template.id, template: template, categories: _this3.state.categories,
          handleDeleteTemplate: _this3.deleteTemplate, handleEditTemplate: _this3.handleEditTemplate });
      });
      var categoryArray = this.state.categories;
      return React.createElement(
        'div',
        { className: 'templates' },
        React.createElement('br', null),
        React.createElement(
          'table',
          { className: 'table table-bordered' },
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                ' ',
                React.createElement(
                  'span',
                  { className: '' },
                  'Category'
                ),
                ' ',
                React.createElement('br', null),
                React.createElement(
                  'select',
                  { onChange: this.handleCatCycle },
                  React.createElement(
                    'option',
                    { value: 'All' },
                    'All Categories'
                  ),
                  React.createElement(
                    'option',
                    { value: categoryArray[0].id },
                    categoryArray[0].name
                  ),
                  React.createElement(
                    'option',
                    { value: categoryArray[1].id },
                    categoryArray[1].name
                  ),
                  React.createElement(
                    'option',
                    { value: categoryArray[2].id },
                    categoryArray[2].name
                  )
                )
              ),
              React.createElement(
                'th',
                { className: '' },
                ' Title '
              ),
              React.createElement(
                'th',
                { className: '' },
                ' Description '
              ),
              React.createElement(
                'th',
                { className: '' },
                ' File Attachment '
              ),
              React.createElement(
                'th',
                { className: '' },
                ' Actions '
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            templates
          )
        )
      );
    }
  }]);

  return Templates;
})(BaseComponent);

Templates.defaultProps = {
  templates: []
};
