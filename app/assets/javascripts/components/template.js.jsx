'use strict';

class Template extends BaseComponent {
    constructor(props){
        super(props);
        this._bind('handleDelete', 'handleToggle', 'templateRow', 'templateForm', 'handleEdit', 'handleCatChange');
        this.state = {
            edit: false,
            categoryID: this.catIDFunc(this.props.categories, this.props.template.category_id)
        };
    }

    handleDelete(event) {
        var id = "templates/" + this.props.template.id;
        event.preventDefault();
        $.ajax({
            method: 'DELETE',
            url: id,
            dataType: 'JSON',
            success: ( () => {
                this.props.handleDeleteTemplate(this.props.template);
            })
        });
    }

    handleEdit(event) {
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
            success: ( (data) => {
                this.setState({ edit: false });
                this.props.handleEditTemplate(this.props.template, data);
            })
        });
    }

    handleToggle(event) {
        event.preventDefault();
        this.setState({ edit: !this.state.edit });
    }

    catFunc(categories, category_id) {
      var categoryName;
      categories.forEach(function(cat) {
        if (cat.id === category_id) {
          categoryName = cat.name
        }
      })
      return categoryName
    }

    catIDFunc(categories, category_id) {
      var categoryID;
      categories.forEach(function(cat) {
        if (cat.id === category_id) {
          categoryID = cat.id
        }
      })
      return categoryID
    }

    handleCatChange(event) {
      this.setState({categoryID: event.currentTarget.value});
    }

    templateRow() {
      var category = this.catFunc(this.props.categories, this.props.template.category_id);
        return (
            <tr>
                <td>{this.props.template.title}</td>
                <td>{this.props.template.description}</td>
                <td>{category}</td>
                <td>
                    <a className="btn btn-default" onClick={this.handleToggle}>Edit</a>
                    <a className="btn btn-danger" onClick={this.handleDelete}>Delete</a>
                </td>
            </tr>
        );
    }

    templateForm(categoryArray) {
        return (
            <tr>
                <td>
                    <input className="form-control" type="text" defaultValue={this.props.template.title} ref="title"/>
                </td>
                <td>
                    <input className="form-control" type="text" defaultValue={this.props.template.description} ref="description"/>
                </td>
                <td>
                  <select value={this.state.categoryID} onChange={this.handleCatChange}>
                    <option value={categoryArray[0].id.toString()}>{categoryArray[0].name}</option>
                    <option value={categoryArray[1].id.toString()}>{categoryArray[1].name}</option>
                    <option value={categoryArray[2].id.toString()}>{categoryArray[2].name}</option>
                  </select>
                </td>
                <td>
                    <a className="btn btn-default" onClick={this.handleEdit}>Update</a>
                    <a className="btn btn-danger" onClick={this.handleToggle}>Cancel</a>
                </td>
            </tr>
        );
    }

    render() {
        return this.state.edit ? this.templateForm(this.props.categories) : this.templateRow();
    }
}

Template.propTypes = {
    template: React.PropTypes.object.isRequired,
    handleDeleteTemplate: React.PropTypes.func.isRequired,
    handleEditTemplate: React.PropTypes.func.isRequired
};
