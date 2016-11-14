var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseComponent = (function (_React$Component) {
    _inherits(BaseComponent, _React$Component);

    function BaseComponent() {
        _classCallCheck(this, BaseComponent);

        _get(Object.getPrototypeOf(BaseComponent.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(BaseComponent, [{
        key: "_bind",
        value: function _bind() {
            var _this = this;

            for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
                methods[_key] = arguments[_key];
            }

            methods.forEach(function (method) {
                return _this[method] = _this[method].bind(_this);
            });
        }
    }]);

    return BaseComponent;
})(React.Component);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Categories = (function (_BaseComponent) {
  _inherits(Categories, _BaseComponent);

  function Categories(props) {
    _classCallCheck(this, Categories);

    _get(Object.getPrototypeOf(Categories.prototype), 'constructor', this).call(this);
    this._bind('landingPage', 'templatePage', 'toggleSocial', 'toggleAd', 'toggleImage', 'backToLanding', 'downloadClick', 'optionPage', 'backToCategory');
    this.state = {
      templates: props.data[0],
      categories: props.data[1],
      landingPageShow: true,
      currentCategory: 'none',
      templateDownLoadOption: null
    };
    console.log(this.state.categories);
  }

  _createClass(Categories, [{
    key: 'toggleAd',
    value: function toggleAd() {
      this.setState({ landingPageShow: false, currentCategory: this.state.categories[1] });
    }
  }, {
    key: 'toggleImage',
    value: function toggleImage() {
      this.setState({ landingPageShow: false, currentCategory: this.state.categories[2] });
    }
  }, {
    key: 'toggleSocial',
    value: function toggleSocial() {
      this.setState({ landingPageShow: false, currentCategory: this.state.categories[0] });
    }
  }, {
    key: 'backToLanding',
    value: function backToLanding() {
      this.setState({ landingPageShow: true });
    }
  }, {
    key: 'backToCategory',
    value: function backToCategory() {
      this.setState({ templateDownLoadOption: null });
    }
  }, {
    key: 'downloadClick',
    value: function downloadClick(template) {
      this.setState({ templateDownLoadOption: template });
    }
  }, {
    key: 'optionPage',
    value: function optionPage() {
      var template = React.createElement(OptionComponent, { template: this.state.templateDownLoadOption, onBacktoCategory: this.backToCategory });
      return React.createElement(
        'div',
        { className: 'react-container' },
        template
      );
    }
  }, {
    key: 'landingPage',
    value: function landingPage() {
      return React.createElement(
        'div',
        { className: 'outside-container-box' },
        React.createElement(
          'div',
          { className: 'container-box' },
          React.createElement(
            'div',
            { className: 'parent' },
            React.createElement('div', { className: 'item' }),
            React.createElement(
              'div',
              { className: 'item' },
              React.createElement(
                'h1',
                { className: 'startingQ' },
                'WHAT WOULD YOU LIKE TO CREATE?'
              )
            ),
            React.createElement('div', { className: 'item' })
          ),
          React.createElement(
            'div',
            { className: 'parent2' },
            React.createElement('div', { className: 'item2' }),
            React.createElement(
              'div',
              { className: 'item2' },
              React.createElement(
                'div',
                { className: 'parent3' },
                React.createElement(
                  'div',
                  { className: 'item3' },
                  React.createElement('img', { className: 'landingCategoryImage', src: this.state.categories[0].image })
                ),
                React.createElement(
                  'div',
                  { className: 'item3' },
                  React.createElement('img', { className: 'landingCategoryImage', src: this.state.categories[1].image })
                ),
                React.createElement(
                  'div',
                  { className: 'item3' },
                  React.createElement('img', { className: 'landingCategoryImage', src: this.state.categories[2].image })
                )
              ),
              React.createElement(
                'div',
                { className: ' parent3' },
                React.createElement(
                  'div',
                  { className: 'item3' },
                  React.createElement(
                    'a',
                    { onClick: this.toggleSocial, className: 'categoryLink' },
                    this.state.categories[0].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'item3' },
                  React.createElement(
                    'a',
                    { onClick: this.toggleAd, className: 'categoryLink' },
                    this.state.categories[1].name
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'item3' },
                  React.createElement(
                    'a',
                    { onClick: this.toggleImage, className: 'categoryLink' },
                    this.state.categories[2].name
                  )
                )
              )
            ),
            React.createElement('div', { className: 'item2' })
          )
        )
      );
    }
  }, {
    key: 'templatePage',
    value: function templatePage() {
      var _this = this;

      var currentCategory = this.state.currentCategory;
      var header = currentCategory.name;
      var selectedTemplates = [];
      this.state.templates.forEach(function (template) {
        if (template.category_id === currentCategory.id) {
          selectedTemplates.push(template);
        }
      });
      var templates = selectedTemplates.map(function (template) {
        return React.createElement(MinimalTemplate, { key: template.id, template: template, onDownloadClick: _this.downloadClick });
      });
      return React.createElement(
        'div',
        { className: 'outside-container-box' },
        React.createElement(
          'div',
          { className: 'container-box' },
          React.createElement(
            'span',
            { className: 'glyphicon glyphicon-arrow-left position', onClick: this.backToLanding },
            'BACK'
          ),
          React.createElement(
            'div',
            { className: 'parent' },
            React.createElement('div', { className: 'item' }),
            React.createElement(
              'div',
              { className: 'item' },
              React.createElement(
                'h1',
                { className: 'startingQ' },
                header,
                ' Templates'
              )
            ),
            React.createElement('div', { className: 'item' })
          ),
          React.createElement(
            'div',
            { className: 'parent4 ' },
            React.createElement('div', { className: 'item4' }),
            React.createElement(
              'div',
              { className: 'item4 categories overflow' },
              React.createElement('ul', { className: 'list-group' }),
              templates
            ),
            React.createElement('div', { className: 'item4' })
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.templateDownLoadOption) {
        return this.optionPage();
      } else if (this.state.landingPageShow) {
        return this.landingPage();
      } else {
        return this.templatePage();
      }
    }
  }]);

  return Categories;
})(BaseComponent);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MinimalTemplate = (function (_BaseComponent) {
  _inherits(MinimalTemplate, _BaseComponent);

  function MinimalTemplate(props) {
    _classCallCheck(this, MinimalTemplate);

    _get(Object.getPrototypeOf(MinimalTemplate.prototype), 'constructor', this).call(this);
    this._bind('handleDownload');
  }

  _createClass(MinimalTemplate, [{
    key: 'handleDownload',
    value: function handleDownload() {
      this.props.onDownloadClick(this.props.template);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: '' },
        React.createElement(
          'li',
          { className: 'list-group-item', onClick: this.handleDownload },
          React.createElement(
            'h4',
            null,
            this.props.template.title
          ),
          React.createElement(
            'p',
            { className: 'minimal-template-description' },
            this.props.template.description
          )
        )
      );
    }
  }]);

  return MinimalTemplate;
})(BaseComponent);
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
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = (function (_BaseComponent) {
    _inherits(Template, _BaseComponent);

    function Template(props) {
        _classCallCheck(this, Template);

        _get(Object.getPrototypeOf(Template.prototype), 'constructor', this).call(this, props);
        this._bind('handleDelete', 'handleToggle', 'templateRow', 'templateForm', 'handleEdit', 'handleCatChange');
        this.state = {
            edit: false,
            categoryID: this.catIDFunc(this.props.categories, this.props.template.category_id)
        };
    }

    _createClass(Template, [{
        key: 'handleDelete',
        value: function handleDelete(event) {
            var _this = this;

            var id = "templates/" + this.props.template.id;
            event.preventDefault();
            $.ajax({
                method: 'DELETE',
                url: id,
                dataType: 'JSON',
                success: function () {
                    _this.props.handleDeleteTemplate(_this.props.template);
                }
            });
        }
    }, {
        key: 'handleEdit',
        value: function handleEdit(event) {
            var _this2 = this;

            event.preventDefault();
            console.log(this.state.categoryID);
            var id = "templates/" + this.props.template.id;
            var data = {
                title: ReactDOM.findDOMNode(this.refs.title).value,
                description: ReactDOM.findDOMNode(this.refs.description).value,
                category_id: this.state.categoryID
            };
            $.ajax({
                method: 'PUT',
                url: id,
                dataType: 'JSON',
                data: { template: data },
                success: function (data) {
                    _this2.setState({ edit: false });
                    _this2.props.handleEditTemplate(_this2.props.template, data);
                }
            });
        }
    }, {
        key: 'handleToggle',
        value: function handleToggle(event) {
            event.preventDefault();
            this.setState({ edit: !this.state.edit });
        }
    }, {
        key: 'catFunc',
        value: function catFunc(categories, category_id) {
            var categoryName;
            categories.forEach(function (cat) {
                if (cat.id === category_id) {
                    categoryName = cat.name;
                }
            });
            return categoryName;
        }
    }, {
        key: 'catIDFunc',
        value: function catIDFunc(categories, category_id) {
            var categoryID;
            categories.forEach(function (cat) {
                if (cat.id === category_id) {
                    categoryID = cat.id;
                }
            });
            return categoryID;
        }
    }, {
        key: 'handleCatChange',
        value: function handleCatChange(event) {
            this.setState({ categoryID: event.currentTarget.value });
        }
    }, {
        key: 'templateRow',
        value: function templateRow() {
            var categoryName = this.catFunc(this.props.categories, this.props.template.category_id);
            return React.createElement(
                'tr',
                { className: categoryName },
                React.createElement(
                    'td',
                    null,
                    categoryName
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.template.title
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.template.description
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.template.image_file_name
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement('a', { className: 'btn btn-default glyphicon glyphicon-pencil inline-glyph', onClick: this.handleToggle }),
                    React.createElement('a', { className: 'btn btn-danger glyphicon glyphicon-trash inline-glyph', onClick: this.handleDelete })
                )
            );
        }
    }, {
        key: 'templateForm',
        value: function templateForm(categoryArray) {
            var categoryName = this.catFunc(this.props.categories, this.props.template.category_id);
            return React.createElement(
                'tr',
                { className: categoryName },
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'select',
                        { value: this.state.categoryID, onChange: this.handleCatChange },
                        React.createElement(
                            'option',
                            { value: categoryArray[0].id.toString() },
                            categoryArray[0].name
                        ),
                        React.createElement(
                            'option',
                            { value: categoryArray[1].id.toString() },
                            categoryArray[1].name
                        ),
                        React.createElement(
                            'option',
                            { value: categoryArray[2].id.toString() },
                            categoryArray[2].name
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement('input', { className: 'form-control', type: 'text', defaultValue: this.props.template.title, ref: 'title' })
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement('input', { className: 'form-control', type: 'text', defaultValue: this.props.template.description, ref: 'description' })
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.template.image_file_name
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'div',
                        { className: 'btn-group inline' },
                        React.createElement('a', { className: 'btn btn-default glyphicon glyphicon-ok inline-glyph', onClick: this.handleEdit }),
                        React.createElement('a', { className: 'btn btn-danger glyphicon glyphicon-remove inline-glyph', onClick: this.handleToggle })
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.state.edit ? this.templateForm(this.props.categories) : this.templateRow();
        }
    }]);

    return Template;
})(BaseComponent);

Template.propTypes = {
    template: React.PropTypes.object.isRequired,
    handleDeleteTemplate: React.PropTypes.func.isRequired,
    handleEditTemplate: React.PropTypes.func.isRequired
};
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
