 'use strict';

class MinimalTemplate extends BaseComponent {
  constructor(props) {
    super()
    this._bind('handleDownload')
  }

  handleDownload() {
    this.props.onDownloadClick(this.props.template)
  }

  render() {
    var linkToDownload = "/templates/" + this.props.template.id.toString() + "/file_send"
    return(
      <div className="">
        <li className="list-group-item">
          <a href={linkToDownload}>
            <h4>{this.props.template.title}</h4>
            <p className="minimal-template-description">{this.props.template.description}</p>
          </a>
        </li>
      </div>
    )
  }
}
