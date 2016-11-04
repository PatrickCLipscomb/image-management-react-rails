'use strict';

class Categories extends BaseComponent {
  constructor(props) {
    super();
    this._bind('landingPage', 'templatePage', 'toggleSocial', 'toggleAd', 'toggleImage', 'backToLanding', 'downloadClick', 'optionPage', 'backToCategory');
    this.state = {
      templates: props.data[0],
      categories: props.data[1],
      landingPageShow: true,
      currentCategory: 'none',
      templateDownLoadOption: null
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

  backToCategory() {
    this.setState({templateDownLoadOption: null})
  }

  downloadClick(template) {
    this.setState({templateDownLoadOption: template})
  }

  optionPage() {
      var template = <OptionComponent template={this.state.templateDownLoadOption} onBacktoCategory={this.backToCategory}/>
      return (
        <div className="react-container">
            {template}
        </div>
    )
  }

  landingPage() {
    return(
      <div className="outside-container-box">
        <div className="container-box">
          <div className="parent">
            <div className="item"></div>
            <div className="item"><h1 className="startingQ">WHAT WOULD YOU LIKE TO CREATE?</h1></div>
            <div className="item"></div>
          </div>

          <div className="parent2">
            <div className="item2"></div>
            <div className="item2">

              <div className="parent3">
                <div className="item3">
                  <img className="landingCategoryImage" src={this.state.categories[0].image}/>
                </div>

                <div className="item3">
                  <img className="landingCategoryImage" src={this.state.categories[1].image}/>
                </div>

                <div className="item3">
                  <img className="landingCategoryImage" src={this.state.categories[2].image}/>
                </div>
              </div>

              <div className=" parent3">
                <div className="item3">
                  <button onClick={this.toggleSocial} className="categoryButton">{this.state.categories[0].name}</button>
                </div>
                <div className="item3">
                  <button onClick={this.toggleAd} className="categoryButton">{this.state.categories[1].name}</button>
                </div>
                <div className="item3">
                  <button onClick={this.toggleImage} className="categoryButton">{this.state.categories[2].name}</button>
                </div>
              </div>
            </div>
            <div className="item2"></div>
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
      return <MinimalTemplate key={template.id} template={template} onDownloadClick={this.downloadClick} />
    })
    return (
      <div className="outside-container-box">
        <span className="glyphicon glyphicon-arrow-left pull-left" onClick={this.backToLanding}>BACK</span>
        <div className="container-box">
          <div className="parent">
            <div className="item"></div>
            <div className="item"><h1 className="startingQ">{header} Templates</h1></div>
            <div className="item"></div>
          </div>
          <div className="parent4">
            <div className="item4"></div>
            <div className="item4 categories">
              <ul className="list-group"></ul>
              {templates}
            </div>
            <div className="item4"></div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.templateDownLoadOption) {
      return this.optionPage()
    } else if (this.state.landingPageShow) {
      return this.landingPage()
    } else {
      return this.templatePage()
    }
  }
}
