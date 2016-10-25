'use strict';

class Templates extends BaseComponent {
    constructor(props) {
        super();
        this._bind('addTemplate', 'deleteTemplate', 'handleEditTemplate', 'handleCatCycle');
        this.state = {
            categories: props.data[0],
            templates: props.data[1],
            selectedCatID: 'All'
        };
    }

    addTemplate(template) {
        var templates = React.addons.update(this.state.templates, {$push: [template]});
        this.setState({ templates: templates });
    }

    deleteTemplate(template) {
        var index = this.state.templates.indexOf(template);
        var templates = React.addons.update(this.state.templates, {$splice: [[index, 1]]});
        this.setState({ templates: templates });
    }

    handleEditTemplate(template, data) {
        var index = this.state.templates.indexOf(template);
        var templates = React.addons.update(this.state.templates, {$splice: [[index, 1, data]]});
        this.setState({ templates: templates} );
    }


    handleCatCycle(event) {
      var id = event.currentTarget.value
      this.setState({selectedCatID: id})
    }
 
    render() {
        var chosenTemplates = [];
        var currentState = this.state.selectedCatID
        this.state.templates.forEach(function(template) {
          if (currentState === "All") {
            chosenTemplates.push(template)
          } else if (template.category_id === parseInt(currentState)) {
            chosenTemplates.push(template)
          }
        })
        var templates = chosenTemplates.map((template, index) => {
            return <Template key={template.id} template={template} categories={this.state.categories}
                           handleDeleteTemplate={this.deleteTemplate} handleEditTemplate={this.handleEditTemplate} />
        })
        var categoryArray = this.state.categories
        return (
            <div className="templates">
                <h2 className="title"> Templates </h2>
                <h5 className="title">Add a template</h5>
                <TemplateForm handleNewTemplate={this.addTemplate} categories={this.state.categories} />
                <hr />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th> Title </th>
                            <th> Description </th>
                            <th> Category <br />
                              <select value={this.state.catCycle} onChange={this.handleCatCycle}>
                                <option value="All">All Categories</option>
                                <option value={categoryArray[0].id}>{categoryArray[0].name}</option>
                                <option value={categoryArray[1].id}>{categoryArray[1].name}</option>
                                <option value={categoryArray[2].id}>{categoryArray[2].name}</option>
                              </select>
                            </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                    {templates}
                    </tbody>
                </table>
            </div>
        );
    }
}

Templates.defaultProps = {
    templates: []
};
