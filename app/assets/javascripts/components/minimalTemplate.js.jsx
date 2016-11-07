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
    return(
      <div className="">
        <li className="list-group-item"  onClick={this.handleDownload}>
          <h4>{this.props.template.title}</h4>
          <p className="minimal-template-description">{this.props.template.description}</p>
        </li>
      </div>
    )
  }
}
