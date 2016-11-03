'use strict';

class MinimalTemplate extends BaseComponent {
  constructor(props) {
    super()
    this._bind('handleDownload')
  }

  handleDownload() {
    
  }

  render() {
    return(
      <tr className="template-row">
          <td>{this.props.template.title}</td>
          <td>{this.props.template.description}</td>
          <td>{this.props.template.image_file_name}</td>
          <td>
              <a className="btn btn-default glyphicon glyphicon-cloud-download" onClick={this.handleDownload}></a>
          </td>
      </tr>
    )
  }
}
