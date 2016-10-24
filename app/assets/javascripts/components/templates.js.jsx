'use strict';

class Templates extends BaseComponent {
    constructor(props) {
        super();
        this._bind('addTemplate', 'deleteTemplate', 'handleEditTemplate', 'handleCatCycle');
        this.state = {
            categories: props.data[0],
            templates: props.data[1],
            filteredTemplates: props.data[1]
        };
    }

    addTemplate(template) {
        var templates = React.addons.update(this.state.templates, {$push: [template]});
        this.setState({ templates: templates });
    }

    deleteTemplate(template) {
        if (this.state.filteredTemplates.includes(template)) {
          var filtIndex = this.state.filteredTemplates.indexOf(template)
          var templatesFiltered = React.addons.update(this.state.filteredTemplates, {$splice: [[index, 1]]});
          this.setState({filteredTemplates: templatesFiltered})
        }
        var index = this.state.templates.indexOf(template);
        var templates = React.addons.update(this.state.templates, {$splice: [[index, 1]]});
        this.setState({ templates: templates });
    }

    handleEditTemplate(template, data) {
        if (this.state.filteredTemplates.includes(template)) {
          var filtIndex = this.state.filteredTemplates.indexOf(template)
          var templatesFiltered = React.addons.update(this.state.filteredTemplates, {$splice: [[index, 1, data]]});
          this.setState({filteredTemplates: templatesFiltered})
        }
        var index = this.state.templates.indexOf(template);
        var templates = React.addons.update(this.state.templates, {$splice: [[index, 1, data]]});
        this.setState({ templates: templates} );
    }


    handleCatCycle(event) {
      var selected = event.currentTarget.value
      var templates = this.state.templates
      var categories = this.state.categories
      var filteredCategories = []
      var catName = function(category_id) {
        var name;
        categories.forEach(function(cat) {
          if (cat.id === category_id) {
            name = cat.name
          }
        })
        return name
      }
      if (selected === 'All') {
        templates.forEach(function(template) {
          filteredCategories.push(template)
        })
      } else {
        templates.forEach(function(template) {
          if (catName(template.category_id) === selected) {
            filteredCategories.push(template)
          }
        })
      }
      this.setState({filteredTemplates: filteredCategories})
    }

    render() {
        var templates = this.state.filteredTemplates.map((template, index) => {
            return <Template key={template.id} template={template} categories={this.state.categories}
                           handleDeleteTemplate={this.deleteTemplate} handleEditTemplate={this.handleEditTemplate} />
        });
        return (
            <div className="templates">
                <h2 className="title"> Templates </h2>
                <h5 className="title">Add a template</h5>

                <hr />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th> Title </th>
                            <th> Description </th>
                            <th> Category <br />
                              <select value={this.state.catCycle} onChange={this.handleCatCycle}>
                                <option value="All">All</option>
                                <option value="Advertising">Advertising</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Website Graphics">Website Graphics</option>
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
