'use strict';

class OptionComponent extends BaseComponent {
  constructor(props) {
    super(props)
    this._bind('goBack', 'handleDownload')
  }

  goBack() {
    this.props.onBacktoCategory()
  }

  handleDownload(event) {
    event.preventDefault()
    var templateTitle = this.props.template.title
    var id = this.props.template.id
    if (confirm('Download ' + templateTitle + ' Template?')) {
      // window.location.href = "/public/system/templates/images/000/000/017/original/FlexboxCompatability.PNG"
      $.ajax({
        method: 'GET',
        url: '/templates/' + id + '/file_send',
        success: () => {
          this.goBack()
        }
      })
    }
  }

  render() {
    var fileDownloadURL = "/templates/" + this.props.template.id + "/file_send"
    return(

      <div className="outside-container-box">
        <div className="container-box">
          <span className="glyphicon glyphicon-arrow-left position" onClick={this.goBack}>BACK</span>
          <br></br>
          <div className="parent">
            <div className="item"></div>
            <div className="item"><h1 className="templateTitle">{this.props.template.title} Template</h1></div>
            <div className="item"></div>
          </div>
          <div className="parent4">
            <div className="item4"></div>
            <div className="item4 categories">
              <div className="btn-group">
                <a className="categoryLink" href={fileDownloadURL}>I have Photoshop</a>
                <a className="categoryLink marginLink">I don't have Photoshop</a>
              </div>
            </div>
            <div className="item4"></div>
          </div>
        </div>
      </div>
    )
  }
}
