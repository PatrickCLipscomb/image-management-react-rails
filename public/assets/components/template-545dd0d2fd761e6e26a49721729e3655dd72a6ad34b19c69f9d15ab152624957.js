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
