'use strict';

class OptionComponent extends BaseComponent {
  constructor(props) {
    super(props)
    this._bind('goBack', 'handleDownload')
  }

  goBack() {
    this.props.onBacktoCategory()
  }

  handleDownload() {
    var templateTitle = this.props.template.title
    if (confirm('Download ' + templateTitle + ' Template?')) {
      console.log('Download goes here')
    }
  }

  render() {
    return(
      <div className="container-main">
      <span className="glyphicon glyphicon-arrow-left pull-left" onClick={this.goBack}>BACK</span>
      <div className="container-box">
        <div className="parent">
          <div className="item"></div>
          <div className="item"><h1 className="startingQ">{this.props.template.title} Template</h1></div>
          <div className="item"></div>
        </div>
        <div className="parent4">
          <div className="item4"></div>
          <div className="item4 categories">
            <ul className="list-group"></ul>
              <div className="btn-group">
                <button className="categoryButton" onClick={this.handleDownload}>I have Photoshop</button>
                <button className="categoryButton">I don't have Photoshop</button>
              </div>
          </div>
          <div className="item4"></div>
        </div>
      </div>
    </div>
    )
  }
}
