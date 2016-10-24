'use strict';

class Templates extends BaseComponent {
    constructor(props) {
        super();
        this._bind('addTemplate', 'deleteTemplate', 'handleEditTemplate');
        this.state = {
            categories: props.data[0],
            templates: props.data[1]
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

    render() {
        var templates = this.state.templates.map((template, index) => {
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
                            <th> Category </th>
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
