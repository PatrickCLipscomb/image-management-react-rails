'use strict';


var initialState = {
    title: '',
    description: '',
    category_id: '',
    image: '',
    errors: null,
    percentLoaded: null
};

class TemplateForm extends BaseComponent {
    constructor(props) {
        super(props);
        this._bind('handleChange', 'valid', 'handleSubmit', 'handleCatChange', 'imageUpload');
        this.state = initialState;
    }

    handleChange(event) {
        var name = event.target.name;
        var obj = {};
        obj[""+name] = event.target.value;
        this.setState(obj);
    }

    valid() {
        return this.state.title && this.state.description && this.state.category_id;
    }

    handleSubmit(event) {
        event.preventDefault();
        var state = this.state;
        $.ajax({
          method: 'POST',
          url: 'templates',
          dataType: 'JSON',
          data: {template: state, category_id: this.state.category_id},
          success: ( (data) => {
            this.props.handleNewTemplate(data);
            this.setState(initialState);
          })
        })
    }

    handleCatChange(event) {
      this.setState({category_id: event.currentTarget.value});
    }

    imageUpload(){
      event.preventDefault()
      var file = this.refs.image.files[0];
      console.log(file)
      console.log(this.state.category_id)
      var reader = new FileReader();
      reader.onloadend = () => {
        this.setState({image: file})
        console.log(this.state.image)
      }
    }

    render() {
      var categoryArray = this.props.categories
        return (
            <form className="form-inline" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Title"
                           name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Description"
                           name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                </div>
                <select value={this.state.category} onChange={this.handleCatChange}>
                  <option value=''>None</option>
                  <option value={categoryArray[0].id.toString()}>{categoryArray[0].name}</option>
                  <option value={categoryArray[1].id.toString()}>{categoryArray[1].name}</option>
                  <option value={categoryArray[2].id.toString()}>{categoryArray[2].name}</option>
                </select>
                <div className="form-group">
                    <input type="file" ref="image" name="image" multiple="true" className="form-control" value={this.state.image} onChange={this.imageUpload} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.valid()}>
                    Create Template
                </button>
            </form>
        );
    }
}

TemplateForm.propTypes = {
    handleNewTemplate: React.PropTypes.func.isRequired
};
