'use strict';

class Categories extends BaseComponent {
  constructor(props) {
    super();
    this._bind('landingPage', 'templatePage', 'toggleSocial', 'toggleAd', 'toggleImage', 'backToLanding');
    this.state = {
      categories: [
      {id:1, name:"Social Media", img:"/assets/socialmedia.png"},
      {id:2, name:"Web Ad", img:"/assets/webad.png"},
      {id:3, name:"Web Image", img:"/assets/webimage.png"}
      ],
      templates: props.data[0],
      categoryIDs: props.data[1],
      landingPageShow: true,
      currentCategory: 'none'
    };
  }

  toggleAd() {
    this.setState({landingPageShow: false, currentCategory: "Web Ad"})
  }

  toggleImage() {
    this.setState({landingPageShow: false, currentCategory: "Web Image"})
  }

  toggleSocial() {
    this.setState({landingPageShow: false, currentCategory: "Social Media"})
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
              <div className ="container-item">
                <img src={this.state.categories[0].img}/>
              </div>
              <div className ="container-item">
                <button onClick={this.toggleSocial} className="categoryButton">{this.state.categories[0].name}</button>
              </div>
            </div>
            <div>
              <div className ="container-item">
                <img src={this.state.categories[1].img}/>
              </div>
              <div className ="container-item">
                <button onClick={this.toggleAd} className="categoryButton">{this.state.categories[1].name}</button>
              </div>
            </div>
            <div>
              <div className ="container-item">
                <img src={this.state.categories[2].img}/>
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
    var header = this.state.currentCategory
    var templates = this.state.templates.map((template) => {
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
    var categories = this.state.categories.map((category)=> {
      return <Category name={category.name} key={category.id} img={category.img} />
    });
    if (this.state.landingPageShow) {
      return this.landingPage()
    } else {
      return this.templatePage()
    }
  }
}
