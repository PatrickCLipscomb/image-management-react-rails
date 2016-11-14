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
