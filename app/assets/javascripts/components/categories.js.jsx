'use strict';

class Categories extends BaseComponent {
  constructor(props) {
    super();
    this._bind('landingPage', 'templatePage', 'toggleSocial', 'toggleAd', 'toggleImage', 'backToLanding');
    this.state = {
      templates: props.data[0],
      categories: props.data[1],
      landingPageShow: true,
      currentCategory: 'none'
    };
    console.log(this.state.categories)
  }
  toggleAd() {
    this.setState({landingPageShow: false, currentCategory: this.state.categories[1]})
  }

  toggleImage() {
    this.setState({landingPageShow: false, currentCategory: this.state.categories[2]})
  }

  toggleSocial() {
    this.setState({landingPageShow: false, currentCategory: this.state.categories[0]})
  }

  backToLanding() {
    this.setState({landingPageShow: true})
  }

  landingPage() {
    return(
      <div className="pageBox">
        <h2 className="startingQ">WHAT WOULD</h2>
        <h2 className="startingQ">YOU LIKE TO</h2>
        <h2 className="startingQ">CREATE?</h2>
        <br></br>
        <div className = "categories pageContent">
          <div className="itemList">
            <div>
              <div className="container-item">
                <img className="landingCategoryImage" src={this.state.categories[0].image}/>
              </div>
              <div className ="container-item">
                <button onClick={this.toggleSocial} className="categoryButton">{this.state.categories[0].name}</button>
              </div>
            </div>
            <div>
              <div className="container-item">
                <img className="landingCategoryImage" src={this.state.categories[1].image}/>
              </div>
              <div className ="container-item">
                <button onClick={this.toggleAd} className="categoryButton">{this.state.categories[1].name}</button>
              </div>
            </div>
            <div>
              <div className="container-item">
                <img className="landingCategoryImage" src={this.state.categories[2].image}/>
              </div>
              <div className ="container-item">
                <button onClick={this.toggleImage} className="categoryButton">{this.state.categories[2].name}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  templatePage() {
    var currentCategory = this.state.currentCategory
    var header = currentCategory.name
    var selectedTemplates = []
    this.state.templates.forEach(function(template) {
      if (template.category_id === currentCategory.id) {
        selectedTemplates.push(template)
      }
    })
    var templates = selectedTemplates.map((template) => {
      return <MinimalTemplate key={template.id} template={template} />
    })
    return (
      <div className="pageBox">
        <span className="glyphicon glyphicon-arrow-left pull-left" onClick={this.backToLanding}>BACK</span>
        <h2 className="startingQ">{header} Templates</h2>
        <br></br>
        <div className = "categories pageContent">
          <table className="table table-bordered">
              <thead>
                  <tr>
                      <th> Title </th>
                      <th> Description </th>
                      <th> File Attachment </th>
                      <th> Actions </th>
                  </tr>
              </thead>
              <tbody>
                {templates}
              </tbody>
          </table>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.landingPageShow) {
      return this.landingPage()
    } else {
      return this.templatePage()
    }
  }
}
